import "../style/SignUp.css"
import {useState} from 'react'

const SignUp = (props) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const changePassword = (event) => {
    setPassword(event.target.value)
  }

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const validatePasswords = (event)=> {
      event.preventDefault()
      if(password === confirmPassword){
        
        props.userAuthChanged()

      } else{
        alert("You got to make your passwords the same!")
      }
  }

  return(
    <div>
      <h1> Sign Up!</h1>
      <form onSubmit={validatePasswords} className="sign-up">
        <input type="text" />
        <input type="password" onChange={changePassword} value={password}/>
        <input type="password" onChange={changeConfirmPassword} value={confirmPassword}/>
        <input type="submit" />
    </form>
    </div>
    
  )
}

export default SignUp
