/* Q&A Dropdown */
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

/* TODO WHISP SPEECH*/
/* TODO DARK MODE / LIGHT MODE */

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
