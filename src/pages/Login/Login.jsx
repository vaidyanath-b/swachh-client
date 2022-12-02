import { useState } from 'react'

import './Login.scss'

import { login } from '../../services/users'

export default function Login() {
  const [user, setUser] = useState({
    username: 'default',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
  }

  return (
    <form id="login" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" onChange={handleChange}>
          Username
        </label>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <label htmlFor="password" onChange={handleChange}>
          Password
        </label>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  )
}
