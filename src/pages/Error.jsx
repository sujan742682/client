import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error_info=useRouteError();
  console.log(error_info)
  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Error