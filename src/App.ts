import addRestaurantInputValidator from "./components/addRestaurantInputValidator"
import restaurants from "./components/restaurants"
import imagePaths from "./constants/imagePaths"
import createElement from "./util/createElement"
import form from "./util/form"
import selectCreate from "./util/selectCreate"



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
        selectCreate(categorySelect, {
            '전체':'전체', '한식':'한식', '중식':'중식', '일식':'일식', '양식':'양식', '아시안':'아시안'})
        
        const sortSelect = createElement('select', {
            'name': 'sorting',
            'id': 'sorting-filter',
            'class': 'restaurant-filter'
        }, categorySection, '')
        selectCreate(sortSelect, {'name': '이름순', 'distance':'거리순'})
        
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
        selectCreate(formDivSelect, {'': '선택해주세요', '한식': '한식', '중식':'중식', '일식': '일식', '양식':'양식','아시안':'아시안','기타':'기타'})

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
        selectCreate(distanceSelect, {'': '선택해 주세요'})
        selectCreate(distanceSelect, {'5': '5분 내', '10': '10분 내', '15': '15분 내', '20': '20분 내', '30': '30분 내'})

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

        const formAddButtonHandler = (event: Event) => {
            event.preventDefault()
            const newRestaurant = {
                'category': (formDivSelect as HTMLSelectElement).value,
                'name' : (formRestaurantInput as HTMLInputElement).value, 
                'distance': Number((distanceSelect as HTMLSelectElement).value), 
                'description': (desTextArea as HTMLInputElement).value,
                'link' : (linkInput as HTMLInputElement).value
            }
            try {
                addRestaurantInputValidator(newRestaurant)
                restaurant.addRestaurant(newRestaurant)
                form().resetForm(addRestaurantModalDiv)
                closeModal()
            }catch(error:any){
                alert(error.message)
            }
        }


        headerButton.addEventListener('click', showModal )
        cancelButton.addEventListener('click', closeModal)
        sortSelect.addEventListener('change', changeHandler)
        categorySelect.addEventListener('change', changeHandler)
        addButton.addEventListener('click', formAddButtonHandler)
    }

    start()

    return{
        start
    }
}


export default App;