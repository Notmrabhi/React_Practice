import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

    const data = useLoaderData()

    // const[data, setdata] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/notmrabhi')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setdata(data)
    //     })

    // }, []) 
 

  return (

    <div className="bg-gray-400 text-black p-10 text-3xl">
        Github: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
         </div>

  )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/notmrabhi')
    return response.json()
}