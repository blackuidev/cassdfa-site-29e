import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, ListVideo, Video, Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`md:block md:w-64 bg-gray-900 text-white min-h-screen ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 ease-in-out`}>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 focus:outline-none hover:bg-gray-800"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div className="p-4">
        <h1 className={`text-2xl font-bold mb-4 ${isOpen ? 'block' : 'hidden md:block'}`}>YouTube</h1>
        <ul>
          <li className="mb-2">
            <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded-md transition-colors duration-200">
              <Home className="h-5 w-5 mr-2" />
              <span className={`${isOpen ? 'block' : 'hidden md:block'}`}>Home</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/trending" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded-md transition-colors duration-200">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className={`${isOpen ? 'block' : 'hidden md:block'}`}>Trending</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/subscriptions" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded-md transition-colors duration-200">
              <ListVideo className="h-5 w-5 mr-2" />
              <span className={`${isOpen ? 'block' : 'hidden md:block'}`}>Subscriptions</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/library" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded-md transition-colors duration-200">
              <Video className="h-5 w-5 mr-2" />
              <span className={`${isOpen ? 'block' : 'hidden md:block'}`}>Library</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/history" className="flex items-center py-2 px-4 hover:bg-gray-800 rounded-md transition-colors duration-200">
              <Video className="h-5 w-5 mr-2" />
              <span className={`${isOpen ? 'block' : 'hidden md:block'}`}>History</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
