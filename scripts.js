/* OBJECTIVE 1

addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    addEventListener("click", click);
    function click() {
        alert("Its a good day.")
    }
}
*/

/* OBJECTIVE 2
let button = document.getElementById("button");
button.addEventListener("click", click);
function click() {
    let message = document.getElementById("text-box").value;
    alert(message);
}
*/

/* OBJECTIVE 3
let div = document.getElementById("div");
div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "green";
})

div.addEventListener("mouseout", function () {
    div.style.backgroundColor = "red";
})
*/

/* OBJECTIVE 4
let p = document.getElementById("p");
p.addEventListener("click", function () {
    let allchar = "0123456789ABCDEF";
    let randcol = "";

    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }

    p.style.color = "#" + randcol;
})
*/

/* OBGECTIVE 5
let button = document.getElementById("button");
let div = document.getElementById("div");
button.addEventListener("click", function () {
    let span = document.creatElement("span");
    div.appendChild(span);
    let text = document.createTextNode("Rose");
    span.appendChild(text);
})
*/


let friends = ["Biki", "Mizu", "Tsion", "Semru", "Agugu", "Selam", "Geni", "Azeb", "Hiwi", "Chuni"];
let button = document.getElementById("button");
let ul = document.getElementById("ul");
button.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li")
        let name = document.createTextNode(friends[i]);
        li.appendChild(name);
        ul.appendChild(li);
    }

});