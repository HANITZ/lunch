


const App = (el: HTMLElement) => {
    
    const start = () => {
        
    }
    const renderTotalHTML = () => {
        el.innerHTML = 
        `<header class="gnb">
        </header>
        <main>
        <section class="restaurant-filter-container"></section>
        <section class="restaurant-list-container"></section>
        <div class="modal modal--open"></div>
        </main>
        `
    }
    return{
        start
    }
}


export default App;