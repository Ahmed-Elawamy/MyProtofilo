
// Pop Up

let btn = document.querySelector("#btnn");
console.log(btn)
btn.addEventListener("click", function () {

    // Create Overlay Element
    let overlay = document.createElement("div")
    // Add Class
    overlay.className = 'popup-overlay';
    // Append overlay to the body
    document.body.appendChild(overlay)

    // Create Popup
    let popupBox = document.createElement("div")

    // Add Class
    popupBox.className = 'popup-box';

    // Create Img & link
    let popupimg = document.createElement("img");
    let link = document.createElement("a")
    let popupimgTwo = document.createElement("img");
    let link2 = document.createElement("a")
    let popupimgThree = document.createElement("img");
    let link3 = document.createElement("a")

    link.className = "btn btn-primary";
    link2.className = "btn btn-primary";
    link3.className = "btn btn-primary";

    link.target = "_blank"
    link2.target = "_blank"
    link3.target = "_blank"

    // Set image Src


    popupimg.src = "imgs/king.png";
    link.href = "https://king-template.netlify.app/";
    link.innerText = "Preview";


    popupimgTwo.src = "imgs/template-three.png";
    link2.href = "https://elawamy.netlify.app/";
    link2.innerText = "Preview";


    popupimgThree.src = "imgs/pro.png";
    link3.href = "https://portfolio-elawamy.netlify.app/";
    link3.innerText = "Preview";


    // Add img to popup box
    popupBox.appendChild(popupimg);
    popupBox.appendChild(link);
    popupBox.appendChild(popupimgTwo);
    popupBox.appendChild(link2);
    popupBox.appendChild(popupimgThree);
    popupBox.appendChild(link3);
    // Append popupbox to body
    document.body.appendChild(popupBox);

    // Create Close Span
    let closeBtn = document.createElement("span");

    // create The close btn text
    let closeBtnTxt = document.createTextNode("X");

    // Append
    closeBtn.appendChild(closeBtnTxt);

    // Add class
    closeBtn.className = 'close-btn';

    // Add Close btn to popup box
    popupBox.appendChild(closeBtn)

})

// Close popup
document.addEventListener("click", function (e) {
    if (e.target.className === 'close-btn') {

        // Remove The current popup
        e.target.parentNode.remove()

        // Remove OverLay
        document.querySelector(".popup-overlay").remove()

    }
})

// ==================== Slider ====================



// Get Slider Items | Array.from [ES 6 Features]

let sliderImags = Array.from(
    document.querySelectorAll(".slider-container img")
);

// Get nums of slides

let slidesCount = sliderImags.length;

// Set Current Slide

let currentSlide = 1;

// Slide Number element

let slideNumElement = document.getElementById("slide-number");

// Prev & next

let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");


// Handle click on prev and next btn

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;


// Create Main ul element

let pagElement = document.createElement("ul");
pagElement.setAttribute('id', 'pag-ul');

// create list item rased on slides count

for (let i = 1; i <= slidesCount; i++ ) {

    // create the li
    let pagItem = document.createElement("li");
    pagItem.setAttribute("data-index", i);

    // Set itiem cont
    pagItem.appendChild(document.createTextNode(i));

    pagElement.appendChild(pagItem);
}

// Add the created ul element to the page
document.getElementById("indicators").appendChild(pagElement)

// Get The New created ul

let pagCreatedUl = document.getElementById("pag-ul");


// Get pag items
let pagBullets = Array.from(document.querySelectorAll("#pag-ul li"));

// Loop all bullets item

for (let i = 0; i < pagBullets.length; i++) {
    pagBullets[i].onclick = function () {

    currentSlide = Number(this.getAttribute("data-index"));

        theChecker();

    }
}


theChecker();

// Create checker func

function theChecker () {
    // slideNumElement.textContent =
    //     "Slide # " + currentSlide + " Of " + slidesCount;

    // slideNumElement.textContent =
    //     "Slide # " + currentSlide + " Of " + slidesCount;

    if (currentSlide == 1) {
        slideNumElement.textContent = "HTML5";
    }
    else if (currentSlide == 2) {
      slideNumElement.textContent = "CSS3";
    } else if (currentSlide == 3) {
      slideNumElement.textContent = "JavsScript";
    } else if (currentSlide == 4) {
      slideNumElement.textContent = "TypeScript";
    } else if (currentSlide == 5) {
      slideNumElement.textContent = "Bootstrap";
    } else if (currentSlide == 6) {
      slideNumElement.textContent = "React";
    }
    
    removeAllActive();
    
    // set active class on current
    
    sliderImags[currentSlide - 1].classList.add("active");

  // set acive on curren t pag item
    pagCreatedUl.children[currentSlide - 1].classList.add("active");

    
    // chech first current

    if (currentSlide == 1) {
        // Add disables prev
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled')
    }

    // chech first last

    if (currentSlide == slidesCount) {

        // Add disables next
        next.classList.add('disabled')
    } else {
        next.classList.remove('disabled')
        
    }

}


// Remove all active

function removeAllActive() {

    sliderImags.forEach(function (img) {
        img.classList.remove('active')
    })

    // loop bullets
    pagBullets.forEach(function (bullet) {
        bullet.classList.remove('active')
    })


}


//  Next slide Function

function nextSlide() {

    if (nextBtn.classList.contains('disabled')) {
        return false;

    } else {
        currentSlide++;
        theChecker();
    }
}
//  Previous slide Function

    function prevSlide() {

        if (prevBtn.classList.contains('disabled')) {
            return false;
        } else {
            currentSlide--;
            theChecker();
        }
    }
