
const goods=(state=[],action)=>{
    switch(action.type){
        case 'ADD_GOODS':
            console.log("Action OK");
            console.log(state);
            return[
                ...state,
                {
                    id:action.id,
                    title:action.title,
                    image:action.image
                }
            ]
            default:return state;
    }
}
export default goods;