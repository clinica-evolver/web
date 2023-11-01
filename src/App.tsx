import 'react-toastify/dist/ReactToastify.css'

import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './global/styles'
import { defaultTheme } from '@theme/default'
import { Routes } from './global/routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
