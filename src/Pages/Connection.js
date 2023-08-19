import React, { useState } from 'react';
import { data } from '../Data';

const Connection = () => {
  const [connections, setConnections] = useState(data);

  const toggleConnection = (id) => {
    setConnections(prevConnections =>
      prevConnections.map(connection =>
        connection._id === id
          ? { ...connection, showRemove: !connection.showRemove }
          : { ...connection, showRemove: false } // Hide other "Remove Connection" buttons
      )
    );
  };

  return (
    <div>
      <div className='abc container bg-primary text-white mb-5'>
        WELCOME TO THE ORU PHONES
      </div>
      <h1 className='text-center text-white bg-danger py-5'>Connections</h1>
      <ul className='d-flex justify-content-around'>
        {connections.map(connection => (
          <div className='card card-body bg-success my-3 text-white mx-3'
            style={{ width: '300px' }}>
            <div>{connection.name}</div>
            <div>{connection.email}</div>
            <div className='btn bg-white text-success mt-4'>
              <div onClick={() => toggleConnection(connection._id)}>
                {connection.showRemove ? (
                  <div >Remove Connection</div>
                ) : (
                  'Connect'
                )}
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Connection;
