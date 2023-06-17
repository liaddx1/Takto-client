import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import './App.css';
import FullScreenLoading from "./Components/FullScreenLoad";

const MainPage = lazy(() => import("./MainPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<div>Home</div>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      <Route path="/amplio/v2" element={(
        <>
          <Suspense fallback={<FullScreenLoading />}>
            <MainPage />
          </Suspense>
        </>)} />
    </Routes>
  );
}

export default App;
