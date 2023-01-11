import "./assets/minireset.min.css"
import "./App.css"
import Announcement from "./components/Announcement";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Service";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Service />
      <Announcement />
      <Customer />
      <Footer />
    </>
  );
}

export default App;
