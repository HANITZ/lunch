import navBar from "./js/navBar"



const App = (el: HTMLElement) => {
    
    
    const start = () => {
        const header = document.createElement('header')
        header.className = 'gnb'
        el.appendChild(header)

        const headerH1 = document.createElement('h1')
        headerH1.className = 'gnb__title text-title'
        headerH1.innerText = '점심 뭐 먹지'
        header.appendChild(headerH1)

        const headerButton = document.createElement('button')
        headerButton.type = 'button'
        headerButton.className = 'gnb__button'
        headerButton.ariaLabel = '음식점 추가'
        header.appendChild(headerButton)

        const headerButtonImg = document.createElement('img')
        headerButtonImg.src = ``
        headerButtonImg.alt = '음식점 추가'
        headerButton.appendChild(headerButtonImg)


        const main = document.createElement('main')
        el.appendChild(main)

    }

    start()

    return{
        start
    }
}


export default App;