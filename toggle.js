if (localStorage.getItem("theme") == "blue"){
    style_two();
}

function style_one(){
    document.getElementById('page_style').setAttribute("href", "style1.css");
    localStorage.setItem("theme", "purple");
}

function style_two(){
    document.getElementById('page_style').setAttribute("href", "style2.css");
    localStorage.setItem("theme", "blue");
}