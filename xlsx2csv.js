const xlsx = require('xlsx')
const fs = require('fs')

const FILE = 'export_all'

if (FILE === '<change me>') {
    console.log('please specify file')
    process.kill(0)
}
const XLSX_FILE_PATH = `./${FILE}.xlsx`
const RESULT_FILE_NAME = `${FILE}.json`

const xlsxResult = xlsx.readFile(XLSX_FILE_PATH, {
    raw: true
})

const resultJSON = {}

Object.keys(xlsxResult.Sheets).forEach(key => {
    resultJSON[key] = xlsx.utils.sheet_to_json(xlsxResult.Sheets[key])
})

fs.writeFile(RESULT_FILE_NAME, JSON.stringify(resultJSON), () => console.log('ready'))
