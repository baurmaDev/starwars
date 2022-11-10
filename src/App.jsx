import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Help from "./Help";
import Main from './Main'

export default function App() {
 

  return (
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Help />} path="error" />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    
  );
}
