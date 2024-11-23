import { IoBag, IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { SiHomeadvisor } from "react-icons/si";
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const huts = ["Majeed", "Karachi", "Bio", "Social", "Chemistry", "Daniyal", "Hikmat"].sort();

const Header = () => {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isShowHuts, setIsShowHuts] = useState(false);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const mobileHeader = document.getElementById("mobile-menu");
    if (mobileHeader) {
      setMobileHeaderHeight(mobileHeader.offsetHeight);
    }

    const handleResize = () => {
      const width = window.innerWidth;
      if (width) {
        setScreenWidth(width);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <>
      {
        screenWidth >= 640 ?
          
        <header className="hidden sm:flex items-center justify-between bg-sky-300 w-[85vw] m-auto">
          <Link to={"/"} className="logo">QHUTS</Link>
          <ul className="flex gap-4">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li className="cursor-pointer relative group">
              <div className="flex items-center group">
                <span>Huts</span>
                <IoIosArrowDown className="group-hover:mt-1 transition-all"/>
              </div>
              <div id="overlay" className="absolute left-0 rounded-md overflow-hidden hidden group-hover:flex bg-transparent">
                <div className="flex flex-col bg-red-100 rounded-md overflow-hidden">
                  {
                    huts.map((hut, index) => (
                      <Link className="pl-3 pr-6 py-2 hover:bg-red-500" to={`huts/${hut}`} key={hut}>
                        <span className="flex items-center gap-[.5rem]">
                          <SiHomeadvisor />
                          {hut}
                        </span></Link>
                    ))
                  }
                </div>
              </div>
            </li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>

          <ul className="flex gap-2">
            <li title="Orders"><Link to={"/orders"}><IoBag/></Link></li>
            <li title="Search"><Link to={"/search"}><IoSearch /></Link></li>
            <li title="Login"><Link to={"/login"}><MdAccountCircle/></Link></li>
          </ul>
        </header>
        :
        <header id="mobile-menu" className="relative flex items-center justify-between bg-sky-300 w-full px-4 sm:hidden">
          <Link to={'/'}>Logo</Link>
          <div onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className="cursor-pointer">
            {
              isOpenMobileMenu ? <RxCross2/> : <IoIosMenu />
            }
          </div>

          <div style={{ height: `calc(100vh - ${mobileHeaderHeight}px)`}} className={`bg-sky-500 absolute left-0 top-6 w-full overflow-y-auto ${isOpenMobileMenu ? "block": "hidden"}`}>
            <ul className="flex flex-col">

              <ul className="flex justify-between items-center bg-red-100 px-4 py-2 ">
                <li onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} title="SEARCH"><Link to={"/search"} className="flex items-center gap-1"><IoSearch /> <span>Search</span></Link></li>
                <li className="flex gap-1">
                  <div onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} title="VIEW CART"><Link to={"/orders"}><IoBag/></Link></div>
                  <div onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} title="LOGIN"><Link to={"/login"}><MdAccountCircle /></Link></div>
                </li>
              </ul>
              
              <li onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} className="px-4 hover:text-red-500 transition-all"><Link to={"/"}>Home</Link></li>
              <li onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} className="px-4 hover:text-red-500 transition-all"><Link to={"/about"}>About</Link></li>

              <li onClick={()=>setIsShowHuts(!isShowHuts)} className="cursor-pointer px-4">
                <div className="flex items-center justify-between hover:text-red-500 transition-all">
                  <span>Huts</span>
                  <IoIosArrowDown className={`-rotate-90 transition-all ${isShowHuts && "rotate-0"}`}/>
              </div>
                <div className={`mt-1 flex-col gap-1 ${isShowHuts ? "flex" : "hidden"}`}>
                  {
                    huts.map((hut, index) => (
                      <Link onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} className="pl-3 rounded-md hover:text-red-500" to={`huts/${hut}`} key={index}>
                        <span className="flex items-center gap-1">
                          <SiHomeadvisor />
                          {hut}
                        </span></Link>
                    ))
                  }
                </div>
              </li>

              <li onClick={()=>setIsOpenMobileMenu(!isOpenMobileMenu)} className="px-4 hover:text-red-500 transition-all"><Link to={"/contact"}>Contact</Link></li>
            </ul>
          </div>

        </header>
      }

    </>
  );
};

export default Header;
