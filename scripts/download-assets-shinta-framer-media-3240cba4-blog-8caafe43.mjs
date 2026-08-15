import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = "public/sites/shinta-framer-media-3240cba4/blog-8caafe43/images";

const assets = [
  ["vrsTB9iCMqt035VA9x2UzaBTWY.jpg", "post-agency-helps-brands.jpg"],
  ["hFtuQt4dJrspgu3oorlstBaf7BI.jpg", "post-improve-content-quality.jpg"],
  ["F0HhyUWRZDTVCNjXeLfuEqNYpkk.jpg", "post-podcasts-build-trust.jpg"],
];

await mkdir(OUT, { recursive: true });

async function download([remote, local]) {
  const url = `https://framerusercontent.com/images/${remote}`;
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0", referer: "https://shinta.framer.media/" },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(OUT, local), buf);
  return `${local} ${(buf.length / 1024).toFixed(0)}KB`;
}

const results = await Promise.allSettled(assets.map(download));
console.log(
  results.map((r) => (r.status === "fulfilled" ? r.value : `FAILED: ${r.reason}`)).join("\n"),
);
