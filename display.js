document.addEventListener('DOMContentLoaded', function () {

    const firstName = localStorage.getItem('firstname');
    const lastName = localStorage.getItem('lastname');
    const gender = localStorage.getItem('gender');
    const email = localStorage.getItem('email');
    const campaign = localStorage.getItem('campaign');


    document.getElementById('name1').textContent = firstName;
    document.getElementById('first').textContent = firstName;
    document.getElementById('name2').textContent = lastName;
    document.getElementById('gender').textContent = gender;
    document.getElementById('email').textContent = email;
    document.getElementById('camptext').textContent = campaign;

});
