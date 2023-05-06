import imagePaths from "./constants/imagePaths"
import navBar from "./js/navBar"
import createElement from "./util/createElement"



const App = (app: HTMLElement) => {
    
    // const header = document.createElement('header')
    // header.className = 'gnb'
    // app.appendChild(header)
    const header = createElement('header', {'class': 'gnb'}, app)
    const main = createElement('main', {}, app)




    
    const start = () => {

        
        
        

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
        headerButtonImg.src = imagePaths.generalIcon.addButton
        headerButtonImg.alt = '음식점 추가'
        headerButton.appendChild(headerButtonImg)


        

        

    }

    start()

    return{
        start
    }
}


export default App;