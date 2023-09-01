import { useForm } from "../hooks/useForm.js";

export const FormularioComponent = () => {
    const initialForm = {
        userName : '',
        email :'',
        password: ''
    }

    const { formState ,userName , email , password,onInputChange}= useForm(initialForm);


    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(formState);
    }

    return (

    <form  onSubmit={onSubmit}>
        <div className="mb-3">
            <label htmlFor="userName">User Name</label>
            <input 
            type="text" 
            className="form-control" 
            name="userName"
            placeholder="Enter your Username" 
            value={userName}
            onChange={onInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            name="email"
            placeholder="Enter your email" 
            value={email}
            onChange={onInputChange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            className="form-control" 
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={onInputChange}
            />
        </div>
        <div className="mb-3 form-check">
            <label htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button 
            type="submit"
            className="btn btn-primary"
            >Submit</button>
    </form>
  )
}
