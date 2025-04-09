import React, { useEffect, useState } from "react";
import reportIcon from "../assets/File text 1.png";
import importIcon from "../assets/Download.png";
import exportIcon from "../assets/Move up.png";
import OrderRecord from "./OrderRecord";
import { getOrders, updateOrder } from "../server/api";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};
Modal.setAppElement("#root");

export default function OrderTable() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [editedOrder, setEditedOrder] = useState({});
  const [order, setOrder] = useState([]);

  const tableHeaders = [
    "CUSTOMER NAME",
    "COMPANY",
    "ORDER VALUE",
    "ORDER DATE",
    "STATUS",
  ];

  const handleEditClick = (order) => {
    setSelectedOrder(order);
    setEditedOrder(order);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateOrder(selectedOrder.id, editedOrder);
      setOrder((prevOrders) =>
        prevOrders.map((order) =>
          order.id === selectedOrder.id ? editedOrder : order
        )
      );
      setModalOpen(false);
    } catch (error) {
      console.error("Failed to update order:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOrders();
        setOrder(data);
      } catch (error) {
        console.log("Lỗi khi fetch API Orders " + error);
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
          <OrderRecord
            key={item.id}
            handleEditClick={handleEditClick}
            item={item}
          />
        ))}
      </table>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="OrderUpdate"
        style={customStyles}
      >
        <div className="flex justify-between p-3 border-b border-gray-300">
          <h2 className="text-lg">Order Update</h2>
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            className="text-xl rounded px-2 hover:cursor-pointer hover:border hover:border-[red] hover:text-[red]"
          >
            X
          </button>
        </div>
        <div className="grid grid-cols-12 m-3 gap-4">
          <label className="col-span-4">Customer Name :</label>
          <input
            type="text"
            name="customerName"
            className="col-span-8 border rounded border-gray-300 p-1"
            value={editedOrder.customerName || ""}
            onChange={handleInputChange}
          />
          <label className="col-span-4">Company :</label>
          <input
            type="text"
            name="company"
            className="col-span-8 border rounded border-gray-300 p-1"
            value={editedOrder.company || ""}
            onChange={handleInputChange}
          />
          <label className="col-span-4">Order Value :</label>
          <input
            type="text"
            name="orderValue"
            className="col-span-8 border rounded border-gray-300 p-1"
            value={editedOrder.orderValue || ""}
            onChange={handleInputChange}
          />
          <label className="col-span-4">Order Date :</label>
          <input
            type="text"
            name="orderDate"
            className="col-span-8 border rounded border-gray-300 p-1"
            value={editedOrder.orderDate || ""}
            onChange={handleInputChange}
          />
          <label className="col-span-4">Status :</label>
          <select
            name="status"
            className="col-span-8 border rounded border-gray-300 p-1"
            value={editedOrder.status || ""}
            onChange={handleInputChange}
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="flex gap-4 p-3 border-t border-gray-300 justify-end">
          <button
            className="bg-[green] rounded px-4 py-1 text-white"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-[red] rounded px-4 py-1 text-white"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
