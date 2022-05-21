import "./api/config/axiosConfig";
import "antd/dist/antd.css";

import "./style/global.css";

import ReactDOM from "react-dom/client";
import App from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import prBR from "antd/lib/locale/pt_BR";
import { PeopleScreen } from "./pages/Home/pages/People";
import { HomeProvider } from "./contexts/Home/HomeProvider";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ConfigProvider locale={prBR}>
    <HomeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/people/:id" element={<PeopleScreen />} />
        </Routes>
      </BrowserRouter>
    </HomeProvider>
  </ConfigProvider>
);

reportWebVitals();
