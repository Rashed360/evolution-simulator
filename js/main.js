let openNav = document.getElementById("openNav");
let main_dashboard = document.getElementById("main_dashboard");
let sideNav = document.getElementById("side_menue");
clickCount=1

// For open and close side div 
openNav.addEventListener("click", function () {
    if(clickCount == 1){
        sideNav.style.width = "30%";
        main_dashboard.style.marginRight = "30%";
        // sideNav.style.display = "block";
        clickCount=0
    }
    else{
        clickCount=1
        sideNav.style.width = "0";
        main_dashboard.style.marginRight = "0";
        // sideNav.style.display = "none";
    }
});

