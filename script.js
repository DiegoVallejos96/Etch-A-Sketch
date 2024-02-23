const body = document.body
const main = document.querySelector(".container")
const header = document.querySelector("header")


const divSup = document.createElement('div')
divSup.setAttribute('class','divSup')
header.appendChild(divSup)


const createGrid = document.createElement('button')
createGrid.setAttribute('id','createGrid')
createGrid.textContent = 'createGrid'
divSup.appendChild(createGrid)

const resetGrid = document.createElement('button')
resetGrid.setAttribute('id','resetGrid')
resetGrid.textContent = 'resetGrid'
divSup.appendChild(resetGrid)

const resizeGrid = document.createElement('button')
resizeGrid.setAttribute('id','resizeGrid')
resizeGrid.textContent = 'resizeGrid'
divSup.appendChild(resizeGrid)

resizeGrid.addEventListener('click', () => {
    const newSize = prompt('NEW SIZE?')
    resizerGrid(newSize*newSize)
})

function resizerGrid(newSize){
    let limitDivs = 0
    while (limitDivs<newSize){
        const div = document.createElement('div')
        div.classList.add("div-item");
        main.appendChild(div)
        limitDivs++
        if (limitDivs == newSize) {
            break
        }
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = randomColor()  
        })
        resetGrid.addEventListener('click', () => {
            div.style.backgroundColor = 'white'  

        })

    }
    
}

createGrid.addEventListener('click',() => {
    let limitDivs = 0
    while (limitDivs<16){
        const div = document.createElement('div')
        div.classList.add("div-item");
        main.appendChild(div)
        limitDivs++
        if (limitDivs == 16) {
            break
        }
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = randomColor()  
        })
        resetGrid.addEventListener('click', () => {
            div.style.backgroundColor = 'white'  

        })

    }
})




function randomColor(){
    var firstNum = Math.floor(Math.random() * 256);
    var secondNum = Math.floor(Math.random() * 256);   
    var thirdNum = Math.floor(Math.random() * 256);   
    
    let color = `rgb(${firstNum}, ${secondNum}, ${thirdNum})`
    return color;
}




















