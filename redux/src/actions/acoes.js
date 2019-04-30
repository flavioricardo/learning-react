export const addOne = ()=>({
    type : 'ADD_ONE'
})

export const addText = (e)=>({
    type : 'ADD_TXT',
    payload : e.target.value
})

export const removeOne = ()=>({
    type : 'REMOVE_ONE'
})
