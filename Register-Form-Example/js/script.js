// Age Handle to be Over 18
let everythingOK = false;
let mainContainer = document.querySelector('.main-container');
let registerForm = document.querySelector('.register-form');

let ageInput = document.getElementById('age');
ageInput.onblur = () => {
    let userAge = parseInt(ageInput.value);
    console.log(userAge);
    if (userAge < 18) {
        ageInput.nextElementSibling.style.display = 'block';
        mainContainer.className += ' shake';
        everythingOK = false;
    } else {
        ageInput.nextElementSibling.style.display = 'none';
        mainContainer.className = 'main-container';
        everythingOK = true;
    }
};


// Name, FamilyName and FatherName should be more than 2 character handler
let nameInput = document.getElementById('name');
let familyNameInput = document.getElementById('familyName');
let fatherNameInput = document.getElementById('fatherName');
let personalInfoInputs = [nameInput, familyNameInput, fatherNameInput];

personalInfoInputs.forEach(input => {
    input.onblur = () => {
        if (input.value.length < 3) {
            input.nextElementSibling.style.display = 'block';
            mainContainer.className += ' shake';
            everythingOK = false;

        } else {
            input.nextElementSibling.style.display = 'none';
            mainContainer.className = 'main-container';
            everythingOK = true;
        }
    }
    input.onkeydown = () => {
        if (input.value.length < 2) {
            input.nextElementSibling.style.display = 'block';
            mainContainer.className += ' shake';
            everythingOK = false;

        } else {
            input.nextElementSibling.style.display = 'none';
            mainContainer.className = 'main-container';
            everythingOK = true;
        }
    }
});

// E-Mail Handler

let emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    let emailValue = emailInput.value;
    let validEmailRegax = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]+[a-zA-Z]*$/;
    if (emailValue.match(validEmailRegax)) {
        emailInput.nextElementSibling.style.display = 'none';
        mainContainer.className = 'main-container';
        everythingOK = true;
    } else {
        emailInput.nextElementSibling.style.display = 'block';
        mainContainer.className += ' shake';
        everythingOK = false;
    }
});
// UserName Handler 
let userName = document.getElementById('username');

userName.addEventListener('blur', () => {
    let userNameRegex = /^[a-zA-Z0-9_]*$/;
    if (userName.value.match(userNameRegex) && userName.value.length >= 4) {
        userName.nextElementSibling.style.display = 'none';
        mainContainer.className = 'main-container';
        everythingOK = true;
    } else {
        userName.nextElementSibling.style.display = 'block';
        mainContainer.className += ' shake';
        everythingOK = false;
    }
    userName.addEventListener('keydown', (e) => {
        if (userName.value.length <= 4) {
            userName.nextElementSibling.style.display = 'block';
            mainContainer.className += ' shake';
            everythingOK = false;
        } else {
            userName.nextElementSibling.style.display = 'none';
            mainContainer.className = 'main-container';
            everythingOK = true;
        }
    })
});

//Passwords Handlers
let password = document.getElementById('password');
let rePassword = document.getElementById('re-password');
let passwordBeSameHandler = (passwordValue, rePasswordValue) => {
    if (passwordValue !== rePasswordValue) {
        return false;
    } else if (passwordValue === '' || rePasswordValue === '') {
        return false;
    }
    else {
        return true
    }
}

rePassword.addEventListener('blur', () => {
    let passwordValue = password.value;
    let rePasswordValue = rePassword.value;

    if (passwordValue === '' || rePasswordValue === '') {
        rePassword.nextElementSibling.innerText = 'please fill the passwords feilds!';
        rePassword.nextElementSibling.style.display = 'block';
        mainContainer.className += ' shake';
        everythingOK = false;
    } else {
        rePassword.nextElementSibling.style.display = 'none';
        mainContainer.className = 'main-container';
        everythingOK = true;
    }
    if (passwordBeSameHandler(passwordValue, rePasswordValue)) {
        rePassword.nextElementSibling.style.display = 'none';
        mainContainer.className = 'main-container';
        everythingOK = true;
    } else {
        rePassword.nextElementSibling.style.display = 'block';
        rePassword.nextElementSibling.innerHTML = 'Passwords are not match!';
        mainContainer.className += ' shake';
        everythingOK = false;
    }

});

// Submit Section
registerForm.onsubmit = (e) => {
    if (everythingOK === false) {
        mainContainer.className += ' shake';
        e.preventDefault()
    } else {
        mainContainer.className = 'main-container';
    }
}

// un Shake class handler

let submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
    mainContainer.className = 'main-container';
})

let formInputes = [...document.getElementsByClassName('register-form-input')];
formInputes.forEach(element => {
    element.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (parseInt(e.keyCode) == 67 || parseInt(e.keyCode) == 86)) {
            e.preventDefault()
        }
    })
})
