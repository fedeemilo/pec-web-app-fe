/* Set multiple attributes of an element at once  */

export const setAttributes = (elem: any, attrs: any) => {
    Object.keys(attrs).forEach(key => {
        
        if (attrs[key] === 'false') {
            elem.removeAttribute(key)
            return
        }

        if (attrs[key] === 'autofocus') {
            elem.focus()
        }

        if (!attrs[key]) {
            elem.value = ''
        }
        
        elem.setAttribute(key, attrs[key])
    })
}
