window.addEventListener("load",function(){
    var spanForm = document.getElementById('spanForm');
    var formList = document.getElementById('formList1');
    spanForm.addEventListener("click",function(e){
		e.preventDefault();
        formList.style.display = "block";
        spanForm.style.display = "none";
	});
});