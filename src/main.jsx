import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootLayout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <RootLayout>
    <App />
  </RootLayout>,
)
