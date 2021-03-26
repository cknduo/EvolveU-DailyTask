const errands = [
    'Fill up gas',
    'Go groceries shopping',
    'Go swimming',
    'Watch a movie',
    'Go for a drive',
    'Get bubble tea',
    'Get ice cream',
    'Cook dinner',
    'Bake a dessert'
]

const getRandomArrayItem = function(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function niceWeather() {
    console.log('If the weather is nice')
    console.log('Let him walk')
}

function runErrands() {
    console.log(getRandomArrayItem(errands))
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
    runErrands,
    badWeather,
    driveToSchool,
    parkAndWait,
}