
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = ({ children, user, activeTab, setActiveTab, handleLogout }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-gray-50">
        <DashboardSidebar 
          user={user} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          handleLogout={handleLogout} 
        />
        <div className="ml-64 p-6">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
