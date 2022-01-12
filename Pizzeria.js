function Ordinarepizza() {
    x = prompt('Che pizza vuoi?');
    document.getElementById('pizzascelta').innerHTML = 'La pizza scelta è: ' + x;
    document.getElementById('pizzascelta').replace('<','NO')

}

document.getElementById('Ordinare').addEventListener("click", Ordinarepizza);
