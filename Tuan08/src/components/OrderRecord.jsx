import { useState } from "react";
import editIcon from "../assets/create.png";
import avt from "../assets/Avatar (2).png"
export default function OrderRecord() {
  const [order, setOrder] = useState();
  
  return (
    <tr>
      <td className="pl-4 py-3"><input type="checkbox"/></td>
      <td className="flex gap-2 items-center py-3"><img src={avt}/><p>Aloha Aloha</p></td>
      <td className="py-3">Mai da choc</td>
      <td className="py-3">1-1-1</td>
      <td className="py-3">asdfaf</td>
      <td className="py-3">asfd</td>
      <td className="py-3">
        <img src={editIcon} />
      </td>
    </tr>
  );
}
