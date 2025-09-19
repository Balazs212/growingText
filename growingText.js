var growingText,
growingText = "clean code"

// let startValue = 0
// let endValue = growingText.length
// let multiplier = 1
// let extra = 0

setInterval(FullWriter, (growingText.length*2) * 280)

function FullWriter(){
    for (let index = 0; index <= growingText.length; index++)
    {
        setTimeout(() => WriteText(index), 200 * index)
    }

    for (let index = 0; index <= growingText.length; index++)
    {
        setTimeout(() => WriteText(growingText.length-index), 240 * (index+growingText.length))
    }

    // nem sikerült 1 for ciklussal :(

    // if (multiplier==1) {
    //     startValue = 0
    //     endValue = growingText.length
    //     extra = 0
    // }
    // else{
    //     startValue = growingText.length
    //     endValue = 0
    //     extra = growingText.length
    // }
    // console.log(startValue)
    // for (startValue; startValue!=endValue; startValue=startValue+(1*multiplier))
    // {
    //     console.log(startValue)
    //     setTimeout(() => WriteText(startValue), 200 * (startValue+extra))
    // }
    // multiplier = multiplier*-1
}

function WriteText(end){
    document.getElementById("targetLabel").innerHTML = "home of {"+growingText.substring(0,end)+"}"
}

