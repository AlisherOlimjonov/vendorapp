import React from "react";
import { newOrder } from "../../Data/newOrder";
import "./YangiBuyurtmalar.scss";
const YangiBuyurtmalar = () => {
  return (
    <div className="cardParent">
      {newOrder.map((item, index) => (
        <div className="card">
          <p>Buyurtma Raqami : {item.raqami}</p>
          <p>Buyurtma vaqti : {item.vaqti}</p>
          <p>Jami narx : {item.narxi} so'm</p>
          <p>Tolov turi : {item.turi}</p>
          <p className={` ${item.holati === "To'langan" ? "green" : "red"}`}>
            Holati :{item.holati}
          </p>
        </div>
      ))}
    </div>
  );
};

export default YangiBuyurtmalar;
