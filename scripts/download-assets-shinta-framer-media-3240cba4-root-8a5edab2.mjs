import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptDir, "..");
const assetRoot = resolve(
  projectRoot,
  "public/sites/shinta-framer-media-3240cba4/root-8a5edab2",
);

const assets = [
  {
    path: "fonts/open-sauce-one-700.woff2",
    url: "https://framerusercontent.com/assets/3WfnZksKV9qFKlmPOweqZdumjg.woff2",
    type: "font",
  },
  {
    path: "fonts/open-sauce-one-600.woff2",
    url: "https://framerusercontent.com/assets/6O7MeaZaWwN4BSaWtVn9SbCmK0U.woff2",
    type: "font",
  },
  {
    path: "fonts/open-sauce-one-400.woff2",
    url: "https://framerusercontent.com/assets/7u6OD4xiuxPxD0fns9h4rxbmgo.woff2",
    type: "font",
  },
  {
    path: "videos/hero-layer-front.mp4",
    url: "https://framerusercontent.com/assets/ifg3JJylN40L3Ktt7fc7uhNA.mp4",
    type: "video",
  },
  {
    path: "videos/hero-layer-middle.mp4",
    url: "https://framerusercontent.com/assets/W2Rujgt14CX4MJRHRhuoYaS4YQc.mp4",
    type: "video",
  },
  {
    path: "videos/hero-layer-back.mp4",
    url: "https://framerusercontent.com/assets/0xZ363kYUXAzmMvtmoGEUWzbm40.mp4",
    type: "video",
  },
  {
    path: "videos/feature-performance.mp4",
    url: "https://framerusercontent.com/assets/Lz2KK6tJvaSwPqt8CILUTfpWU.mp4",
    type: "video",
  },
  {
    path: "videos/feature-creators.mp4",
    url: "https://framerusercontent.com/assets/aPqDWQqPVRqGBPXrnqHff4IYY.mp4",
    type: "video",
  },
  {
    path: "videos/cta-phone.mp4",
    url: "https://framerusercontent.com/assets/XTCdwiXD6G6XZHNxQZiGuoIg.mp4",
    type: "video",
  },
  {
    path: "seo/apple-touch-icon.png",
    url: "https://framerusercontent.com/images/1qQIJeP2A8Vsp2sDcPONAhv7a4.png",
    type: "image",
  },
  {
    path: "seo/opengraph.jpg",
    url: "https://framerusercontent.com/images/coxQ8PcmIiNjz4jsGum1gSLeT0A.jpg",
    type: "image",
  },
];

function expectedContentType(type) {
  if (type === "font") return /font|woff|octet-stream/i;
  if (type === "video") return /video|octet-stream/i;
  return /image|octet-stream/i;
}

async function download(asset) {
  const response = await fetch(asset.url, {
    headers: { "user-agent": "Mozilla/5.0 Shinta clone asset downloader" },
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!expectedContentType(asset.type).test(contentType)) {
    throw new Error(`Unexpected content type: ${contentType || "missing"}`);
  }

  const outputPath = resolve(assetRoot, asset.path);
  await mkdir(dirname(outputPath), { recursive: true });
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, bytes);

  return { ...asset, bytes: bytes.length, contentType };
}

const results = [];
for (let index = 0; index < assets.length; index += 4) {
  const batch = assets.slice(index, index + 4);
  const settled = await Promise.allSettled(batch.map(download));
  results.push(...settled);
}

const failures = results
  .map((result, index) => ({ result, asset: assets[index] }))
  .filter(({ result }) => result.status === "rejected");

for (const result of results) {
  if (result.status === "fulfilled") {
    console.log(`downloaded ${result.value.path} (${result.value.bytes} bytes)`);
  }
}

if (failures.length > 0) {
  for (const { asset, result } of failures) {
    console.error(`failed ${asset.path}: ${result.reason}`);
  }
  process.exitCode = 1;
}
