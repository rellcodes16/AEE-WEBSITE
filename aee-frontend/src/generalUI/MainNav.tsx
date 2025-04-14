import { NavLink } from "react-router-dom"
import { HiOutlineCalendar, HiOutlineChartBar, HiOutlineHome, HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'
import { HiOutlineBanknotes } from "react-icons/hi2"
import { FaBookOpen, FaChalkboardTeacher, FaFlask, FaHome, FaInfoCircle, FaNewspaper, FaUserGraduate, FaUsers } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"

const MainNav = () => {
  return (
    <nav>
<ul className="flex flex-col gap-1 mt-6 px-3">
  <li>
    <NavLink to='/' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaHome className="text-lg" />
      <span>Home</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='about' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaInfoCircle className="text-lg" />
      <span>About</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='newsandevents' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaNewspaper className="text-lg" />
      <span>News And Events</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='academicprograms' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaBookOpen className="text-lg" />
      <span>Academic Programs</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='researchandprojects' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaFlask className="text-lg" />
      <span>Research and Projects</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='studentresources' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaUserGraduate className="text-lg" />
      <span>Student Resources</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='studentexecutives' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaUsers className="text-lg" />
      <span>Student Executives</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='staff' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaChalkboardTeacher className="text-lg" />
      <span>Staff</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='contact' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-green-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`
    }>
      <FaUser className="text-lg" />
      <span>Contacts</span>
    </NavLink>
  </li>
</ul>

    </nav>
  )
}

export default MainNav