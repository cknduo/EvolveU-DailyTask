// DAILY TASK: PICKING MY BROTHER UP FROM SCHOOL

// set conditions
let isWeatherNice = false
let isHeThere = true
let isHeThereAfterLooking = false

// common variable
let happyEnding = 'Pick him up and drive him home'

// running the task
console.log('Start')
console.log('Is the weather nice?', isWeatherNice)
if (isWeatherNice) {
    console.log('Let him walk')
} else {
    console.log('Start the car')
    console.log('Drive to school')
    console.log('Park & wait for him up to 15min')
    console.log('Do I see him?', isHeThere)
    if (!isHeThere) {
        console.log('Look for him')
        console.log('Do I see him?', isHeThereAfterLooking)
            if (!isHeThereAfterLooking) {
                console.log('Give up & call police')
            } else {
                console.log(happyEnding)
            }
    } else {
        console.log(happyEnding)
    }
}
console.log('End')