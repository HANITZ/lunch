import defaultRestaurants from "../constants/defaultRestaurants";
import imagePaths from "../constants/imagePaths";
import createElement from "../util/createElement";
import localstorageControl from "../util/localstorage";


interface IRestaurant {
    name : string,
    category : string,
    distance: number,
    description: string,
    link?: string
}

const restaurants = (ulTag: HTMLElement) => {


    const Restaurants:IRestaurant[] =  localstorageControl.get('restaurants')|| [...defaultRestaurants]
    const renderRestaurants = (restaurants:IRestaurant[]) => {
        ulTag.innerHTML = ''
        restaurants.forEach(makeRestaurant)
        if(!localstorageControl.get('restaurants')){
            localstorageControl.set('restaurants', Restaurants)
        }

        
    }

    const addRestaurant = (restaurant: IRestaurant) => {
        
        Restaurants.push(restaurant)
        localstorageControl.remove('restaurants')
        localstorageControl.set('restaurants', Restaurants)
        renderRestaurants(Restaurants)
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
        if (restaurant.link){
            const retaurantLink = createElement('p', {}, restaurantInfoDiv, restaurant.link)
        }
        
    }

    const sortByName = (restaurantList:IRestaurant[]) => restaurantList.sort((a, b)=>a.name.localeCompare(b.name))
    const sortByDist = (restaurantList:IRestaurant[]) => restaurantList.sort((a, b)=>Number(a.distance) - Number(b.distance) )
    
    const sortHandler = (category: string, sorting: string) => {

        const tmpRestaurants = Restaurants.filter(restaurant => 
            category === '전체' || restaurant.category === category)
        sortRestaurants(tmpRestaurants, sorting)
        renderRestaurants(tmpRestaurants)
    }
    const sortRestaurants = (restaurantList: IRestaurant[], sorting: string): void =>{
        switch(sorting) {
            case 'distance':
                sortByDist(restaurantList)
                break
            case 'name':
                sortByName(restaurantList)
                break
        }
    }
    
    renderRestaurants(Restaurants)
    return {
        sortByName,
        sortByDist,
        renderRestaurants,
        sortHandler,
        addRestaurant
    }
}


export default restaurants;