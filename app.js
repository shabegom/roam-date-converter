const moment = require('moment')
const fs = require('fs')
const path = require('path')

const directory = process.argv[2] 



function processor(fileData) {
    return fileData.split("\n").map(line => {
        const match = line.match(/((\w+)\s(\d{1,2})(th|st),\s(\d{4}))/)
        if (match && match[1]) {
            const month = moment().month(match[2]).format("MM")
        const day = moment().date(match[3]).format("DD")
            let newLine = line.replace(match[1], `${match[5]}-${month}-${day}`)
            return newLine
        }
        return line
    }).join('\n')
}

function fileWriter(directory, fileName, newFileData) {
   const match = fileName.match(/((\w+)\s(\d{1,2})(th|st),\s(\d{4}))/) 
   if (match && match[1]) {
        const month = moment().month(match[2]).format("MM")
        const day = moment().date(match[3]).format("DD")
        const newFileName = `${match[5]}-${month}-${day}`
        fs.writeFileSync(`${directory}/processed/${newFileName}.md`, newFileData, (err) => {
            if (err) {
                console.error(err)
                process.exit()
            } else {
                console.log('new file written: ', `${directory}/processed/${newFileName}.md`)
            }
        
        })
   } else {
        fs.writeFileSync(`${directory}/processed/${fileName}`, newFileData, (err) => {
            if (err) {
                console.error(err)
                process.exit()
            } else {
                console.log('new file written: ', `${directory}/processed/${fileName}`)
            }
        
        })

   }
}

function processFiles(directory, processor, fileWriter) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error(err)
            process.exit()
        }
        files.forEach(file => {
            //only get markdown files
            if (path.extname(file) === '.md') {
                fs.readFile(`${directory}/${file}`, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err)
                        process.exit()
                    }
                   const newFileData = processor(data)
                   fileWriter(directory, file, newFileData)
                })
        }
    })
})
}
processFiles(directory, processor, fileWriter)