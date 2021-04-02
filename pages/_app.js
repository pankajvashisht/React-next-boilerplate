import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from 'store'
import { ThemeProvider } from 'styled-components'
import WebTheme from 'Theme'
import { WebLayout } from 'layout'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={WebTheme}>
      <Provider store={store}>
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
