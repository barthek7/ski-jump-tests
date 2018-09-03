const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const stylePoints = calculateStylePoints(styleNotes);
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);

    return ((distancePoints + stylePoints + windFactor + gateFactor) * 10)/ 10;
}

module.exports = calculateTotalPoints;