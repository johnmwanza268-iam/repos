const divContainer = document.querySelector('#container');
const button = document.querySelector('#cellNumber')


button.addEventListener('click',()=>{
    let cellNumber = Number(prompt("Enter the number of cells(<=100):"))
    if(cellNumber > 100){
        alert("Too many cells!")
    } else {
        divContainer.textContent = " "
        cellGenerator(cellNumber); 

    }

})

function cellGenerator(cells) {
    let containerWidth = 960;
    let cellWidth = containerWidth/cells;
    for(let i = 0; i < cells; i++) {
        
        for(let j = 0; j < cells; j++) {

        let r = Math.floor((Math.random() * 256));
        let g = Math.floor((Math.random() * 256));
        let b = Math.floor((Math.random() * 256));

        let divBox = document.createElement('div');
        divBox.style.width = `${cellWidth}px`;
        divBox.style.height = `${cellWidth}px`;
        divBox.addEventListener('mouseenter',(event)=> {
            divBox.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
        /*divBox.addEventListener('mouseleave',(event)=> {
            divBox.style.backgroundColor = "red";
        })*/
        divContainer.append(divBox)
        }
    }
}
