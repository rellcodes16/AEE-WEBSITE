import { HiMenu } from "react-icons/hi";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="relative z-10 w-full flex justify-between items-center px-7 py-2 bg-green-600 text-white border-b border-solid border-gray-400">
      <img src="logo.png" alt="logo" className="w-[70px]" />

      <HiMenu
        className="text-3xl font-bold cursor-pointer self-center"
        onClick={toggleSidebar}
      />
    </header>
  );
};

export default Header;
