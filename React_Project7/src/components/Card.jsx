import { LuFileSpreadsheet } from "react-icons/lu";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, referance}) {
  return (
    <motion.div drag dragConstraints={referance} whileDrag={{scale:1.2}} dragElastic={1}>
        <div className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-8 px-5 overflow-hidden ">
        <LuFileSpreadsheet  />
        <p className=" text-sm mt-6 font-semibold">{data.desc}</p>
        <div className="absolute bottom-0 left-0 w-full">
            <div className="flex items-center justify-between mb-1 py-3 px-8">
                <h5>{data.filesize}</h5>
                <span className="w-5 h-5  rounded-full">
                    {data.close == true ? <IoMdCloseCircleOutline /> : <MdDownloadForOffline size="1.3em"/>}
                    
                </span>
            </div>
            {
                data.tag.isopen ? (<div className={`tag w-full p-3 ${data.tag.tagcolor === "green" ? "bg-green-500" : "bg-blue-400"}`}>
                <h3 className="flex justify-center text-sm font-semibold">{data.tag.tagtitle}</h3>
                </div>) : null
            }
            
        </div>
        </div>
    </motion.div>
  )
}
export default Card