const form = document.createElement("form");
const username = document.createElement("input");
const password = document.createElement("input");
const label_username = document.createElement("label");
const label_password = document.createElement("label");
const remmember_me = document.createElement("input");
const label_remmember_me = document.createElement("label");
const button = document.createElement("button");
const body = document.querySelector("body");
const form_title = document.createElement("div");



form.id = "form";
form.method = "get";
form.style.border = "1px solid red";
form.style.width = "50%";
form.style.margin = "1% auto";
form.style.backgroundColor = "#102031";


username.type = "Text";
username.id = "username";
username.placeholder = "Username";
// username.style.display = "block";
username.style.margin = "1% auto";
username.style.border = "2px rgb(118, 118, 118) inset";



label_username.innerText = "Username: "
label_username.style.textAlign = "center"
label_username.style.borderBottom = "1px solid white";
label_username.style.color = "white";
label_username.style.display = "block";
label_username.style.fontWeight = "bold";
label_username.appendChild(username);


password.type = "password";
password.id = "password";
password.placeholder = "Password";
// password.style.display = "block";
password.style.margin = "1% auto";
password.style.border = "2px rgb(118, 118, 118) inset";



label_password.innerText = "Password: "
label_password.style.borderBottom = "1px solid white";
label_password.style.textAlign = "center"
label_password.style.color = "white";
label_password.style.display = "block";
label_password.style.fontWeight = "bold";
label_password.appendChild(password);



remmember_me.type = "checkbox";
remmember_me.name = "remmember_me";
remmember_me.id = "remmember_me";
remmember_me.style.border = "2px rgb(118, 118, 118) inset";
remmember_me.checked = false;


label_remmember_me.innerText = "Remmember Me";
label_remmember_me.style.color = "white";
label_remmember_me.style.fontWeight = "bold";
label_remmember_me.style.display = "block";
label_remmember_me.style.textAlign = "right";
label_remmember_me.style.padding = "10px 5% 10px 0";
label_remmember_me.style.borderBottom = "1px solid white";
label_remmember_me.appendChild(remmember_me);


button.id = "button";
button.type = "button";
button.innerText = "Confirm";
button.style.display = "block";
button.style.margin = "1% auto";


form_title.innerText = " Login ";
form_title.style.fontWeight = "bold";
form_title.style.fontSize = "20px";
form_title.style.color = "White";
form_title.style.display = "block";
form_title.style.textAlign = "center";
form_title.style.padding = "3% 0";
form_title.style.marginBottom = "2px";
form_title.style.borderBottom = "2px white inset";


form.appendChild(form_title);
form.appendChild(label_username);
form.appendChild(label_password);
form.appendChild(label_remmember_me);
form.appendChild(button);

body.appendChild(form);


button.addEventListener("click", function(){
    username.style.border = "2px rgb(118, 118, 118) inset";
    password.style.border = "2px rgb(118, 118, 118) inset";
    remmember_me.style.border = "2px rgb(118, 118, 118) inset";

    if (label_username.lastChild.nodeName == "DIV"){
        label_username.removeChild(label_username.lastChild)
    }

    if (username.value.length < 3){
        username.style.border = "3px solid red";
    }
    else if(password.value.length < 8){
        password.style.border = "3px solid red"

    }
    else if(remmember_me.checked != true){
        label_remmember_me.style.border = "3px red solid";
    }
    else{
        let username_has_another_chars = false;
        let username_value = username.value.toLowerCase()
        for (let i=0; i <= username.value.length; i++){
            if (username_value.charCodeAt(i) < 97 || username_value.charCodeAt(i) > 122){
                username_has_another_chars = true;
                username.style.border = "3px solid red";
                let text = document.createElement("div");
                text.innerText = "username should be just A-Z or a-z";
                label_username.appendChild(text);
                break;
            }
        }
        if (username_has_another_chars == false){
            form.submit()
        }
    }
})