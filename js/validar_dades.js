
const formRegistre  = document.getElementById('formRegistre');
const formLogin = document.getElementById('formLogin');


function validarDadesReg()
{
    formRegistre.classList.remove('is-invalid');

    var acumErrores=0;

    var inputNom = document.getElementById('inputName');
    var inputAdress = document.getElementById('inputAdress');

    var inputEmail = document.getElementById('inputEmailReg');
    //var inputEmail = document.forms["formRegistre"]["inputEmail"];

    var inputPassword1 = document.getElementById('inputPassword1');
    var inputPassword2 = document.getElementById('inputPassword2');

    if(inputNom.value == "") {
		inputNom.classList.add("is-invalid");
		document.getElementById("errorNom").textContent = "Camp  obligatori";
        acumErrores ++;
    }
    if(inputAdress.value == "") {
		inputAdress.classList.add("is-invalid");
		document.getElementById("errorAdress").textContent = "Camp obligatori";
        acumErrores ++;
    }


    if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
        document.getElementById("errorEmailReg").textContent = "Camp obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmailReg").textContent = "El email no segueix el format";
		acumErrores ++;
	}
   

    if(inputPassword1.value == "") {
		inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "Camp obligatori";
        acumErrores ++;
        
    }else {
        var error=validar_password(inputPassword1);
        if (error!=''){
		    inputPassword1.classList.add("is-invalid");
		    document.getElementById("errorPassword1").textContent = error;
		    acumErrores ++;
        }
	}

    if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Camp obligatori";
        acumErrores ++;
        
    }else if (inputPassword1.value!= inputPassword2.value){
        inputPassword2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = "El passwords an de ser igual";
    	acumErrores ++;
       }

    
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

function validarLogin()
{
    formLogin.classList.remove('is-invalid');

    var acumErrores=0;
    var error='';

    var inputEmail = document.getElementById('inputEmail');
    //var inputEmail = document.forms["myForm"]["inputEmail"];

    var inputPassword1 = document.getElementById('inputPassword');
    
   if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Camp obligatori";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no segueix el format";
		acumErrores ++;
	}
   

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Camp obligatori";
        acumErrores ++;
        
    }else     
    {
        error=validar_password(inputPassword);
        if( error!=''){
            inputPassword.classList.add("is-invalid");
		    document.getElementById("errorPassword").textContent = error;
		    acumErrores ++;
        }
	}
    
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}


formRegistre.addEventListener('blur', (event) => {
	//console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid')
}, true);


formLogin.addEventListener('blur', (event) => {
	//console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);


function validar_password(password) {
	var valor = password.value;
    var str_error='';
           
    if (valor.length < 8 ) 	str_error= "Longitud mínima 7 caràcters";
    else if (!valor.match(/[0-9]/) ) str_error= "El pasword ha de contenir algun número;";
    else if (!valor.match(/[A-Z]/) )   str_error="El password ha de contenir alguna maiúscula";
    else if (!valor.match(/[^A-Za-z0-9]/)) str_error="El password ha de contenir algun caràcter no alfanumèric";

    return str_error;   
	
}


function validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email) ? true : false;
}


