import { IoBag, IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const huts = ["Majeed", "Karachi", "Bio", "Social", "Chemistry", "Daniyal", "Hikmat"].sort();

  return (
    <>
      <header className="flex items-center justify-between bg-sky-300">
        <Link to={"/"} className="logo">QHUTS</Link>
        <ul className="flex gap-4">
          <li><Link to={"/home"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li className="cursor-pointer ">Huts
            <div className="flex-col gap-1 flex">
              {
                huts.map((hut, index) => (
                  <Link to={`huts/${hut}`} key={index}>{hut + " Hut"}</Link>
                ))
              }
            </div>
          </li>
          <li><Link to={"/contact"}>Contact</Link></li>
        </ul>

        <ul className="flex gap-2">
          <li><Link to={"/orders"}><IoBag/></Link></li>
          <li><Link to={"/search"}><IoSearch /></Link></li>
          <li><Link to={"/profile"}><MdAccountCircle/></Link></li>
        </ul>
      </header>
    </>
  );
};

export default Header;
