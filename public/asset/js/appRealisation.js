// const { effect } = require("vue")

const titleProjetRealiz = document.querySelector('#title-projet-realiz')
const tableTdLanguage = document.querySelector('#table-td-language')
const tableTdFramwork = document.querySelector('#table-td-framework')
const tableTdSgbd = document.querySelector('#table-td-sgbd')
const tableTdGitLink = document.querySelector('#table-td-gitLink')


const divRealizDiagrame = document.querySelector('#div-realiz-diagrame')

const idBtnRealize = document.querySelector('#divBtnRealize')
const listBtnShowRealiz = document.querySelectorAll('.btn-show-realiz')
const htmlBtnShowRealiz = document.getElementsByClassName('btn-show-realiz')

const dataRealisation = datas.realisation
/**
 * 
 * @param {String} typeData img or link
 * @param {*} data 
 * @param {*} folderImg 
 * @param {*} minefile 
 * @param {*} dataSize 
 * @returns 
 */
function viewAchievementTable(typeData, data, folderImg, minefile, dataSize) {

    if (typeData === "link") {

        return `<a href="${data}" target="_blank" rel="noopener noreferrer">Repositorie</a>`

    }
    if (typeData === "img") {
        return `
        <img class="m-3" src="../public/img/${folderImg}/${data}.${minefile}" alt="${data}" title="${data}"
        style="width: ${dataSize};">
    `
    }


}

function viewAchievDiagram(data) {
    return `
    <div class="p-3 w-50 scale div-border">
        <a class="" data-fancybox="real-ssg" data-src="${data.imgUrl}"
            data-caption="${data.caption}">
            <img class="w-100" src="${data.imgMiniUrl}"></a>

        <figcaption class="text-center">${data.figcaption}</figcaption>
    </div>
    `
}


function showTitleRealisation(titleProjet) {
    return `<button class="btn-show-realiz" title="${titleProjet}">${titleProjet}</button>`
}

function eachRenderBtnRealiz(datas) {
    let chaineBtn = "";

    datas.forEach(element => {
        chaineBtn += showTitleRealisation(element.title);
        idBtnRealize.innerHTML = chaineBtn;

    })
}

eachRenderBtnRealiz(dataRealisation)





function eachDataRender(datas, cookieValue) {
    let chaine = "";
    let chaine2 = "";
    let chaine3 = "";

    datas.forEach(element => {

        if (element.title === cookieValue) {

            if (null != titleProjetRealiz) {

                titleProjetRealiz.textContent = element.title;
            }

            let elementContent = element.content

            addNodeElemWithContent("#text-content-realiz", "p", "resum-projet-text", elementContent)

            element.language.forEach(el => {

                chaine += viewAchievementTable('img', el.name, 'language', 'svg', '3rem');

                if (null != tableTdLanguage) {
                    tableTdLanguage.innerHTML = chaine
                }

            });

            element.frameWork.forEach(el => {

                chaine2 += viewAchievementTable('img', el.name, 'framework', 'svg', el.sizeImg);
                if (null != tableTdFramwork) {
                    tableTdFramwork.innerHTML = chaine2
                }

            });

            element.analyse.forEach(el => {

                chaine3 += viewAchievDiagram(el)
                if (null != divRealizDiagrame) {
                    divRealizDiagrame.innerHTML = chaine3
                }

            });


            if (null != tableTdSgbd) {
                tableTdSgbd.innerHTML = viewAchievementTable('img', element.bataBase, 'sgbd', element.mimeFileDataBase, element.sizeFileDataBase);
            }

            if (null != tableTdGitLink) {
             
                    linkGit = element.linkGit;
                    tableTdGitLink.innerHTML = viewAchievementTable('link', element.linkGit, null, null, null)
                
            }

        }
    });

}





function checkACookieExists() {

    let cookieValue = "";
    if (document.cookie.split(";").some((item) => item.trim().startsWith(`${KEY}=`))) {
        cookieValue = document.cookie.split(";").find((row) => row.startsWith(`${KEY}=`))?.split("=")[1];

        //let realisation = datasRealisation.realisation;

        eachDataRender(dataRealisation, cookieValue);

    } else {
        console.log(`no found ${KEY}`);
        // add toast
        showToast("#toast", "Une erreur est survenue avec les cookie essentiel ", ".toast-alert")
    }
}




function clicktoshowRealisation() {
    window.addEventListener('load', () => {
        for (let i = 0; i < htmlBtnShowRealiz.length; i++) {
            htmlBtnShowRealiz.item(i).addEventListener('click', (e) => {
                addCookie(e.target.title)
                checkACookieExists()
            })
        }
    })
}






function addNodeElemWithContent(elmIdParent, noeudCre, classNameParam, newContent) {

    let txt = "";

    let elmAddParent = document.querySelector(elmIdParent);

    let newNoeud = document.createElement(noeudCre.toUpperCase());
    newNoeud.setAttribute('class', classNameParam);

    let contentSplit = newContent.split('. ');

    if (contentSplit.length > 0) {

        contentSplit.forEach((elm) => {

            txt += `<p>${elm}.</p>`

        })
        if (null != elmAddParent) {
            elmAddParent.innerHTML = txt

        }

    }

}


checkACookieExists()
clicktoshowRealisation()




// function clicktoshowRealisation() {
//     listBtnShowRealiz.forEach((elmBtn) => {
//         elmBtn.addEventListener('click', (event) => {

//            // console.log(event.currentTarget.title);


//             addCookie(event.currentTarget.textContent)
//             checkACookieExists()

//         })
//     })

// }