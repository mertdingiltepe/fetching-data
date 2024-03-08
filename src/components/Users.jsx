import React from 'react'

function Users({ item }) {
  return (
    <div className='user'>
      <img src={item.picture.large} alt={item.name.first} />
      <div className='user-info'>
        <h3 className='user-name'> {item.name.first} {item.name.last}</h3>
        <p>{item.location.country} | {item.location.state}</p>
        <p className='user-email'>Email: {item.email}</p>
      </div>
    </div>
  )
}

export default Users