import "./Header.css"
import { IoBag, IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { qau_black, qau_white, } from "../../assets/assets";

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
      {screenWidth >= 640 ? (
        <header className="hidden sm:flex items-center justify-between bg-white drop-shadow-sm py-5 px-8">
          <Link
            to={"/"}
            className="flex flex-col items-center bg-[#ea002a] rounded py-[.3rem] px-[.3rem]"
          >
            <img src={qau_white} alt="Q-Huts Logo" className="h-7" />
            <h1 className="text-sm font-[700] text-white">Q-HUTS</h1>
          </Link>
          <ul className="flex gap-5">
            <li className="hover:text-[#ea002a]">
              <Link className="font-semibold" to={"/"}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#ea002a]">
              <Link className="font-semibold" to={"/about"}>
                About
              </Link>
            </li>
            <li className="cursor-pointer relative group">
              <div className="flex gap-1 items-center group">
                <span className="group-hover:text-[#ea002a] font-semibold">
                  Huts
                </span>
                <IoIosArrowDown
                  strokeWidth={11}
                  className="mt-[2px] group-hover:mt-1 group-hover:text-[#ea002a] transition-all"
                />
              </div>
              <div
                id="overlay"
                className="absolute left-0 rounded-md overflow-hidden hidden group-hover:flex bg-transparent pt-2 drop-shadow-sm"
              >
                <div className="flex flex-col bg-white rounded-md overflow-hidden">
                  {huts.map((hut, index) => (
                    <Link
                      id="header-huts-menu"
                      className="pl-3 pr-6 py-2 hover:bg-[#ea002a]"
                      to={`huts/${hut}`}
                      key={index}
                    >
                      <span className="flex items-center gap-[.5rem] font-semibold">
                        <SiHomeadvisor />
                        {hut}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li className="hover:text-[#ea002a]">
              <Link to={"/contact"} className="font-semibold">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="flex gap-2">
            <li title="Orders">
              <Link to={"/orders"}>
                <IoBag className="h-6 w-6" />
              </Link>
            </li>
            <li title="Search">
              <Link to={"/search"}>
                <IoSearch className="h-6 w-6" />
              </Link>
            </li>
            <li title="Login">
              <Link to={"/login"}>
                <FaUser className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </header>
      ) : (
        <header
          id="mobile-menu"
          className="flex items-center justify-between bg-white w-full px-4 sm:hidden p-4"
        >
          <Link
            onClick={()=>setIsOpenMobileMenu(false)}
            to={"/"}
            className="flex flex-col items-center bg-[#ea002a] rounded py-[.3rem] px-[.3rem]"
          >
            <img src={qau_white} alt="Q-Huts Logo" className="h-7" />
            <h1 className="text-sm font-[700] text-white">Q-HUTS</h1>
          </Link>

          <div
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            className="cursor-pointer "
          >
            {isOpenMobileMenu ? (
              <RxCross2 title="CLOSE" className="h-8 w-8" />
            ) : (
              <IoIosMenu title="MENU" className="h-8 w-8" />
            )}
          </div>

          {
              isOpenMobileMenu &&
            <div
              style={{ height: `calc(100vh - ${mobileHeaderHeight}px)` }}
              className={`bg-white absolute left-0 top-[85px] w-full overflow-y-auto`}
            >
              <ul className="flex flex-col gap-1 font-semibold">
                <ul className="flex justify-between items-center bg-[#ea002a] text-white px-4 py-3 ">
                  <li
                    onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                    title="SEARCH"
                    className=""
                  >
                    <Link to={"/search"} className="flex items-center gap-1 bg-white rounded-full text-black px-3 py-1">
                      <IoSearch className="h-5 w-5" /> <span>Search</span>
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <div
                      onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                      title="VIEW CART"
                      className=""
                    >
                      <Link to={"/orders"}>
                        <IoBag className="h-5 w-5" />
                      </Link>
                    </div>
                    <div
                      onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                      title="LOGIN"
                      className=""
                    >
                      <Link to={"/login"}>
                        <FaUser className="h-5 w-5" />
                      </Link>
                    </div>
                  </li>
                </ul>

                <li
                  onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                  className="px-4 hover:text-[#ea002a] transition-all mt-2"
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                  className="px-4 hover:text-[#ea002a] transition-all"
                >
                  <Link to={"/about"}>About</Link>
                </li>

                <li
                  onClick={() => setIsShowHuts(!isShowHuts)}
                  className="cursor-pointer px-4"
                >
                  <div className="flex items-center justify-between hover:text-[#ea002a] transition-all">
                    <span>Huts</span>
                    <IoIosArrowDown
                      className={`-rotate-90 transition-all ${
                        isShowHuts && "rotate-0"
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-1 flex-col gap-[.5rem] ${
                      isShowHuts ? "flex" : "hidden"
                    }`}
                  >
                    {huts.map((hut, index) => (
                      <Link
                        onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                        className="pl-3 rounded-md hover:text-[#ea002a]"
                        to={`huts/${hut}`}
                        key={index}
                      >
                        <span className="flex items-center gap-1">
                          <SiHomeadvisor />
                          {hut}
                        </span>
                      </Link>
                    ))}
                  </div>
                </li>

                <li
                  onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
                  className="px-4 hover:text-[#ea002a] transition-all"
                >
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          }
        </header>
      )}
    </>
  );
};

export default Header;
