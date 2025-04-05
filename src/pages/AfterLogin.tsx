
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Bell, UserCheck, Search, Upload, ArrowRight } from 'lucide-react';

const AfterLogin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  const handleAction = (action: string) => {
    toast({
      title: `${action} action selected`,
      description: "Navigating to the selected feature...",
    });
    
    // Navigate to specific section of dashboard based on action
    if (action === 'report') {
      navigate('/dashboard', { state: { activeTab: 'report' } });
    } else if (action === 'matches') {
      navigate('/dashboard', { state: { activeTab: 'matches' } });
    } else if (action === 'notifications') {
      navigate('/dashboard', { state: { activeTab: 'notifications' } });
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            Welcome, {user.email}
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for joining MissingLink. Together, we can make a difference.
          </p>
        </div>

        <div className="mb-12">
          <Card className="bg-white shadow-lg border-none">
            <CardHeader className="bg-blue-700 text-white">
              <CardTitle>Getting Started</CardTitle>
              <CardDescription className="text-blue-100">
                Here's what you can do with MissingLink
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Upload className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Report a Missing Person</h3>
                    <p className="text-gray-600">Submit detailed information and photos about a missing person to start the search process.</p>
                    <Button 
                      variant="link" 
                      className="text-blue-600 pl-0 mt-1"
                      onClick={() => handleAction('report')}
                    >
                      Report Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <UserCheck className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Check Potential Matches</h3>
                    <p className="text-gray-600">Review potential matches found by our AI system and take appropriate action.</p>
                    <Button 
                      variant="link" 
                      className="text-green-600 pl-0 mt-1"
                      onClick={() => handleAction('matches')}
                    >
                      View Matches <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Bell className="h-6 w-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Check Notifications</h3>
                    <p className="text-gray-600">Stay updated with real-time alerts and notifications about your cases.</p>
                    <Button 
                      variant="link" 
                      className="text-amber-600 pl-0 mt-1"
                      onClick={() => handleAction('notifications')}
                    >
                      View Notifications <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Search className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Search Database</h3>
                    <p className="text-gray-600">Search our extensive database of missing persons and reported sightings.</p>
                    <Button 
                      variant="link" 
                      className="text-purple-600 pl-0 mt-1"
                      onClick={() => handleAction('search')}
                    >
                      Search Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-gray-50 flex justify-center">
              <Button 
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={handleNavigateToDashboard}
              >
                Go to Full Dashboard
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <p className="text-gray-600 italic">No recent activity yet. Start by reporting a missing person or checking the dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
