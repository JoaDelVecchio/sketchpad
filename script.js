// FUNCTIONS
function makeGrid() {
  gridContainer.innerHTML = "";
  gridContainer.style.cssText = `flex-direction:column;display:flex;align-items:center`;
  // FILAS
  for (let i = 0; i < newSize; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "row";
    gridContainer.appendChild(row);

    // COLUMNAS
    for (let j = 0; j < newSize; j++) {
      let col = gridContainer.appendChild(document.createElement("div"));
      col.style.cssText = `height:${400 / newSize}px;width:${
        400 / newSize
      }px;border:black solid 1px;background-color:white;transition:3s`;
      col.addEventListener("mouseover", function () {
        if (this.style.backgroundColor === "white") {
          this.style.backgroundColor = currentColor;
          setTimeout(()=>this.style.backgroundColor = "white",1500);
        } else {
          this.style.backgroundColor = "white";
        }
      });
      row.appendChild(col);
    }
  }
}

function changeSize() {

  let input = prompt("Change size to:");
  if (wasCancelled(input)) {
    return;
  }

  while (isNaN(parseInt(input)) || parseInt(input) > 100 || parseInt(input) < 1 ) {
      input = prompt("Incorret number, try again!, Change size to:");
      
      if (wasCancelled(input)) {
          return;
        }
        
        newSize = parseInt(input);
    }

  newSize = parseInt(input);
  makeGrid(newSize);
}

function wasCancelled(input) {
  if (input === null) {
    return true;
  }
  return false;
}

function addButton(container, text, onClickFunction) {
  newButton = document.createElement("button");
  newButton.style.cssText =
    "width:120px;height:50px;font-size:16px;font-weight:bold;color:white;border-radius:5px";
  newButton.textContent = text;
  newButton.addEventListener("click", onClickFunction);
  container.appendChild(newButton);
}

// VARIABLES
document
  .querySelectorAll("*")
  .forEach(
    (element) =>
      (element.style.cssText = "box-sizing:border-box;margin: 0;padding: 0")
  );

let newSize = 16; //16X16 DEFAULT SIZE
let currentColor = "black";
const gridContainer = document
  .querySelector("main")
  .appendChild(document.createElement("div"));

// HEADER
header = document.querySelector("header");
header.style.cssText = "height:100px;padding:10px;display:flex";

addButton(header, "Change Size", changeSize);
addButton(header, "Clear Pad", makeGrid);

let colorPickerBtn = document.createElement("button");
colorPickerBtn.textContent = "Change Color";
colorPickerBtn.style.cssText ="width:150px;height:50px;font-size:16px;font-weight:bold;color:white;border-radius:5px";
let colorPickerInput = document.createElement("input");
colorPickerInput.type = "color";
colorPickerBtn.appendChild(colorPickerInput);
colorPickerInput.addEventListener("change", ()=> currentColor = colorPickerInput.value)
header.appendChild(colorPickerBtn)

// MAIN

makeGrid(newSize);
