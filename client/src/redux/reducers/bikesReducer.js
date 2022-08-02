const initialData = {
    bikes : [],

};

export const bikesReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'BIKES' : {
             return{
                 ...state,
                 bikes : action.payload
             }
         }
         
         default:return state
     }

}

