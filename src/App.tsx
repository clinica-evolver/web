import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { Login } from './modules/login/screen'
import { GlobalStyle } from './global/styles'
import { defaultTheme } from './global/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Login />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
