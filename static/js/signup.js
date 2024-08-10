const form = document.querySelector('#form')
const ftname = document.querySelector('#ftname');
const ltname = document.querySelector('#ltname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{

if(!validateInputs()){
e.preventDefault();
}
})

function validateInputs(){
    
const ftnameVal = ftname.value.trim()
const ltnameVal = ltname.value.trim()
const usernameVal = username.value.trim()
const emailVal = email.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();
let success = true

if(ftnameVal===''){
    success=false;
    setError(ftname,'First Name is required')
    }
    else if (!/[a-zA-Z]/.test(ftnameVal)) {
        success=false;
        setError(ftname,'First Name must contain at least one letter.');
    }
     
    else  if (ftnameVal.length < 3 ) {
        success=false;
        setError(ftname,'The length of First Name must be more than 3 letters ')
    }
    else  if ( ftnameVal.length > 15) {
        success=false;
        setError(ftname,'The length of First Name must be less than 15 letters  ')
    }
    
    else{
    setSuccess(ftname)
    }

    if(ltnameVal===''){
        success=false;
        setError(ltname,'Last Name is required')
        }
        else if (!/[a-zA-Z]/.test(ltnameVal)) {
            success=false;
            setError(ltname,'Last Name must contain at least one letter.');
        }
         
        else  if (ltnameVal.length < 3 ) {
            success=false;
            setError(ltname,'The length of Last Name must be more than 3 letters ')
        }
        else  if (ltnameVal.length > 15) {
            success=false;
            setError(ltname,'The length of Last Name must be less than 15 letters  ')
        }
        
        else{
        setSuccess(ltname)
        }


if(usernameVal===''){
success=false;
setError(username,'Username is required')
}
else if (!/[a-zA-Z]/.test(usernameVal)) {
    success=false;
    setError(username,'Username must contain at least one letter.');
}
 
else  if (usernameVal.length < 3 ) {
    success=false;
    setError(username,'The length of username must be more than 3 letters ')
}
else  if ( usernameVal.length > 15) {
    success=false;
    setError(username,'The length of username must be less than 15 letters  ')
}

else{
setSuccess(username)
}

if(emailVal===''){
success = false;
setError(email,'Email is required')
}
else if(!validateEmail(emailVal)){
success = false;
setError(email,'Please enter a valid email')
}
else{
setSuccess(email)
}

if(passwordVal === ''){
success= false;
setError(password,'Password is required')
}
else if(passwordVal.length<8){
success = false;
setError(password,'Password must be at least 8 characters long')
}
else{
setSuccess(password)
}

if(cpasswordVal === ''){
success = false;
setError(cpassword,'Confirm password is required')
}
else if(cpasswordVal!==passwordVal){
success = false;
setError(cpassword,'Password does not match')
}
else{
setSuccess(cpassword)
}

return success;

}

function setError(element,message){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error')

errorElement.innerText = message;
inputGroup.classList.add('error')
inputGroup.classList.remove('success')
}

function setSuccess(element){
const inputGroup = element.parentElement;
const errorElement = inputGroup.querySelector('.error')

errorElement.innerText = '';
inputGroup.classList.add('success')
inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    };
