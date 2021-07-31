import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { availablecolors, capital } from '../filters/colors'
const Remainingtodos=({count})=>{
   const suffix=count===1?'':'s'
   return (
       <>
       <h5>Remaining todos</h5>
       <strong>{count}</strong>item{suffix} left
       </>
   )
}

const Statusfilter=({value:status,onChange})=>
{
  const renderedfilters=Object.keys(Statusfilter).map((key)=>{
         const value=Statusfilter[key]
         const handleclick=()=>onChange(value)
         const classname=value===status?'selected':''
         return (
             <li key={value}>
               <button className={classname} onClick={handleclick}>
                   {key}
               </button>
             </li>
             
         )
  })
  return (
  
      <>
      <h4>filter by status</h4>
      <ul>{renderedfilters}</ul>
      </>

  )

}
const Colorfilters=({value:colors,onChange})=>
{
    
    
    const renderedcolors=availablecolors.map((color)=>{
        console.log(color)
        const checked="Blue".includes( color)//by changes
        const handlechange=()=>{
            const changetype=checked?'removed':'added';
            onChange(color,changetype)
        }
    
    return (
        <>
          <input type="checkbox"
             name={color}
             checked={checked}
             onChange={handlechange}
          />
          <span style={{backgroundColor:color}}></span>
          {capital(color)}
        </>
    )
})
return (<>
     <h5>Filter by color</h5>
     <form>{renderedcolors}</form>
</>
)
}
const Footer = () => {
    const {status,colors}=useSelector((state)=>state.filters)
  
    const dispatch = useDispatch();
    const onMarkCompleted=()=>{
        dispatch({type:'todos/allcompleted'})
    }
    const onClickCompleted=()=>{
         dispatch({type:'todos/clearcompleted'})
    }
    const todosremaining=useSelector((state)=>{
        const left=state.todos.filter((todo)=>!todo.completed)
        return left.length;
    })
   
    const oncolorchange=(color,changetype)=>{
        dispatch({type:'filters/colorchanged',
        payload:{color,changetype},
    })

    }
    const onstatuschange=(status)=>{
        dispatch({
            type:'filters/statusfilterchanged',
            payload:status
        })
    }

    return (
        <div>
            <footer>
                <h5>Actions</h5>
                <div>
                <button style={{color:'blue'}} onClick={onMarkCompleted}>Mark All Completed</button>
                <button style={{color:'red'}}onClick={onClickCompleted}>Clear Completed</button>
                </div>
                <div>
                <Remainingtodos count ={todosremaining}/>
                 <Statusfilter value={status} onChange={onstatuschange}/>
                 <Colorfilters value={colors}  onChange={oncolorchange}/>
             </div>

            </footer>
        </div>
    )
}

export default Footer
