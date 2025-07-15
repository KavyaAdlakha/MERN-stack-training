// select the content element and buttons
const content = document.getElementById('content');
const addbutton = document.getElementById("add-class");
const removebutton = document.getElementById("remove-class");
const togglebutton = document.getElementById("toggle-class");

// add highlight class
addbutton.onclick =function() {
    content.classList.add("highlight");
}

// removwe highlight class
removebutton.onclick = function() {
    content.classList.remove("highlight");
}

// toggle highlight class
togglebutton.onclick = function() {
    content.classList.toggle("highlight");
}