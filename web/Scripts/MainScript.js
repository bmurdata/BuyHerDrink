document.querySelector(".MainMenu").style.display = "none";

var SetWindowTitle = function(title){
    document.querySelector(".PageTitle").innerText = title;
};

function ToggleMenuDisplay() {
    document.querySelector( "#nav-toggle" ).classList.toggle( "active" );
    var MenuDisplay = document.querySelector(".MainMenu").style.display;
    
    if(MenuDisplay === "none"){
        
        $(".MainMenu").show("slide", { direction: "left" }, 100);
        
        /*$("#secondMenuIconBar").fadeOut("fast");
        
        $("#firstMenuIconBar").css({'transition' : '0.5s'});
        document.getElementById("firstMenuIconBar").style.cssText += 'top: 10px;';
        $("#firstMenuIconBar").css({'transform' : 'translateY(12px)'});
        $("#firstMenuIconBar").css({'transform' : 'rotate('+ 45 +'deg)'}, 100);
        
        $("#thirdMenuIconBar").css({'transition' : '0.5s'});
        document.getElementById("thirdMenuIconBar").style.cssText += 'top: 10px;';
        $("#thirdMenuIconBar").css({'transform' : 'translateY(-12px)'});
        $("#thirdMenuIconBar").css({'transform' : 'rotate('+ -45 +'deg)'}, 100);*/
        
        //$(".MainMenu").fadeIn("fast");
    }else{
        $(".MainMenu").hide("slide", { direction: "left" }, 100);
        
        /*$("#secondMenuIconBar").fadeIn("fast");
        $("#firstMenuIconBar").css({'transition' : '0.5s'});
        $("#firstMenuIconBar").css({'transform' : 'rotate('+ 0 +'deg)'}, 100);
        $("#thirdMenuIconBar").css({'transition' : '0.5s'});
        $("#thirdMenuIconBar").css({'transform' : 'rotate('+ 0 +'deg)'}, 100);*/
        
        //$(".MainMenu").fadeOut("fast");
    }
}

$(".MenuIcon").click(function(event){
    
    ToggleMenuDisplay();
    
});


var showUserProfile = function(){
    
   let UserProfileIframe = document.getElementById("UserProfileIframe");
   let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
   let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
   let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
   let fullProfileDiv = document.getElementById("viewFullProfileDiv");
   let settingsDiv = document.getElementById("settingsDiv");
   
   ToggleMenuDisplay();
   SetWindowTitle("Your Profile");
   
   UserProfileIframe.style.display = "block";
   DrinkRequestsIframe.style.display = "none";
   DrinkOffersIframe.style.display = "none";
   ExploreRestaurantsDiv.style.display = "none";
   fullProfileDiv.style.display = "none";
   settingsDiv.style.display = "none";
   
};

var showDrinkOffers = function(){
    
   let UserProfileIframe = document.getElementById("UserProfileIframe");
   let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
   let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
   let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
   let fullProfileDiv = document.getElementById("viewFullProfileDiv");
   let settingsDiv = document.getElementById("settingsDiv");
   
   ToggleMenuDisplay();
   SetWindowTitle("Drink Offers");
   
   UserProfileIframe.style.display = "none";
   DrinkRequestsIframe.style.display = "none";
   DrinkOffersIframe.style.display = "block";
   ExploreRestaurantsDiv.style.display = "none";
   fullProfileDiv.style.display = "none";
   settingsDiv.style.display = "none";
   
};

var showDrinkOffersNotMenu = () => {
    
   let UserProfileIframe = document.getElementById("UserProfileIframe");
   let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
   let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
   let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
   let fullProfileDiv = document.getElementById("viewFullProfileDiv");
   let settingsDiv = document.getElementById("settingsDiv");
   
   SetWindowTitle("Drink Offers");
   
   UserProfileIframe.style.display = "none";
   DrinkRequestsIframe.style.display = "none";
   DrinkOffersIframe.style.display = "block";
   ExploreRestaurantsDiv.style.display = "none";
   fullProfileDiv.style.display = "none";
   settingsDiv.style.display = "none";
    
};

var showDrinkRequests = function(){
    
   let UserProfileIframe = document.getElementById("UserProfileIframe");
   let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
   let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
   let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
   let fullProfileDiv = document.getElementById("viewFullProfileDiv");
   let settingsDiv = document.getElementById("settingsDiv");
   
   ToggleMenuDisplay();
   SetWindowTitle("Drink Requests");
   
   DrinkRequestsIframe.style.display = "block";
   UserProfileIframe.style.display = "none";
   DrinkOffersIframe.style.display = "none";
   ExploreRestaurantsDiv.style.display = "none";
   fullProfileDiv.style.display = "none";
   settingsDiv.style.display = "none";
   
};

