
function returnFirstTwoDrivers(returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){ 
    let temp = [returnFirstTwoDrivers[0],returnFirstTwoDrivers[1]]
    return temp
}

function returnLastTwoDrivers(returnLastTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    let size = returnLastTwoDrivers.length
    let temp = [returnLastTwoDrivers[size-2],returnLastTwoDrivers[size-1]]
    return temp
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value){
    return function (multiplier){
        return value * multiplier;
    } 

}
function fareDoubler(val){
        return val * 2
}
function fareTripler(va){
    return va * 3
}
function selectDifferentDrivers(array,function_name){
    return function_name(array)
}
