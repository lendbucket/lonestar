import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appDir = join(__dirname, "..", "src", "app");
const svgPath = join(appDir, "icon.svg");
const svgBuffer = readFileSync(svgPath);

// apple-icon.png at 180x180
await sharp(svgBuffer, { density: 300 })
  .resize(180, 180)
  .png()
  .toFile(join(appDir, "apple-icon.png"));

console.log("Created apple-icon.png (180x180)");

// favicon.ico: generate 16, 32, 48 px PNGs then combine into ICO
const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((s) =>
    sharp(svgBuffer, { density: 300 }).resize(s, s).png().toBuffer()
  )
);

// ICO file format: header + directory entries + image data
function buildIco(images) {
  // Each image entry: 16 bytes in directory
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * images.length;
  let dataOffset = headerSize + dirSize;

  const dirEntries = [];
  const imageDataParts = [];

  for (let i = 0; i < images.length; i++) {
    const { width, data } = images[i];
    const w = width >= 256 ? 0 : width;
    const h = w;
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(w, 0);           // width
    entry.writeUInt8(h, 1);           // height
    entry.writeUInt8(0, 2);           // color palette
    entry.writeUInt8(0, 3);           // reserved
    entry.writeUInt16LE(1, 4);        // color planes
    entry.writeUInt16LE(32, 6);       // bits per pixel
    entry.writeUInt32LE(data.length, 8);  // image data size
    entry.writeUInt32LE(dataOffset, 12);  // offset to image data
    dirEntries.push(entry);
    imageDataParts.push(data);
    dataOffset += data.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);             // reserved
  header.writeUInt16LE(1, 2);             // ICO type
  header.writeUInt16LE(images.length, 4); // image count

  return Buffer.concat([header, ...dirEntries, ...imageDataParts]);
}

const icoImages = sizes.map((s, i) => ({ width: s, data: pngBuffers[i] }));
const icoBuffer = buildIco(icoImages);
writeFileSync(join(appDir, "favicon.ico"), icoBuffer);

console.log("Created favicon.ico (16, 32, 48)");
