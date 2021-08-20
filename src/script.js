configureNavBar();
setupFlashcardsPopup();
setupPianoPopup();

function configureNavBar() {
    const navLinks = document.querySelectorAll('nav a');
    for(let i=0; i<navLinks.length; i++) {
        navLinks[i].addEventListener("click", function () {
            for (let j = 0; j < navLinks.length; j++) {
                if (navLinks[j] == navLinks[i]) {
                    navLinks[j].classList.add('active');
                } else {
                    navLinks[j].classList.remove('active');
                }
            }
        });
    }
}

function myFunction() {
    const hamb = document.querySelector('#hamburger-links');

    if (hamb.style.display === "block") {
        hamb.style.display = "none";
    } else {
        hamb.style.display = "block";
    }
}

function setupFlashcardsPopup() {
    const flashcardsOpenBtn = document.querySelector('#flashcards-open-btn');
    const flashcardsCloseBtn = document.querySelector('#flashcards-close-btn');
    const flashcardsWindow = document.querySelector('#flashcards-window');

    flashcardsOpenBtn.onclick = function () {
        flashcardsWindow.style.display = 'flex';
    };

    flashcardsCloseBtn.onclick = function () {
        flashcardsWindow.style.display = 'none';
    }
}

function setupPianoPopup() {
    const pianoOpenBtn = document.querySelector('#piano-open-btn');
    const pianoCloseBtn = document.querySelector('#piano-close-btn');
    const pianoWindow = document.querySelector('#piano-window');

    pianoOpenBtn.onclick = function () {
        pianoWindow.style.display = 'flex';
    };

    pianoCloseBtn.onclick = function () {
        pianoWindow.style.display = 'none';
    }
}