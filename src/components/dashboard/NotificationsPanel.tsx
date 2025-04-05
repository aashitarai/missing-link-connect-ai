
import React from 'react';
import {
  Bell,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

// Mock notifications data
const notificationsData = [
  {
    id: 1,
    type: 'alert',
    title: 'New Match Found',
    message: 'A potential match has been found for John Doe in Chicago area.',
    time: '10 minutes ago',
  },
  {
    id: 2,
    type: 'success',
    title: 'Case Resolved',
    message: 'Jane Smith has been found and safely returned to family.',
    time: '1 hour ago',
  },
  {
    id: 3,
    type: 'warning',
    title: 'Case Update Required',
    message: 'Additional information needed for Robert Brown case.',
    time: '3 hours ago',
  },
  {
    id: 4,
    type: 'info',
    title: 'System Update',
    message: 'MissingLink system will undergo maintenance tonight at 11 PM.',
    time: '5 hours ago',
  },
  {
    id: 5,
    type: 'alert',
    title: 'Urgent Assistance',
    message: 'Authorities requesting additional information for case #24601.',
    time: '1 day ago',
  },
];

// Function to render notification icon based on type
const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'alert':
      return <AlertCircle className="h-5 w-5 text-red-500" />;
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case 'info':
      return <Info className="h-5 w-5 text-blue-500" />;
    default:
      return <Bell className="h-5 w-5 text-gray-500" />;
  }
};

// Function to get notification background color based on type
const getNotificationColor = (type: string) => {
  switch (type) {
    case 'alert':
      return 'border-l-4 border-red-500 bg-red-50';
    case 'success':
      return 'border-l-4 border-green-500 bg-green-50';
    case 'warning':
      return 'border-l-4 border-amber-500 bg-amber-50';
    case 'info':
      return 'border-l-4 border-blue-500 bg-blue-50';
    default:
      return 'border-l-4 border-gray-300';
  }
};

const NotificationsPanel = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold py-1 px-2 rounded-full">
          {notificationsData.length} New
        </span>
      </div>
      
      <div className="space-y-4">
        {notificationsData.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 rounded-lg shadow-sm ${getNotificationColor(notification.type)}`}
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-lg">{notification.title}</h3>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-gray-600">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;
