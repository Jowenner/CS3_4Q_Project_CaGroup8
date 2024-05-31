function ValidateForm(event) {
    event.preventDefault();

    let isValid = true;

 
    const formData = new FormData(document.getElementById('login'));


    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    const error4 = document.getElementById('error4');
    const error5 = document.getElementById('error5');
    const error6 = document.getElementById('error6');
    const error7 = document.getElementById('error7');

  
    error1.style.display = 'none';
    error2.style.display = 'none';
    error3.style.display = 'none';
    error4.style.display = 'none';
    error5.style.display = 'none';
    error6.style.display = 'none';
    error7.style.display = 'none';


    if (!formData.get('firstname')) {
        error1.style.display = 'block';
        isValid = false;
    }
    if (!formData.get('lastname')) {
        error2.style.display = 'block';
        isValid = false;
    }
    if (!formData.get('gender')) {
        error3.style.display = 'block';
        isValid = false;
    }
    if (!formData.get('email')) {
        error4.style.display = 'block';
        isValid = false;
    }
    
    if (!formData.get('password')) {
        error5.style.display = 'block';
        isValid = false;
    }
    if (!formData.get('contactnumber')) {
        error6.style.display = 'block';
        isValid = false;
    }

    if (!formData.get('campaign')) {
        error7.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        
        formData.forEach((value, key) => {
            localStorage.setItem(key, value);
        });

       
        window.location.href = 'mainpage.html';
    }
    return false; 
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login').addEventListener('submit', ValidateForm);
});
