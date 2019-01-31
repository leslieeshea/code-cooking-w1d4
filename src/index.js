// grab parent nodes from html
// console.log after grabbing the node to make sure it actually grabs it
const colorButtonsNode = document.getElementById('color-buttons');
const canvasNode = document.getElementById('canvas'); // grabs canvas node
const transformButtonsNode = document.getElementById('transform-buttons'); // grabs transform-button node

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
    colorButtonNode.classList.add('color-button', color); // gives each button a class id
    
    // call back function; won't fire until button is clicked
    colorButtonNode.addEventListener('click', function() {

        // once the button is clicked, calls paint function to paint the color block the color that corresponds with the button
        paint(color);
    });

    colorButtonsNode.appendChild(colorButtonNode); // appends this child node to the parent colorButtonsNode
}

//loop that generates transform buttons and options
for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    const colorTransformNode = document.createElement('button'); // creates a new button during each loop
    colorTransformNode.textContent = color; // gives each button text
    colorTransformNode.value = color; // gives each button value
    colorTransformNode.classList.add('transform-button', color); // gives each button a class id
    
    // call back function; won't fire until button is clicked
    colorTransformNode.addEventListener('click', function() {
        
        // once the button is clicked, calls circleTransform function to transform the shape into circle
        circleTransform(color);
    });

    transformButtonsNode.appendChild(colorTransformNode); // appends this child node to the parent
}

// function that creates shapes for canvas
function paint(color) {
    const colorBlock = document.createElement('span'); // creates a new color block element
    colorBlock.classList.add(color); // gives each color block a color
    colorBlock.classList.add('color-block'); // gives each color block a color-block class id
    console.log(colorBlock);

    canvasNode.appendChild(colorBlock); // attaches the child node onto the bigger parent canvas node
}

// function that transforms shapes
function circleTransform(color) {
    const selector = '.color-block.' + color;
    const colorBlocks = document.querySelectorAll(selector);
    console.log(colorBlocks);

    for(let index = 0; index < colorBlocks.length; index++) {
        colorBlocks[index].classList.add('transform');
    }
}