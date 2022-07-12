// Create Elements And Nodes
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


// form section
form.id = "form";
form.method = "post";
form.style.width = "40%";
form.style.backgroundColor = "rgba(0, 0, 0, .5)";

// Input Username Section
username.type = "Text";
username.id = "username";
username.placeholder = "Username";
username.style.border = "1px solid #ccf";
username.style.borderRadius = "10px";
username.style.padding = "3% 6%";
username.style.backgroundColor = "rgba(0, 0, 0, .5)";
username.style.color = "#fff";

// Label Username Section
label_username.innerText = "Username: "
label_username.style.width = "90%";
label_username.style.margin = "2% auto";
label_username.style.textAlign = "center";
label_username.style.color = "white";
label_username.style.display = "flex";
label_username.style.alignItems = "center";
label_username.style.justifyContent = "space-between";
label_username.style.fontWeight = "bold";
label_username.appendChild(username);

// Input Password Section
password.type = "password";
password.id = "password";
password.placeholder = "Password";
password.style.border = "1px solid #ccf";
password.style.borderRadius = "10px";
password.style.padding = "3% 6%";
password.style.backgroundColor = "rgba(0, 0, 0, .5)";
password.style.color = "#fff";


// Label Password Section
label_password.innerText = "Password: "
label_password.style.width = "90%";
label_password.style.margin = "2% auto";
label_password.style.textAlign = "center"
label_password.style.color = "white";
label_password.style.display = "block";
label_password.style.fontWeight = "bold";
label_password.style.display = "flex";
label_password.style.alignItems = "center";
label_password.style.justifyContent = "space-between";
label_password.appendChild(password);


// Remember Me CheckBox section
remmember_me.type = "checkbox";
remmember_me.name = "remmember_me";
remmember_me.id = "remmember_me";
remmember_me.style.backgroundColor = "rgba(0, 0, 0, .5)";
remmember_me.style.background = "rgba(0, 0, 0, .5)";
remmember_me.style.border = "none";
remmember_me.checked = false;

// Remember Me label section
label_remmember_me.innerText = "Remmember Me";
label_remmember_me.style.color = "white";
label_remmember_me.style.fontWeight = "bold";
label_remmember_me.style.display = "block";
label_remmember_me.style.textAlign = "right";
label_remmember_me.style.padding = "10px 5% 10px 0";
label_remmember_me.appendChild(remmember_me);

// Submit Form Button section
button.id = "button";
button.type = "button";
button.innerText = "Confirm";
button.style.display = "block";
button.style.margin = "1% auto";
button.style.padding = "3% 5%";
button.style.borderRadius = "10px";
button.style.color = "#fff";
button.style.fontWeight = "Bold";
button.style.cursor = "pointer";
button.style.backgroundColor = "rgba(0, 0, 0, .3)";

// Form Header section
form_title.innerText = " Login ";
form_title.style.fontWeight = "bold";
form_title.style.fontSize = "20px";
form_title.style.color = "White";
form_title.style.display = "block";
form_title.style.textAlign = "center";
form_title.style.padding = "3% 0";
form_title.style.marginBottom = "2px";
form_title.style.borderBottom = "2px white inset";

// Appending Nodes into Form Node
form.appendChild(form_title);
form.appendChild(label_username);
form.appendChild(label_password);
form.appendChild(label_remmember_me);
form.appendChild(button);

// Append Form Node into Body
body.appendChild(form);

// handle Form And Validate Form
button.addEventListener("click", function () {
    username.style.border = "2px rgb(118, 118, 118) inset";
    password.style.border = "2px rgb(118, 118, 118) inset";
    remmember_me.style.border = "2px rgb(118, 118, 118) inset";

    if (label_username.lastChild.nodeName == "DIV") {
        label_username.removeChild(label_username.lastChild)
    }

    if (username.value.length < 3) {
        username.style.border = "3px solid red";
        alert("username should be more than 3 character!");
    }
    else if (password.value.length < 8) {
        password.style.border = "3px solid red";
        alert("password should be more than 7 character!");
    }
    else if (remmember_me.checked != true) {
        label_remmember_me.style.border = "3px red solid";
        alert("remember me button should be confirm!");
    }
    else {
        let username_has_another_chars = false;
        let username_value = username.value.toLowerCase()
        for (let i = 0; i <= username.value.length; i++) {
            if (username_value.charCodeAt(i) < 97 || username_value.charCodeAt(i) > 122) {
                username_has_another_chars = true;
                username.style.border = "3px solid red";
                let text = document.createElement("div");
                text.innerText = "username should be just A-Z or a-z";
                label_username.appendChild(text);
                break;
            }
        }
        if (username_has_another_chars == false) {
            form.submit()
        }
    }
})
