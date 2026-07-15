import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../out", import.meta.url)));
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8"
};

function resolveRequest(pathname) {
  const decoded = decodeURIComponent(pathname.split("?")[0] || "/");
  const safePath = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);

  if (relative(root, filePath).startsWith("..")) {
    return null;
  }

  const candidates = decoded.endsWith("/")
    ? [join(filePath, "index.html")]
    : [filePath, `${filePath}.html`, join(filePath, "index.html")];

  return candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile()) || null;
}

const server = createServer((request, response) => {
  if (!existsSync(root)) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Missing out directory. Run npm run build first.");
    return;
  }

  const requestedFile = resolveRequest(request.url || "/") || join(root, "404.html");
  const status = requestedFile.endsWith("404.html") ? 404 : 200;
  const contentType = mimeTypes[extname(requestedFile)] || "application/octet-stream";

  response.writeHead(status, {
    "Content-Type": contentType,
    "Cache-Control": requestedFile.includes(`${root}\\assets\\`) ? "public, max-age=31536000, immutable" : "no-cache"
  });
  createReadStream(requestedFile).pipe(response);
});

server.listen(port, () => {
  console.log(`Serving static export from ${root} at http://localhost:${port}`);
});
