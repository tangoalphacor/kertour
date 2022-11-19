let email=document.getElementById("email");
let pass=document.getElementById("password");
let error=document.getElementById("error")
let eror=document.getElementById("eror")
let mfor=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mpas=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
function valid(){
    if(email.value.match(mfor)){
        error.innerText="valid"
        error.style.color="green"
        return true 
    }
    else{
        error.innerText=" email entered is not valid or incorrect"
        error.style.color="red"
        return false

    }   
}
function pasvalid(){
    if(pass.value.match(mpas)){
        eror.innerHTML="valid"
        eror.style.color="green"
        return true
    }
    else{
        eror.innerText="password entered is not valid or incorrect"
        eror.style.color="red"
        return false
    }
}


