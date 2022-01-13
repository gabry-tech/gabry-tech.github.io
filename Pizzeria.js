function Ordinarepizza() {
    x = prompt('Che pizza vuoi?');
    x = x.replace('<',' ');
    document.getElementById('pizzascelta').innerHTML = 'La pizza scelta è: ' + x;
    

}

document.getElementById('ordinare').addEventListener("click", Ordinarepizza);
