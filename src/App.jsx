import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      
        <Routes />
    
 <ToastContainer autoClose={3000} />
    </>
  );
};
