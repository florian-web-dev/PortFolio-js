
const idSectionLangFront = document.querySelector("#langFront");
const idSectionLangBack = document.querySelector("#langBack");

const idSectionFramFront = document.querySelector("#framFront");
const idSectionFramBack = document.querySelector("#framBack");

const idSectionMobil = document.querySelector("#mobil")
const idSectionCms = document.querySelector("#cms")

const idSectionTools = document.querySelector("#tools")
const idSectionUml = document.querySelector("#uml")

const idFormationDw = document.querySelector('#formationDw');
const idFormationCda = document.querySelector('#formationCda');

const showProgress = document.querySelectorAll("[class*='showProgress-']")

const achievementShow = document.querySelector('#achievementShow');


// _______________________________________
// ---------------- Datas --------------
const skills = datas.skills
const languages = skills.language;
const framework = skills.framework;

// ---------------- realisation ---------------
const realiz = datas.realisation;

// _______________________________________



function viewCardProgress(data) {
    return `
    <div>
        <div class="progress skillProgress m-2">

            <div class="progress-bar bg-black bg-opacity-75" role="progressbar" 
                aria-valuenow="${data.value}" aria-valuemin="0" aria-valuemax="100" 
                value="${data.value}" max="100" style="width:${data.value}%">

                <div class="m-auto">
                    <img class="w-25" src="${data.image}" alt="image">
                    <span title="${data.name}">${data.title}</span>
                    <span>${data.value}%</span>
                </div>
                
            </div>
        </div>
    </div>
    `;
}

function viewCard(data, className = null) {

    if (data.name == "Bootstrap") {
        return `

        <div class="m-2 p-2" style="width: fit-content;">
            <div class="d-flex align-items-center flex-column">
                <div style="" class="" title="${data.name}">
                    <div class="test">  
                        ${data.svg}
                    </div>
                </div>
                <div class="title-competence">
                    <p class="m-2">${data.title}</p>
                </div>
             </div>
        </div> 

    `;
    }
    return `

        <div class="m-2 p-2" style="width: fit-content;">
            <div class="d-flex align-items-center flex-column">
                <div style="" class="" title="${data.name}">
                    <div class="">  
                        <img class="img-size-card" src="${data.image}" alt="image">
                        <p class="m-0">${data.title}</p>
                    </div>
                </div>
                
             </div>
        </div> 

    `;
}

function viewFormation(data) {
    return `
    <h6><u>Titre professionnel :</u> <strong title="${data.titre}"> ${data.titre}</strong></h6>
    <p>Niveau de qualification ${data.level} équivalent a : ${data.equivalent}</p>
    <a href="${data.lien}" target="_blank" rel="nofollow">Cliqué ici pour plus d'information sur la formation</a>
    `
}

function viewLanguageLogo(data, size = null, className = null) {
    return `
        <img class="${className}" src="${data.image}" alt="${data.name}" title="${data.name}" style="width: ${size};"></img>
    `
}

function viewList(data) {
    return `
        <li class="list-group-item">${data.name}</li>
    `
}

function viewList2(data) {
    return `
        <div class="${data.className} m-auto">${data.name}</div>
    `
}


function viewAchiev(data) {
    let imgUrl =""
    if (data.imgUrl == "") {
        imgUrl = "public/img/noir.jpg"

    }else{
        imgUrl = data.imgUrl
    }

    return `
    <div class="div-card-achiev">
        <div class="card-achiev">
            <img src="${imgUrl}" alt="${data.title}" class="w-100 rounded" style="height: 35vh;" />
            <div class="fadedbox">
                <div class="card-body-achiev">
                    <h5 class="title-fade">${data.title}</h5>
                    <p title="Concepteur Développeur Application">${data.subtitle}</p>
                    <a href="./pages/realisation.html" title="${data.title}" class="btn-card cookieClass" target="_blank" rel="noopener noreferrer">Voire plus</a>
                </div>

            </div>
            
        </div>
        <h6 class="m-1">${data.context}</h6>
    </div>
`
}


/**
 * 
 * @param {string|boolean} layer frontend or backend | true or false
 * @param {boolean} isLang true if language false if framework, nodeElement
 */
function eachLanguaguesFrameWork(layer, isLang, callbackView = viewCard, paramViewCardClassName = null) {


    let keyType = "";
    let elemId = "";

    if (layer == "frontend" || layer == true) {
        keyType = isLang ? languages.frontend : framework.frontend
        elemId = isLang ? idSectionLangFront : idSectionFramFront;
    } else if (layer == "backend" || layer == false) {
        keyType = isLang ? languages.backend : framework.backend
        elemId = isLang ? idSectionLangBack : idSectionFramBack;
        
    }
    eachData(keyType, elemId, callbackView, paramViewCardClassName)

}


/**
 * Each data fetch become a inner on Dom element
 * @param {array} allSkills datas
 * @param {string} elm Element (selectors)
 * @param {Function} callback obtional
 */
function eachData(allSkills, elm, callback = viewCard, paramViewCardClassName = null) {
    let chaine = "";

    allSkills.forEach((skill) => {
        chaine += callback(skill, paramViewCardClassName)
    });

    elm.innerHTML = chaine;

}


function checkDataByKeyObj(key, value) {

    if (key == "language") {
        eachLanguaguesFrameWork('frontend', true)
        eachLanguaguesFrameWork('backend', true)

    } if (key == "framework") {
        eachLanguaguesFrameWork('frontend', false)
        eachLanguaguesFrameWork('backend', false)

    } if (key == "mobil") {
        eachData(value, idSectionMobil)

    } if (key == "analyse") {
        eachData(value, idSectionUml, viewList2);
    }
    if (key == "cms") {
        eachData(value, idSectionCms);

    }
}


function eachDataForshow(skillsObj, param) {

    if (null != skillsObj) {
        for (const [key, value] of Object.entries(skillsObj)) {

            checkDataByKeyObj(key, value)
        }

    } else if (null != param) {

        eachData(param, achievementShow, viewAchiev);

    }

}


window.addEventListener('load', () => {
    // console.log('La page est complètement chargée load');
    reportWindowSize();
    eachDataForshow(skills, null)
    eachDataForshow(null, realiz)
})


showProgress.forEach(btnProgress => {
    btnProgress.addEventListener('click', function () {

        let isFront = btnProgress.classList.contains('showProgress-front')

        if (btnProgress.checked) {
            functionRunder = viewCardProgress
        } else {
            functionRunder = viewCard
        }

        eachLanguaguesFrameWork(isFront, true, functionRunder)
    })
});

