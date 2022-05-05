//Funzione mega galattica del quiz
function quiz() {

    var output = [];

    var domande = [

        {
            domanda: "Da quale lettera è caratterizzato il futuro in greco?",
    
            risposte: {
    
                a: "s(sigma)",
                b: "k(kappa)",
                c: "X(chi)" 
            },
    
            rispostagiusta: "a"
    
        },
    
        {
            domanda: "Come si chiama la penisola greca nella quale si trova Sparta?",
    
            risposte: {
    
                a: "Accadia",
                b: "Tracia",
                c: "Peloponneso" 
            },
    
            rispostagiusta: "c"
            
        },
    
        {
            domanda: "Chi è la moglie di Ettore nell'Iliade?",
    
            risposte: {
    
                a: "Calipso",
                b: "Andromeda",
                c: "Andromaca" 
            },
    
            rispostagiusta: "c"
            
        },
    
        {
            domanda: "Da che isola proveniva la poetessa Saffo?",
    
            risposte: {
    
                a: "Salamina",
                b: "Lesbo",
                c: "Zacinto" 
            },
    
            rispostagiusta: "b"
            
        },
    
        {
            domanda: "Quale di queste caratteristiche NON ha l'aoristo secondo?",
    
            risposte: {
    
                a: "Raddoppiamento",
                b: "Tema verbale diverso",
                c: "Desinenze dell'imperfetto" 
            },
            
            rispostagiusta: "a"
        },
    
        
    ];


    domande.forEach( 
        (domandaattuale, numerodomanda) => {
        
        var risposte = [];

        for(lettere in domandaattuale.risposte){
            risposte.push(
                `<label>
                <input type="radio" name="domandattuale${numerodomanda}" id="risposta${lettere}" value="${lettere}">
                ${lettere} :
                ${domandaattuale.risposte[lettere]}
                </label>`
                
                );


        }

        output.push(
            `<div class="domanda"> ${domandaattuale.domanda} </div>
            <div class="risposte"> ${risposte.join('')} </div>
            <br>`
        );

      });

function mostrarisultati(){

    var boxrisposte = document.getElementById('quiz').querySelectorAll('.risposte');
      
        var numcorrette = 0;
      
        domande.forEach( 
            (domandaattuale, numerodomanda) => {
      
          var rispostaattuale = boxrisposte[numerodomanda];
          var selezione = `input[name=domandattuale${numerodomanda}]:checked`;
          var rispostadata = (rispostaattuale.querySelector(selezione) || {}).value;
      

          if(rispostadata === domandaattuale.rispostagiusta){
            numcorrette++;    
            boxrisposte[numerodomanda].style.color = 'lightgreen';
          }
          
          else{

            boxrisposte[numerodomanda].style.color = 'red';
          }
        });
        
        if (numcorrette > 3 ) {
            pizzaricevuta = "Sei una persona davvero colta! <br>Oh no! la pizza si è bruciata! Ops...<br><br>Torna a trovarci!<br>"
        }

        else {
            pizzaricevuta = "Mi spiace, la nostra pizzeria acccetta solo clienti con certe conoscenze...<br>Torna a trovarci!<br>"
        }
      


        document.getElementById('risultati').innerHTML = `${numcorrette} su ${domande.length}<br>${pizzaricevuta}`;
        



          
    
    }


























    document.getElementById('quiz').innerHTML= output.join('');
    document.getElementById('inviarisposte').innerHTML = "<button id='bottoneinviarisposte'>Invia Risposte</button>";
    document.getElementById('bottoneinviarisposte').addEventListener("click", mostrarisultati);

}

// Questo serve a far funzionare tutti i passaggi sino alla comparsa di PAGA ORA
function ordinarepizza() {
    pizza = prompt('Che pizza vuoi?');
    pizza = pizza.replace('<',' ');
    document.getElementById('pizzascelta').innerHTML = "La pizza scelta è: <b>" + pizza + "</b>";
    x= Math.floor(Math.random()*10+5);
    document.getElementById('conto').innerHTML = "Ok, fanno<b> " + x + " euro</b>";
    document.getElementById('boxpagare').innerHTML = "<button id='pagare'>PAGA ORA</button>";
    document.getElementById('pagare').addEventListener("click", pagamento);
    
}
// Serve a far partire il popup e il quiz
function pagamento() {
    alert ("Pagamento fallito, nessun metodo di pagamento valido individuato.")
    document.getElementById('fallito').innerHTML = "Oh no, il pagamento è fallito.<br>Beh, allora dovrai pagare in un altro modo...<br><br><br><br>CON LA CULTURA!";
    quiz();
    

}



document.getElementById('ordinare').addEventListener("click", ordinarepizza);


