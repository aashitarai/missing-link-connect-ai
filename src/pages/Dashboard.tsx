
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { 
  Home, Bell, Users, FileText, Upload, Settings, LogOut, Search,
  AlertTriangle, CheckCircle, Clock, HelpCircle
} from 'lucide-react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter 
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import CaseStatusDashboard from '@/components/dashboard/CaseStatusDashboard';
import NotificationsPanel from '@/components/dashboard/NotificationsPanel';
import MatchesPanel from '@/components/dashboard/MatchesPanel';
import ReportMissingForm from '@/components/dashboard/ReportMissingForm';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <CaseStatusDashboard />;
      case 'notifications':
        return <NotificationsPanel />;
      case 'matches':
        return <MatchesPanel />;
      case 'report':
        return <ReportMissingForm />;
      default:
        return <CaseStatusDashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader>
            <div className="p-4 flex items-center">
              <div className="text-2xl font-bold text-blue-700">MissingLink</div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === 'dashboard'}
                      onClick={() => setActiveTab('dashboard')}
                    >
                      <Home /> <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === 'notifications'}
                      onClick={() => setActiveTab('notifications')}
                    >
                      <Bell /> <span>Notifications</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === 'matches'}
                      onClick={() => setActiveTab('matches')}
                    >
                      <Users /> <span>Matches</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Actions</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      isActive={activeTab === 'report'}
                      onClick={() => setActiveTab('report')}
                    >
                      <Upload /> <span>Report Missing Person</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Search /> <span>Search Database</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-4">
              <div className="mb-2 text-sm text-gray-600">
                Logged in as: {user.email}
              </div>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="ml-64 p-6">
          {renderTabContent()}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
