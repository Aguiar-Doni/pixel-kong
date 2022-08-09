
window.onload = function() {
    let firstColor = document.querySelector(".color");
    firstColor.classList.add('selected');

    let colorPalette = document.querySelector('#color-palette')
    
    colorPalette.addEventListener('click', function(event){
    let elementClassName = document.querySelector('.selected');
    elementClassName.classList.remove('selected')  
        
    let select = event.target;
    select.classList.add('selected')  
        
        console.log(event.target)
    })
}



