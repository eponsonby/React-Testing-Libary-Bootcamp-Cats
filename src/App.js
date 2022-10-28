import Cards from "./components/Cards/Cards";
import logo from "./logo.svg";
import cats from "./mocks/cats.json";

function App() {
  return (
    <div>
      <Cards cats={cats}></Cards>
    </div>
  );
}

export default App;
