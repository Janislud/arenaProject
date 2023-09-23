//Создаю елементы.
const firstSection = document.querySelector('#firstSection')
const firstSectionDiv = document.createElement('div')
const firstSectionH1 = document.createElement('h1')
const firstSectionP = document.createElement('p')


firstSection.append(firstSectionDiv)
firstSectionDiv.classList = 'firstSection-text-wrapper'
firstSectionDiv.append(firstSectionH1)
firstSectionH1.innerText = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ'
firstSectionDiv.append(firstSectionP)
firstSectionP.innerText = 'стадионы, газопроводы, мосты, дамбы'

let conteinerDivWrapper = document.createElement('div')
conteinerDivWrapper.classList = 'conteiner-div-wrapper'

firstSection.append(conteinerDivWrapper)
for (let i = 0; i < 4; i++) {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const h5 = document.createElement('h5')

    h3.innerText = '26'
    h4.innerText = 'лет'
    h5.innerText = 'на рынке'
    
    div.append(h3)
    div.append(h4)
    div.append(h5)
    conteinerDivWrapper.append(div)
}

// Second Section

const secondSection = document.querySelector('#secondSection')
const secondSectionDiv = document.createElement('div')
secondSectionDiv.classList = 'second-section-wrapper'
const secontSectionH2 = document.createElement('h2')
secontSectionH2.innerText = 'НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ'

secondSection.append(secondSectionDiv)
secondSectionDiv.append(secontSectionH2)

const secondSectionDivWrapper = document.createElement('div')
secondSectionDivWrapper.classList = "second-section-wrapper-block"

for( let i = 0; i < 3;i++) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const br = document.createElement('br')
    const rectangel = document.createElement('img')
    const h6 = document.createElement('h6')
    const p = document.createElement('p')
    img.src = './media/img-arena.svg';
    rectangel.src='./media/arena-rectangel.svg';
    rectangel.classList = 'rectangel'
    h6.innerText = 'Арена'
    p.innerHTML='Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.'

    div.append(img)
    div.append(br)
    div.append(rectangel)
    div.append(h6)
    div.append(p)

    secondSectionDivWrapper.append(div)
    
}

secondSectionDiv.append(secondSectionDivWrapper)

//Three section

const threeSection = document.querySelector('#threeSection')
const threeSectionDiv = document.createElement('div')
threeSectionDiv.classList = 'three-section-text-wrapper'
threeSection.append(threeSectionDiv)
const threeSectionH2 = document.createElement('h2')
const thrreeSectionDivSecond = document.createElement('div')
thrreeSectionDivSecond.classList='three-text-wrapper'
// threeSectionDiv.append(threeSectionH2)
threeSectionH2.innerText= 'САМЫЕ УМНЫЕ ПРОЕКТЫ'
const threeSectionP = document.createElement('p')
threeSectionP.innerText = 'РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!'
// threeSectionDiv.append(threeSectionP)
threeSectionDiv.append(thrreeSectionDivSecond)
thrreeSectionDivSecond.append(threeSectionH2)
thrreeSectionDivSecond.append(threeSectionP)

const threeSectionBtn = document.createElement('button')
threeSectionBtn.innerText='ВАШ ЗАПРОС'
threeSectionDiv.append(threeSectionBtn)

// Four section

const fourSection = document.querySelector('#fourSection')
const fourDiv = document.createElement('div')
fourSection.append(fourDiv)
const fourH6 = document.createElement('h6')
fourH6.innerText = 'ЧЕМ МЫ ЗАНИМАЕМСЯ?'
fourDiv.append(fourH6)
const fourDivSecond = document.createElement('div')
fourDivSecond.classList = 'content-wrapper'
fourDiv.classList = 'four-section-content-wrapper'
fourDiv.append(fourDivSecond)

for(let i = 0;i < 3; i ++) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src='./media/img-home.svg'
    const p = document.createElement('p')
    p.innerText='СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ'
    fourDivSecond.append(div)
    div.append(img)
    div.append(p)

}


// Five Section

