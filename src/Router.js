import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";

// 2. Create a function called Router and write it as follows.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;