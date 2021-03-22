let isHeThere = false
let isHeThereAfterLooking = false

function doISeeHim() {
    console.log('Do I see him?')
}

function heIsNotThere() {
    console.log('No, look for him')
}

function heIsLost() {
    console.log('No, give up & call police')
}

function heIsFound() {
    console.log('Yes, pick him up and drive him home')
}

module.exports = {
    doISeeHim,
    heIsNotThere,
    heIsLost,
    heIsFound
}