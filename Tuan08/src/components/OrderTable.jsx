import React, { useEffect, useState } from "react";
import reportIcon from "../assets/File text 1.png";
import importIcon from "../assets/Download.png";
import exportIcon from "../assets/Move up.png";
import OrderRecord from "./OrderRecord";
import { getOrders } from "../server/api";
export default function OrderTable() {
  const tableHeaders = [
    "CUSTOMER NAME",
    "COMPANY",
    "ORDER VALUE",
    "ORDER DATE",
    "STATUS",
  ];
  const [order, setOrder] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrders();
        setOrder(data);
      } catch (error) {
        console.log("Lỗi khi fectch API Orders " + error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 font-bold text-lg my-4">
          <img src={reportIcon} /> <p>Detailed report</p>
        </div>
        <div className="flex gap-3 text-[rgb(245,76,135)]">
          <div
            className="flex gap-2 border rounded px-3 border-[rgb(245,76,135)] items-center"
            style={{ height: "35px" }}
          >
            <img src={importIcon} />
            <p>Import</p>
          </div>
          <div
            className="flex gap-2 border rounded px-3 border-[rgb(245,76,135)] items-center"
            style={{ height: "35px" }}
          >
            <img src={exportIcon} />
            <p>Export</p>
          </div>
        </div>
      </div>
      <table className="w-full">
        <tr className="bg-[rgb(247,249,250)]">
          <th className="text-left pl-4">
            <input type="checkbox" />
          </th>
          {tableHeaders.map((item) => (
            <th
              key={item}
              className="text-left text-[15px] text-[rgb(86,94,107)] py-2"
            >
              {item}
            </th>
          ))}
          <th></th>
        </tr>
        {order.map((item) => (
          <OrderRecord item={item} />
        ))}
      </table>
      <div className="flex justify-between my-2">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
