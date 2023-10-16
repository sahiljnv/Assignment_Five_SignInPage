import React from 'react'
import Navigation from './Src/navigation-components/navigation'
import SignUpContextApi from './Src/context-api/sign-up-context-api'
const App = () => {
  return (
    
      <SignUpContextApi>
       
        <Navigation />
      </SignUpContextApi>
  
  )
}

export default App
