import './index.css';
import SideBar from './Components/SideBar'
import Main from './Components/Main';
import { useContext } from 'react';
import { Context } from './Context/Context';

const App = () => {
  
  const {theme,} = useContext(Context);
  return (
   
      <div className={`overflow-hidden text-black bg-black flex min-w-full  md:h-[100dvh] h-[100dvh] ${theme ? '' : 'bg-white text-black'}`}>
      <SideBar />
      <Main />
      </div>
         );
}

export default App