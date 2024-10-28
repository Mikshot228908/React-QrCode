import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

import "./qrCode.css";

export const QrCode = () => {
  const [value, setValue] = useState("");
  const [isShowQrCode, setShowQrCode] = useState(false);

  const onClickHandler = (event) => {
    setShowQrCode(true);
  };

  const onChandeHandler = (event) => {
    setValue(event.target.value);
  };

  console.log(isShowQrCode);

  return (
    <div className="container">
      {isShowQrCode ? <QRCodeSVG value={value} fgColor="#696969" size={150}/> : null}
      <input
        type="text"
        value={value}
        onChange={onChandeHandler}
        className="input"
        placeholder="Введите зашифрованное сообщение"
      ></input>
      <button className="btn-primary" type="button" onClick={onClickHandler}>
        Создание Qr-code
      </button>
    </div>
  );
};
