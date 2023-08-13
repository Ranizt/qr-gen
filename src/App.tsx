import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import "./App.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

export default function App() {
  const a: { label: string; code: string }[] = [];
  axios
    .get("https://api.vietqr.io/v2/banks", {
      params: {},
    })
    .then((response) => {
      for (let tmp of response.data.data) {
        a.push({ label: tmp.shortName + " - " + tmp.name, code: tmp.code });
      }
    });

  var [bankId, setBankId] = useState("");
  var [accountNo, setAccountNo] = useState("");
  var [amount, setAmount] = useState("");
  var [des, setDes] = useState("");
  var [accountName, setAccountName] = useState("");
  var [state, setState] = useState(false);
  var [url, setURL] = useState("");
  //img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<DESCRIPTION>&accountName=<ACCOUNT_NAME>

  return (
    <div>
      <h1> Trình tạo mã QR của Chí Cường</h1>
      <div className="nameinput">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={a}
          sx={{
            marginBottom: "10px",
            width: "50ch",
          }}
          renderInput={(params) => (
            <TextField {...params} label="Chọn ngân hàng" />
          )}
          onChange={(_: any, value: any) => {
            console.log(value);
            setBankId(value.code);
          }}
        />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Nhập số tài khoản"
            variant="filled"
            helperText="STK"
            onChange={(newValue) => {
              console.log(newValue.target.value);
              setAccountNo(newValue.target.value);
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Họ & tên"
            variant="filled"
            helperText="Nhập tên chủ tài khoản"
            onChange={(newValue) => {
              console.log(newValue.target.value);
              setAccountName(newValue.target.value);
            }}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Nhập số tiền"
            variant="filled"
            helperText=""
            onChange={(newValue) => {
              console.log(newValue.target.value);
              setAmount(newValue.target.value);
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Nhập nội dung chuyển khoản"
            variant="filled"
            helperText=""
            onChange={(newValue) => {
              console.log(newValue.target.value);
              setDes(newValue.target.value);
            }}
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            setState(true);
            let apiUri = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${amount}&addInfo=${des}&accountName=${accountName}`;
            setURL(apiUri);
            console.log(apiUri);
          }}
        >
          Tạo mã QR
        </Button>
        {state && <img alt="QRCODE" src={url} />}
      </div>
    </div>
  );
}
