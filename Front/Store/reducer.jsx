const reducer = (state,action) => {
    switch(action.type){
        case "FAQ_GET": 
    
        const {Question,Answer} = action.payload

        const payloadLength = Object.entries(action.payload)

        const result = [];
        for(let i=0; i<payloadLength.length; i++){
            result.push(payloadLength[i][1])
        }
        
        const rst = result.map(v=>{
            return {id:v.id,Question:v.Question,Answer:v.Answer}
        })
        // []
            return {
                ...state,
                FAQ: [...rst]
            
                
            }
        default:
            return state
    }
}

export default reducer 