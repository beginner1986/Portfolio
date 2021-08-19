configureNavBar();

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
