import './App.css';
import Header from './components/header/Header'
import MiniHeader from './components/mini-header/MiniHeader';
import { Backtotop, Overlay } from './utils';
import Routes from './routes';
import Sidebar from './components/sidebar/Sidebar';
import { useState, useEffect } from 'react';
import { Footer } from './components/footer/Footer';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isClickCategory, setIsClickCategory] = useState(false);
  const [isNavbarSearchActive, setIsNavbarSearchActive] = useState(false);

  useEffect(() => {
    if (isSidebarActive || isNavbarSearchActive) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  });
  return (
    <div>
      <Header setIsNavbarSearchActive={setIsNavbarSearchActive} />
      <MiniHeader setIsSidebarActive={setIsSidebarActive} />
      <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} setIsClickCategory={setIsClickCategory} isClickCategory={isClickCategory} />
      <Routes />
      <Backtotop />
      <Footer />
      {isSidebarActive && <Overlay state={isSidebarActive} callback={setIsSidebarActive} category={isClickCategory} setcategory={setIsClickCategory} />}
      {isNavbarSearchActive && <Overlay type="navbar" state={isNavbarSearchActive} callback={setIsNavbarSearchActive} />}
    </div>
  );
}

export default App;