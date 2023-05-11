


const localstorageControl =  {
    set : <T>(key:string, value: T): void => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get : (key:string): Array<any> => {
        const value = localStorage.getItem(key)
        
        return value ? JSON.parse(value) : []
    },
    remove : (key:string):void => {
        localStorage.removeItem(key)
    }
}


export default localstorageControl;