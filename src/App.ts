import restaurants from "./components/restaurants"
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
        const restaurant = restaurants(restaurantUl)

        // 음식점 추가 모달
        const addRestaurantModalDiv = createElement('div', {'class': 'modal'}, main, '')
        const modalBackdrop = createElement('div', {'class': 'modal-backdrop'}, addRestaurantModalDiv, '')
        const modalContainer = createElement('div', {'class': 'modal-container'}, addRestaurantModalDiv, '')
    
        const containerH2 = createElement('h2', {'class': 'modal-title text-title'}, modalContainer, '새로운 음식점')
        const containerForm = createElement('form', {}, modalContainer, '')

        const formDiv = createElement('div', {'class': 'form-item form-item--required'}, containerForm, '')
        const formDivLabel = createElement('label', {'for': 'category text-caption'}, formDiv, '카테고리')

        const formDivSelect = createElement('select', {
            'name': 'category',
            'id': 'category',
            'required': ''
    }, formDiv, '')
        const modalSelectOption = createElement('option', {'value': ''}, formDivSelect, '선택해 주세요')
        const modalKorOption = createElement('option', {'value': '한식'}, formDivSelect, '한식')
        const modalChiOption = createElement('option', {'value': '중식'}, formDivSelect, '중식')
        const modalJapOption = createElement('option', {'value': '일식'}, formDivSelect, '일식')
        const modalWesOption = createElement('option', {'value': '양식'}, formDivSelect, '양식')
        const modalAsiOption = createElement('option', {'value': '아시안'}, formDivSelect, '아시안')
        const modalEtcOption = createElement('option', {'value': '기타'}, formDivSelect, '기타')
        // 음식점 이름
        const formRestaurant = createElement('div', {'class': 'form-item form-item--required'}, containerForm, '')
        const formRestaurantLabel = createElement('label', {'for': 'name text-caption'}, formRestaurant, '이름')
        const formRestaurantInput = createElement('input', {
            'type': 'text',
            'name': 'name',
            'id': 'name',
            'required': ''
        }, formRestaurant, '')

        // 거리
        const distanceDiv = createElement('div', {'class': 'form-item form-item--required'}, containerForm, '')
        const distanceLabel = createElement('label', {'for': 'distance text-caption'}, distanceDiv, '거리(도보 이동 시간)')
        const distanceSelect = createElement('select', {
            'name': 'distance',
            'id': 'distance',
            'required': ''
        }, distanceDiv, '')
        const optionSelect = createElement('option', {'value': ''}, distanceSelect, '선택해 주세요')
        const option5 = createElement('option', {'value': '5'}, distanceSelect, '5분 내')
        const option10 = createElement('option', {'value': '10'}, distanceSelect, '10분 내')
        const option15 = createElement('option', {'value': '15'}, distanceSelect, '15분 내')
        const option20 = createElement('option', {'value': '20'}, distanceSelect, '20분 내')
        const option30 = createElement('option', {'value': '30'}, distanceSelect, '30분 내')

        // 설명
        const desDiv = createElement('div', {'class': 'form-item'}, containerForm, '')
        const desLabel = createElement('label', {'for': 'description text-caption'}, desDiv, '설명')
        const desTextArea = createElement('textarea', {
            'name': 'description',
            'id': 'description',
            'cols': '30',
            'rows': '5'
        }, desDiv, '')
        const desSpan = createElement('span', {'class':'help-text text-caption'}, desDiv, '메뉴 등 추가 정보를 입력해 주세요.')

        // 링크
        const linkDiv = createElement('div', {'class': 'form-item'}, containerForm, '')
        const linkLabel = createElement('label', {'for': 'link text-caption'}, linkDiv, '참고 링크')
        const linkInput = createElement('input', {
            'type': 'text',
            'name': 'link',
            'id': 'link'
        }, linkDiv, '')
        const linkSpan = createElement('span', {'class': 'help-text text-caption'}, linkDiv, '매장 정보를 확인할 수 있는 링크를 입력해 주세요.')
    
        //  취소/추가 버튼
        const buttonDiv = createElement('div', {'calss': 'button-container'}, containerForm, '')
        const cancelButton = createElement('button', {
            'type': 'button',
            'class': 'button button--secondary text-caption'
        }, buttonDiv, '취소하기')
        const addButton = createElement('button', {
            'type': 'button',
            'class': 'button button--primary text-caption'
        }, buttonDiv, '추가하기')

        const showModal = () => {
            addRestaurantModalDiv.className='modal--open'

        }
        const closeModal = () => {
            addRestaurantModalDiv.className='modal'
        }

        const changeHandler = (event: Event) => {
            event.preventDefault()
            restaurant.sortHandler((categorySelect as HTMLSelectElement).value, (sortSelect as HTMLSelectElement).value)
        }

        headerButton.addEventListener('click', showModal )
        cancelButton.addEventListener('click', closeModal)
        sortSelect.addEventListener('change', changeHandler)
        categorySelect.addEventListener('change', changeHandler)
    }

    start()

    return{
        start
    }
}


export default App;