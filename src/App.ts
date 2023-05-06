import navBar from "./js/navBar"



const App = (el: HTMLElement) => {
    
    
    const start = () => {
        const header = document.createElement('header')
        header.className = 'gnb'
        el.appendChild(header)

        const main = document.createElement('main')
        el.appendChild(main)

    }

    start()

    return{
        start
    }
}


export default App;