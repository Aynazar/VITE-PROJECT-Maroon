import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Layout from "./components/main/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default memo(App);
