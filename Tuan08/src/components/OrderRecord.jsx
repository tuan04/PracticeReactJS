import { useEffect, useState } from "react";
import editIcon from "../assets/create.png";
export default function OrderRecord({ item, handleEditClick }) {
  const [status, setStatus] = useState("bg-[rgb(240,247,252)] text-[rgb(55,154,230)]");
  useEffect(()=>{
    if(item.status == "In-progress") setStatus("bg-[rgb(255,250,240)] text-[rgb(153,106,12)]");
    if(item.status == "Completed") setStatus("bg-[rgb(237,252,242)] text-[rgb(17,122,52)]");
  }, []);

  return (
    <tr className="border-b border-gray-200">
      <td className="pl-4 py-3">
        <input type="checkbox" />
      </td>
      <td className="flex gap-2 items-center py-3">
        <img src={item.image} />
        <p>{item.customerName}</p>
      </td>
      <td className="py-3">{item.company}</td>
      <td className="py-3">${item.orderValue}</td>
      <td className="py-3">{item.orderDate}</td>
      <td className="py-3">
        <p className={status + " inline-block rounded-full px-2"}>{item.status}</p>
      </td>
      <td className="py-3 hover:cursor-pointer">
        <img src={editIcon} onClick={()=>{handleEditClick(item)}}/>
      </td>

    </tr>
  );
}
