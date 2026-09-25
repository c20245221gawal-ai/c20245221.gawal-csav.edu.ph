console.log("Hello, world!");


const myName = "John Miguel Gawal";
let age = 21;
const number = "09919210545";
const address = "Brgy Manta-angan EB MAGALONA";


console.log(`Name ${myName}`);
console.log(`Age ${age}`);
console.log(`Number ${number}`);
console.log(`Address ${address}`)  


// Query Selector
const heading = document.querySelector("h1");
console.log(heading);


const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);


const projectsHeading = document.querySelector("#projects h2");
console.log(projectsHeading);
const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);


//text Content
heading.textContent = "My Portfolio";
contactHeading.textContent = "lets connect";
projectsHeading.textContent = "My Projects";
servicesHeading.textContent = "My Services";


//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
projectsHeading.style.color = "purple";
servicesHeading.style.color = "purple";




//Event Listeners
heading.addEventListener("click", function() {
    heading.style.color = "red";
});
   
const toggleButton = document.querySelector('#switch');
const body = document.querySelector('body');
let isOff = false;


toggleButton.addEventListener("click", function() {
    isOff = !isOff;


    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});


