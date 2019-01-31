// grab color button node in html section called color-buttons
// console.log after grabbing the node to make sure it actually grabs it
const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas'); // grabs canvas node

// create array of colors
const colors = [
    'blue',
    'green',
    'red',
    'yellow'
];

// create button elements
// goal is to loop through array, and assign textContent to the buttons
// add text (textContent), class (class ids), and value to the button
// append button to parent node
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorButtonNode = document.createElement('button'); // creates a new button during each loop
    colorButtonNode.textContent = color; // gives each button text
    colorButtonNode.value = color; // gives each button value
    colorButtonNode.classList.add('color-button'); // gives each button a class id
    
    // call back function; won't fire until button is clicked
    colorButtonNode.addEventListener('click', function() {
        console.log(colorButtonNode.value + ' clicked!');

        // calls paint function
        paint(color);
    });

    colorButtonsNode.appendChild(colorButtonNode); // appends this child node to the parent colorButtonsNode
}

// function that creates shapes for canvas
function paint(color) {
    const colorBlock = document.createElement('span');
    colorBlock.classList.add(color);
    colorBlock.classList.add('color-block');
    console.log(colorBlock);

    canvasNode.appendChild(colorBlock);
}