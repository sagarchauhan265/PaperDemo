const iniatialState={
    name:'ram',
    counter:0,
    item:['book','note','pen','pencle','box'],
}

export const reducer =(state=iniatialState,action)=>{
    switch(action.type){
        case 'CHANGE_NAME' :{
            return{
                ...state,
                 name:action.payload

            }
        }

        case 'INCREMENT_COUNT' :{
            return{
                ...state,
                counter: state.counter + 1,

            }
        }
        case 'DECREMENT_COUNT' :{
            return{
                ...state,
                counter:state.counter - 1,

            }
        }
       
    }
   
   
    return state;
}