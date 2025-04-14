import { HiMenu } from "react-icons/hi";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-10 w-full flex justify-between items-center px-7 py-2 bg-green-700 text-white border-b border-solid border-gray-400">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="logo" className="w-[70px]" />
        <h1 className="hidden sm:block text-lg font-semibold italic font-cursive leading-snug">
          Agricultural &amp; Environmental Engineering <br className="hidden md:block" />
          <span className="text-sm font-light">University of Ibadan</span>
        </h1>
      </div>

      <HiMenu
        className="text-3xl font-bold cursor-pointer self-center"
        onClick={toggleSidebar}
      />
    </header>
  );
};

export default Header;
