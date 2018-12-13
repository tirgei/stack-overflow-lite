function login() {
    window.location = "/UI/index.html"
}

function toggleDashboard(id) {
    var home = document.getElementById('home-dashboard')
    var qs = document.getElementById('questions-dashboard')

    var nav = document.getElementById(id);
    var navParent = nav.parentElement.getElementsByTagName("li");
    
    for(var i=0; i < navParent.length; i++) {
        var element = navParent[i];
        element.classList.remove("nav-item-active");
    };
    nav.classList.add("nav-item-active");

    if (id == "home-nav") {
        qs.style.display = "none";
        home.style.display = "flex";
        
    } else if (id == "qs-nav") {
        home.style.display = "none";
        qs.style.display = "flex";

    } 
}