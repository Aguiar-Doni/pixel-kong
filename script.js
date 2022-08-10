

window.onload = function() {
    let firstColor = document.querySelector(".color"); // acessa o primeiro elemento da minha classe color 
    firstColor.classList.add('selected'); // adiciona selected a ele

    let colorPalette = document.querySelector('#color-palette') // evento de escuta na minha paleta de cores
    colorPalette.addEventListener('click', function(event){
    
    let elementClassName = document.querySelector('.selected'); // armazena quem vai estar com a classe selected, para poder remover e trocar 
    elementClassName.classList.remove('selected')  // removendo selected
        
    let select = event.target;
    select.classList.add('selected') // adiciona classe selected  
    // console.log(event.target); // teste 
})
    let elementClassName = document.querySelectorAll('.pixel'); // armazena em forma de array todas minhas divs com classe pixel
    
    for (index = 0; index < elementClassName.length; index += 1) { // percorre todos os elementos do meu quadro de pixel
    elementClassName[index].addEventListener("click", color) // adiciona um evento de escuta pra qualquer um dos elementos que eu clicar no eu quadro
}
    function color(e){    // função que vai pintar e esta associada ao meu evento de escuta de cima 
    let recebe = e.target;
    let colorPalette2 = document.querySelectorAll('.color') //armazena em forma de array todas minhas divs com classe pixel
    for(let index2 = 0; index2 < colorPalette2.length; index2 += 1) { // percorre todas as posições
    let variador = colorPalette2[index2].classList.contains('selected'); //armazena um valor booleano true ou false que o contains procura
    if (variador === true) { // se for igual a true a classe selected 
    recebe.className = 'pixel ' + colorPalette2[index2].classList[1]; // adicionamos ao pixel a classe da color palette 
}}}
    
    let btn = document.querySelector('#clear-board'); // armazenando valor do botao de clear
    btn.addEventListener('click', clearPIxel); // evento de escuta do botao 

    function clearPIxel() { // função que vai limpar o quadro 
    let allPixels = document.querySelectorAll('.pixel'); // novamente armazenamos o valor de pixel com um array 
    for (let index3 = 0; index3 < allPixels.length; index3 += 1) { //percorremos todos elementos
    let clearPIxel = allPixels[index3]; // criamos uma variavel que vai receber o valor de cada indice 
    clearPIxel.className = 'pixel five' // reatrubuimos o valor dele para uma classe com bakcground white
}}

}





