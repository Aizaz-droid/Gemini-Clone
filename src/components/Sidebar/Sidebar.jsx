import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {
    // Sidebar collapse and open
    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompt,newChat}= useContext(Context)
//Sidebar ki history me jo data us k display k liye
const loadPrompt= async (prompt) => {
  setRecentPrompt(prompt)
    await onSent(prompt)
}



    return (
        <div className='sidebar'>
            {/* Top Sidebar */}
            <div className='top'>
 {/* onClick function se ye hoga ju menu pr click krenge to  wo expand hojaiga aur dubara click krenge to close hoaiga */}
               <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt='' />
                <div onClick={()=> newChat()} className='new-chat'>
                    <img src={assets.plus_icon} alt=" " />
                    {/* to hide the paragraph exteded used and its ternary */}
                    {extended ? <p>New Chat</p> : null}
                </div>
                {/* To hide the recent history: extended used */}
                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return(
                            //sidebar ki history content show k liye upr wala method aur ye onClick
                            <div onClick={()=>loadPrompt(item)} className='recent-entry'>
                        <img src={assets.message_icon} alt=' ' />
                        {/* sidebar dont show long line thats why slice use */}
                        <p>{item.slice(0,18)} ...</p>
                    </div>
                        )
                    })}
                   
                </div>
                    : null
                }
            </div>
            {/* Bottom Sidebar */}
            <div className='bottom'>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {/* to hide the paragraph extended used */}
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {/* to hide the paragraph extended used */}
                    {extended ? <p>Activity</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {/* to hide the paragraph extended used */}
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>

        </div>
    )
}

export default Sidebar