const { niceWeather, runErrands, badWeather, driveToSchool, parkAndWait } = require('./gettingToSchool')
const { doISeeHim, heIsNotThere, heIsLost, heIsFound } = require('./lookForHim')

// DAILY TASK: PICKING MY BROTHER UP FROM SCHOOL
function inCaseOfBadWeather(isHeThere, isHeThereAfterLooking) {
    badWeather()
    driveToSchool()
    parkAndWait(15)
    doISeeHim()
    if (!isHeThere) {
        heIsNotThere()
        doISeeHim()
        if (!isHeThereAfterLooking) {
            heIsLost()
            return
        }
    } 
    heIsFound()
}

function schoolPickup(isWeatherNice) {
    let isHeThere = false
    let isHeThereAfterLooking = true
    console.log('Start')
    if (isWeatherNice) {
        niceWeather()
        runErrands() // random task
    } else {
        inCaseOfBadWeather(isHeThere, isHeThereAfterLooking)   
    }
    console.log('End')
}

// CALL FUNCTION
let isWeatherNice = true
schoolPickup(isWeatherNice)