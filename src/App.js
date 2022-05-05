import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import Footer from './pages/Shared/Footer/Footer';
import Inventory from './pages/Inventory/Inventory';
import RequireAuth from './pages/Auth/RequireAuth/RequireAuth';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import EditCarInfo from './pages/Home/EditCarInfo/EditCarInfo';
import AddItem from './pages/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/resetpass' element={<ResetPassword />}></Route>
        <Route path='/inventory/:carId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='additem' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }/>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        } />
        <Route path='/editcarinfo/:id' element={
          <RequireAuth>
            <EditCarInfo></EditCarInfo>
          </RequireAuth>
        }/>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
