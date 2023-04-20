const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const date = ()=>{
    console.log("Date" , new Date().getDate())
}
const currentMonth = () =>{
    let currentmonth = new Date().getMonth()
    console.log("current Month is" , month[currentmonth])
}
const getBatchInfo = (batchName,weekday,topic)=>{
    console.log(`${batchName}, ${weekday}, the topic for today is ${topic}`)
}
module.exports.date = date
module.exports.currentMonth = currentMonth
module.exports.getBatchInfo = getBatchInfo