
// --------------------------------- Toggle night mode and day mode ---------------------------------
const modeFromLocal = localStorage.getItem('mode')
const htmlBody = document.getElementById('body');

// --------------------------------- Run apply mode function if mode exits ---------------------------------
if (modeFromLocal) {
    applyMode(modeFromLocal);
}

// --------------------------------- Run funtion based on mode ---------------------------------
function applyMode(mode) {
    if (mode === 'night') {
        darkModeOn()
    }
    else {
        darkModeOff()
    }
}

// --------------------------------- Adds the dark class to the HTML body and also stores it into the localstorgae ---------------------------------
function darkModeOn() {
    htmlBody.classList.add('dark')
    localStorage.setItem('mode', htmlBody.classList.contains('dark') ? "night" : "day")
}


// --------------------------------- Removes the dark class from the HTML body and also removes it from the localstorgae ---------------------------------
function darkModeOff() {
    htmlBody.classList.remove("dark")
    localStorage.removeItem('mode')
}






// --------------------------------- Toggle navigation links ---------------------------------

const navLinks = document.getElementById('navLinks');
function toggleNavLinks() {
    navLinks.classList.toggle('hidden');
}

// --------------------------------- Smoothly slight to the required page ---------------------------------
const selectAllLinks = document.querySelectorAll('#navLinks a');
selectAllLinks.forEach((link) => {
    link.addEventListener('click', (Event) => {
        Event.preventDefault();

        // Get the page id
        const targetedId = link.getAttribute("href").substring(1);

        // Get the element with id
        const targetedPage = document.getElementById(targetedId);
        if (targetedPage) {
            window.scrollTo(
                {
                    top: targetedPage.offsetTop,
                    behavior: "smooth"
                }
            )
        }
    })
})