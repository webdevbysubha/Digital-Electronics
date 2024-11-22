function generateTruthTable() {
    const gate = document.getElementById('gate').value;
    const tableBody = document.getElementById('truthTableBody');
    const truthTable = document.getElementById('truthTable');
    const inputBRow = document.getElementById('inputBRow'); 
    const inputBHeader = document.getElementById('inputBHeader'); 

    tableBody.innerHTML = '';

    if (gate === "") {
        truthTable.style.display = 'none';
        return;
    }

    let tableData = [];

    switch(gate) {
        case 'and':
        case 'or':
        case 'nand':
        case 'nor':
        case 'xor':
        case 'xnor':
            tableData = [
                { A: 0, B: 0, output: gate === 'and' ? 0 : (gate === 'or' ? 0 : (gate === 'nand' ? 1 : (gate === 'nor' ? 1 : (gate === 'xor' ? 0 : 1)))) },
                { A: 0, B: 1, output: gate === 'and' ? 0 : (gate === 'or' ? 1 : (gate === 'nand' ? 1 : (gate === 'nor' ? 0 : (gate === 'xor' ? 1 : 0)))) },
                { A: 1, B: 0, output: gate === 'and' ? 0 : (gate === 'or' ? 1 : (gate === 'nand' ? 1 : (gate === 'nor' ? 0 : (gate === 'xor' ? 1 : 0)))) },
                { A: 1, B: 1, output: gate === 'and' ? 1 : (gate === 'or' ? 1 : (gate === 'nand' ? 0 : (gate === 'nor' ? 0 : (gate === 'xor' ? 0 : 1)))) }
            ];
            break;
        case 'not':
            tableData = [
                { A: 0, B: '-', output: 1 },
                { A: 1, B: '-', output: 0 }
            ];
            break;
        default:
            tableData = [];
    }

    // Show the table
    truthTable.style.display = 'table';

    // Populate the table with rows
    tableData.forEach(row => {
        const tr = document.createElement('tr');
        const tdA = document.createElement('td');
        tdA.textContent = row.A !== undefined ? row.A : '';
        const tdB = document.createElement('td');
        tdB.textContent = row.B !== undefined ? row.B : '';
        const tdOutput = document.createElement('td');
        tdOutput.textContent = row.output;

        tr.appendChild(tdA);
        tr.appendChild(tdB);
        tr.appendChild(tdOutput);

        tableBody.appendChild(tr);
    });
}

// Initially hide the table when the page loads
window.onload = () => {
    const truthTable = document.getElementById('truthTable');
    const inputBRow = document.getElementById('inputBRow');
    const inputBHeader = document.getElementById('inputBHeader');
    truthTable.style.display = 'none';
    inputBRow.style.display = 'table-row'; 
    inputBHeader.style.display = 'table-cell'; 
};
