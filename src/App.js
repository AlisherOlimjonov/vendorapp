import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPages/NoPage";
import Layout from "./pages/Layout/Layout";
import Setting from "./pages/Setting/Setting";
import Search from "./pages/Search/Search";
import "./Fonts/Fonts.scss";
import YangiBuyurtmalar from "./pages/YangiBuyurtmalar/YangiBuyurtmalar";
import AmaldagiBuyurtmalar from "./pages/AmaldagiBuyurtmalar/AmaldagiBuyurtmalar";
import Hisobot from "./pages/Hisobot/Hisobot";

export default function App() {
  return (
    <BrowserRouter>
      <Search />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<YangiBuyurtmalar />} />
          <Route path="amaldagibuyurtmalar" element={<AmaldagiBuyurtmalar />} />
          <Route path="settings" element={<Setting />} />
          <Route path="hisobot" element={<Hisobot />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
