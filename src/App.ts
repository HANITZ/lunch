import imagePaths from "./constants/imagePaths"
import navBar from "./js/navBar"
import createElement from "./util/createElement"



const App = (app: HTMLElement) => {
    

    const header = createElement('header', {'class': 'gnb'}, app, '')
    const main = createElement('main', {}, app, '')

    
    const start = () => {
        // header
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
        // 카테고리
        const categorySection = createElement('section', {
            'class': 'restaurant-filter-container'
        }, main, '')
        const categorySelect = createElement('select', {
            'name': 'category',
            'id': 'category-filter',
            'class': 'restaurant-filter'
        }, categorySection, '')
        const allOption = createElement('option', {'value': '전체'}, categorySelect, '전체')
        const korOption = createElement('option', {'value': '한식'}, categorySelect, '한식')
        const chiOption = createElement('option', {'value': '중식'}, categorySelect, '중식')
        const japOption = createElement('option', {'value': '일식'}, categorySelect, '일식')
        const wesOption = createElement('option', {'value': '양식'}, categorySelect, '양식')
        const asiOption = createElement('option', {'value': '아시안'}, categorySelect, '아시안')
        const etcOption = createElement('option', {'value': '기타'}, categorySelect, '기타')
        
        const sortSelect = createElement('select', {
            'name': 'sorting',
            'id': 'sorting-filter',
            'class': 'restaurant-filter'
        }, categorySection, '')
        const sortName = createElement('option', {'value': 'name'}, sortSelect, '이름순')
        const sortDist = createElement('option', {'value': 'distance'}, sortSelect, '거리순')
        
        // 음식점 목록
        const restaurantSection = createElement('section', {'class': 'restaurant-list-container'}, main, '')
        const restaurantUl = createElement('ul', {'class': 'restaurant-list'}, restaurantSection, '')
        


    }

    start()

    return{
        start
    }
}


export default App;