var showExploreRestaurantsDiv = () => {
   let UserProfileIframe = document.getElementById("UserProfileIframe");
   let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
   let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
   let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
   let fullProfileDiv = document.getElementById("viewFullProfileDiv");
   let settingsDiv = document.getElementById("settingsDiv");
   
   ToggleMenuDisplay();
   SetWindowTitle("Search Restaurants");
   
   ExploreRestaurantsDiv.style.display = "block";
   DrinkRequestsIframe.style.display = "none";
   UserProfileIframe.style.display = "none";
   DrinkOffersIframe.style.display = "none";
   fullProfileDiv.style.display = "none";
   settingsDiv.style.display = "none";
};

var showFullProfileDiv = () => {
    let UserProfileIframe = document.getElementById("UserProfileIframe");
    let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
    let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
    let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
    let fullProfileDiv = document.getElementById("viewFullProfileDiv");
    let settingsDiv = document.getElementById("settingsDiv");
    
    SetWindowTitle("Profile Details");
    
    fullProfileDiv.style.display = "block";
    UserProfileIframe.style.display = "none";
    DrinkRequestsIframe.style.display = "none";
    DrinkOffersIframe.style.display = "none";
    ExploreRestaurantsDiv.style.display = "none";
    settingsDiv.style.display = "none";
};

var showSettingsDiv = () => {
    let UserProfileIframe = document.getElementById("UserProfileIframe");
    let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
    let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
    let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
    let fullProfileDiv = document.getElementById("viewFullProfileDiv");
    let settingsDiv = document.getElementById("settingsDiv");
    
    ToggleMenuDisplay();
    SetWindowTitle("Settings");
    
    settingsDiv.style.display = "block";
    UserProfileIframe.style.display = "none";
    DrinkRequestsIframe.style.display = "none";
    DrinkOffersIframe.style.display = "none";
    ExploreRestaurantsDiv.style.display = "none";
    fullProfileDiv.style.display = "none";
};

$("#SettingsMenuOption").click(function(event){
    showSettingsDiv();
});

$("#editUserProfileIcon").click(function(){
    let UserProfileIframe = document.getElementById("UserProfileIframe");
    let DrinkRequestsIframe = document.getElementById("DrinkRequestsIframe");
    let DrinkOffersIframe = document.getElementById("DrinkOffersIframe");
    let ExploreRestaurantsDiv = document.getElementById("ExploreRestaurantsDiv");
    let fullProfileDiv = document.getElementById("viewFullProfileDiv");
    let settingsDiv = document.getElementById("settingsDiv");
    
    SetWindowTitle("Settings");
    
    settingsDiv.style.display = "block";
    UserProfileIframe.style.display = "none";
    DrinkRequestsIframe.style.display = "none";
    DrinkOffersIframe.style.display = "none";
    ExploreRestaurantsDiv.style.display = "none";
    fullProfileDiv.style.display = "none";
});

var showNotifications = () => {
    let notificationsDiv = document.getElementById("notificationsDiv");
    notificationsDiv.style.display = "block";
    console.log("notifications");
    
};

$("#notificationsIcon").click(function (event){
    showNotifications();
});

$(".viewFullProfileBtn").click(function(event){
    showFullProfileDiv();
});

$("#UserProfileMenuOption").click(function(event){
    
    showUserProfile();
    
});

$("#DrinkRequestMenuOption").click(function(event){
    showDrinkRequests();
});

$("#DrinkOffersMenuOption").click(function(event){
    showDrinkOffers();
});


$("#viewDrinkOffersBtn").click(function(event){
    showDrinkOffersNotMenu();
});

$("#MenuOptionSearch").click(function(event){
    showExploreRestaurantsDiv();
});

function ProcessImageForBase64String(Path){
  
    //alert("result");
  
    $.ajax({
        url: "GetBase64StringControl",
        data: "ImgPath=" + Path,
        type: "GET",
        success: function(result){
            //alert(result);
        }
    });
      
}

ProcessImageForBase64String("http://localhost/ByHerDrinkUI/Pictures/TestPhotos/1.jpg");

$(document).ready(function(){
    $("").click(function(event){
        $.ajax({
            
        });
    });
});
