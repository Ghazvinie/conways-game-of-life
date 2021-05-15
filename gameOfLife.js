const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('reset');
const gridSubmit = document.getElementById('submitGrid');
const gridSize = document.getElementById('gridSize');

// Default grid size
let rows = 40;
let columns = 40;

// Is world running
let running = false;

// Generate custom grid
gridSubmit.addEventListener('click', () => {
    // Delete old grid
    const world = document.getElementById('world');
    const table = document.getElementById('worldGrid');
    world.removeChild(table);
    // Set arrays to empty
    currentGeneration = [];
    nextGeneration = [];
    // Change grid size
    rows = Number(gridSize.value);
    columns = rows;
  
  // Generate new world and arrays
  worldArray();
  createWorld();
  stop();
  running = !running;
});

// Start world

startButton.addEventListener('click', () => {
    if (!running) {
        life();
        running = !running;
    } else {
        stop();
        running = !running;
    }
});

// Reset world
resetButton.addEventListener('click', resetWorld);

// World arrays
let currentGeneration = [];
let nextGeneration = [];

// Initialise array representation of world for current and next generations
function worldArray() {
    for (let i = 0; i < rows; i++) {
        currentGeneration[i] = new Array(rows);
        nextGeneration[i] = new Array(rows);
        for (let j = 0; j < columns; j++) {
            currentGeneration[i][j] = 0;
            nextGeneration[i][j] = 0;
        }
    }
}

<<<<<<< HEAD
// Reset world back to all dead
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function resetWorld() {
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        cell = document.getElementById(`${rowIdx}_${cellIdx}`);
        cell.setAttribute('class', 'dead');
        currentGeneration[rowIdx][cellIdx] = 0;
        nextGeneration[rowIdx][cellIdx] = 0;
    }));
    stop();
}

<<<<<<< HEAD

let mousedown = false;
// Create world/table
=======
let mousedown = false;
//Create world/table
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function createWorld() {
    const world = document.getElementById('world');
    const table = document.createElement('table');
    table.setAttribute('id', 'worldGrid');

    currentGeneration.map((row, rowIdx) => {
        let tableRow = document.createElement('table');

        row.map((cell, cellIdx) => {
            // Create table cells
            cell = document.createElement('td');
            cell.setAttribute('id', `${rowIdx}_${cellIdx}`);
            cell.setAttribute('class', 'dead');

            // Add cell event listeners
            cell.addEventListener('click', selectCells);
            cell.addEventListener('mouseover', function() {
                if (mousedown) {
                    selectCells.call(this);
                }
            });
<<<<<<< HEAD
            // Add table event listeners to manage mouse up/down
            table.addEventListener('mouseup', () => mousedown = false);
            table.addEventListener('mousedown', () => mousedown = true);

            // Add cell to row
            tableRow.appendChild(cell);
        });
        // Add row to table
        table.appendChild(tableRow);
    });
    // Add table to div
    world.appendChild(table);
}

// User sets initial live cells
=======
            //Add table event listeners
            table.addEventListener('mouseup', () => mousedown = false);
            table.addEventListener('mousedown', () => mousedown = true);

    
            tableRow.appendChild(cell);
        });
        table.appendChild(tableRow);
    });
    world.appendChild(table);
}

// Click initial live cells
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function selectCells(event) {
    const x = this.id.split('_')[0];
    const y = this.id.split('_')[1];

    if (this.className === 'alive') {
        this.setAttribute('class', 'dead');
        currentGeneration[x][y] = 0;
    } else {
        this.setAttribute('class', 'alive');
        currentGeneration[x][y] = 1;
    }
}

