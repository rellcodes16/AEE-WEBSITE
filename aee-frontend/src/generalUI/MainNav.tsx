import { NavLink } from "react-router-dom"
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineHome, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'
import { HiOutlineBanknotes } from "react-icons/hi2"
import { FaBookOpen, FaFlask, FaHome, FaInfoCircle, FaNewspaper, FaUserGraduate } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"

const MainNav = () => {
  return (
    <nav>
        <ul className="flex flex-col gap-8 mt-12 ml-5">
            <li>
                <NavLink to='/' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] md:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] transition-all"><FaHome className="text-3xl"/><span className="hidden sm:block">Home</span></NavLink>
            </li>
            <li>
                <NavLink to='about' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] md:py-[0.7rem] transition-all"><FaInfoCircle className="text-3xl" /><span className="hidden sm:block">About</span></NavLink>
            </li>
            <li>
                <NavLink to='newsandevents' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] md:py-[0.7rem] transition-all"><FaNewspaper className="text-3xl" /><span className="hidden sm:block">News And Events</span></NavLink>
            </li>
            <li>
                <NavLink to='academicprograms' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] md:py-[0.7rem] transition-all"><FaBookOpen className="text-3xl" /><span className="hidden sm:block">Academic Programs</span></NavLink>
            </li>
            <li>
                <NavLink to='researchandprojects' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] md:py-[0.7rem] transition-all"><FaFlask className="text-3xl" /><span className="hidden sm:block">Research and Projects</span></NavLink>
            </li>
            <li>
                <NavLink to='studentresources' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] md:py-[0.7rem] transition-all"><FaUserGraduate className="text-3xl" /><span className="hidden sm:block">Student Resources</span></NavLink>
            </li>
            <li>
                <NavLink to='contact' className="flex items-center gap-4 text-xl hover:text-green-600 active:text-green-600 font-bold sm:py-[0.7rem] sm:px-[2.4rem] md:px-[2.4rem] md:py-[0.7rem] transition-all"><FaUser className="text-3xl" /><span className="hidden sm:block">Contacts</span></NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default MainNav