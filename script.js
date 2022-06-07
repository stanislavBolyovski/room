//menu
const menuBtn = document.querySelector("#menuBtn");
const ul = document.querySelector("ul")
menuBtn.addEventListener("click", () => {
    if (ul.classList.contains("displayNone")) {
        ul.classList.remove("displayNone");

    } else {
        ul.classList.add("displayNone");
    }

})



// selecting left and right arrows, image, title and description
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const img = document.querySelector(".imgChange")
const title = document.querySelector("#title");
const description = document.querySelector("p");
console.log(title);

// data - section's title,description and img src
let text = [{
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        imgSrc: "https://images.unsplash.com/photo-1551909353-2804e5407fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
        title: "We are available all across the globe",
        description: "With stores all over the owrld, its easy for you to find furniture for your home or place of business.Locally, we're in most major cities throughout the country.Find the branch nearest your using our store locatior.Any questions? Dont hesitate to contact us today.",
        imgSrc: "https://images.unsplash.com/photo-1602313015649-3a732a0d7441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
    {
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible,With three decades of experience in this industry, we understand what customers whant for their home and office.",
        imgSrc: "https://images.unsplash.com/photo-1551909402-f3411b5c4248?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469"
    }
]

// click on left arrow button
leftArrow.addEventListener("click", leftArrowFunc);

function leftArrowFunc() {

    if (img.src == text[0].imgSrc) {
        img.src = text[2].imgSrc
        title.innerText = text[2].title
        description.innerText = text[2].description

    } else if (img.src == text[1].imgSrc) {
        img.src = text[0].imgSrc
        title.innerText = text[0].title
        description.innerText = text[0].description
    } else {
        img.src = text[1].imgSrc
        title.innerText = text[1].title
        description.innerText = text[1].description
    }

}

// click on right arrow button
rightArrow.addEventListener("click", rightArrowFunc);

// switching sections function
function rightArrowFunc() {

    if (img.src == text[0].imgSrc) {
        img.src = text[1].imgSrc
        title.innerText = text[1].title
        description.innerText = text[1].description
    } else if (img.src == text[1].imgSrc) {
        img.src = text[2].imgSrc
        title.innerText = text[2].title
        description.innerText = text[2].description
    } else {
        img.src = text[0].imgSrc
        title.innerText = text[0].title
        description.innerText = text[0].description
    }

}

// click left/"A" or right/"D" arrow on keyboard - switching sections
window.addEventListener("keydown", function(e) {
    console.log(e.code);
    if (e.code == 'ArrowRight' || e.code == "KeyD") {
        rightArrowFunc();
    } else if (e.code == 'ArrowLeft' || e.code == "KeyA") {
        leftArrowFunc();
    }
})