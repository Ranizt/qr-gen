function BaoHuy() {
  return (
    <>
      <h1>Chao mung tml den voi page cua t</h1>
      <h1>Con me may</h1>
    </>
  );
}

export default function ChiCuong(props: any) {
  return (
    <>
      <h3>Toi chinh la {props.nameInfo.myName}</h3>
      <h4>Ban la {props.nameInfo.yourName}</h4>
      <BaoHuy />
    </>
  );
}
