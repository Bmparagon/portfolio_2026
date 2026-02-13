import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('src','assets');
const input = path.join(assetsDir, 'hero.png');
const backup = path.join(assetsDir, 'hero.orig.png');

async function optimize() {
  if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
  }
  if (!fs.existsSync(backup)) {
    fs.copyFileSync(input, backup);
    console.log('Backup created at', backup);
  } else {
    console.log('Backup already exists at', backup);
  }

  try {
    const image = sharp(input);
    const meta = await image.metadata();

    const targetWidth = Math.min(meta.width || 1200, 1200);

    await image
      .resize({ width: targetWidth, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 60 })
      .toFile(input + '.tmp');

    fs.renameSync(input + '.tmp', input);
    const newSize = fs.statSync(input).size;
    console.log('Optimized image written to', input, 'size:', newSize, 'bytes');
  } catch (err) {
    console.error('Optimization failed:', err);
    process.exit(1);
  }
}

optimize();
