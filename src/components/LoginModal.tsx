
import React, { useState } from 'react';
import { User, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

const LoginModal = ({ show, onClose }: LoginModalProps) => {
  const [loginType, setLoginType] = useState<string | null>(null);
  const [adminType, setAdminType] = useState('');

  const adminTypes = [
    'Police',
    'NGO',
    'Shelter House',
    'Disaster Management Team',
    'Search and Rescue',
    'Social Services',
    'Child Welfare',
    'Community Support'
  ];

  const handleLoginTypeSelect = (type: string) => {
    setLoginType(type);
  };

  const handleClose = () => {
    setLoginType(null);
    setAdminType('');
    onClose();
  };

  const handleAdminTypeChange = (value: string) => {
    setAdminType(value);
  };

  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Login / Register</DialogTitle>
        </DialogHeader>
        
        {!loginType && (
          <div className="space-y-4 py-4">
            <Button 
              onClick={() => handleLoginTypeSelect('user')}
              variant="outline"
              className="w-full flex items-center justify-center bg-blue-100 p-6 hover:bg-blue-200"
            >
              <User className="mr-2" /> User Login
            </Button>
            <Button 
              onClick={() => handleLoginTypeSelect('admin')}
              variant="outline"
              className="w-full flex items-center justify-center bg-blue-100 p-6 hover:bg-blue-200"
            >
              <Building2 className="mr-2" /> Admin Login
            </Button>
          </div>
        )}

        {loginType === 'user' && (
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-4">User Login</h3>
            <form>
              <div className="space-y-4">
                <Input
                  type="email" 
                  placeholder="Email" 
                />
                <Input
                  type="password" 
                  placeholder="Password" 
                />
                <div className="flex justify-between items-center pt-2">
                  <Button 
                    type="submit" 
                    className="bg-blue-700 text-white hover:bg-blue-800"
                  >
                    Login
                  </Button>
                  <a href="#" className="text-blue-600 hover:underline">Register</a>
                </div>
              </div>
            </form>
          </div>
        )}

        {loginType === 'admin' && (
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
            <div className="space-y-4">
              <Select onValueChange={handleAdminTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Admin Type" />
                </SelectTrigger>
                <SelectContent>
                  {adminTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {adminType && (
                <form className="space-y-4 pt-2">
                  <Input
                    type="email" 
                    placeholder="Email" 
                  />
                  <Input
                    type="password" 
                    placeholder="Password" 
                  />
                  <div className="flex justify-between items-center pt-2">
                    <Button 
                      type="submit" 
                      className="bg-blue-700 text-white hover:bg-blue-800"
                    >
                      Login
                    </Button>
                    <a href="#" className="text-blue-600 hover:underline">Register</a>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
