
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import TabContentRenderer from '@/components/dashboard/TabContentRenderer';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    window.location.href = '/';
  };

  return (
    <DashboardLayout 
      user={user}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      handleLogout={handleLogout}
    >
      <TabContentRenderer activeTab={activeTab} />
    </DashboardLayout>
  );
};

export default Dashboard;
