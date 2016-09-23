window.addEventListener("load",function(){
    var spanForm = document.getElementById('spanForm');
    var formList = document.getElementById('formList1');
    var areaTrabajo = document.getElementById('areaTrabajo');
    formList.style.display = "none";
    spanForm.addEventListener("click",function(e){
		e.preventDefault();
        formList.style.display = "block";
        spanForm.style.display = "none";
        formList.style.display="inline-block";
	});
    //para la version 2
    var btnForm = document.getElementById("btnForm");
    var inpForm = document.getElementById("inpForm");
    btnForm.addEventListener("click", function(e){
        tarjeta();
        
    });
    function tarjeta(){
        var newTarjeta = document.createElement("div");
        var newTituTarj = document.createElement("h5");
        var newlinkTarj = document.createElement("a");
        newlinkTarj.href="#";
        
        var nodeTitulo = document.createTextNode(inpForm.value);
        var nodeNuevo = document.createTextNode("Añadir una tarjeta");
        newTituTarj.appendChild(nodeTitulo);
        newlinkTarj.appendChild(nodeNuevo);
        newTarjeta.appendChild(newTituTarj);
        newTarjeta.appendChild(newlinkTarj);
        newTarjeta.classList.add("tarjeta"); 
        spanForm.parentNode.insertBefore(newTarjeta,spanForm.previousSibling);
        newTarjeta.style.cssFloat = "left";
        spanForm.style.display = "inline-block";
        formList.style.display = "none";
        
        newlinkTarj.addEventListener("click", function(){
            var newInpTarj = document.createElement("textarea");
            var newButtonS = document.createElement("button");
            newButtonS.classList.add("btn");
            newButtonS.classList.add("btn-success");
             newButtonS.classList.add("botAni");
            var newnodo = document.createTextNode("Añadir");
            newButtonS.appendChild(newnodo);
            newTarjeta.appendChild(newInpTarj);
            newTarjeta.appendChild(newButtonS);
            newTarjeta.insertBefore(newInpTarj, newTituTarj.nextSibling);
            newTarjeta.insertBefore(newButtonS, newInpTarj.nextSibling);
            newlinkTarj.style.display="none";
            /*
            newButtonS.addEventListener("click", function(){
                newInpTarj.style.display = "none";
                newButtonS.style.display = "none";
                var textareaNew = document.createElement("textarea");
                var nodoAreaNew = document.createTextNode(newInpTarj.value);
                textareaNew.classList.add("subtarjeta");
                textareaNew.appendChild(nodoAreaNew);
                //newTarjeta.style.text-align = "center";
                newTarjeta.appendChild(textareaNew);
                newTarjeta.insertBefore(textareaNew, newTituTarj.nextSibling);
                newlinkTarj.style.display="block";
            });*/
            
        });
        
        
        
    }    
    
    
});