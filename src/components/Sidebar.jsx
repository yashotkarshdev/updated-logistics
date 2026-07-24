import { NavLink } from "react-router-dom";
import {
  Users,
  Phone,
  Tag,
  LogOut,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
  const menuClass =
    "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200";

  const activeClass = "bg-blue-600 text-white";
  const inactiveClass = "text-gray-300 hover:bg-gray-800";

  // Mobile par menu click hone par sidebar close
  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5 z-50 transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-blue-400">
            Admin Panel
          </h2>

          {/* Mobile Close Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-1 rounded hover:bg-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          <p className="text-xs text-gray-400 uppercase mb-2">
            Main
          </p>

          <NavLink
            to="/admin/category"
            onClick={handleMenuClick}
            className={({ isActive }) =>
              `${menuClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            <Tag size={18} />
            Category
          </NavLink>

          <NavLink
            to="/admin/team"
            onClick={handleMenuClick}
            className={({ isActive }) =>
              `${menuClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            <Users size={18} />
            Team
          </NavLink>

          <NavLink
            to="/admin/contact"
            onClick={handleMenuClick}
            className={({ isActive }) =>
              `${menuClass} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            <Phone size={18} />
            Contact
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-5 left-5 right-5">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;