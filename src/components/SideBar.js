// components/Sidebar.jsx
const Sidebar = () => {
    return (
      <div className="h-screen w-64 bg-white shadow-md flex flex-col">
        {/* Dashboard */}
        <div className="flex items-center space-x-3 p-4 hover:bg-gray-100 cursor-pointer">
          <div className="text-black">
            <i className="fas fa-chart-bar"></i>
          </div>
          <p className="text-black font-medium">Dashboard</p>
        </div>
  
        {/* Skill Test */}
        <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-r-lg cursor-pointer">
          <div className="text-blue-500">
            <i className="fas fa-medal"></i>
          </div>
          <p className="text-blue-500 font-medium">Skill Test</p>
        </div>
  
        {/* Internship */}
        <div className="flex items-center space-x-3 p-4 hover:bg-gray-100 cursor-pointer">
          <div className="text-black">
            <i className="fas fa-file-alt"></i>
          </div>
          <p className="text-black font-medium">Internship</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  