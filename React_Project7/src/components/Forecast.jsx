import { useRef, useState } from "react";
import Card from "./Card"


function Forecast() {

    const ref = useRef(null);

    // const [deleteData, SetdeleteData] = useState({closee: false})

    // const handleDelete = () =>{
    //     SetdeleteData({closee: true})
    // };
  
  const data = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagtitle: "DownLoad Now", tagcolor: "green"},
    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe .",
        filesize: ".2mb",
        close: false,
        tag: { isopen: true, tagtitle: "Upload", tagcolor: "red"},
    },
    {
        id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.",
      filesize: ".9mb",
      close: false, 
      tag: { isopen: true, tagtitle: "DownLoad Now", tagcolor: "green"},
    },
    {
        id: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.",
        filesize: ".12mb",
        close: true, 
        tag: { isopen: false, tagtitle: "DownLoad Now", tagcolor: "green"},
      },
    
  ];


  return (
    <div>
        <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5">
           {data.map((item, index)=> (
            <Card 
            data={item} 
            referance={ref}
            />
           ))}
        </div>
    </div>
  )
}
export default Forecast