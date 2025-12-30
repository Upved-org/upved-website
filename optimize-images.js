const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const QUALITY = 75;

// Define specific optimization targets based on use case
const CONFIG = [
  // Hero / Large Banners
  { name: 'upved-havan', width: 1200 },
  
  // Cards / Medium Content
  { name: 'meditate', width: 800 },
  { name: 'group-hiking-nature-trail-morning-sunshine', width: 600 },
  { name: 'people-throwing-ball-sky-outdoor-sports', width: 600 },
  { name: 'youth-sports-kids-playing-outdoor-field', width: 600 },
  
  // Portraits / Avatars
  { name: 'swami-dayananda-saraswati-portrait-historical', width: 400 },
  { name: 'swami-vivekananda-portrait-historical', width: 400 },
  { name: 'sri-aurobindo-portrait-historical', width: 400 },
  { name: 'pandit-guru-dutt-portrait-historical', width: 400 },
  { name: 'narya-small', width: 200 },
  { name: 'narya', width: 600 },
  
  // UI Elements - High resolution pattern for crisp display
  { name: 'upved-logo-nobg', width: 150 },
  { name: 'pattern-image', width: 1600, quality: 100 }, // DOUBLE RES (1600px) and MAX quality for sharpness
];

const processImages = async () => {
  console.log('Starting targeted image optimization...');
  
  for (const item of CONFIG) {
    // Find source file (could be jpg, png, or webp)
    const extensions = ['jpg', 'jpeg', 'png', 'webp'];
    let sourceFile = null;
    let sourceExt = null;

    for (const ext of extensions) {
      const p = path.join(publicDir, `${item.name}.${ext}`);
      // Skip if checking the output file itself to identify source, 
      // but if source is already webp we will just re-process it.
      // We want to prefer original source if available, but here we likely only have the optimized ones now.
      // So we will just re-optimize the current webp if no other source found.
      if (fs.existsSync(p)) {
        sourceFile = p;
        sourceExt = ext;
        break;
      }
    }

    if (!sourceFile) {
      console.warn(`⚠️ Source not found for: ${item.name}`);
      continue;
    }

    const outputPath = path.join(publicDir, `${item.name}.webp`);
    console.log(`Processing ${item.name} (target: ${item.width}px, quality: ${item.quality || QUALITY})...`);

    try {
      // Create a buffer first to avoid file locking issues if overwriting self
      const buffer = await sharp(sourceFile)
        .resize(item.width, null, {
          withoutEnlargement: true, // Only if source is larger, but for pattern we might want to Upscale if source is small? 
          // Actually for pattern we want clarity. We'll set withoutEnlargement: false for pattern if needed but generally true is safer.
          // Let's assume source is decent or we just accept what we have.
           withoutEnlargement: false, 
          fit: 'inside'
        })
        .webp({ quality: item.quality || QUALITY })
        .toBuffer();

      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Optimized: ${item.name}.webp`);
      
    } catch (err) {
      console.error(`❌ Error processing ${item.name}:`, err);
    }
  }
};

processImages();
