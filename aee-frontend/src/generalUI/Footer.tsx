import { JSX } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer(): JSX.Element {
  return (
    <div className="relative bg-white rounded-t-lg text-black py-14 text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-green-700 rounded-b-full"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <img src="logo.png" alt="Department Logo" className="w-[120px] mt-[-20px] md:mb-0 md:ml-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm font-medium mt-3 text-left max-w-4xl mx-auto">
          <div>
            <h4 className="font-bold text-green-700 text-lg">About</h4>
            <ul>
              <li><a href="#" className="hover:text-green-700 text-md">About Us</a></li>
              <li><a href="#" className="hover:text-green-700 text-md">News & Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-700 text-lg">Academics</h4>
            <ul>
              <li><a href="#" className="hover:text-green-700 text-md">Programs</a></li>
              <li><a href="#" className="hover:text-green-700 text-md">Research & Projects</a></li>
              <li><a href="#" className="hover:text-green-700 text-md">Academic Calendar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-700 text-lg">Resources</h4>
            <ul>
              <li><a href="#" className="hover:text-green-700 text-md">Student Resources</a></li>
              <li><a href="#" className="hover:text-green-700 text-md">Library & Research</a></li>
              <li><a href="#" className="hover:text-green-700 text-md">Support & FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-700 text-lg">Contact</h4>
            <ul>
              <li><a href="#" className="hover:text-green-700 text-md">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-700 text-md">Student Portal</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6 text-2xl text-green-700">
          <a href="#" className="hover:text-green-500"><FaFacebook /></a>
          <a href="#" className="hover:text-green-500"><FaXTwitter /></a>
          <a href="#" className="hover:text-green-500"><FaInstagram /></a>
        </div>
        <div className="mt-6 text-xs text-gray-500">&copy; {new Date().getFullYear()} Department Name. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
