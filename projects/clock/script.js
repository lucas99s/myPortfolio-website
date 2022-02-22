const minutePointer = document.getElementById('minute')
const hourPointer = document.getElementById('hour')
const secondPointer = document.getElementById('second')
const secondsBorder = document.getElementById('secondsBorder')
const minutesBorder = document.getElementById('minutesBorder')
const hoursBorder = document.getElementById('hoursBorder')
const oneSecondBorder = document.getElementById('oneSecondBorder')

const interval = setInterval(function(){
    hourUpdate()
}, 10)


function hourUpdate() {
    let timeInMs = Date.now() - (1000 * 60 * 60 * 3) // (UTF-3 / Brazil)
    secondPointer.style.transform = "rotate(" + (timeInMs / 1000) * 6 + "deg) translate(0%, -50%)"
    secondsBorder.style.transform = "rotate(" + (timeInMs / 1000) * 6 + "deg) translate(0%, 0%)"
    oneSecondsBorder.style.transform = "rotate(" + (timeInMs / 1000) * 6 * 60 + "deg) translate(0%, 0%)"
    minutePointer.style.transform = "rotate(" +  (timeInMs / (1000 * 60)) * 6 + "deg) translate(0%, -50%)"
    minutesBorder.style.transform = "rotate(" + (timeInMs / (1000 * 60)) * 6 + "deg) translate(0%, 0%)"
    hourPointer.style.transform = "rotate(" + (timeInMs / (1000 * 60 * 12)) * 6 + "deg) translate(0%, -50%)"
    hoursBorder.style.transform = "rotate(" + (timeInMs / (1000 * 60 * 12)) * 6 + "deg) translate(0%, 0%)"
    
    let date = new Date
    let seconds = date.getSeconds()
    let minutes = date.getMinutes()
    let hours = date.getHours()
    
    if(seconds < 10) {
        seconds = '0'+seconds
    }
    if(minutes < 10) {
        minutes = '0'+minutes
    }
    if(hours < 10) {
        hours = '0'+hours
    }
    document.getElementById('visor').innerHTML = hours + ":" + minutes + ":" + seconds
}

// console.log(now)