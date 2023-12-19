import { SyncLoader } from "react-spinners";

const Loader = () => {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        {/* <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-purple-950 border-t-transparent"></div> */}
        <SyncLoader color="#0b4565" />

      </div>
    );
  };
  
  export default Loader;
  