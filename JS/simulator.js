// Initial values for the inputs
let inputA = 0;
let inputB = 0;

// Update the state of inputs when toggle buttons are clicked
function toggleInput(input) {
    if (input === 'A') {
        inputA = inputA === 0 ? 1 : 0;
        document.getElementById('toggleA').classList.toggle('on', inputA === 1);
    } else if (input === 'B') {
        inputB = inputB === 0 ? 1 : 0;
        document.getElementById('toggleB').classList.toggle('on', inputB === 1);
    }
    
    // Calculate the output whenever an input is toggled
    calculateOutput();
}

// Update the gate selection and handle input visibility
function updateGate() {
    const gate = document.getElementById('gate').value;
    const outputSpan = document.getElementById('outputResult');
    const inputContainers = document.querySelectorAll('.toggle-container');

    // Reset the inputs and output
    inputA = 0;
    inputB = 0;
    document.getElementById('toggleA').classList.remove('on');
    document.getElementById('toggleB').classList.remove('on');

    // Reset output to default
    outputSpan.textContent = '0';

    // Show or hide input B based on the gate selected
    if (gate === 'not') {
        inputContainers[1].style.display = 'none'; // Hide input B for NOT gate
    } else {
        inputContainers[1].style.display = 'flex'; // Show input B for other gates
    }

    // Recalculate output based on the current state
    calculateOutput();
}

// Calculate the output based on the selected gate
function calculateOutput() {
    const gate = document.getElementById('gate').value;
    const outputSpan = document.getElementById('outputResult');
    
    let output = 0;

    // Perform logic gate calculation based on the selected gate
    switch (gate) {
        case 'and':
            output = inputA && inputB ? 1 : 0;
            break;
        case 'or':
            output = inputA || inputB ? 1 : 0;
            break;
        case 'not':
            output = inputA === 0 ? 1 : 0;
            break;
        case 'nand':
            output = !(inputA && inputB) ? 1 : 0;
            break;
        case 'nor':
            output = !(inputA || inputB) ? 1 : 0;
            break;
        case 'xor':
            output = inputA !== inputB ? 1 : 0;
            break;
        case 'xnor':
            output = inputA === inputB ? 1 : 0;
            break;
        default:
            output = 0;
            break;
    }

    // Update the output display
    outputSpan.textContent = output;
}
