const pixelBoard = document.querySelector('#pixel-board');



//Requisito 2, 3 e 12
function randomColor() {
    const randomColor1 = Math.floor(Math.random() * 255);
    const randomColor2 = Math.floor(Math.random() * 255);
    const randomColor3 = Math.floor(Math.random() * 255);
    let msg = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  
    if (msg === 'rgb(255, 255, 255)' || msg === 'rgb(0, 0, 0)') {
      msg = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
    }
  
    return msg;
  }

  function chooseColor (){
    const color = document.getElementsByClassName('color');
    color[0].style.backgroundColor = 'black';
    color[1].style.backgroundColor = randomColor();
    color[2].style.backgroundColor = randomColor();
    color[3].style.backgroundColor = randomColor();
    for (let i = 0; i < color.length; i += 1) {
        let refCOlor = 1;
        if (color[i].style.backgroundColor === color[refCOlor].style.backgroundColor) {
          color[i].style.backgroundColor = randomColor();
        }
        refCOlor += 1;
      }
    }

//Requisito 4
function createLinesAndRows () {
  let board = document.getElementById('pixel-board')
    for (let i =0; i < 5; i+=1){
        pixelRow = document.createElement('div')
        pixelRow.className = 'pixel-row'
        board.appendChild(pixelRow)

        for (let j=0; j < 5; j+= 1){
            pixelCell = document.createElement('div')
            pixelCell.className = 'pixel'
            pixelRow.appendChild(pixelCell)
            pixelCell.style.backgroundColor = 'white'

        }
    }
}

//Requisito 6 e 7 - Deixar a cor selecionada
function newCollor() {
  const object = document.querySelector('#color-palette');
  object.addEventListener('click', (event) => {
    const var2 = document.querySelector('.selected');
    if(var2){
      var2.classList.remove('selected');
    }
    event.target.classList.add('selected'); // retorna o elemento que disparou o evento
  });


}


// REq 8 - Função para colorir os quadradinhos

function colorPixel() {
  const pixel = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      pixel[index].style.backgroundColor = selectedColor.style.backgroundColor;
    });
  }
}



// requisito 9 - Botão que limpa os quadradinhos
function clearButton() {
  const button = document.getElementById('clear-board');
  const pixelCell = document.getElementsByClassName('pixel');

  button.addEventListener('click', () => {
    for (let i = 0; i < pixelCell.length; i += 1) {
      pixelCell[i].style.backgroundColor = 'white';
    }
  });
}




   

window.onload = () => {
createLinesAndRows()
randomColor()
chooseColor()
newCollor()
colorPixel()
clearButton()

}