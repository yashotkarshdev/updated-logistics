import { Menu, Bell, User } from "lucide-react";

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b">

      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:ml-64">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu size={20} />
          </button>

       
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* 🔔 Notification */}
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* 👤 Profile */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-200 transition">
            <User size={16} />
            <span className="text-sm text-gray-700 hidden sm:block">
              Admin
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Topbar;