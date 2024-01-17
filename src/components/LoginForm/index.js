// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onChangeUsername = event => {
    //  console.log(event.target.value)
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    //  console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  getSubmitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  formSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    //  error_msg: "username and password didn't match"
    //  status_code: 400
    if (response.ok === false) {
      this.setState({errorMsg: `*${data.error_msg}`})
    } else {
      this.setState({errorMsg: ''})
    }

    if (response.ok === true) {
      this.getSubmitSucess()
    }
  }

  render() {
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-form-card">
        <img
          className="sm-app-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="login-logo-img-card">
          <img
            className="login-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form className="form-card" onSubmit={this.formSubmit}>
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="username-card">
            <label htmlFor="text" className="username-label-text">
              USERNAME
            </label>
            <input
              type="text"
              id="text"
              value={username}
              onChange={this.onChangeUsername}
              className="username-label-text-input"
              placeholder="Username"
            />
          </div>
          <div className="password-card">
            <label htmlFor="passwordd" className="username-label-text">
              PASSWORD
            </label>
            <input
              type="password"
              id="passwordd"
              value={password}
              onChange={this.onChangePassword}
              className="password-label-text-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-msg">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
