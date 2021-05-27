window.onload = () => {
    login.onsubmit = (evento) => {
        
        let cadastro = {nome: nome.value, email: email.value, senha: senha.value};
        localStorage.setItem('email.value',JSON.stringify(cadastro));
        alert("Cadastro feito com sucesso! Favor fazer login!");

        nome.value ='';
        email.value = '';
        senha.value = '';
        evento.preventDefault();
    };
};
