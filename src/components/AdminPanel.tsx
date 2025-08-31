// components/AdminPanel.tsx
"use client";

import { useState } from "react";
import { 
  BarChart3, 
  Users, 
  FileText, 
  Image, 
  MessageCircle, 
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";

interface AdminStats {
  totalVisitors: number;
  totalComplaints: number;
  totalComments: number;
  pendingActions: number;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats] = useState<AdminStats>({
    totalVisitors: 1245,
    totalComplaints: 89,
    totalComments: 156,
    pendingActions: 23
  });

  const adminMenuItems = [
    { id: "dashboard", label: "ড্যাশবোর্ড", icon: BarChart3 },
    { id: "users", label: "ব্যবহারকারী", icon: Users },
    { id: "complaints", label: "অভিযোগ", icon: FileText },
    { id: "comments", label: "মন্তব্য", icon: MessageCircle },
    { id: "gallery", label: "গ্যালারি", icon: Image },
    { id: "settings", label: "সেটিংস", icon: Settings }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab stats={stats} />;
      case "complaints":
        return <ComplaintsTab />;
      case "comments":
        return <CommentsTab />;
      case "users":
        return <UsersTab />;
      default:
        return <DashboardTab stats={stats} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed md:relative w-64 bg-purple-800 text-white h-full transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-50`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold">এডমিন প্যানেল</h1>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden">
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {adminMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? "bg-white text-purple-800"
                      : "text-white hover:bg-purple-700"
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-4">
          <button className="w-full flex items-center px-4 py-3 text-white hover:bg-purple-700 rounded-lg">
            <LogOut size={20} className="mr-3" />
            লগআউট
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg bg-gray-100"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold">এডমিন</p>
                <p className="text-sm text-gray-600">বাঘারপাড়া পৌরসভা</p>
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderContent()}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

// Dashboard Tab Component
function DashboardTab({ stats }: { stats: AdminStats }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">ড্যাশবোর্ড</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="text-blue-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">মোট ভিজিটর</p>
              <p className="text-2xl font-bold">{stats.totalVisitors}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-full">
              <FileText className="text-red-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">অভিযোগ</p>
              <p className="text-2xl font-bold">{stats.totalComplaints}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <MessageCircle className="text-green-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">মন্তব্য</p>
              <p className="text-2xl font-bold">{stats.totalComments}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <Settings className="text-yellow-600" size={20} />
            </div>
            <div className="ml-4">
              <p className="text-gray-600">বিচারাধীন</p>
              <p className="text-2xl font-bold">{stats.pendingActions}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">সাম্প্রতিক এক্টিভিটি</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>নতুন অভিযোগ জমা পড়েছে</span>
            <span className="text-sm text-gray-500">২ মিনিট আগে</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <span>নতুন মন্তব্য জমা পড়েছে</span>
            <span className="text-sm text-gray-500">৫ মিনিট আগে</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Complaints Tab Component
function ComplaintsTab() {
  const [complaints] = useState([
    { id: 1, name: "রহিম মিয়া", phone: "01712345678", issue: "রাস্তা সংস্কার", status: "pending" },
    { id: 2, name: "করিম উদ্দিন", phone: "01898765432", issue: "নর্দমা সমস্যা", status: "resolved" }
  ]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">অভিযোগ ব্যবস্থাপনা</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">নাম</th>
                <th className="px-6 py-3 text-left">মোবাইল</th>
                <th className="px-6 py-3 text-left">বিষয়</th>
                <th className="px-6 py-3 text-left">স্ট্যাটাস</th>
                <th className="px-6 py-3 text-left">একশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td className="px-6 py-4">{complaint.name}</td>
                  <td className="px-6 py-4">{complaint.phone}</td>
                  <td className="px-6 py-4">{complaint.issue}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      complaint.status === 'resolved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {complaint.status === 'resolved' ? 'সমাধান হয়েছে' : 'বিচারাধীন'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      বিস্তারিত
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Comments Tab Component
function CommentsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">মন্তব্য ব্যবস্থাপনা</h2>
      {/* Comments management interface */}
    </div>
  );
}

// Users Tab Component
function UsersTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">ব্যবহারকারী ব্যবস্থাপনা</h2>
      {/* Users management interface */}
    </div>
  );
}