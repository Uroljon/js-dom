//Accordeon component 

let accordionTogglers = document.querySelectorAll(".accordion-item-toggler");
accordionTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
        let accordionBody = e.target.nextElementSibling;
        // accordionBody.classList.toggle("collapse"); // css bilan (js inline style) uncha chiqishmas ekan
        if (accordionBody.style.maxHeight) {//yopdi
            accordionBody.style.maxHeight = null;
            e.target.firstElementChild.className = "fa fa-folder-o";
        } else {//ochdi
            accordionTogglers.forEach(function (othertogglers) { //qolganlarini yopdi va targetni ochdi
                othertogglers.nextElementSibling.style.maxHeight = null;
                othertogglers.firstElementChild.className = "fa fa-folder-o";
            })
            accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`; //height is set according to its content's height
            e.target.firstElementChild.className = "fa fa-folder-open-o";
        }
    })

});

let componentTriggers = document.querySelectorAll(".component-trigger");
// for(let i=0; i<componentTriggers.length; i++){
//     componentTriggers[i].addEventListener("click", (e)=>{
//         console.log("ha :)")
//     })
// }
componentTriggers.forEach(function(li){
    // console.log(li)
    li.addEventListener("click", (e)=>{
        console.log(li.dataset.target)
    })
})

