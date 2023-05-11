import createElement from "./createElement"


interface ISelectProps {
    [key: string] : string
}

const selectCreate = (select: HTMLElement, options:ISelectProps) => {

    const setOptions = () => {

        Object.entries(options).forEach(([value, name]) => {

            createElement('option', {'value': value}, select, name)
        })


    }
    setOptions()
}

export default selectCreate;