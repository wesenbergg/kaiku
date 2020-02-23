import React from 'react'

const DirectUser = ({ user }) => {
  const message = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
  const formatMessage = (message, maxLength) => message.length < 40 ? message.slice(0, maxLength): message.slice(0, maxLength) + '...'

  return (
    <div className="profile row">
      <img src="profile-thumb-nobg.png" alt="profiili" className={`${user.color} profile-thumb`} />
      <div>
        <p>{user.name}</p>
          <span className="text-sm">12.41: {formatMessage(message, 40)}</span>
      </div>
    </div>
  )
}

export default DirectUser