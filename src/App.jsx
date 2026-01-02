import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Welcome to Supamate</h1>
          <p className="subtitle">A modern React app ready for Vercel</p>
        </div>
        
        <div className="card">
          <div className="counter-section">
            <button 
              className="button button-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
            <p className="hint">
              Click the button to increment the counter
            </p>
          </div>
        </div>

        <div className="info-section">
          <h2>Getting Started</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🚀 Development</h3>
              <p>Run <code>npm run dev</code> to start the development server</p>
            </div>
            <div className="info-card">
              <h3>📦 Build</h3>
              <p>Run <code>npm run build</code> to create a production build</p>
            </div>
            <div className="info-card">
              <h3>☁️ Deploy</h3>
              <p>Push to GitHub and connect your repo to Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

