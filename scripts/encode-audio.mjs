import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";

const require = createRequire(import.meta.url);
const lameBundle = await readFile(require.resolve("lamejs/lame.all.js"), "utf8");
const lameContext = { console };
vm.createContext(lameContext);
vm.runInContext(`${lameBundle}\nthis.__lamejs = lamejs;`, lameContext);
const lamejs = lameContext.__lamejs;

const source = path.join(
  process.cwd(),
  "assets",
  "audio",
  "405515__lasdimot__nc-night-forest.wav",
);
const target = path.join(process.cwd(), "public", "audio", "night-forest.mp3");

function findChunks(buffer) {
  const chunks = {};
  let offset = 12;
  while (offset < buffer.length) {
    const id = buffer.toString("ascii", offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    chunks[id] = { start: offset + 8, size };
    offset += 8 + size + (size % 2);
  }
  return chunks;
}

function sample24(buffer, offset) {
  let value = buffer.readUIntLE(offset, 3);
  if (value & 0x800000) value |= 0xff000000;
  return Math.max(-32768, Math.min(32767, value >> 8));
}

await mkdir(path.dirname(target), { recursive: true });

const wav = await readFile(source);
const chunks = findChunks(wav);
const fmt = chunks["fmt "];
const data = chunks.data;
if (!fmt || !data) throw new Error("WAV is missing fmt or data chunk");

const channels = wav.readUInt16LE(fmt.start + 2);
const sampleRate = wav.readUInt32LE(fmt.start + 4);
const blockAlign = wav.readUInt16LE(fmt.start + 12);
const bitsPerSample = wav.readUInt16LE(fmt.start + 14);

if (channels !== 2 || bitsPerSample !== 24) {
  throw new Error(`Expected 24-bit stereo WAV, got ${bitsPerSample}-bit ${channels}ch`);
}

const encoder = new lamejs.Mp3Encoder(channels, sampleRate, 96);
const frameSamples = 1152;
const mp3 = [];
const left = new Int16Array(frameSamples);
const right = new Int16Array(frameSamples);
const totalFrames = Math.floor(data.size / blockAlign);

for (let frame = 0; frame < totalFrames; frame += frameSamples) {
  const count = Math.min(frameSamples, totalFrames - frame);
  for (let i = 0; i < count; i++) {
    const offset = data.start + (frame + i) * blockAlign;
    left[i] = sample24(wav, offset);
    right[i] = sample24(wav, offset + 3);
  }
  const out = encoder.encodeBuffer(left.subarray(0, count), right.subarray(0, count));
  if (out.length) mp3.push(Buffer.from(out));
}

const tail = encoder.flush();
if (tail.length) mp3.push(Buffer.from(tail));

await writeFile(target, Buffer.concat(mp3));
