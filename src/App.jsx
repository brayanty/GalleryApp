import "./App.css";
import Navbar from "./components/navbar/nav";
import Hero from "./components/hero/hero";
import Main from "./components/main/main";
import News from "./components/news/news";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <Navbar className="container flex justify-center" />
      <Hero />
      <div className="grid grid-cols-5">
        <Main className="col-span-4" />
        <News className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}

export default App;
