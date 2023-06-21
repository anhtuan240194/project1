import "./App.css"

function App() {
  const myName = "Ba Nguyễn";
  const headingStyle = {
    color: "#000",
    background:"#ff0",
  };
  const onClick = () =>{
    console.log("aaa chết em")
  }
  return (
    <>
      <h1 className="heading" id={myName} style={headingStyle}
      onClick={onClick}
      >
        Hello {myName} {myName =="Ba Nguyễn" ? "đẹp trai" : "xấu trai"}
        </h1>;
      <button className="button">Button</button>
    </>
  );
}

export default App;

//JSX interpolation {}
//Bên trong ngoặc nhọn có thể nhúng bất kỳ biểu thức javascript
