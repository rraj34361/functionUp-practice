const trim = () =>{
    let str = "     functionUp   "
    console.log(str.trim())
}
const toLowerCase = () =>{
    let str = "THIS STRING IN UPPER CASE WHICH I CHANGED TO LOWER CASE "
    console.log(str.toLowerCase())
}
const toUpperCase = () =>{
    let str = "this string in lower case which i changed to upper case  "
    console.log(str.toUpperCase())
}

module.exports.trim = trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase