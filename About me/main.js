// DROPDOWN Q & A
// 1. Select all question elements using querySelectorAll()
//const questions = document.querySelectorAll(".question");

// 2. Select all answer elements using querySelectorAll()
//const answers = document.querySelectorAll(".answer");

// 3. Loop through each question using forEach()
//questions.forEach(question => {

  // 4. Add a click event listener to each question
//  question.addEventListener("click", function() {

    // 5. Get the data-answer attribute from the clicked question
//    const answerId = this.dataset.answer;

    // 6. Select the answer element with the matching id
//    const answerToShow = document.getElementById(answerId);

    // 7. Check if the answerToShow element exists
//    if (answerToShow) {
      
      // 8. Toggle the visibility of the answer (if it's visible, hide it; if it's hidden, show it)
/*      answerToShow.style.display
      if (answerToShow.style.display === "block") {*/
        // Your code here (hide the answer)
/*        answerToShow.style.display = "none";
      } else {*/
        // Your code here (show the answer)
/*        answerToShow.style.display = "block";
      }
    }
  });
});*/

// 9. Initially hide all answer elements
//answers.forEach(answer => {
//   Your code here (hide each answer)
/*  answer.style.display = "none";
});*/

//DROPDOWN: subcategories content
//to do running, baking, reading, art, tribute page, form content
/*const subcategory = document.querySelectorAll(".a");

const subcategoryItemsContainer = document.querySelectorAll(".b");

subcategory.forEach(subcategory => {

  subcategory.addEventListener("click", function() {

    const subcatId = this.dataset.subcat_item;

    const subcatToShow = document.getElementById(subcatId);

    if (subcatToShow) {
      subcatToShow.style.display
      if (subcatToShow.style.display === "block") {
        subcatToShow.style.display = "none";
      } else {
        subcatToShow.style.display = "block";
      }
    }
  });
});

subcategoryItemsContainer.forEach(subcategoryItemsContainer => {
  subcategoryItemsContainer.style.display = "none";
});*/


//DROPDOWN SUBCATEGORIES: Hobby, project, about me subcat content
/*const category = document.querySelectorAll(".c");

const subcategories = document.querySelectorAll(".d");

category.forEach(category => {

  category.addEventListener("click", function() {

    const subcategoriesId = this.dataset.subcat;

    const subcategoriesToShow = document.getElementById(subcategoriesId);

    if (subcategoriesToShow) {
      
      subcategoriesToShow.style.display
      if (subcategoriesToShow.style.display === "block") {
        subcategoriesToShow.style.display = "none";
      } else {
        subcategoriesToShow.style.display = "block";
      }
    }
  });
});

subcategories.forEach(subcategories => {
  subcategories.style.display = "none";
});*/


// DROPDOWN: Q & A subsections - learning & growth, goals & aspirations, motivation & inspiration, background & history, and content questions menu underneath
/*const subcat = document.querySelectorAll(".e");

const faq = document.querySelectorAll(".f");

subcat.forEach(subcat => {

  subcat.addEventListener("click", function() {

    const faqId = this.dataset.questions;

    const faqToShow = document.getElementById(faqId);

    if (faqToShow) {
      
      faqToShow.style.display
      if (faqToShow.style.display === "block") {
        faqToShow.style.display = "none";
      } else {
        faqToShow.style.display = "block";
      }
    }
  });
});

faq.forEach(faq => {
  faq.style.display = "none";
});*/

/* DROPDOWN FUNCTION 
C about me, hobbies, projects = category c, data-subcat1-3

D^subcategories d, id=subcat = contains all subcategories: form, tribute, art, run, bake, read

qs in about me = class=question, daya-answer-0-9

^answers in about me = id=answer-0-9

Esubsection in aboutme background and hist, motivation and interest, learning and growth,  goals and aspirations = subcategory e, data-questions-1-10

F^ all about me qs = subcategory-items-container f, id=questions-1-10

A dynamic form, tribute page, reading, baking, running, painting & drawing = subcategory a, data-subcat_item-1-6

B^contents of subcategories = subcategory-items-container b, id=subcat_item-1-6

*/
function toggleDropdown(dataValue) {
  // 1. Identify the target dropdown element based on the data-value.
  const dropdown = document.querySelector(`[data-dropdown="${dataValue}"]`);

  // 2. Identify the corresponding button or trigger element (if you have one).
  const trigger = document.querySelector(`[data-toggle="${dataValue}"]`); // Assuming a data-toggle attribute

  if (dropdown && trigger) {
    // 3. Toggle the 'active' class (or a similar class that controls visibility).
    dropdown.classList.toggle('active');
    trigger.classList.toggle('active'); // Optionally toggle the button state as well

    // 4. (Optional) Handle ARIA attributes for accessibility.
    const isExpanded = dropdown.classList.contains('active');
    trigger.setAttribute('aria-expanded', isExpanded);
    dropdown.setAttribute('aria-hidden', !isExpanded);
  } else {
    console.error(`Dropdown or trigger with data-value "${dataValue}" not found.`);
  }
}

// How to use function with same data-values:

  const triggers = document.querySelectorAll('.dropdown-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() { // Keep 'click' event
      const targetDataValue = this.getAttribute('data-toggle');
      toggleDropdown(targetDataValue);
    });
  });


// How to use this function with different data-values:

// For a button with data-toggle="tier1" and a dropdown with data-dropdown="tier1"
//const tier1Button = document.querySelector('[data-toggle="tier1"]');
//if (tier1Button) {
//  tier1Button.addEventListener('click', () => toggleDropdown('tier1'));
//}

// For a button with data-toggle="tier2" and a dropdown with data-dropdown="tier2"
//const tier2Button = document.querySelector('[data-toggle="tier2"]');
//if (tier2Button) {
//  tier2Button.addEventListener('click', () => toggleDropdown('tier2'));
//}

// ... and so on for other tiers



/* WHISP SPEECH
const whispInput = document.getElementById("whisp-input");
const whispResponseArea = document.getElementById("whisp-response-area");
const whispResponses = document.querySelectorAll(".whisp-response");

whispInput.addEventListener("change", function() {
  const responseId = this.options[this.selectedIndex].dataset.whispResponse;

  whispResponses.forEach(response => {
    response.style.display = "none";
  });

  if (responseId) {
    const responseToShow = document.getElementById(responseId);
    responseToShow.style.display = "block";
    whispResponseArea.textContent = responseToShow.textContent;
  } else {
    whispResponseArea.textContent = "";
  }
});*/

/* TOGGLE COLOR EXAMPLE
const h1 = document.querySelector("h1");

function toggleRed() {
  h1.classList.toggle("red");
}

h1.onclick = toggleRed;*/



/* DARK MODE / LIGHT MODE EXAMPLE
function lightMode() {
 const el = document.querySelector(
  "link");
 el.href = "styleLight.css";
}

function darkMode() {
 const el = document.querySelector(
  "link");
 el.href = "styleDark.css";
}*/

/*const item = document
 .querySelector("div");

function changeColor() {
 item.classList.toggle("red");
}

item.onclick = changeColor;*/

/* GALLERY */

document.querySelector('.scroll-left').addEventListener('click', function() {
  document.querySelector('.horizontal-scroll').scrollBy({
    left: -200, // Adjust this value based on item width
    behavior: 'smooth',
  });
});

document.querySelector('.scroll-right').addEventListener('click', function() {
  document.querySelector('.horizontal-scroll').scrollBy({
    left: 200, // Adjust this value based on item width
    behavior: 'smooth',
  });
});


/* QUOTE GAME */
const quoteSlides = document.querySelectorAll('.quote-slide');
const revealButtons = document.querySelectorAll('.reveal-button');
const nextButtons = document.querySelectorAll('.next-button')

let currentSlideIndex = 0;

if (quoteSlides.length > 0) {
  quoteSlides[0].classList.add('active');
}

revealButtons.forEach(button => {
  button.addEventListener('click', function() {
    const currentSlide = this.closest('.quote-slide');
    const bookContainer = currentSlide.querySelector('.book-container');
    const bookAnswer = currentSlide.querySelector('.book-answer');
    const answerHTML = currentSlide.dataset.answer;
    
    bookAnswer.innerHTML = answerHTML; // Inject the HTML
    bookContainer.classList.add('revealed');
  });
});

nextButtons.forEach(button => {
  button.addEventListener('click', function() {
    const currentSlide = quoteSlides[currentSlideIndex];
    currentSlide.style.display = 'none'; // Hide the current slide
    currentSlideIndex++; // Move to the next index
    console.log('currentSlideIndex:', currentSlideIndex);
    
    // Check if we've reached the end of the quotes
    if (currentSlideIndex >= quoteSlides.length) {
      // Reset the index to the beginning (loop)
      alert('You have gone through all the quotes!');
      currentSlideIndex = 0;
    }

    if (currentSlideIndex < quoteSlides.length) {
      const nextSlide = quoteSlides[currentSlideIndex];
      nextSlide.style.display = 'block'; // Show the next slide

      // Optionally reset the 'revealed' state for the next quote
      const nextBookContainer = nextSlide.querySelector('.book-container');
      nextBookContainer.classList.remove('revealed');
      const nextAnswer = nextSlide.querySelector('.right-page');
      if (nextAnswer) {
        nextAnswer.classList.add('hidden'); // Re-hide the answer
      }
    } else {
      // Handle the end of the quotes (e.g., show a "You finished!" message)
      alert('You have gone through all the quotes!');
    }
  });
});

/*# Dynamic Form (Work in Progress)

**Note on Development:** This project was created as part of the FreeCodeCamp Responsive Web Design curriculum. My current primary focus is the application process for Vets Who Code. As a result, this form is currently undergoing basic review and organization to make it suitable for review as part of my application. The intended dynamic question display and day/night mode features will be addressed in future development if time allows.

**Responsiveness:** While the form is designed with responsiveness in mind, thorough testing across various devices and screen sizes is still needed.

**Description:**

"This project is an intake form designed as a practical exercise from the FreeCodeCamp Responsive Web Design curriculum. Envisioned as part of a fictional learning tool, the form aims to gather insights into users' preferred study methods and the specific challenges they face. The ultimate goal of this (currently hypothetical) tool is to provide users with tailored resources and strategies to enhance their study effectiveness.

The form utilizes a variety of HTML input types, including multiple-choice questions, text inputs, email fields, a textarea for open feedback, dropdown menus for selecting options, and checkboxes for multiple selections. The styling is implemented with CSS, featuring a visually appealing gradient background and a layout that centers the form content on the screen for improved user experience.

I also explored incorporating dynamic functionality with JavaScript, specifically to include a day/night mode toggle and to conditionally reveal additional questions based on user responses. For instance, a question asking if the user prefers a quick or detailed assessment was intended to trigger the display of a corresponding quiz length. While I briefly achieved partial functionality for these features, I encountered issues that I am still working to resolve. This experience has provided valuable insights into the complexities of JavaScript event handling and DOM manipulation.

The development of this project, despite being done entirely on my phone due to platform constraints, has significantly strengthened my understanding of HTML form structures, CSS styling techniques, and the foundational principles of interactive web development with JavaScript. I am committed to revisiting and further developing the dynamic features to fully realize the intended functionality of this learning tool intake form."

**Technologies Used:**

* HTML
* CSS
* JavaScript

**Current Features:**

* **Comprehensive Form Structure:** Includes various question types and input fields with clear labels.
* **Comment Section:** Allows users to provide free-form feedback.
* **Gradient Background:** Features a visually appealing gradient background.
* **Responsive Design:** Ensures the form is usable across different screen sizes.

**Planned Features:**

* **Dynamic Question Display:** Implement JavaScript logic to show/hide questions based on user responses.
* **Day/Night Mode Toggle:** Add a feature to switch between light and dark color schemes.

**Usage:**

1.  Open the form in your browser.
2.  Review the profile and question sections.
3.  Fill out the form with your information.
4.  Submit the form. (Note: The form currently displays all questions regardless of input, as the dynamic functionality is not yet implemented.)

**Project Links:**

* [GitHub Repository](URL to your GitHub repository)

**Screenshots (Optional):**

```markdown
![Dynamic Form Screenshot](path/to/screenshot.png)

----------------------------------
# Grace Hopper Tribute Page (Work in Progress)

**Note on Development:** This project was created as part of the FreeCodeCamp Responsive Web Design curriculum. My current primary focus is the application process for Vets Who Code. As a result, this tribute page is currently undergoing basic cleanup, content refinement, and attribution checks to make it suitable for review as part of my application. Full responsiveness and planned interactive features will be addressed in future development if time allows.

**Description:**

"This tribute page is dedicated to the remarkable life and achievements of Grace Hopper, a pioneering figure in computer science. Developed as part of the FreeCodeCamp Responsive Web Design curriculum, this project aims to be an informative and inspiring resource about her contributions.

Similar to my web form project, the development of this page faced challenges including limited time, primary work being done on a cell phone, and my still-developing understanding of JavaScript. My current focus is on refining the content to be specifically about Grace Hopper, incorporating key well-known world events to provide historical context. I also plan to establish a cohesive style and color palette for the entire page, ensure proper attribution for all images and videos, and verify the functionality of all resource links.

Future development goals include adding more interactive elements to enhance user engagement, such as a functional quiz game and improvements to the image gallery.

I chose Grace Hopper as the subject of this tribute somewhat serendipitously, after discovering her name through a suggestion. Her story immediately intrigued me. As an intelligent and highly accomplished woman in a field where women were just beginning to gain prominence, during a time of significant societal change, she struck me as incredibly inspirational. I was particularly drawn to the fact that, despite her profound impact on the world of computing, I don't recall ever learning about her in my formal education. This project is, in part, my own journey to learn more about her legacy and share it with others."

**Technologies Used:**

* HTML
* CSS
* JavaScript

**Current Features:**

* **Interactive Gallery:** Displays images of Grace Hopper throughout her life, accompanied by relevant quotes.
* **Timeline:** Presents a chronological overview of significant events and accomplishments in Hopper's career.
* **Quiz (Partial):** A work-in-progress quiz designed to test knowledge of Grace Hopper's life and contributions. (Currently, only answer submission is functional.)
* **Responsive Design:** Ensures the page is viewable across various screen sizes.
* **Resource Links:** Provides a list of external resources for further learning about Grace Hopper.

**Planned Features (Under Development):**

* Embedded video content.
* Fully functional interactive quiz.
* Enhanced gallery interactions.
* Interactive timeline.
* Comment section for user engagement.

**Usage:**

1.  Open the webpage in your browser.
2.  Navigate the gallery using the left/right buttons or by scrolling.
3.  Note that the quiz is currently in development; answer submission is functional, but scoring and feedback are not yet implemented.
4.  Please be aware that this project is still in progress, and some features may not function as intended.

**Project Links:**

* [GitHub Repository](URL to your GitHub repository)

**Screenshots (Optional):**

```markdown
![Grace Hopper Tribute Page Screenshot](path/to/screenshot.png)*/