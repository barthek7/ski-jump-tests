const calculateDistancePoints = (distance, hillSize, kPoint) => {
    switch(hillSize) {
        case 'normal':
            return ((distance - kPoint) * 2) + 60;

        case 'large':
            return ((distance - kPoint) * 1.8) + 60;

        case 'mammoth':
            return ((distance - kPoint) * 1.2) + 120;

        default:
           return 'Hill size should be one of three [normal, large, mammoth]';
    }
};

module.exports = calculateDistancePoints;