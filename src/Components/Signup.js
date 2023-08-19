import React, { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" ,  experience: "",
          education: '', skills: '', phone_no:"", about:""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation,
                experience: credentials.experience, education: credentials.education, skills: credentials.skills, phone_no: credentials.phone_no,
            about: credentials.about})

        });
        const json = await response.json();
        console.log(json);
        if (!json.success) {
            alert("Enter Valid Credentials ")
        }
    }
const onchange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}
    
    return (
        <>
        <div>
        <div className='abc container bg-primary text-white'>SIGN IN TO SEE THE DASHBOARD</div>
            </div>
            <div className="container" style={{"marginBottom":"10px", "marginTop":"20px"}}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onchange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputaddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputaddress" name='geolocation' value={credentials.geolocation} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputabout" className="form-label">About us</label>
                        <input type="text" className="form-control" id="exampleInputabout" name='about' value={credentials.about} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputnumber" className="form-label">Number</label>
                        <input type="number" className="form-control" id="exampleInputnumber" name='phone_no' value={credentials.phone_no} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputexperience" className="form-label">Experience</label>
                        <input type="text" className="form-control" id="exampleInputexperience" name='experience' value={credentials.experience} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputskills" className="form-label">Skills</label>
                        <input type="text" className="form-control" id="exampleInputskills" name='skills' value={credentials.skills} onChange={onchange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputeducation" className="form-label">Education</label>
                        <input type="text" className="form-control" id="exampleInputeducation" name='education' value={credentials.education} onChange={onchange}/>
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
                </form>
            </div>
            <div>


</div>
        </>
    )
}


/////     -----------------------

// src/components/UserForm.js
// import React, { useState } from 'react';
// import { addUserToDatabase } from '../api/api'; // Simulated API call


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await addUserToDatabase(formData); // Simulated API call
//       console.log('User added:', response);
//       // You can redirect or show a success message here
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Details Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Experience:
//           <textarea
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Education:
//           <textarea
//             name="education"
//             value={formData.education}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Skills:
//           <input
//             type="text"
//             name="skills"
//             value={formData.skills}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UserForm;
