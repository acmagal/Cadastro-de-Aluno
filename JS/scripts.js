

function contChar() {
	var nome = document.getElementById('nome').value;
    var numero = document.getElementById('numChar').value;
    var tamanho = document.getElementById('tamanho').id;
    var numeroPal = document.getElementById('numPal').value;
    

    /*Numero de caracteres*/
    var tamanho = nome.length;
    document.getElementById('numChar').value = tamanho;

    /*Numero de palavras */
    
    var tamanho = nome.split(" ");
    console.log(tamanho)
    document.getElementById('numPal').value = tamanho.length;
    
    
    

    


}


var comida;


function informaEscolha() {
    
    
    document.getElementById("btnSubmit").onclick = function() {
        var vogais = document.getElementById('vogais').value;
        var locais = document.getElementById('locais').value;
        var radios = document.getElementsByName("comida");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                
                

                alert("Vogal escolhida é: " + vogais + "\nLugar escolhido é: " + locais + "\nComida escolhida é: " + radios[i].value );
                
            }
        }
    }



    
    
    


}

