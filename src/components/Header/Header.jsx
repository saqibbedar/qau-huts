import { IoBag, IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-sky-300">
        <Link to={"/"} className="logo">QHUTS</Link>
        <ul className="flex gap-4">
          <li><Link to={"/home"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li className="cursor-pointer">Huts</li>
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
