const rows = 40;
const columns = 40;

// World arrays
let currentGeneration = [];
let nextGeneration = [];

// Initialise array representation of world for current and next generations
(function worldArray() {

    for (let i = 0 ; i < rows; i++){
        currentGeneration[i] = new Array(rows);
        nextGeneration[i] = new Array(rows);
        for (let j = 0; j < columns; j++){
            currentGeneration[i][j] = 0;
            nextGeneration[i][j] = 0;
        }
    }
})();

//Create world/table
function createWorld() {
    const world = document.getElementById('world');
    const table = document.createElement('table');
    table.setAttribute('id', 'worldGrid');

    for (let i = 0; i < rows; i++) {
        let tableRow = document.createElement('table');
        for (let j = 0; j < 40; j++) {
            let cell = document.createElement('td');
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', startClick);

            tableRow.appendChild(cell);
        }
        table.appendChild(tableRow);
    }
    world.appendChild(table);
}

// Click initial live cells
function startClick(event) {
    const x = this.id.split('_')[0];
    const y = this.id.split('_')[1];

    if (this.className === 'alive'){
        this.setAttribute('class', 'dead');
        currentGeneration[x][y] = 0;

    } else {
        this.setAttribute('class', 'alive');
        currentGeneration[x][y] = 1;
    }
}

window.onload = () => {
    createWorld();
  };

console.log(currentGeneration);











