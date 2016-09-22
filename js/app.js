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
        spanForm.style.display = "block";
        formList.style.display = "none";
        
    });
    function tarjeta(){
        var newTarjeta = document.createElement("div");
        /*var newTituTarj = document.createElement("h5");
        var newTextaTarj = document.createElement("textarea"); */
        var node = document.createTextNode(inpForm.value);
        newTarjeta.appendChild(node);
        /*
        newTituTarj.appendChild(node);
        newTarjeta.appendChild(newTituTarj);
        newTarjeta.appendChild(newTextaTarj);*/
        newTarjeta.classList.add("tarjeta");
        spanForm.parentNode.insertBefore(newTarjeta,spanForm.previousSibling);
        //newTarjeta.style.cssFloat = "left";
    }
    
    
    
    
    
});