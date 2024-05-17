import { useState } from 'react'
import './Login.css'
import stopwatch from '../assets/stopwatch.png'


function Login() {
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [Username,setUsername] = useState();


  return (
    <>
    <body>
    <div>
      <img src={stopwatch} className="flip"/>
      <h1>
        TIME TRACKER
      </h1>
      <div className="input-container">
        <label className="input-label">Username:</label>
        <input type="text" id="name" className="input-field"
         value={password}
         onChange={(e) =>
             setPassword(e.target.value)
         }/>
        <br/>
        <br/>
        <label className="input-label">Password:</label>
        <input
                    id="pass"
                    className="input-field"
                    type={
                        showPassword ? "text" : "password"
                    }
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
      </div>
    </div>
    </body>
    <div className="custom-shape-divider-bottom-1715904476">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </div>
    </>
  )
}

export default Login
