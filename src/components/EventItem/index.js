// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onEventChange, isActiveEvent} = props
  const {id, imageUrl, location, name, registrationStatus} = eventDetails

  const onClickEventButton = () => {
    onEventChange(registrationStatus, id)
  }

  const eventClassName = isActiveEvent ? 'event-img active-event' : 'event-img'

  return (
    <li className="event-list-item">
      <button type="button" className="button" onClick={onClickEventButton}>
        <img src={imageUrl} alt="event" className={eventClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
