//Requisitos da senha
function senhaVerifica(){

	//Resultado
	let resultado = document.getElementById('resultado');
	//Campo senha
	let senha = document.getElementById('senha');
	//Mínimo de caracteres
	let minCaracter = 10;
	//Tamanho dos caracteres
	let senhaValorLen = senha.value.length;
	//Valores no campo senha para utilizar o regex
	let senhaValor = senha.value;
	//Permite mínimo 10 caracteres, mínimo 1 letra minúscula, mínimo 1 letra maiúscula, mínimo 1 caracter especial e no mínimo 1 número
	let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
    //Muda a cor de acordo com o que estiver digitado
    var corSenha = document.getElementById('senha');

	if(senhaValorLen < minCaracter){
        document.getElementById('resultado').innerHTML = 'Não atende a todos os requisitos';
		corSenha.style.borderColor = "red";
		resultado.style.color = "red";
        return false;
        
	}else if(senhaValorLen >= minCaracter && regex.exec(senhaValor)){
        document.getElementById('resultado').innerHTML = 'Ok!';
		corSenha.style.borderColor = "green";
		resultado.style.color = "green";
        return true;
        
	}else{
        document.getElementById('resultado').innerHTML = 'Requisitos Pendentes';
		corSenha.style.borderColor = "orangered";
		resultado.style.color = "orangered";
		return false;
	}
}


//Verifica se a senha está atendendo aos requisitos
function verificaAutenticidade(){
	if(senhaVerifica()){
        return true;
        
	}else{
		alert('Não foi enviado, por não atender todos os requisitos');
		return false;
	}
}




