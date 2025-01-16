
// ------------- Ici JavaScript



const pcDisplay = document.querySelector('.pcDisplay');
const smartDisplay = document.querySelector('.smartDisplay');


const responsive = document.getElementById('responsive');


// ---------------------------- ifTrueNone ---------------------------------
const listNav = document.querySelectorAll("#listNav a");

const navbarSupportedContent = document.getElementById('navbarSupportedContent');
const topelm = document.getElementById('top');

const KEY = "realisation";



const divSwicthDark = document.querySelector('#divSwicthDark')
const labelDarkMode = document.querySelector('#labelDarkMode')
const pathSvgDarkMode = document.querySelector('#pathSvgDarkMode')
const body = document.querySelector('body')
const sections = document.querySelectorAll('section')
const navbar = document.querySelector('#navbar');


flexSwitchDarckMode.addEventListener('input', (event) => {

    let isDark = ""
    let moon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
        </svg>
    `;
    let sun = `
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
    `;
    if (event.target.checked) {
        labelDarkMode.innerHTML = moon;
        // isDark = true;
        darkMode()
    } else {
        labelDarkMode.innerHTML = sun;
        // isDark = false;
        darkMode()
    }

})


function darkMode() {

    sections.forEach(section => {
        section.classList.toggle('bg-dark')
    });

    body.classList.toggle('bg-dark')
    body.classList.toggle('text-light')
    navbar.classList.toggle('bg-dark')
}


function ifTrueNone(navbarSupportedContent, topelm) {
    if (navbarSupportedContent.classList.contains('show')) {
        topelm.classList.add('none');

    }
}


function reportWindowSize() {

    let phone = window.innerWidth < 992;
    let pc = window.innerWidth >= 1250;
    let tab = (window.innerWidth >= 992) && (window.innerWidth < 1250);

    let strLinkSvg = `<a data-fancybox data-type="pdf" class="nav-link" href="public/doc/cv.pdf">Mon CV
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                    </a>`

    if (pc) {
        return responsive.innerHTML = `<a target="_blank" class="nav-link" href="public/doc/cv.pdf">Mon CV</a>`;
    } if (phone) {
        return responsive.innerHTML = strLinkSvg;
    } if (tab) {
        return responsive.innerHTML = strLinkSvg;
    }
}


function reveal() {
    const ratio = .1
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {

                entry.target.classList.remove('reveal')

                observer.unobserve(entry.target)
            }

        })
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('.reveal').forEach(function (r) {

        observer.observe(r)
    })

}

function addCookie(value) {

    let date = new Date(Date.now() + 6000000000);
    date = date.toUTCString()

    document.cookie = `${KEY}=${value};path=/;expires=${date};SameSite=lax;Secure`

}



const htmlCollectionHref = document.getElementsByClassName("cookieClass")


window.addEventListener('load', () => {
    console.log('La page est complètement chargée load ');

    for (let i = 0; i < htmlCollectionHref.length; i++) {


        htmlCollectionHref.item(i).addEventListener('click', (e) => {
            addCookie(e.target.title)
            console.log(e.target.title);

        })

    }
})


/**
 * Ajoute un élément à un parent avec des attributs spécifiques.
 * @param {string} parentSelector - Sélecteur CSS du parent.
 * @param {string} elementType - Type de balise (ex. 'div', 'span', etc.).
 * @param {string} className - Classe à attribuer à l'élément.
 * @param {string} titleAttribute - Valeur de l'attribut 'title'.
 * @param {string} textContent - Contenu texte de l'élément.
 */
function addElement(parentSelector, elementType, className, textContent, titleAttribute = null) {
    const parentElement = document.querySelector(parentSelector);


    // console.log(parentElement);

    if (!parentElement) {
        console.error(`Parent element with selector '${parentSelector}' not found. bob`);
        return;
    }

    const newElement = document.createElement(elementType);
    newElement.className = className;
    if (titleAttribute !== null) {
        newElement.title = titleAttribute;
    }

    const textNode = document.createTextNode(textContent);
    newElement.appendChild(textNode);

    parentElement.appendChild(newElement);
}

/**
 * Affiche un toast avec un message donné.
 * @param {string} parentSelector - Sélecteur CSS du parent.
 * @param {string} message - Message à afficher dans le toast.
 * @param {string} className - Classe à attribuer à l'élément.
 */
function showToast(parentSelector, toastClassName, message) {

    addElement(parentSelector, 'div', toastClassName, message, null);

    const toast = document.querySelector(`${parentSelector} .${toastClassName}`);

    if (toast) {
        toast.style.display = 'block';

        setTimeout(function () {
            toast.style.display = 'none';
        }, 4000);
    } else {
        console.error(`Toast element with class '${toastClassName}' not found.`);
    }

}


reveal()

function onResizeReport() {

    const isDisplay = document.querySelectorAll('.display');
    isDisplay.forEach((e) => {
        e.addEventListener('resize', window.onresize = reportWindowSize)
        console.log("bob display");

    })
}
onResizeReport()
ifTrueNone(navbarSupportedContent, topelm);


