let gridWidth = 16;
let gridHeight = gridWidth;
let gridSize = gridWidth * gridHeight;


const gridContainer = document.querySelector(".gridContainer");

function resetGrid() {
	while (gridContainer.hasChildNodes()) {
		gridContainer.removeChild(gridContainer.firstChild);
	}

	let gridHeight = gridWidth;
	let gridSize = gridWidth * gridHeight;

	gridContainer.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;

	for (i = 0; i < gridSize; i++) {
		const gridCell = document.createElement('div');
		gridCell.classList.add('gridCell');
		gridContainer.appendChild(gridCell);
	}

	const gridCells = document.querySelectorAll('.gridCell');
	gridCells.forEach(gridCell => gridCell.addEventListener('mouseenter', drawCell));
}

function resizeGrid(newWidth) {
	gridWidth = newWidth;
	gridHeight = gridWidth;
	gridSize = gridWidth * gridHeight;	
	resetGrid();
}

function getSize() {
	let newSize=0;
	while (newSize < 1 || newSize > 100 || !Number.isInteger(newSize)) {
		newSize = prompt('Enter Your Grid Size (1-100). Warning current drawing will be erased!');
		newSize = parseInt(newSize);
		resizeGrid(newSize);
	}
}

function drawCell(e) {
	switch (paletteSelector.value) {
		//if (currentColor == 'black') {
		case 'black':
			this.style.background = '#000';
			break;
		case 'random':
			this.style.background = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
			break;
	}
}

document.querySelector('#ButtonResize').addEventListener('click', getSize);
document.querySelector('#ButtonClear').addEventListener('click', resetGrid);

resetGrid();