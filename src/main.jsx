import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Layout} from './Layout'


console.log(Layout)

createRoot(document.getElementById('root')).render(
  <Layout></Layout>
)
