import React from "react";
import { currentOrder } from "../../Data/currentOrder";
import "./AmaldagiBuyurtmalar.scss";
const AmaldagiBuyurtmalar = () => {
  return (
    <div className="orderParent">
      <div className="inform">
        <h2>Amaldagi Buyurtmalar</h2>
        <input type="date" />
      </div>

      <div className="condition">
        <p>Buyurtma</p>
        <p>Vaqti</p>
        <p>Jami narx</p>
        <p>To’lov turi</p>
        <p>To’lov holati</p>
        <p>Kurer haqida</p>
      </div>

      {currentOrder.map((item, index) => (
        <div className="order">
          <p> {item.raqami}</p>
          <p> {item.vaqti}</p>

          <p> {item.narxi}</p>
          <p> {item.turi}</p>
          <p className={` ${item.holati === "To'langan" ? "green" : "red"}`}>
            {item.holati}
          </p>
          <p
            className={` ${
              item.kurer === "Kutilmoqda" ? "redCircle" : "greenCircle"
            }`}
          >
            {item.kurer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AmaldagiBuyurtmalar;
