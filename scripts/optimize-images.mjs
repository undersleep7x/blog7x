import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const postsDir = path.join(process.cwd(), 'posts')
const publicDir = path.join(process.cwd(), 'public', 'posts')

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, {recursive: true})
}

async function optimizeImages() {
    const postFolders = fs.readdirSync(postsDir).filter((item) => {
        return fs.statSync(path.join(postsDir, item)).isDirectory()
    })

    for (const folder of postFolders) {
        const sourcePath = path.join(postsDir, folder)
        const destPath = path.join(publicDir, folder)

        if (!fs.existsSync(destPath)) {
            fs.mkdirSync(destPath, {recursive: true})
        }

        const files = fs.readdirSync(sourcePath)

        for (const file of files) {
            const ext = path.extname(file).toLowerCase()

            if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
                const sourceFile = path.join(sourcePath, file)
                const destFile = path.join(destPath, file)

                console.log(`Optimizing: ${folder}/${file}`)

                await sharp(sourceFile)
                    .resize(1200, 1200, {
                        fit: 'inside',
                        withoutEnlargement: true,
                    })
                    .jpeg({quality: 85})
                    .toFile(destFile.replace(ext, '.jpg'))
            }
        }
    }

    console.log('✓ Image optimization complete')
}

optimizeImages().catch((err) => {
    console.error('Error optimizing images:', err)
    process.exit(1)
})
