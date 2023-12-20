import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
