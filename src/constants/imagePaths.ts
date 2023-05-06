interface IImagePaths {
    [key:string]: IObject
}
interface IObject {
    [key:string]:string
}


const imagePaths:IImagePaths = {
    foodCategory: {
        koreanFood: './category-korean.png',
        japaneseFood: './category-japanese.png',
        chineseFood: './category-chinese.png',
        asianFood: './category-asian.png',
        westernFood: './category-western.png',
        etcFood: './category-etc.png',
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