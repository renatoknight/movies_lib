
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <h2>Movies Lib</h2>
      <Outlet />
    </>
  )
}

export default App
