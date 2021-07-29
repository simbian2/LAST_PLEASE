import {createContext} from 'react'

const initalState = {
    FAQ:[
        {
            answer:'test',
            Question:'test',
        }
    ]
}

//const store = initalState
const Store = createContext(initalState);


export default Store