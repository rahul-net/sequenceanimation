# Sequence Animation — Portfolio

A polished, mobile-first static portfolio site for Sequence Animation,
a Bengali story channel. No build step, no backend, no API keys.

- GitHub repo: **rahul-net/sequenceanimation** (public)
- GitHub Pages URL (verified live, HTTP 200): https://rahul-net.github.io/sequenceanimation/
- Adding this portfolio link to YouTube and Facebook is a separate next step,
  after Pages is verified — it has NOT been added to YouTube or Facebook yet.

## What is here

- `index.html` — Hero, About, Featured story, and Links.
- `style.css` — the only stylesheet. Premium storybook look: dark hero with
  a typographic monogram, warm cream sections, cards, and responsive layout.
- `.github/workflows/pages.yml` — GitHub Actions workflow that deploys this
  static site to GitHub Pages on every push to `main`.

## Sections

- **Hero** — “Sequence Animation” with the tagline “বাংলার গল্প, বাংলার সুরে”
  and a short note that the channel tells stories from small and big books
  in 2D hand-drawn storybook animation, in easy Bengali.
- **About** — the channel description, plus how the stories are made: 2D
  hand-drawn storybook style, slow fluent Bengali narration with care for
  pronunciation, scene-matched images, and the Sequence Animation watermark.
- **Featured story** — only “নাকের বদলে নরুন পাইলাম” by পল্লীকবি জসীম উদ্দীন,
  described as scheduled for 1 November 2026 at 08:00 Bangladesh time.
  It links only to the YouTube channel, not to the video itself, because
  the video is scheduled and not public yet. The playlist name
  “জসীম উদ্দীনের গল্প” is shown as text only, with no video URL.
  No other story, demo, or work-in-progress story is included.
- **Links** — YouTube channel: https://www.youtube.com/@SequenceAnimation
  and Facebook Page — Sequence Animation:
  https://www.facebook.com/profile.php?id=61595736742488
- **No contact info** — deliberately, per the owner's instruction. No email,
  phone, or address appears anywhere on this site, and no stats or
  subscriber counts have been invented.

## How to preview locally

Open `index.html` directly in a browser, or from this folder run:

```sh
cd ~/workspace/sequence-animation-portfolio
python3 -m http.server 8000
```

Then open http://localhost:8000/ in a browser. Close the server when done;
nothing is uploaded by previewing.
