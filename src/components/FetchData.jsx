import React, { useState, useEffect } from 'react'
import Users from './Users';

function FetchData() {

  const [users, SetUsers] = useState([]);

  useEffect(() => {

    async function DataFetch() {

      const response = await (await fetch('https://randomuser.me/api/?results=5')).json();
      SetUsers(response.results);
    }

    DataFetch();

  }, [])

  return (

    <div className="user-list">
      <ul>
        {users.map((item, index) => (
          <Users item={item} />
        ))

        }
      </ul>
    </div>


  )
}

export default FetchData;