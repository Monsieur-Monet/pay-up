import App from 'components/App'
import 'index.css'
import reportWebVitals from 'reportWebVitals'
import { sendToVercelAnalytics } from 'vitals'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

reportWebVitals(sendToVercelAnalytics)
