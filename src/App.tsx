import React from 'react'
import ConnectedApp from './ConnectedApp'

import Store from './store'

class App extends React.Component {
  render() {
    return (
      <>
        <Store>
          <ConnectedApp />
        </Store>
      </>
    )
  }
}

export default App
