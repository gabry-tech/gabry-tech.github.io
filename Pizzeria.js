function Ordinarepizza() {
    x = prompt('Che pizza vuoi?');
    x.replace('<',' ');
    document.getElementById('pizzascelta').innerHTML = 'La pizza scelta è: ' + x;
    

}

document.getElementById('Ordinare').addEventListener("click", Ordinarepizza);
