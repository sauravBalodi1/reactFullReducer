export const StatusFilters={
    All:'all',
    Active:'active',
    Completed:'completed'
}
const initialstate={
    status:StatusFilters.All,
    color:[],
}
export default function filtersReducer(state=initialstate,action)
{
    switch(action.type)
    {
        case "filters/statusfilterchanged":
            return {
                ...state,
                status:action.payload
            }
         case 'filters/colorchanged':
           let {color,changetype}=action.payload;
           const {colors}=state
            switch(changetype)
            {
                case 'added':
                    if(colors.includes(color))
                    {
                        return state
                    }
                    return {
                        ...state,
                        colors:state.colors.concat(color),
                    }
                case 'removed':
                    return {
                        ...state,
                       colors:state.colors.filter((existingcolor)=>existingcolor!==color),
                    } 
                default:
                    return state       
            
            }
            default: return state;
    }
}
