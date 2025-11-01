import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import '@/assets/css/index.less'

import App from '@/App';
import theme from '@/assets/theme';
import store from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)




root.render((
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <App />
            </HashRouter>
        </ThemeProvider>
    </Provider>
))
