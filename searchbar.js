function Buscar_Loja() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('lojas');

    for(i=0; i< x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="Resultado não encontrado :("
        }else{
            x[i].style.display="list-item"
        }
        
    }
}
