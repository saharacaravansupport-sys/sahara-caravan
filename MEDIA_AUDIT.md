# Media Audit

Current production media state:

- Official Sahara Caravan logo assets are stored in `public/assets/brand`.
- The 4x4 Safari Experience main image is stored in `public/assets/images/safari/4x4-desert-camp-dunes.jpg`.
- Valid Sahara in Motion videos visible on the homepage and `/sahara-in-motion`: `11`.
- Gallery remains photos only and is driven by `data/site.ts`.
- Team portraits for Ali El Gasmi, Mohamed, Ossama, Daday, Abdo, Hsayn, Madi, Salem, Uncle Laaribi, Mokhtar and Hama are stored in `public/assets/images/team`.

## Video Files

Sahara in Motion:

- `public/assets/videos/sahara-in-motion/sahara-in-motion-01.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-02.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-03.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-04.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-05.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-06.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-07.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-08.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-09.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-10.mp4`
- `public/assets/videos/sahara-in-motion/sahara-in-motion-11.mp4`

Matching poster images are generated from these same videos and stored in `public/assets/videos/sahara-in-motion/posters`.

## Integrated Site Areas

- Home page includes Hero, About/intro, Tours, Sahara in Motion, Gallery, Team preview, What to Bring and Contact CTA.
- Gallery filters and lightbox use the photo-only gallery data.
- Tour pages include 4-Day Trek, 5-Day Trek, 6-Day Trek, 7-Day Trek, 6-Day Desert Yoga Retreat and 4x4 Safari Experience.
- Pricing is shown on the Tours page and all individual tour pages.
- The project uses static export for Netlify Free: build command `npm run build`, publish directory `out`.
