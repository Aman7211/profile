
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:4000/api/getuser')
      .then(response => response.json())
      .then(data => {
        setUserData(data.data); // Assuming data.data contains the user data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <div className='abc container bg-primary text-white'>WELCOME TO THE ORU PHONES</div>
      <h1 className='text-center mt-5 mb-5 bg-danger text-white py-5'>My Profile</h1>
     <div className='container pqr'>
      <ul>
        {userData.map(user => (
            <div key={user._id} >
          <div className='d-flex '>
                      <div className='card card-body fs-5 ' style={{width:"400px", height: "310px"}}>
                        <div className='fw-bold'>Name: </div> 
                      <div>{user.name}</div>
                      <div className='fw-bold my-3'>Phone Number: </div>
                        <div >{user.phone_no}</div>
                      <div className='fw-bold my-3'>Address: </div>
                        <div>{user.location}</div>
                        </div>

                       <div className='card card-body fs-5 mx-4 ' style={{width:"400px", height: "310px"}}>
                        <div className='fw-bold'>About us: </div>
                        <div>{user.about}</div></div></div>
                     
                      <div className='d-flex my-5'>
                      <div className='card card-body fs-5 ' style={{width:"400px", height: "310px"}}><div className='fw-bold'>Skills: </div> 
                      <div>{user.skills}</div>
                      <div ><div className='fw-bold my-3'>Education: </div>
                        <div >{user.education}</div></div>
                        <div ><div className='fw-bold my-3'>Email: </div>
                        <div >{user.email}</div></div>
                      </div>
                        
                        {/* ------------------------------------- */}

                       <div className='card card-body fs-5 mx-4 ' style={{width:"400px", height: "310px"}}><div className='fw-bold'>Experience: </div>
                        <div>{user.experience}</div></div>
                        </div>
                        </div>
            
                       
                     
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Profile;


// const Profile = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend API
//     axios.get('/api/getuser')
//       .then(response => {
//         setUserData(response.data.data); // Assuming response.data.data contains the user data
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {userData.map(user => (
//           <li key={user._id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;





// ---------------------------
// import React, { useState, useEffect } from 'react';


// const Profile = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend API using the fetch API
//     fetch('http://localhost:4000/api/getuser')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);


//   return (
//     <div>
//         <div className='abc container bg-primary text-white'>WELCOME TO THE ORU PHONES</div>
//       <h1>Fetched Data</h1>
    
//       <ul>
//         {data.map(item => (
//            <div key={item._id}>
//            <li>Name: {item.name}</li>
//            <li>Phone Number: {item.phone_no}</li>
//            <li>Address: {item.address}</li>
//             <li>About us: {item.about}</li>
//             <li>Phone Number: {item.phone_no}</li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;



// // // AnotherComponent.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const AnotherComponent = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     // Fetch data from the backend API
// //     axios.get('/api/fetchdata')
// //       .then(response => {
// //         setData(response.data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching data:', error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Fetched Data</h1>
// //       <ul>
// //         {data.map(item => (
// //           <li key={item._id}>{item.name} - {item.email}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default AnotherComponent;
