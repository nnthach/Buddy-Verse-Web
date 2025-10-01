import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SideBar from '~/components/SideBar/SideBar';
import { SideBarContext } from '~/context/SidebarContext';
import PrivateRoute from '~/routes/PrivateRoute';
import { privateRouters, publicRouters } from '~/routes/routes';

function App() {
  const { isOpen } = useContext(SideBarContext);
  return (
    <>
      <ToastContainer />
      {isOpen && <SideBar />}
      <Routes>
        {publicRouters.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />;
        })}

        {privateRouters.map((route, index) => (
          <Route key={index} path={route.path} element={<PrivateRoute>{route.component}</PrivateRoute>} />
        ))}
      </Routes>
    </>
  );
}

export default App;
