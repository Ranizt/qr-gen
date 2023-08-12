import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [xname, setXname] = useState("");
  const [rating, setRating] = useState<number | string>(""); // Sử dụng kiểu dữ liệu number | string

  const handleXname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setXname(inputValue);

    axios
      .get("https://codeforces.com/api/user.info", {
        params: { handles: inputValue },
      })
      .then((response) => {
        const userRating = response.data.result[0]?.rating; // Kiểm tra tồn tại của dữ liệu
        setRating(userRating || "N/A"); // Sử dụng "N/A" nếu không có giá trị rating
        console.log(userRating);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Nhap vao day" onChange={handleXname} />
      <br />
      <p className="display">
        Rating cua tml {xname} nay la: {rating}
      </p>
    </div>
  );
}

export default App;
