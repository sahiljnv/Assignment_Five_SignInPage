import React from 'react'
import Navigation from './Src/NavigationComponents/Navigation'
import SignUpContextApi from './Src/ContextApi/SignUpContextApi'
const App = () => {
  return (
    
      <SignUpContextApi>
       
        <Navigation />
      </SignUpContextApi>
  
  )
}

export default App
