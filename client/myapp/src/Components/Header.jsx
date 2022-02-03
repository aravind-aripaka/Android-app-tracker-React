const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  );

const Header = () => {   
    return (
      <div className="Header">
        <nav className="bg-gradient-to-r from-green-600 via-slate-500 to-purple-500 mx-8 rounded-lg h-21 md:justify-center justify-between items-center p-5 mb-6 border-4 border-black">
            <h1 className="text-3xl font-bold items-center pointer-onhover cursor-pointer mb-2">
                TRACKING SYSTEM MINI PROJECT
            </h1>
            <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["ARAVIND A", "MELBIN B", "TOSHIT G" ].map((item, index) => (
                <NavBarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#9aaae7]">
          Log out
        </li>
            </ul>
        </nav>
      </div>
    )
  };
  
  export default Header;