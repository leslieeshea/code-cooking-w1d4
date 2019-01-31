// grab color button node in html section called color-buttons
// console.log after grabbing the node to make sure it actually grabs it
const colorButtonsNode = document.getElementById('color-buttons');

// create array of colors
const colors = [
    'blue',
    'green',
    'red',
    'yellow'
];

// goal is to loop through array, and assign textContent to the buttons
// console.log after declaring color variable to ensure it pulls the array
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButtonNode = document.createElement('button');
    console.log(colorButtonNode);
}




// create button elements