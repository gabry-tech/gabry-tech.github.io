function ordinarepizza() {
    pizza = prompt('Che pizza vuoi?');
    pizza = pizza.replace('<',' ');
    document.getElementById('pizzascelta').innerHTML = 'La pizza scelta è: <b>' + pizza + '</b>';
    x= Math.floor(Math.random()*20);
    document.getElementById('conto').innerHTML = 'Ok, fanno <b>' + x + ' euro</b>';
    document.getElementById('boxpagare').innerHTML = "<button id='pagare'>PAGA ORA</button>";
    document.getElementById('pagare').addEventListener("click", pagamento);
    
}

function pagamento() {
    alert ('Pagamento fallito, nessun metodo di pagamento valido individuato.')
    document.getElementById('fallito').innerHTML = 'Oh no, il pagamento è fallito.<br>Beh, allora dovrai pagare in un altro modo...<br><br><br><br>CON LA CULTURA!';


    

}

document.getElementById('ordinare').addEventListener("click", ordinarepizza);


