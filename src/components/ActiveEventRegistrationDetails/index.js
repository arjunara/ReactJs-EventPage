// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderInitialView = () => (
    <p className="initial-message">
      Click on an event, to view its Registration Details
    </p>
  )

  renderRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-logo"
      />
      <h1 className="registered-msg">
        You have already registered for the event
      </h1>
    </div>
  )

  renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-logo"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-registration-img"
      />
      <h1 className="closed-register-heading">Registrations Are Closed Now!</h1>
      <p className="closed-register-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {registrationStatus} = this.props
    switch (registrationStatus) {
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegister()
      default:
        return this.renderInitialView()
    }
  }
}

export default ActiveEventRegistrationDetails
