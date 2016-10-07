    var spanForm = document.getElementById('spanForm');
    var formList = document.getElementById('formList1');
    var areaTrabajo = document.getElementById('areaTrabajo');
    var btnForm = document.getElementById("btnForm");
    var inpForm = document.getElementById("inpForm");
    var num = 0;
    var ntarjeta = 1;
    var newlinkTarj;


window.addEventListener("load", cargarPagina);

function cargarPagina(e){
    e.preventDefault();
    formList.style.display = "none";
    spanForm.addEventListener("click", crearFormListaNueva);
    btnForm.addEventListener("click", crearNuevaTarj);
};



function crearFormListaNueva(e){
    e.preventDefault();
    formList.classList.add("block","inline-block");
    spanForm.style.display = "none";
    formList.style.display="";
    inpForm.value = "";
    inpForm.focus();
};

function crearNuevaTarj(e){
    e.preventDefault();
    lista();
    aumentar();
};

function aumentar(){
    var result = areaTrabajo.style.width;
    result = Number(result.split("px",1));
    result += 300;
    areaTrabajo.style.width = result + "px";
};

function lista(){
    
    var newLista = document.createElement("div");
    var newTituTarj = document.createElement("b");
    newTituTarj.classList.add("titulo");
    newTituTarj.textContent = inpForm.value;
    newlinkTarj = document.createElement("a");
    newlinkTarj.innerHTML= "Añadir una tarjeta";
    newlinkTarj.href="#";
        
    newLista.appendChild(newTituTarj);
    newLista.appendChild(newlinkTarj);
    newLista.classList.add("tarjeta"); 
    
    spanForm.parentNode.insertBefore(newLista,spanForm.previousSibling);
    newLista.style.cssFloat = "left";
    spanForm.style.display = "inline-block";
    formList.style.display = "none";
    newlinkTarj.addEventListener("click", formNuevaTarjeta);
};

function formNuevaTarjeta(e){
    e.preventDefault();
    newlinkTarj.style.display="none";
    var newDiv = document.createElement("div");
    var newInpTarj = document.createElement("textarea");
    var newButtonS = document.createElement("button");
    newInpTarj.classList.add("subtarjeta1");
    newButtonS.classList.add("center", "btn", "btn-success", "botAni"); 
    newButtonS.innerHTML = "Añadir";
    newDiv.appendChild(newInpTarj);
    newDiv.appendChild(newButtonS);
    this.parentNode.insertBefore(newDiv, this);
    newInpTarj.addEventListener("keyup", validacionTexto);
    newButtonS.type="button"    ;
    newButtonS.addEventListener("click", guardarTarjeta); 
    newInpTarj.focus();
};

function validacionTexto(){
    var el = this;
    el.style.cssText = 'padding:0; height:' + el.scrollHeight + 'px';
};

function guardarTarjeta(e){
    e.preventDefault();
    this.previousSibling.style.display = "none";
    this.style.display = "none";
    var textareaNew = document.createElement("div");
    textareaNew.id = "tarjeta" + ntarjeta;
    textareaNew.classList.add("subtarjeta");
    textareaNew.setAttribute("draggable", "true");
    textareaNew.innerHTML = this.previousSibling.value;
    this.parentElement.appendChild(textareaNew);
    newlinkTarj.style.display="block";
    ntarjeta++;
    draganddrop();
};

function draganddrop(){
    var tarjeta = document.getElementsByClassName("subtarjeta");
	for (var i = 0, l = tarjeta.length; i < l; i++) {
		tarjeta[i].addEventListener("dragstart", empiezaArrastrar);
		tarjeta[i].addEventListener("dragenter", entraArrastrar);
		tarjeta[i].addEventListener("dragleave", dejaArrastrar);
		tarjeta[i].addEventListener("dragover", arrastrarSobre);
		tarjeta[i].addEventListener("drop", soltar);
		tarjeta[i].addEventListener("dragend", terminaArrastrar);
	}
};

function empiezaArrastrar(e) {
	e.dataTransfer.setData("text", this.id);
	//this.style.opacity = "0.4";
}

function entraArrastrar(e) {
	//console.log("dragenter");
   // this.style.transform = "rotate(15deg)";
	this.classList.add("animated", "bounce");
}

function dejaArrastrar(e) {
	//console.log("dragleave");
	this.classList.remove("animated", "bounce");
    this.style.transform = "none";
}

function arrastrarSobre(e) {    
	//console.log("dragover");
	e.preventDefault();
    this.style.transform = "rotate(15deg)";
}

function soltar(e) {
    this.style.transform = "none";
	//console.log("drop");
	var idArrastrado = e.dataTransfer.getData("text");
	var elementoArrastrado = document.getElementById(idArrastrado);
    var temporal = this.innerHTML;
    console.log(temporal);
	e.target.innerHTML = elementoArrastrado.innerHTML;
    elementoArrastrado.innerHTML = temporal;
	//this.classList.remove("over");
}

function terminaArrastrar(e) {
    this.style.transform = "none";
	//console.log("dragend");
	//this.style.opacity = null;
}

