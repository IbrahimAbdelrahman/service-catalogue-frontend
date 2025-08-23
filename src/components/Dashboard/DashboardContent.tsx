import React from 'react';

const stats = [
  { label: 'Total Teams', value: '12', icon: 'public/images/Teams.svg', color: 'bg-blue-500' },
  { label: 'Active Squads', value: '48', icon: 'public/images/Squad.svg', color: 'bg-green-500' },
  { label: 'Ongoing Projects', value: '156', icon: 'public/images/Projects.svg', color: 'bg-purple-500' },
  { label: 'Team Members', value: '324', icon: 'public/images/Members.svg', color: 'bg-orange-500' },
];

const DashboardContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Service Catalogue Admin Portal</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center`}>
                <img src={stat.icon} alt={stat.label + ' icon'} className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

{/* Quick Actions */}
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
  <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg transition-colors duration-200 hover:bg-red-600 hover:text-white group">
      <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
        <img src="public/images/Teams.svg" alt="Add New Team" className="w-6 h-6 object-contain" />
      </span>
      <span className="font-medium text-gray-900 group-hover:text-white">Add New Team</span>
    </button>
    <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg transition-colors duration-200 hover:bg-red-600 hover:text-white group">
      <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
        <img src="public/images/Services.svg" alt="Manage Members" className="w-6 h-6 object-contain" />
      </span>
      <span className="font-medium text-gray-900 group-hover:text-white">Manage Members</span>
    </button>
    <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg transition-colors duration-200 hover:bg-red-600 hover:text-white group">
      <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
        <img src="public/images/Reports.svg" alt="View Reports" className="w-6 h-6 object-contain" />
      </span>
      <span className="font-medium text-gray-900 group-hover:text-white">View Reports</span>
    </button>
  </div>
</div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">New squad "Frontend Development" created in Team "Engineering"</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Project "Mobile App Redesign" status updated to "In Progress"</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">New member "Sarah Johnson" added to Squad "UI/UX Design"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;