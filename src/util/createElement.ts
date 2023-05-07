

interface IProps {

    [key:string] : string | string
}

const createElement = (tag:string, props:IProps, parent:HTMLElement, content:string):HTMLElement => {
    const element = document.createElement(tag)
    Object.entries(props).forEach(([name, value]) => element.setAttribute(name, value))
    parent.appendChild(element)
    if (content){
        element.textContent = content;
    }
    return element;
}


export default createElement;