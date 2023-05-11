import validators from "../util/validators"

interface IInputRestaurant {
    'category' : string,
    'name' : string,
    'distance': number,
    'description' : string,
    'link' : string|null
}
const addRestaurantInputValidator = ({category, name,distance,description,link}:IInputRestaurant) => {

    if(!validators.category(category)) throw new Error('카테고리는 반드시 선택해야합니다.')
    if(!validators.nameLength(name)) throw new Error('이름은 20자 이내이어야 합니다.')
    if(!validators.name(name)) throw new Error('이름은 반드시 작성해야합니다.')
    if(!validators.distance(distance)) throw new Error('거리는 반드시 선택해야합니다.')
    if(!validators.description(description)) throw new Error('상세 설명은 100자 이내로 작성해야합니다.')
    

    const checkNameLength = (name:string):boolean => {
        if(name.length > 10){
            return false
        }
        return true
    }


    






}




export default addRestaurantInputValidator;