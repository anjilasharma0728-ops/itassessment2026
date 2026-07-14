/*IMAGE SLIDER*/

//IMAGES USED IN THE SLIDER

var images = [
    "images/banner.jpg",
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

var index = 0;

//FUNCTION TO CHANGE IMAGE

function changeImage()
{

    index++;

    if(index == images.length)
    {
        index = 0;
    }

    document.getElementById("sliderImage").src = images[index];
}

//CHANGE EVERY 3 SECONDS

setInterval(changeImage,3000);

/*WELCOME MESSAGE*/

window.onload = function()
{
    alert("Welcome to Anzilaa Book Cafe Hub!\nEnjoy reading your favourite story.");
}

/*CONTACT FORM VALIDATION*/

function validateForm()
{

var name=document.forms["contactForm"]["fullname"].value;

var email=document.forms["contactForm"]["email"].value;

var phone=document.forms["contactForm"]["phone"].value;

var genre=document.forms["contactForm"]["genre"].value;

var message=document.forms["contactForm"]["message"].value;

if(name=="")
{
   alert("Please enter your full name.");
   return false;
}

if(email=="")
{
   alert("Please enter your email.");
   return false;
}

if(phone=="")
{
   alert("Please enter your phone number.");
   return false;
}

if(genre=="")
{
   alert("Please choose your favourite genre.");
   return false;
}

if(message=="")
{
   alert("Please enter your message.");
   return false;
}

   alert("Thank you! Your message has been sent.");

return true;

}