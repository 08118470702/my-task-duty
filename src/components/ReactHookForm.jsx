// import React from 'react'
// import { useForm } from 'react-hook-form'
// import '../styles/UseForm.css'

// const UseForm = () => {
  
//   const onSubmit = (data) => {
//     console.log(data);
//     console.log({...register('email')});
//     console.log({...register('password')});
//   }
  
//   // reset function frovided by hook form 
  
//   // default values 
//   const {
//     register,
//     handleSubmit,
//     formState : { errors }
//   } = useForm()
  
  
//   return (
//     <>
//     {/* handleSubmit will validate your inputs before invoking 'onSubmit' */}
    
    

//     {/* freecodecamp.org  */}
//     <div className="App">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* username  */}
//         <div className="form-control">
//           <label>Username</label>
//           <input type="text" name='username'/>
//         </div>

//         {/* email  */}
//         <div className="form-control">
//           <label >Email</label>
//           <br />
//           <input type="text" name='email' {...register('email', {
//             required : 'Email is required.', 
//             pattern : {
//               // value: /^[^@ ]+@[^@ ]+ \.[^@ .](2,)/,
//               value : '.+@example\.com',
//               message : 'Email is not valid'
//             }
//             })}/>
        

//         {errors.email && <p className='errorMsg text-danger fw-bold'>{errors.email.message}</p>}
//         </div>

//         {/* password  */}
//         <div className="form-control">
//           <label >Password</label>
//           <br />
//           <input type="password" name='password' {...register('password', {
//             required : true, 
//             validate : {
//               checkLength : (value) => value.length >= 8,
//               matchPattern : (value) =>
//               /(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.\s)(?=.[!@$])/.test(value)
//             } 
//           })}/>
          

//           {/* more validations  */}
//           {errors.password?.type === 'required' && (
//             <p className='text-danger fw-bold'>Password is required</p>
//           )}
//           {errors.password?.type === 'checkLength' && (
//             <p className='text-danger fw-bold'>Password should be atleast 8 characters</p>
//           )}
//           {errors.password?.type === 'matchPattern' && (
//             <p className='text-danger fw-bold'>Password should contain atleast ! uppercase letter, lowercase letter, digit and special symbol</p>
//           )}
//         </div>

//         <div className="form-control">
//           <label ></label>
//           <button type="submit">Login</button>
//         </div>
//       </form>

//       {/* defailt values  */}
//       {/* <Form.Control type='text'
//       {...register('first_name')} */}
//     </div>

    
//     </>
//   )
// }

// export default UseForm