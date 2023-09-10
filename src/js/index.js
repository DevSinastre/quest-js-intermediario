/*sei que é recomendado retirar todos os comentários do código, porém quero saber a opinião sobre como ficou o código como um todo, testei meus conhecimentos retirando a responsabilidade de verificar os inputs do html e passado pro javascript. Talvez tenha feito mais do que o exercício pediu, mas segui por esse caminho para testar códigos que ainda não conhecia.

Deixei o campo email como text para testar ele no javascript, apenas para não aparecer aquela mensagem sobre o campo quando o email não é válido, deixei tudo no js apenas para fins didáticos, sei que o input correto seria do tipo email.

Coloquei um alert em todos, informando o que deve conter no campo, mas decidi retirar no final, deixei apenas para mostrar que tinha feito, e pediria a opinião de alguém mais experiente (como no caso) se o código fica ou sai.*/

let enviar = document.getElementById('enviar-formulario');
console.log(enviar);

let entradas = document.querySelectorAll('input');
console.log(entradas);

let txtArea = document.getElementById('txtarea');
console.log(txtArea);
console.log(txtArea.value);

enviar.addEventListener('submit', e =>{

    // mascara de nome, contendo ao menos u nome e um sobrenome
    let mascaraNome = /\S+ +\S+/;
    
    if(mascaraNome.test(entradas[0].value)){
        entradas[0].classList.remove('nao-valido');
        entradas[0].classList.add('valido');
    } 
    else{
        entradas[0].classList.remove('valido');
        entradas[0].classList.add('nao-valido');
        // alert("Campo 'nome completo' deve conter pelo menos 1 nome e 1 sobrenome");
    }

    //mascara de email com nome, dominio e terminologia contendo no mínimo 3 caracteres e 1 arroba entre nome e domínio.
    let mascaraEmail = /\S+\S+\S+@\S+\S+\S+\.\S+\S+\S/;
    
    if(mascaraEmail.test(entradas[1].value)){
        entradas[1].classList.remove('nao-valido');
        entradas[1].classList.add('valido');
    } 
    else{
        entradas[1].classList.remove('valido');
        entradas[1].classList.add('nao-valido');
        // alert("Campo 'Email' deve conter pelo menos 1 nome (ex: joe), @, 1 domínio (ex: gmail) e 1 terminologia (ex: .com)")
    }

    if(entradas[2].value !== "" && !isNaN(entradas[2].value) && entradas[2].value.length>=10){
        entradas[2].classList.add('valido');
        entradas[2].classList.remove('nao-valido');
    } 
    else{
        entradas[2].classList.remove('valido');
        entradas[2].classList.add('nao-valido');
        // alert("Campo telefone deve conter apenas números e ao menos 10 números")
    }

    if(txtArea.value == ""){
        txtArea.classList.add('nao-valido');
        txtArea.classList.remove('valido');
    } 
    else{
        txtArea.classList.add('valido');
        txtArea.classList.remove('nao-valido');
        // alert("Deixe uma pequena mensagem")
    }

    //não deixar recarregar a página.
    e.preventDefault();
})