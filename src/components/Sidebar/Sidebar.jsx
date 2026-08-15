import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false)  //in this state we will strore the value of the sidebar whether extended or not.

  return (
    <div className='sidebar'>

      <div className='top'>

        <img
          className='menu-icon'
          src={assets.menu_icon}
          alt='Menu'
          onClick={() => setExtended(prev => !prev)}  //when i will click on the sidebar menu icon,it will show us the content written,that was hidden(new chat,settings..etc)
        />

        <div className='new-chat'>
          <img src={assets.plus_icon} alt='' />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react...</p>
            </div>
          </div>
        ) : null}

      </div>

      <div className='bottom'>

        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>History</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>

      </div>

    </div>
  )
}

export default Sidebar