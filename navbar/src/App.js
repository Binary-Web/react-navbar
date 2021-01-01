import "./App.css";
import Navbar from "./Navbar/navbar";

function App() {
  const title = "MyApp";
  return (
    <div>
      <Navbar
        data={["Home", "About", "Privacy", "Contact Us"]}
        appLogo={title}
      />
    </div>
  );
}

export default App;
