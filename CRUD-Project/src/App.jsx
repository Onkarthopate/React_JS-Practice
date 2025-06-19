import UserLogic from './components/UserLogic'

import React, { Suspense } from "react"

// const UserLogic = React.lazy(() => import("./components/UserLogic"))

function App() {

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <UserLogic />
      </Suspense> */}

      <UserLogic/>

    </>
  )
}

export default App
