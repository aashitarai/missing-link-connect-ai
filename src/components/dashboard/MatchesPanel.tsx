
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock matches data
const matchesData = [
  {
    id: 1,
    missingPerson: {
      name: 'John Doe',
      age: 35,
      lastSeen: 'Central Park, New York',
      reportedOn: '2023-03-15',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format'
    },
    potentialMatch: {
      name: 'Similar Person Found',
      location: 'Brooklyn, New York',
      confidence: 87,
      seenOn: '2023-03-20',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format'
    }
  },
  {
    id: 2,
    missingPerson: {
      name: 'Jane Smith',
      age: 24,
      lastSeen: 'Downtown Chicago',
      reportedOn: '2023-04-02',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format'
    },
    potentialMatch: {
      name: 'Similar Person Found',
      location: 'Evanston, Illinois',
      confidence: 92,
      seenOn: '2023-04-05',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&auto=format'
    }
  },
  {
    id: 3,
    missingPerson: {
      name: 'Robert Brown',
      age: 42,
      lastSeen: 'Miami Beach',
      reportedOn: '2023-02-28',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&auto=format'
    },
    potentialMatch: {
      name: 'Similar Person Found',
      location: 'Fort Lauderdale, Florida',
      confidence: 78,
      seenOn: '2023-03-10',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&auto=format'
    }
  }
];

const MatchesPanel = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Potential Matches</h1>
      <p className="text-gray-500">
        Our AI system has found the following potential matches for your reported missing persons.
      </p>
      
      <div className="space-y-8">
        {matchesData.map((match) => (
          <Card key={match.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>Match #{match.id} - {match.potentialMatch.confidence}% Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Missing Person</h3>
                  <div className="flex space-x-4">
                    <img 
                      src={match.missingPerson.image} 
                      alt={match.missingPerson.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-md" 
                    />
                    <div>
                      <p className="font-semibold">{match.missingPerson.name}</p>
                      <p className="text-gray-500">Age: {match.missingPerson.age}</p>
                      <p className="text-gray-500">Last seen: {match.missingPerson.lastSeen}</p>
                      <p className="text-gray-500">Reported on: {match.missingPerson.reportedOn}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Potential Match</h3>
                  <div className="flex space-x-4">
                    <img 
                      src={match.potentialMatch.image} 
                      alt="Potential match"
                      className="w-20 h-20 object-cover rounded-lg shadow-md" 
                    />
                    <div>
                      <p className="font-semibold">{match.potentialMatch.name}</p>
                      <p className="text-gray-500">Location: {match.potentialMatch.location}</p>
                      <p className="text-gray-500">Seen on: {match.potentialMatch.seenOn}</p>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {match.potentialMatch.confidence}% Match
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2 bg-gray-50 border-t">
              <Button variant="outline">Dismiss</Button>
              <Button variant="default">Contact Authorities</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchesPanel;
