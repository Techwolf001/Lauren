import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Suspense, lazy, useEffect, useState } from 'react';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

import routes from './routes';
import { Toaster } from 'react-hot-toast';
import Loader from './common/loader';

function App() {
  const[loading, setLoading]=useState(true)

  useEffect(() => {
     setLoading(false);
  }, []);

  return loading ? (
    <Loader />
  ) :(
    <>
    <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <BrowserRouter>
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
  )
}

export default App
