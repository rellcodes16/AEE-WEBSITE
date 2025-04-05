import { useOutsideClick } from "./useOutsideClick";
import MainNav from "./MainNav";
import { HiX } from "react-icons/hi"; // X icon for closing the sidebar

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { ref } = useOutsideClick(() => {
    if (isOpen) setIsOpen(false); // Close sidebar when clicking outside
  });

  return (
    <aside
      ref={ref}
      className={`fixed z-50 h-full w-72 overflow-y-auto bg-white shadow-lg transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} right-0`} 
    >
      <div className="flex justify-between items-center p-4">
        <HiX
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)} 
        />
      </div>
      <MainNav />
    </aside>
  );
};

export default Sidebar;
