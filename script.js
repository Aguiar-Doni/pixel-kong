

window.onload = function() {
    let firstColor = document.querySelector(".color");
    firstColor.classList.add('selected');

    let colorPalette = document.querySelector('#color-palette')
    colorPalette.addEventListener('click', function(event){
    
    let elementClassName = document.querySelector('.selected');
    elementClassName.classList.remove('selected')  
        
    let select = event.target;
    select.classList.add('selected')  
    console.log(event.target);
})
    let elementClassName = document.querySelectorAll('.pixel');
    
    for (index = 0; index < elementClassName.length; index += 1) {
    elementClassName[index].addEventListener("click", color) 
}
    function color(e){
    let recebe = e.target;
    let colorPalette2 = document.querySelectorAll('.color')
    for(let index2 = 0; index2 < colorPalette2.length; index2 += 1) {
    let variador = colorPalette2[index2].classList.contains('selected'); 
    if (variador === true) {
    recebe.className = 'pixel ' + colorPalette2[index2].classList[1];
}        
}
}
}





