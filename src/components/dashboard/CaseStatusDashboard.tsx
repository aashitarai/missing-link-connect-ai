
import React from 'react';
import { AlertTriangle, CheckCircle, Clock, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data for case status
const caseStatusData = [
  { id: 1, name: 'John Doe', age: 35, location: 'New York', status: 'active', progress: 40, updatedAt: '2 hours ago' },
  { id: 2, name: 'Jane Smith', age: 24, location: 'Chicago', status: 'found', progress: 100, updatedAt: '1 day ago' },
  { id: 3, name: 'Michael Johnson', age: 8, location: 'Los Angeles', status: 'active', progress: 65, updatedAt: '3 hours ago' },
  { id: 4, name: 'Emma Williams', age: 19, location: 'Boston', status: 'unresolved', progress: 20, updatedAt: '5 days ago' },
  { id: 5, name: 'Robert Brown', age: 42, location: 'Miami', status: 'active', progress: 55, updatedAt: '12 hours ago' },
  { id: 6, name: 'Linda Davis', age: 67, location: 'Seattle', status: 'found', progress: 100, updatedAt: '3 days ago' }
];

// Get status icon based on case status
const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <Clock className="h-6 w-6 text-blue-500" />;
    case 'found':
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    case 'unresolved':
      return <AlertTriangle className="h-6 w-6 text-amber-500" />;
    default:
      return <HelpCircle className="h-6 w-6 text-gray-500" />;
  }
};

// Get status color based on case status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-blue-100 text-blue-800';
    case 'found':
      return 'bg-green-100 text-green-800';
    case 'unresolved':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const CaseStatusDashboard = () => {
  const activeCount = caseStatusData.filter(c => c.status === 'active').length;
  const foundCount = caseStatusData.filter(c => c.status === 'found').length;
  const unresolvedCount = caseStatusData.filter(c => c.status === 'unresolved').length;
  const totalCases = caseStatusData.length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((activeCount/totalCases) * 100)}% of total cases
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Found</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{foundCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((foundCount/totalCases) * 100)}% of total cases
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unresolved</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unresolvedCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((unresolvedCount/totalCases) * 100)}% of total cases
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-8">Recent Cases</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStatusData.map(caseItem => (
          <Card key={caseItem.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{caseItem.name}</CardTitle>
                {getStatusIcon(caseItem.status)}
              </div>
              <CardDescription className="flex justify-between items-center">
                <span>Age: {caseItem.age}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(caseItem.status)}`}>
                  {caseItem.status.charAt(0).toUpperCase() + caseItem.status.slice(1)}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{caseItem.location}</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress:</span>
                    <span>{caseItem.progress}%</span>
                  </div>
                  <Progress value={caseItem.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-1">
              <div className="text-xs text-muted-foreground">Updated {caseItem.updatedAt}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStatusDashboard;
