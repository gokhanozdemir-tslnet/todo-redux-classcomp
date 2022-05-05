import "./App.scss";
import Footer from "./component/footer/footer.component";
import Header from "./component/header/header.component";
import Container from "./component/icontainer/container.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
