import imagePaths from "./constants/imagePaths"
import navBar from "./js/navBar"
import createElement from "./util/createElement"



const App = (app: HTMLElement) => {
    

    const header = createElement('header', {'class': 'gnb'}, app, '')
    const main = createElement('main', {}, app, '')




    
    const start = () => {

        
        const headerH1 = createElement('h1', {
            'class': 'gnb__title text-title',
        }, header, '점심 뭐 먹지')
        
        const headerButton = createElement('button', {
            'class': 'gnb__button',
            'aria-label': '음식점 추가'
        }, header, '')


        const headerButtonImg = createElement('img', {
            'src': `${imagePaths.generalIcon.addButton}`
        }, headerButton, '')



        

        

    }

    start()

    return{
        start
    }
}


export default App;