import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href='https://www.google.com/' target='_blank'>Ok Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://www.youtube.com/', target: '_blank'},
  'Visit Youtube'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // anotherElement
  // reactElement

  <App/>
)
