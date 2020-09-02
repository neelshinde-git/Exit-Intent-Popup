// *************** HTML element creation **************************
// Please rerun the code in console to test for mobile devices. 
// Testing screenshots in the document provided


var popupHTML = '<div class="exit-intent" style="position:fixed; top:0; left:0; right:0; bottom:0; background: rgba(33, 33, 33, 0.8); transform: scale(0)">'+
            '<div class="banner" style="display: flex; flex-direction: row; position: absolute; top: 50%; transform: translateY(-50%); width: 50%; left: 0; right:0; margin: auto; background-color:rgb(255,226,6);  padding: 5%;">'+
                '<form name="offerForm" style="display: inline-block; width: 53%; text-align: center; box-sizing: border-box;" onsubmit="return onSubmit(event)" action="">'+
                    '<p style=" margin-bottom:10px; font-size: 1.1rem;"><b>GET 10$ OFF WHEN YOU SIGN UP FOR</b></p>'+
                    '<p style="font-size: 1.1rem;">SAVINGS,NEWS,UPDATES AND MORE</p>'+
                    
                    '<input type="text" name="name" placeholder="your name" maxlength="30" style="display: block; width:100%; height: 50px; box-sizing: border-box; border-radius: 2px;">'+
                    
                    '<input type="text" name="email" placeholder="email address" maxlength="30" style="display: block; margin-top:10px; margin-bottom:10px; width:100%;  height: 50px; box-sizing: border-box; border-radius: 2px;" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>'+
                    
                    '<label style="display: flex; font-size: 0.9rem;"><input type="checkbox" name="name" placeholder="your name" style="display: block;  margin: 0; margin-right: 3px; border-radius: 2px;" required>Check this box to receive monthly newsletter</label>'+
                    
                    '<button type="submit" style="display: block ;margin-top:10px; margin-bottom:7px;  height: 50px; width: 100%; box-sizing: border-box; border-radius: 2px; background-color: black; color: white; cursor:pointer">SIGN UP</button>'+
                    
                    '<a href="#" style="font-size: 0.7rem;">PRIVACY POLICY</a>'+
                    
                '</form>'+
                '<div class="imageblock" style="display: inline-block; width: 47%; height: 100%;box-sizing: border-box; margin: auto;">'+
                    '<img class="banner" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZvZ_5GgQXt5MZVKsRv1W5QHaGn%26pid%3DApi&f=1" style="display: block; width: 80%; float: right;">'+
                '</div>'+
                '<button class="exit" style="position:absolute; top:0; right: 0; font-size: 2rem; background-color: rgb(255,226,6); border: 0; cursor: pointer;" onclick="exitPopup()">&#10005;</button>'+ 
            '</div>'+
        '</div>';


var container = document.createElement("div");
document.body.appendChild(container);
container.innerHTML = popupHTML;


// *************** Functioning of Popup **************************



var element = document.querySelector(".exit-intent"); //entire popup element
var image = document.querySelector(".imageblock"); // get image to hide  for mibile devices
var form = document.forms["offerForm"]; // get form element for styling
var yellowBanner = document.querySelector(".banner");

//function to get Cookie from key name
function getCookie(name){
    var cookieList=document.cookie.split(";");
    for(let cookie of cookieList){
        if(cookie.includes(name)) return cookie;
    }
    return "";
    
}

//Checks if device is mobile or desktop/laptop and style accordingly
if(window.screen.width>850){
   document.addEventListener('mouseout', e => {
       var displayPopup = getCookie("isDone");        
        if (!e.toElement && !e.relatedTarget) {
            if((displayPopup.split("=")[1] !== "closed") && (displayPopup.split("=")[1] !== "submitted")){
                element.style.transform = 'scale(1)'; 
            }   
        }
   });  
} else {
    var displayPopup = getCookie("isDone");
    if((displayPopup.split("=")[1] !== "closed") && (displayPopup.split("=")[1] !== "submitted")){
        setTimeout(()=>element.style.transform = 'scale(1)', 5000);
        image.style.display="none";
        form.style.width="100%";
        yellowBanner.style.padding="20px 3% 3% 3%";
        yellowBanner.style.width="90%";
        document.querySelector(".exit").style.fontSize = "1.3rem";
        var p = form.getElementsByTagName("p")
        for(let i=0;i<p.length;i++){
            p[i].style.fontSize="0.9rem";
        }
    }  
}

//Upon form submit
function onSubmit(event){
    event.preventDefault();
    console.log("Form submitted");
    document.cookie = "isDone=submitted";
    element.style.transform = 'scale(0)';
}

//after close button is clicked
function exitPopup(){
    element.style.transform = 'scale(0)';
    document.cookie = "isDone=closed";
}


//Media query for desktop screen resizing
var media = window.matchMedia("(max-width: 850px)")
function mobileDevice(e){
    
    if(e.matches){
        console.log("Responsive")
        image.style.display="none";
        form.style.width="100%";
    } else {
        image.style.display="inline-block";
        form.style.width="53%";
    }
    
}

media.addListener(mobileDevice);