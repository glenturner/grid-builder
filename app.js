let cell;
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
let _selectIndex = 0;

const createGrid = (rows, cols) => {
    for (c = 0; c < (rows * cols); c++) {
        cell = document.createElement("div");
        cell.setAttribute("id", "select-" + _selectIndex++)
        cell.style.background = "#" + randomColor;
        container.appendChild(cell).className = "grid_item";
    };
};

const onColorChange = () => {
    document.querySelectorAll(".grid_item").forEach((el) => {
        el.addEventListener('click', () => {
            let selectedCell = document.getElementById(el.id)
            let hexValue = document.querySelector("#hex").value
            return selectedCell.style.background = "#" + hexValue;
        });
    });
}

const onHeightChange = () => {
    document.querySelectorAll('.grid_item').forEach((el) => {
        const height = Math.floor(document.querySelector("#height").value)
        const width = Math.floor(document.querySelector("#width").value)
        if (height < 100) {
            el.style.height = `${height}px`;

        } if (width < 100) {
            el.style.width = `${width}px`
        }
        else {
            el.style.height = `100px`;
            el.style.width = `100px`;
        }
    });
}

createGrid(10, 10);
onColorChange()