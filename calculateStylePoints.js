const calculateStylePoints = (styleNotes) => {
 styleNotes.sort((a,b) => a-b);
 styleNotes.shift();
 styleNotes.pop();
 const sum = styleNotes.reduce((a,b) => a + b, 0);

 return sum;
}

module.exports = calculateStylePoints;