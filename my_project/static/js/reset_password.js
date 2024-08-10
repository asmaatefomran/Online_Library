const form = document.querySelector('#form')
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{

if(!validateInputs()){
e.preventDefault();
}
})

function validateInputs()
{
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true
    
    if(passwordVal === '')
    {
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8)
    {
        success = false;
        setError(password,'Password must be at least 8 characters long')
    }
    else
    {
        setSuccess(password)
    }
        
    if(cpasswordVal === '')
    {
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal)
    {
        success = false;
        setError(cpassword,'Password does not match')
    }
    else
    {
        setSuccess(cpassword)
    }
        
        return success;
        
}

function setError(element,message)
{
            const inputGroup = element.parentElement;
            const errorElement = inputGroup.querySelector('.error')
            
            errorElement.innerText = message;
            inputGroup.classList.add('error')
            inputGroup.classList.remove('success')
}
            
function setSuccess(element)
{
            const inputGroup = element.parentElement;
            const errorElement = inputGroup.querySelector('.error')
            
            errorElement.innerText = '';
            inputGroup.classList.add('success')
            inputGroup.classList.remove('error')
}