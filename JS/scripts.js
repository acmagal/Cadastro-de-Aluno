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

