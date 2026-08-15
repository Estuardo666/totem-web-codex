import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const OUT = "public/sites/shinta-framer-media-3240cba4/about-us-57424c1f/images";

const assets = [
  ["hzZ9ghLbN7IvefHpvkH2HPdA1v8.jpg", "hero-team-portrait.jpg"],
  ["KoMtUoLES7vlHd9VwBnDWbuL1QI.jpg", "vision-desk.jpg"],
  ["I9gjbU49oI1z2W6S8JIxYnpghI.png", "mission-phone-mockup.png"],
  ["R8rscLVO3Wd4Lj5D7CkTKZSam7c.jpg", "collage-large.jpg"],
  ["HdP9iBKnVQ0lF1SX37cXdSc.jpg", "collage-tall-left.jpg"],
  ["evhfk0zl2rQQgVSe0xwEdKnVuqk.jpg", "collage-wide-top.jpg"],
  ["JqqvWFwSCdI8Dk0bBfoedZXhuUk.jpg", "collage-wide-bottom.jpg"],
  ["kIgTrrpKuzeZcJwAbzBc17wV6MM.jpg", "collage-tall-right.jpg"],
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

const results = [];
for (let i = 0; i < assets.length; i += 4) {
  const batch = await Promise.allSettled(assets.slice(i, i + 4).map(download));
  batch.forEach((r) => results.push(r.status === "fulfilled" ? r.value : `FAILED: ${r.reason}`));
}
console.log(results.join("\n"));
