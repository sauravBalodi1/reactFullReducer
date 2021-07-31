import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
const Header = () => {
    const dispatch = useDispatch();
    const [initial, setinitial] = useState('')
    const handlekeydown=(e)=>{
          const trimmedtext=initial.trim()
          
          if(e.which===13&&trimmedtext)
          {console.log(trimmedtext)
              dispatch({
                  type:'todos/todoAdded',payload:trimmedtext
              })
              setinitial('')
          } 
    }
    return (
        <div>
           <h1>Todos</h1>
           <input 
           type="text"
           placeholder="Enter what you wnat to add"
           style={{width:500,height:40}}
           value={initial}
           onChange={(e)=>setinitial(e.target.value)}
           onKeyDown={handlekeydown}/> 
        </div>
    )
}

export default Header
