import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ListaContatos from './components/ListaContato'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ListaContatos />
    </Provider>
  )
}

export default App
