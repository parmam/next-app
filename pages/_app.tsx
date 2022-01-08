import '../styles/globals.css'

import { Provider } from 'react-redux'
import useStore from '../src/infrastructure/redux/store'
import  Header  from '../src/views/components/header'
import  Footer  from '../src/views/components/footer'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  const store = useStore() 

  return(
    <Provider store={store}>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
