import { useParams } from "react-router-dom"


function User() {
 
    const {userId} = useParams()

  return (
    <div className="bg-gray-400 text-black p-10 text-2xl">User: {userId}</div>
  )
}
export default User