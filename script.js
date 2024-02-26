const body = document.body

const container = document.getElementById('grid-container');
const containerSup = document.querySelector('.containerSup')

const containerTitle = document.createElement('div')
containerTitle.setAttribute('class','containerTitle')
containerSup.appendChild(containerTitle)
const title = document.createElement('h1')
title.textContent = 'Etch-A-Sketch'
containerTitle.appendChild(title)

const containerBtn = document.createElement('div')
containerBtn.setAttribute('class','containerBtn')
containerSup.appendChild(containerBtn)

const createBtn = document.createElement('button')
createBtn.setAttribute('id','createBtn')
createBtn.textContent = 'Create Grid'
containerBtn.appendChild(createBtn)

const resetGrid = document.createElement('button')
resetGrid.setAttribute('id','resetGrid')
resetGrid.textContent = 'Reset Grid'
containerBtn.appendChild(resetGrid)

const resetColor = document.createElement('button')
resetColor.setAttribute('id','resetColor')
resetColor.textContent = 'Reset Color'
containerBtn.appendChild(resetColor)

createBtn.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    requestGrid()
})

resetGrid.addEventListener('click', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
})

function createGrid(rows, columns) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--columns', columns);
  
    for (let i = 1; i <= rows * columns; i++) {
      const item = document.createElement('div');
      item.className = 'item';
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = randomColor()  
      })
      resetColor.addEventListener('click', () => {
        item.style.backgroundColor = 'aqua'  
      })

      container.appendChild(item);
    }
}
  
function requestGrid() {
    const size = prompt("Enter a number between 1 and 100.")
    if (size <= 100) {
        createGrid(size,size)
      } else {
        alert("The number is incorrect; it must be between 1 and 100.")
        requestSize();
      }
    
}

function randomColor(){
  var firstNum = Math.floor(Math.random() * 256);
  var secondNum = Math.floor(Math.random() * 256);   
  var thirdNum = Math.floor(Math.random() * 256);   
  
  let color = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`
  return color;
}


const footer = document.createElement('footer')
footer.setAttribute('class', 'footer')
footer.textContent = 'Copyright © Diego Vallejos for The Odin Project 2024'
body.appendChild(footer)