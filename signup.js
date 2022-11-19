let nam = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let cpass = document.getElementById("cpassword");
let er1=document.getElementById("er1")
let er2=document.getElementById("er2")
let er3=document.getElementById("er3")
let er4=document.getElementById("er4")
let psw=document.getElementById("psw-input")
let er5=document.getElementById("er5")
let er6=document.getElementById("er6")

let npara=/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;//parameter for writing a name
let epara=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//parameters for writing an email
let nopara=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;//parameters for writing phone no
let paspara=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;//parameters for writing password
// functions for validations
function validname(){
    if(nam.value.match(npara)){
        er1.innerText="valid Name"
        er1.style.color="green"
        return true
    }
    else{
        er1.innerText="Eter a valid Name"
        er1.style.color="red"
        return false
    }
}
function validemail(){
    if(email.value.match(epara)){
        er2.innerHTML="valid email"
        er2.style.color="green"
        return true
    }
    else{
        er2.innerHTML="Eter a valid email"
        er2.style.color="red"
        return false
    }
}
function validphone(){
    if(phone.value.match(nopara)){
        er3.innerText="valid Number"
        er3.style.color="green"
        return true
    }
    else{
        er3.innerText="Eter a valid phone no"
        er3.style.color="red"
        return false
    }
}
function validpassword(){
    if(password.value.match(paspara)){
        er4.innerText="valid password"
        er4.style.color="green"
        return true
    }
    else{
        er4.innerText="Enter a valid password"
        er4.style.color="red"
        return false
    }
}
function Paswordstrength(){
    if(password.value.length==4||password.value.length==5||password.value.length==4||password.value.length==6||password.value.length==7||password.value.length==8||password.value.length==9){
        psw.style.backgroundColor="orange"
        er5.innerText="MEDIUM"
        er5.style.color="orange"
        return true
    }
    else if(password.value.length<1){
        psw.style.backgroundColor="white"
        er5.innerText=""
    }
    else if(password.value.length>9){
        psw.style.backgroundColor="green"
        er5.innerText="STRONG"
        er5.style.color="green"

    }
    else{
        psw.style.backgroundColor="red"
        er5.innerText="WEAK"
        er5.style.color="red"

    }

}
function conform(){
    if(password.value==cpass.value&&password.value.match(paspara)){
        er6.innerText="password matches"
        er6.style.color="green"
        return true
        
    }
    else{
        er6.innerText="password not matching/follow instructions"
        er6.style.color="red"
        return false
    }
}