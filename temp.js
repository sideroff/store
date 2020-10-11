const fs = require('fs')
const data = require('./structure.json')

const rootKeys = Object.keys(data)

const carBrands = {}
rootKeys.forEach(rk => {
    const brandKeys = Object.keys(data[rk])

    brandKeys.forEach(bk => {
        if(!carBrands[bk]) {
            carBrands[bk] = new Set()
        }

        data[rk][bk].forEach(mk => {
            carBrands[bk].add(mk)
        })
    })

})

const carBrandsKeys = Object.keys(carBrands)
carBrandsKeys.forEach(cb => {
    carBrands[cb] = [...carBrands[cb]]
})

console.log(carBrands)
fs.writeFile('brands.json', JSON.stringify(carBrands), () => console.log('ready'))