<<<<<<< HEAD
// Count number of live neighbours of cell
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function getNeighboursCount(x, y) {

    // Top Left
    if (x - 1 < 0 && y - 1 < 0) {
    return [
                                       [currentGeneration[x][y + 1]],
        [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
       ].filter(cell => cell[0] === 1).length;
    } else

    // Top Right
    if (x -1 < 0 && y + 1 > columns -1) {
        return [
            [currentGeneration[x][y - 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Bottom Left
    if (x + 1 > rows -1 && y - 1 < 0) {
        return [
            [currentGeneration[x - 1][y]], [currentGeneration[x - 1][y + 1]],
                                           [currentGeneration[x][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else 

    // Bottom Right
    if (x + 1 > rows - 1 && y + 1 > columns - 1) {
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x - 1][y]],
            [currentGeneration[x][y - 1]],
        ].filter(cell => cell[0] === 1).length;
    } else 

<<<<<<< HEAD
    // Top edge
=======
    // Top 
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
    if (x - 1 < 0) {
        return [
            [currentGeneration[x][y - 1]],                                    [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else 

<<<<<<< HEAD
    // Bottom edge
=======
    // Bottom 
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
    if (x + 1 > rows -1) {
        return [
            [currentGeneration[x - 1][y - 1]],    [currentGeneration[x -1][y]], [currentGeneration[x -1 ][y + 1]],
            [currentGeneration[x][y - 1]],                                      [currentGeneration[x][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else 

<<<<<<< HEAD
    // Right edge
=======
    // Right
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
    if (y + 1 > columns - 1){
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x -1 ][y]],
            [currentGeneration[x][y - 1]],
            [currentGeneration[x + 1][y - 1]], [currentGeneration[x + 1][y]]
        ].filter(cell => cell[0] === 1).length;
    } else 

<<<<<<< HEAD
    // Left edge
=======
    // Left
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
    if (y - 1 < 0) {
        return [
            [currentGeneration[x - 1][y]], [currentGeneration[x -1 ][y + 1]],
                                           [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y]], [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    } else {
<<<<<<< HEAD

=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
    // Middle
        return [
            [currentGeneration[x - 1][y - 1]], [currentGeneration[x - 1][y]], [currentGeneration[x - 1][y + 1]],
            [currentGeneration[x][y - 1]],                                    [currentGeneration[x][y + 1]],
            [currentGeneration[x + 1][y -1]],[currentGeneration[x + 1][y]],   [currentGeneration[x + 1][y + 1]]
        ].filter(cell => cell[0] === 1).length;
    }
}

<<<<<<< HEAD
// Create the next generation
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function createNext(){
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        let liveNeighbours = getNeighboursCount(rowIdx, cellIdx);
            if ((liveNeighbours < 2 || liveNeighbours > 3) && currentGeneration[rowIdx][cellIdx] === 1){
                nextGeneration[rowIdx][cellIdx] = 0;
            } else if (liveNeighbours === 3 && currentGeneration[rowIdx][cellIdx] === 0) {
                nextGeneration[rowIdx][cellIdx] = 1;
            } else {
                nextGeneration[rowIdx][cellIdx] = currentGeneration[rowIdx][cellIdx];
            }
    }));
}

<<<<<<< HEAD
// Update current generation to be next generation just generated
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function updateCurrent(){
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        currentGeneration[rowIdx][cellIdx] = nextGeneration[rowIdx][cellIdx];
        nextGeneration[rowIdx][cellIdx] = 0;
    }));
}

<<<<<<< HEAD
// Update html world so it matches current generation array
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function updateWorld() {
    let cell = '';
    currentGeneration.map((row, rowIdx) => row.map((cell, cellIdx) => {
        cell = document.getElementById(`${rowIdx}_${cellIdx}`);
            if (currentGeneration[rowIdx][cellIdx] === 1){
                cell.setAttribute('class', 'alive');
            } else if (currentGeneration[rowIdx][cellIdx] === 0){
                cell.setAttribute('class', 'dead');
            }
    }));
}

<<<<<<< HEAD
// Start life
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
let interval;
function life(){
    interval = setInterval(() => {
        createNext();
        updateCurrent();
        updateWorld();
    },100);
}

<<<<<<< HEAD
// Pause life 
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
function stop () {
    clearInterval(interval);
}

<<<<<<< HEAD
// Create an initial world and arrays 
=======
>>>>>>> 7c93da5f8fea23dec53f16df02f839d98082e4c7
window.onload = () => {
    worldArray();
    createWorld();
};