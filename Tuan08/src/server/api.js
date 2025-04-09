const turnover = "http://localhost:3000/tunrover";
const profit = "http://localhost:3000/profit";
const mewCust = "http://localhost:3000/newCustomer";
const orders = "http://localhost:3000/orders";

export const getTurnOver = async () => {
    const response = await fetch(turnover);
    const data = await response.json();
    return data;
}

export const getProfit = async () => {
    const response = await fetch(profit);
    const data = await response.json();
    return data;
}

export const getNewCust = async () => {
    const response = await fetch(mewCust);
    const data = await response.json();
    return data;
}


export const getOrders = async () => {
    const response = await fetch(orders);
    const data = await response.json();
    return data;
}

export const updateOrder = async (orderId, updatedData) => {
    const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), 
    });

    if (!response.ok) {
        throw new Error("Failed to update order");
    }

    const data = await response.json();
    return data;
};