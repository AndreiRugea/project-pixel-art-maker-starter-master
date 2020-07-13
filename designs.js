//def variables
const height = document.getElementById ('inputHeight').value;
const width = document.getElementById ('inputWidth').value;
let color = document.getElementById ('colorPicker').value;
let size = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
makeGrid(height, width);
size.addEventListener('submit', function(click) {
    click.preventDefault();
    const height = document.getElementById('inputHeight');
    const width = document.getElementById('inputWidth');
    let table = document.getElementById('pixelCanvas');
    table.innerHTML = '';
    makeGrid(height, width);
});

// Create grid according to height and width
function makeGrid(height,width) {
    var height = document.getElementById ('inputHeight').value;
    var width = document.getElementById ('inputWidth').value;
    table.innerHTML = '';
    for (var r = 0; r < height; r++) {
        let row =  document.createElement("tr");
        for (var c = 0; c < width; c++) {
            let col = document.createElement("td");
            row.appendChild(col);
            table.appendChild(row);
            col.addEventListener('click', function(event) {
                event.target.style.backgroundColor = 
                document.getElementById('colorPicker').value;
            });
        }
    }
}