const fiveSection = document.querySelector('#fiveSection')
const fiveSectionDiv = document.createElement('div')
fiveSectionDiv.classList = 'five-section-wrapper'
const fiveSectionH2 = document.createElement('h2')
fiveSectionH2.innerText='ЧЕМ МЫ ЗАНИМАЕМСЯ?'
fiveSection.append(fiveSectionDiv)
fiveSectionDiv.append(fiveSectionH2)
const fiveSectionDivSecond = document.createElement('div')
fiveSectionDivSecond.classList='five-section-second-wrapper'
fiveSectionDiv.append(fiveSectionDivSecond)

for(let i = 0; i < 6; i ++) {
const div = document.createElement('div')
const img = document.createElement('img')
img.src = './media/img-home.svg'
const p  = document.createElement('p')
p.innerText='СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ'
    

fiveSectionDivSecond.append(div)
div.append(img)
div.append(p)


}

// Six Section

const sixSection = document.querySelector('#sixSection')
const sixSectionH2 = document.createElement('h2')
sixSection.append(sixSectionH2)
sixSectionH2.innerText='КОНТАКТЫ'
const divWrapper = document.createElement('div')
divWrapper.classList ='six-section-wrapper'
sixSection.append(divWrapper)




const sixSectionFirstImg = document.createElement('img')
sixSectionFirstImg.src='./media/dot.svg'
const sixSectionFirstH3 = document.createElement('h3')
sixSectionFirstH3.innerText='АДРЕС:'
const sixSectionSecondP = document.createElement('p')
sixSectionSecondP.innerText = 'УЛИЦА МИРА 140, ОФИС 140-142'
const sixSectionFirstDiv = document.createElement('div')
sixSectionFirstDiv.append(sixSectionFirstImg)
sixSectionFirstDiv.append(sixSectionFirstH3)
sixSectionFirstDiv.append(sixSectionSecondP)
divWrapper.append(sixSectionFirstDiv)



const sixSectionPhoneImg = document.createElement('img')
sixSectionPhoneImg.src='./media/phone.svg'
const phoneFirstH3 = document.createElement('h3')
phoneFirstH3.innerText ='ТЕЛЕФОН:'
const phoneSecondP = document.createElement('p')
phoneSecondP.innerHTML='8 (812) 111-22-33'
const phoneSecondP2 = document.createElement('p')
phoneSecondP2.innerHTML = '8 (812) 111-22-33'
const sixSectionSecondDiv = document.createElement('div')
sixSectionSecondDiv.append(sixSectionPhoneImg)
sixSectionSecondDiv.append(phoneFirstH3)
sixSectionSecondDiv.append(phoneSecondP)
sixSectionSecondDiv.append(phoneSecondP2)
divWrapper.append(sixSectionSecondDiv)

const sixSectionTime = document.createElement('img')
sixSectionTime.src='./media/time.svg'
const sixSectionFirstTimeH3 = document.createElement('h3')
sixSectionFirstTimeH3.innerText='ВРЕМЯ РАБОТЫ:'
const sixSectionSecondTimeP = document.createElement('p')
sixSectionSecondTimeP.innerText='ПН-СБ 10:00 - 20:00'
const sixSectionThreeDiv = document.createElement('div')
sixSectionThreeDiv.append(sixSectionTime)
sixSectionThreeDiv.append(sixSectionFirstTimeH3)
sixSectionThreeDiv.append(sixSectionSecondTimeP)
divWrapper.append(sixSectionThreeDiv)


const sixSectionEmail =document.createElement('img')
sixSectionEmail.src='./media/email.svg'
const sixSectionFirstEmailH3 = document.createElement('h3')
sixSectionFirstEmailH3.innerText='E-MAIL:'
const sixSectionSecontEmailP = document.createElement('p')
sixSectionSecontEmailP.innerHTML='INFO@VIP.RU'
const sixSectionEmailDiv = document.createElement('div')
sixSectionEmailDiv.append(sixSectionEmail)
sixSectionEmailDiv.append(sixSectionFirstEmailH3)
sixSectionEmailDiv.append(sixSectionSecontEmailP)
divWrapper.append(sixSectionEmailDiv)


// Footer


const footer = document.querySelector('footer')
const footerFirstP = document.createElement('p')
footerFirstP.classList='leftp'
footerFirstP.innerText='© 2019 Строительная компания'
const footerSecondP = document.createElement('p')
footerSecondP.classList='rightp'
footerSecondP.innerText='Разработано лучшей студей'

footer.append(footerFirstP)
footer.append(footerSecondP)