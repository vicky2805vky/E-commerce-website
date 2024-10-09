import React from "react";
import AddProductContextProvider from "./services/contexts/AddProductContext";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <AddProductContextProvider>
      <div className="h-full overflow-scroll">
        <Outlet />
      </div>
    </AddProductContextProvider>
  );
};

export default Admin;
