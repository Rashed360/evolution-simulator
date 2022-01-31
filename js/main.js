let openNav = document.getElementById("openNav");
let main_dashboard = document.getElementById("main_dashboard");
let side_menue = document.getElementById("side_menue");
clickCount=1

// For open and close side div 
openNav.addEventListener("click", function () {
    if(clickCount == 1){
        side_menue.style.width = "30%";
        main_dashboard.style.marginRight = "30%";
        side_menue.style.visibility = "visible";
        clickCount=0
    }
    else{
        clickCount=1
        side_menue.style.width = "0";
        main_dashboard.style.marginRight = "0";
        side_menue.style.visibility = "hidden";
    }
});

