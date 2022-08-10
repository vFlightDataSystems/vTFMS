import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { TfmsProvider } from "./Tfms";
import { NavBarContainer } from "./components/NavBarContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarContainer>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<PrivateRoute/>}>
            <Route path="/home" element={<TfmsProvider/>}/>
          </Route>
        </Routes>
      </NavBarContainer>
    </BrowserRouter>
  );
};

export default App;