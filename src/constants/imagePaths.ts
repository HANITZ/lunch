interface IImagePaths {
    [key:string]: IObject
}
interface IObject {
    [key:string]:string
}


const imagePaths:IImagePaths = {
    foodCategory: {
        한식 : './category-korean.png',
        일식 : './category-japanese.png',
        중식 : './category-chinese.png',
        아시안 : './category-asian.png',
        양식 : './category-western.png',
        기타 : './category-etc.png',
    },
    isLike: {
        like: './favorite-icon-filled.png',
        notLike: './favorite-icon-lined.png',
    },
    generalIcon: {
        addButton: './add-button.png'
    }
}

export default imagePaths;