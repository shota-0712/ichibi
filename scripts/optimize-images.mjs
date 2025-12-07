import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, '../public/image');

// Image optimization settings based on Lighthouse recommendations
const OPTIMIZATIONS = [
    {
        file: 'shogayaki.webp',
        width: 900,  // Display size is 855x570
        quality: 75,
    },
    {
        file: 'logo_Splash.webp',
        width: 500,  // Display size is 500x500
        quality: 80,
    },
    {
        file: 'ichigo_ichibi_set.webp',
        width: 1080,  // Keep current, just increase compression
        quality: 70,
    },
    {
        file: 'tenjuu.webp',
        width: 900,  // Display size is 855x570
        quality: 75,
    },
    {
        file: 'seiro.webp',
        width: 900,
        quality: 75,
    },
    {
        file: 'seiro2.webp',
        width: 900,
        quality: 75,
    },
];

async function optimizeImage(config) {
    const inputPath = path.join(IMAGE_DIR, config.file);
    const outputPath = path.join(IMAGE_DIR, config.file);

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        console.log(`\nOptimizing ${config.file}:`);
        console.log(`  Original: ${metadata.width}x${metadata.height}`);

        const originalStats = await fs.stat(inputPath);
        console.log(`  Original size: ${(originalStats.size / 1024).toFixed(1)} KB`);

        const buffer = await image
            .resize(config.width, null, {
                withoutEnlargement: true,
                fit: 'inside',
            })
            .webp({
                quality: config.quality,
                effort: 6,  // Higher effort = better compression
            })
            .toBuffer();

        await fs.writeFile(outputPath, buffer);

        const newStats = await fs.stat(outputPath);
        const savings = originalStats.size - newStats.size;
        const savingsPercent = ((savings / originalStats.size) * 100).toFixed(1);

        console.log(`  New size: ${(newStats.size / 1024).toFixed(1)} KB`);
        console.log(`  Saved: ${(savings / 1024).toFixed(1)} KB (${savingsPercent}%)`);
    } catch (error) {
        console.error(`Error optimizing ${config.file}:`, error.message);
    }
}

async function main() {
    console.log('Starting image optimization...\n');

    for (const config of OPTIMIZATIONS) {
        await optimizeImage(config);
    }

    console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
