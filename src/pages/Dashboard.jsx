
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import TabContentRenderer from '@/components/dashboard/TabContentRenderer';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState(
    location.state?.activeTab || 'dashboard'
  );

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If user is not logged in, redirect to homepage
      navigate('/', { replace: true });
    }
  }, [navigate]);

  // Update activeTab when location state changes
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  // If user is still being checked, don't render anything yet
  if (user === null) {
    return null; // Or a loading spinner
  }

  // If user is confirmed not logged in, redirect to home
  if (user === false) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/', { replace: true });
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
