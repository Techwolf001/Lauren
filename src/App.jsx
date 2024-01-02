import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";

import routes from "./routes";
import Loader from "./common/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <BrowserRouter basename="/Lauren">
        <Routes>
          <Route element={<DefaultLayout />}>
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
