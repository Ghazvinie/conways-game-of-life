import createWorld from './src/createWorld.js';


// Create life start cells
function startClick(event) {
    const x = this.id.split('_')[0];
    const y = this.id.split('_')[1];

    this.classList.toggle('alive');
}













window.onload = () => {
    createWorld();
};