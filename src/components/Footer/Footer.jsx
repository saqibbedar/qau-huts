import { qau_white } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-full px-4 sm:w-[85vw] m-auto sm:px-0 pt-6 pb-6 sm:pt-10">
        <ul className="grid lg:grid-cols-3 gap-6 w-full">
          <li>
            <Link to={"/"}
              className="flex items-center gap-1 w-fit bg-[#ea002a] rounded py-4 px-4"
            >
              <img src={qau_white} alt="Q-Huts Logo" className="h-10" />
              <div className="flex flex-col items-center">
                <h1 className="text-sm font-[700] text-white">Quaid-i-Azam</h1>
                <h1 className="text-sm font-[700] text-white">HUTS</h1>
              </div>
            </Link>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate error officiis alias obcaecati voluptate, consectetur
              et iste fuga non dignissimos. Similique facere iusto accusantium
              error nisi totam necessitatibus non tempore!
            </p>
          </li>
          <li>
            <h1 className="uppercase font-bold text-xl">Company</h1>
            <ul className="mt-3 flex flex-col gap-[1px]">
              <li><Link className="hover:text-[#ea002a] transition-colors" to={"/"}>Home</Link></li>
              <li><Link className="hover:text-[#ea002a] transition-colors" to={"/about"}>About</Link></li>
              <li><Link className="hover:text-[#ea002a] transition-colors" to={"/privacy-policy"}>Privacy Policy</Link></li>
              <li><Link className="hover:text-[#ea002a] transition-colors" to={"/privacy-policy"}>Terms & Conditions</Link></li>
            </ul>
          </li>
          <li>
            <h1 className="uppercase font-bold text-xl">Get in Touch</h1>
            <ul className="mt-3 flex flex-col gap-[1px]">
              <li><Link className="hover:text-[#ea002a] transition-colors" to={"tel:920000000000"}>+9200000000</Link></li>
              <li><Link className="hover:text-[#ea002a] transition-colors" to={"mailto:contact@qhuts.com"}>contact@qhuts.com</Link></li>
            </ul>
          </li>
        </ul>
        <hr className="mt-8 mb-6 border-zinc-100/10" />
        <div className="flex justify-center">
          <p className="text-center">
            Copyright 2024 © <Link className="text-[#ea002a] font-medium" to={"/"}>qhuts.com</Link> - All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
