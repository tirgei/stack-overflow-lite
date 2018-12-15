function toggleDashboard(id) {
    var home = document.getElementById('home-dashboard');
    var qs = document.getElementById('questions-dashboard');

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

function showAskQuestionDialog() { 
    var modal = document.getElementById("modal");
    var cancel = document.getElementById("dialog-cancel")

    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    cancel.onclick = function() {
        modal.style.display = "none";
    }

}

function showAnswers() {
    window.location = "question.html";
}