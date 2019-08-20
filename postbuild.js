const fs = require('fs')
const path = require('path')

function getFiles (dir, fileTypes) {
  const filesToReturn = []
  function currentDir (currentPath) {
    const files = fs.readdirSync(currentPath)
    for (const i in files) {
      const curFile = path.join(currentPath, files[i])
      if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
        const orginalFile = fs.readFileSync(curFile).toString()
        const data = orginalFile
          .replace(/inViewBottom/g, 'inViewBottom preInView')
          .replace(/inViewLeft/g, 'inViewLeft preInView')
          .replace(/inViewRight/g, 'inViewRight preInView')
          .replace(/-undefinedpx/g, '0px')
          .replace(/-NaNpx/g, '0px')
        fs.writeFile(curFile, data, (err) => {
          if (err) {
            return console.log('\x1b[31m', `❌ ${curFile}`)
          }

          if (orginalFile !== data) {
            console.log('\x1b[32m', `✔ ${curFile}`)
          }
        })
        filesToReturn.push(curFile.replace(dir, ''))
      } else if (fs.statSync(curFile).isDirectory()) {
        currentDir(curFile)
      }
    }
  };
  currentDir(dir)
  return filesToReturn
}

console.log('\x1b[35m', 'Cleanup prerendered html')
getFiles('build', ['.html'])
