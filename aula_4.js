/*Conteúdo da Aula + DESAFIO 1*/

var capasDuna = ["https://images-na.ssl-images-amazon.com/images/I/41MRn6hy8-L._SX346_BO1,204,203,200_.jpg", 
"https://m.media-amazon.com/images/I/515MMTT7VuL.jpg", "https://images-na.ssl-images-amazon.com/images/I/810pYklnGsL.jpg", "https://images-na.ssl-images-amazon.com/images/I/91XCwEX5fiL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51y5SPHdyaL._SX346_BO1,204,203,200_.jpg", "https://images-na.ssl-images-amazon.com/images/I/41KHNxLCwLL._SX346_BO1,204,203,200_.jpg"]

for(var i = 0; i < capasDuna.length; i++){
	document.write("<img src=" + capasDuna[i] + ">");
}

/*DESAFIO 2*/
function adicionar(){
	var livro = document.getElementById("livro").value;

	if(livro.endsWith(".jpg")){
		listarFilmes(livro)
	}else{
		console.error("Endereço de imagem inválido")
	}

	document.getElementById("livro").value = "";
}

function listarFilmes(livro){
	
	var elementoLivro = "<img src=" + livro + ">";
	var listaLivros = document.getElementById("listaLivros");
	
	listaLivros.innerHTML = listaLivros.innerHTML + elementoLivro;
}

/*DESAFIO 3 Ver arquivo aula_3.html e aula_3.css*/



	