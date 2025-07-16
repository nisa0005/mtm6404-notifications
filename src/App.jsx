import { useState } from 'react'
import notificationsData from './notifications'
import './App.css'

function NotificationWrapper({ children }) {
  return (
    <div className='notification-wrapper'>
      {children}
    </div>
  )
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const clearAll = () => {
    setNotifications([])
  }

  const clearIndividual = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))
  }


  return (
    <div>

      <h1> {notifications.length} Notifications </h1>

      <button onClick={clearAll}>
        Clear All
      </button>
      
      {notifications.map((notification) => (
        <NotificationWrapper key={notification.id}>
          <h2>{notification.name}</h2>
          <p>{notification.message}</p>
          <button onClick={() => clearIndividual(notification.id)}>Clear</button>
        </NotificationWrapper>
      ))}

    </div>
  )
}

export default App