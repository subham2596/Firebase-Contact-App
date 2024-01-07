import React from 'react'

const Header = () => {
  return (
    <div className='bg-white flex items-center justify-center gap-2 py-2 rounded-md'>
        <div className="logo-container">
            <img src="images/logo_firebase.png" alt="Firebase Logo" />
        </div>
        <h2 className='font-bold'>Firebase Contact App</h2>
    </div>
  )
}

export default Header