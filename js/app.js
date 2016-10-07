    var spanForm = document.getElementById('spanForm');
    var formList = document.getElementById('formList1');
    var areaTrabajo = document.getElementById('areaTrabajo');
    var btnForm = document.getElementById("btnForm");
    var inpForm = document.getElementById("inpForm");
    var num = 0;

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
}

function aumentar(){
    var result = areaTrabajo.style.width;
    result = Number(result.split("px",1));
    result += 300;
    areaTrabajo.style.width = result + "px";
}
var newlinkTarj;
function lista(){
    
    var newTarjeta = document.createElement("div");
    var newTituTarj = document.createElement("b");
    newTituTarj.classList.add("titulo");
    newTituTarj.textContent = inpForm.value;
    newlinkTarj = document.createElement("a");
    newlinkTarj.innerHTML= "Añadir una tarjeta";
    newlinkTarj.href="#";
        
    newTarjeta.appendChild(newTituTarj);
    newTarjeta.appendChild(newlinkTarj);
    newTarjeta.classList.add("tarjeta"); 
    
    spanForm.parentNode.insertBefore(newTarjeta,spanForm.previousSibling);
    newTarjeta.style.cssFloat = "left";
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
};

function validacionTexto(){
    var el = this;
    el.style.cssText = 'padding:0; height:' + el.scrollHeight + 'px';
};

function guardarTarjeta(e){
    e.preventDefault();
    console.log(this);
    this.previousSibling.style.display = "none";
    this.style.display = "none";
    var textareaNew = document.createElement("span");
    textareaNew.classList.add("subtarjeta");
    textareaNew.innerHTML = this.previousSibling.value;
    this.parentElement.appendChild(textareaNew);
    newlinkTarj.style.display="block";
};
    