import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/App'
import {BrowserRouter} from "react-router-dom"


const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

