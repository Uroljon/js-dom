let navElem = document.createElement("nav");
let ulElem = document.createElement("ul");
// home 
let home = document.createElement("li");
let homeLink = document.createElement("a");
homeLink.setAttribute("href", "#!");
// homeLink.setAttribute("href", "https://uroljon.ml");
// homeLink.setAttribute("target", "_blank");
homeLink.textContent = "Home";
// about
let about = document.createElement("li");
let aboutLink = document.createElement("a");
aboutLink.setAttribute("href", "#about");
aboutLink.textContent = "About";
// contact
let contact = document.createElement("li");
let contactLink = document.createElement("a");
contactLink.setAttribute("href", "#contact");
contactLink.textContent = "Contact";
// services
let services = document.createElement("li");
let servicesLink = document.createElement("a");
servicesLink.setAttribute("href", "#services");
servicesLink.textContent = "Services";
// blog
let blog = document.createElement("li");
let blogLink = document.createElement("a");
blogLink.setAttribute("href", "#blog");
blogLink.textContent = "Blog";
// login password
let loginElem = document.createElement("div");
let loginInput = document.createElement("input");
let loginInputHideButton = document.createElement("button")
loginInputHideButton.innerText = "👀";
loginInputHideButton.addEventListener("click", function(e){
    if(loginInput.getAttribute("type") === "password"){
        loginInput.setAttribute("type", "text");
        loginInputHideButton.innerText = "😣";
        // console.log(loginInput.getAttribute("type"), "if ishladi, password edi")
    }else{
        loginInput.setAttribute("type", "password");
        loginInputHideButton.innerText = "👀";
        // console.log(loginInput.getAttribute("type"), "else ishladi");
    }
});
loginInput.setAttribute("type", "password");
loginInput.setAttribute("placeholder", "Enter password");





// BINDINGS
home.appendChild(homeLink);
about.appendChild(aboutLink);
contact.appendChild(contactLink);
services.appendChild(servicesLink);
ulElem.appendChild(home);
ulElem.appendChild(about);
ulElem.appendChild(contact);
ulElem.appendChild(services);
ulElem.appendChild(blog);
loginElem.appendChild(loginInput);
loginElem.appendChild(loginInputHideButton);
navElem.appendChild(ulElem);
navElem.appendChild(loginElem);
document.body.appendChild(navElem);

// STYLES
// let all = document.all;
// let alli = Array.from(all);
// alli.forEach(function(el){
//     el.setAttribute("style", "margin: 0; padding: 0; box-sizing: border-box;")
// })
document.body.setAttribute("style", "margin: 0; padding: 0; ")
navElem.setAttribute("style", "background-color: #f4f4f4; display: flex; justify-content: space-between; align-items: center;");
ulElem.setAttribute("style", "display: flex; list-style: none; margin: 0; ");
document.querySelectorAll("a").forEach(function(a){
    a.setAttribute("style", "padding: 15px; text-decoration: none; color: black; display: block;");
    // hover effect
    a.addEventListener("mouseenter", function(e){
        e.target.setAttribute("style", "padding: 15px; text-decoration: none; background-color: black; color: white; display: block;")
    });
    a.addEventListener("mouseleave", function(e){
        e.target.setAttribute("style", "padding: 15px; text-decoration: none; background-color: none; color: black; display: block;")
    });
})
// class active
document.querySelectorAll("li").forEach(function (param) {
    
    param.addEventListener("click", function(e){

        document.querySelectorAll("li").forEach(function (liDeleter) {
            liDeleter.classList.remove("active");
        });         

        e.currentTarget.className = "active";
      
    });
    
 });
loginElem.style.marginRight = "40px";
loginInput.setAttribute("style", "padding: none; border: 1px solid #d3d3d3;  max-width: 110px;");
loginInputHideButton.setAttribute("style", "border: none; background: transparent;");