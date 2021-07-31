const inititalState=[]
function nextTodoId(todos){
    const maxId=todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),-1);
    return maxId+1;
}
export default function todosReducer(state=inititalState,action)
{
    switch(action.type)
    {
        case "todos/todoAdded":
            return [
                ...state,
                {

                    id:nextTodoId(state),
                    text:action.payload,
                    completed:false,
                }
            ]
         case 'todos/todoToggled':
             return  state.map((todo)=>{
                 if(todo.id!==action.payload)
                 {
                     return todo
                 }
                 return {
                     ...state,
                     completed:!todo.completed
                 }
             })
        case 'todo/colorselected':
            const {color,todoId}=action.payload
            return state.map((todo)=>{
                if(todo.id!==todoId)
                {
                    return todo
                }
                return {
                    ...todo,
                    color,
                }
            })
        case "todos/tododeleted":
            return state.filter((todo)=>todo.id!=action.payload)
           
        case "todos/allcompleted":
            return state.map((todo)=>{
                return {...todo,completed:true}
            })
        case "todos/clearcompleted":
            return state.filter((todo)=>!todo.completed)
                
        default:
            return state         
    }
}