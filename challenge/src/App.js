import "./App.css";
import "./css/Header.css";
import "./css/ListView.css";
import "./css/Search.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ListView from "./components/ListView";

function App() {
  return (
    <div className="row ">
      <div className="col-4 col-lg-4">
        <Search />
      </div>

      <div className="col-8 col-lg-8">
        <Header />
        <ListView />
      </div>
    </div>
  );
}

export default App;
