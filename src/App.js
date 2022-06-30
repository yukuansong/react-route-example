import "./App.css";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Diagnose Me</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div className="App-links">
          <Link to="/invoices" className="App-link">what do you think?</Link>
          <Link to="/expenses" className="App-link">My stories</Link>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
