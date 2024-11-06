import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./page/layout";
import Explore from "./page/explore.jsx";
import UserView from "./page/userview.jsx";
import About from "./page/about.jsx";
import ViewImagen from "./page/viewImagen.jsx";
import NoPage from "./page/noPage.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Explore />} />
            <Route path="user/*" element={<UserView />} />
            <Route path="viewimagen/*" element={<ViewImagen />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
