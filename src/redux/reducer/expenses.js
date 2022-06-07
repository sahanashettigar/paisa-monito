import { SEARCH_EXPENSE } from "../actionTypes/expenses";

const initialList=()=>{
    const list=localStorage.getItem("expense-list")//takes the key
    let expenses=[]
    if(list){
        expenses=JSON.parse(list)
    }
    return expenses;
}
const initialState={
    expenseList:initialList(),
    query:""
}
export const expenseReducer=(state=initialState,action) =>{
    switch(action.type){
        case "ADD_EXPENSE":
            localStorage.setItem("expense-list",JSON.stringify([...state.expenseList,action.data]))
            return {
                ...state,expenseList:[...state.expenseList,action.data]
            };
        case "DELETE_EXPENSE":
            const {data}=action;
            console.log(data);
            const updatedList=state.expenseList.filter(
                item=>item.createdAt!==data.createdAt
            );
            localStorage.setItem("expense-list",JSON.stringify(updatedList))
            return{
                ...state,expenseList:updatedList
            }
        case SEARCH_EXPENSE:
            const query=action.data
            return{
                ...state,data:query
            }
        default:
            return state;
    }
}