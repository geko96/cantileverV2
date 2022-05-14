const fs = require('fs')


let producto = {
    "nombre": "AFIP",
    "Estado": "OnLine"
}
let producto2 = {
    "nombre": "Facturador",
    "Estado": "OnLine"
}
let producto3 = {
    "nombre": "API",
    "Estado": "OnLine"
}


let arr = [producto,producto2,producto3]

fs.writeFileSync('./datos.txt', JSON.stringify(arr))