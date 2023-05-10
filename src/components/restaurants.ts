import imagePaths from "../constants/imagePaths";
import createElement from "../util/createElement";




const restaurants = (ulTag: HTMLElement) => {
    let Restaurants = [{
        name: '피양콩할머니',
        category: '한식',
        distance: 10,
        description: '평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.'
    },
{
    name: '친친',
    category: '중식',
    distance: 5,
    description: 'Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다'
},
{
    name: '잇쇼우',
    category: '일식',
    distance: 10,
    description: '잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다'
},
{
    name: '이태리키친',
    category: '양식',
    distance: 20,
    description: '늘 변화를 추구하는 이태리키친입니다.'
},
{
    name: '호아빈 삼성점',
    category: '아시안',
    distance: 15,
    description: '푸짐한 양에 국물이 일품인 쌀국수'
},
{
    name: '도스타코스 선릉점',
    category: '기타',
    distance: 5,
    description: '멕시칸 캐주얼 그릴'
},]
    const renderRestaurants = (restaurants:IRestaurant[]) => {
        ulTag.innerHTML = ''
        restaurants.forEach(makeRestaurant)
    }

    interface IRestaurant {
        name : string,
        category : string,
        distance: number,
        description: string
    }
    const makeRestaurant = (restaurant: IRestaurant) => {
        const categorySrc = restaurant.category
        const restaurantLi = createElement('li', {'class':'restaurant'}, ulTag, '')
        
        const restaurantDiv = createElement('div', {'class': 'restaurant__category'}, restaurantLi, '')
        const categoryImg = createElement('img', {
            'class': 'category-icon',
            'alt': restaurant.category,
            'src': imagePaths.foodCategory[restaurant.category],
        }, restaurantDiv, '')
        
        const restaurantInfoDiv = createElement('div', {'class': 'restaurant__info'}, restaurantLi, '')
        
        const restaurantInfoH3 = createElement('h3', {'class': 'restaurant__name text-subtitle'}, restaurantInfoDiv, restaurant.name)
        const restaurantInfoSpan = createElement('span', {'class': 'restaurant__distance text-body'}, restaurantDiv, `캠퍼스부터 ${restaurant.distance.toString()}분 내`)
        const restaurantInfoP = createElement('p', {'class': 'restaurant__description text-body'}, restaurantInfoDiv, restaurant.description)
        
    }

    const sortByName = (tmpRestaurants:IRestaurant[]) => tmpRestaurants.sort((a, b)=>a.name.localeCompare(b.name))
    const sortByDist = (tmpRestaurants:IRestaurant[]) => tmpRestaurants.sort((a, b)=>Number(a.distance) - Number(b.distance) )
    
    const sortHandler = (category: string, sorting: string) => {

        const tmpRestaurants = Restaurants.filter(restaurant => 
            category === '전체' || restaurant.category === category)
        switch(sorting) {
            case 'distance':
                sortByDist(tmpRestaurants)
                break
            case 'name':
                sortByName(tmpRestaurants)
                break
        }
        renderRestaurants(tmpRestaurants)
    }
    
    renderRestaurants(Restaurants)
    return {
        sortByName,
        sortByDist,
        renderRestaurants,
        sortHandler
    }
}


export default restaurants;