

interface IProps {
    [key:string] : string
}

const createElement = (tag:string, props:IProps, parent:HTMLElement):HTMLElement => {
    const element = document.createElement(tag)
    Object.entries(props).forEach(([name, value]) => element.setAttribute(name, value))
    parent.appendChild(element)
    return element;
}


export default createElement;