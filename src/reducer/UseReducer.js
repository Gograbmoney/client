
export const initialState = {
    user : localStorage.getItem("user") || false
} ;
export const reducer = (state, action)=>{
     
    if(action.type === 'USER'){
        if(action.payload === true){
            localStorage.setItem("user", action.payload); 
            return { user : action.payload}           
        }else{
            localStorage.clear();   
            return { user : action.payload}         
        }
    }
    return state 
}
