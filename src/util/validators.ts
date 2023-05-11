


const validators = {
    nameLength: (input:string):boolean => input.length<20,
    name: (input:string):boolean => input !== '',
    category: (input:string):boolean => input !== '',
    distance: (input:number):boolean => input !== 0,
    description: (input:string):boolean => input.length<100,


}

export default validators;