// We have a <div> with id #color_box for showing the generated color to user
// we have a <div> with id #color_code with default value "rgb(0, 0, 0)" for showing color code 
// and a button #button


// generate a random color with js!
let button = document.getElementById("button");
button.addEventListener("click", button_function);

function button_function() {
    let color_box = document.getElementById("color_box");
    let color_code_box = document.getElementById("color_code");
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    color_box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    color_code_box.innerText = `rgb(${red}, ${blue}, ${green})`;
}
