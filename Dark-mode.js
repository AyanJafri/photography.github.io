
let darkBtn = document.getElementById('dark-btn');
const freelancer_logo = document.querySelectorAll('.freelancer-logo'); // get all elements

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
        for(let i = 0; i < freelancer_logo.length; i++){
            freelancer_logo[i].setAttribute("fill", "#dbdbdb")
        }
        
    }

    else {
        localStorage.setItem("theme", "light");
        for(let i = 0; i < freelancer_logo.length; i++){
            freelancer_logo[i].setAttribute("fill", "#161F2B")
        }
    }

}


if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    for(let i = 0; i < freelancer_logo.length; i++){
        freelancer_logo[i].setAttribute("fill", "#161F2B")
    }
}


else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    for(let i = 0; i < freelancer_logo.length; i++){
        freelancer_logo[i].setAttribute("fill", "#dbdbdb")
    }
}


else {
    localStorage.setItem("theme", "light");
    for(let i = 0; i < freelancer_logo.length; i++){
        freelancer_logo[i].setAttribute("fill", "#161F2B")
    }
}