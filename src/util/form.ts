


const form = () => {
    const resetForm = (formDiv: HTMLElement) => {
        formDiv.querySelectorAll('input, textarea, select').forEach((el)=>{
            switch(el.tagName.toLowerCase()) {
                case 'select':
                    (el as HTMLSelectElement).selectedIndex = 0;
                    break
                case 'input':
                    (el as HTMLInputElement).value = '';
                    break
                case 'textarea':
                    (el as HTMLTextAreaElement).value = '';
                    break
            }
        })
    }


    return {
        resetForm
    }
}


export default form;