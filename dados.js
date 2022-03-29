function pegarDados1(){
	let name = document.getElementsByTagName("button").value;
	document.getElementById("quad").innerHTML = "Fique em casa, peça para fazerem as compras por você!";

function pegarDados(qualBotao){
	switch (qualBotao) {
        case 'Você é idoso?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("Ismael");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa, peça para fazerem as compras para você!";
        break;
        }
        case 'Sofre de problemas respiratórios?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("Ismael");
        document.getElementById("botaoSelecionado").innerHTML = "Fique em casa, tome sol e faça exercícios leves!";
        break;
        }
        case 'É diabético?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("Ismael");
        break;
        }
        case 'É saudável?':{
        let div = document.getElementById("botaoSelecionado");
        div.classList.remove("quad");
        div.classList.add("Ismael");
        document.getElementById("botaoSelecionado").innerHTML = "Faça compras pelos mais idosos, mas use máscaras!";
        break;
        }
        default:
        document.getElementById("botaoSelecionado").innerHTML = "erro";
    }
}
function pegarDados2(){
	let name = document.getElementsByTagName("button").value;
	document.getElementById("quad").innerHTML = "Fique em casa, tome sol e faça exercícios leves!";

}
function pegarDados3(){
	let name = document.getElementsByTagName("button").value;
	document.getElementById("quad").innerHTML = "Fique em casa e cuide da sua saúde!";

}
function pegarDados4(){
	let name = document.getElementsByTagName("button").value;
	document.getElementById("quad").innerHTML = "Faça compras pelos mais idosos, mas use máscara!";

} 
let ident = "Ismael Oliveira de Sousa 2º Ano Informática";
console.log(ident);