import { useRef, useState } from "react";
import Card from "./Card"


function Forecast() {

    const ref = useRef(null);

    const [data, SetData] = useState([
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
        
      ]);

    const handleDelete = (id) =>{
        SetData(data.filter((data)=> data.id !== id));
    };
  


  return (
    <div>
        <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5">
           {data.map((item, index)=> (
            <Card 
            key={item.id}
            data={item} 
            onDelete={handleDelete}
            referance={ref}
            />
           ))}
        </div>
    </div>
  )
}
export default Forecast
