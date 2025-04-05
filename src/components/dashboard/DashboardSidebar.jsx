
import React from 'react';
import { 
  Home, Bell, Users, Upload, Search, Settings, LogOut 
} from 'lucide-react';
import { 
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

const DashboardSidebar = ({ user, activeTab, setActiveTab, handleLogout }) => {
  return (
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
  );
};

export default DashboardSidebar;
