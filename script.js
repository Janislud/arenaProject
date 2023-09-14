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
    const rectangel = document.createElement('img')
    const h6 = document.createElement('h6')
    const p = document.createElement('p')
    img.src = './media/img-arena.svg';
    rectangel.src='./media/arena-rectangel.svg';
    rectangel.classList = 'rectangel'
    h6.innerText = 'Арена'
    p.innerHTML='Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.'

    div.append(img)
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
threeSectionDiv.append(threeSectionH2)
threeSectionH2.innerText= 'САМЫЕ УМНЫЕ ПРОЕКТЫ'
const threeSectionP = document.createElement('p')
threeSectionP.innerText = 'РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!'
threeSectionDiv.append(threeSectionP)
const threeSectionBtn = document.createElement('button')
threeSectionBtn.innerText='ВАШ ЗАПРОС'
threeSection.append(threeSectionBtn)

