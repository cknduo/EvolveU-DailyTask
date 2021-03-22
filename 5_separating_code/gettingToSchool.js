function niceWeather() {
    console.log('If the weather is nice')
    console.log('Let him walk')
}

function badWeather() {
    console.log('If the weather is bad')
    console.log('Start the car')
}

function driveToSchool() {
    console.log('Drive to school')
}

function parkAndWait(min) {
    console.log('Park & wait for him up to', min, 'minutes')
}

module.exports = {
    niceWeather,
    badWeather,
    driveToSchool,
    parkAndWait
}