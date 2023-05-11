


const localstorageControl = () => {
    const set = <T>(key:string, value: T): void => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    const get = <T>(key:string): T | null => {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }

    const remove = (key:string):void => {
        localStorage.removeItem(key)
    }
    return {
        set,

    }
}