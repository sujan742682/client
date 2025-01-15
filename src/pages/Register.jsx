import { Link } from "react-router-dom"
import {
  FormRow
} from "../components"
const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to='/login'>Login Page</Link>
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            1 of 3
          </div>
          <div className="col-md-auto">
            <form action="">
              <FormRow type='Name' name='userName' defaultValue='Your Name' labelText='write your name'/>
              <FormRow type='email' name='userEmail' defaultValue='Sujan' labelText='Email Address'/>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col col-lg-2">
            3 of 3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register