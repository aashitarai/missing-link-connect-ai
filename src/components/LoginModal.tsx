import React, { useState } from 'react';
import { User, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

const LoginModal = ({ show, onClose }: LoginModalProps) => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<string | null>(null);
  const [adminType, setAdminType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
    setEmail('');
    setPassword('');
    onClose();
  };

  const handleAdminTypeChange = (value: string) => {
    setAdminType(value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login process with setTimeout
    setTimeout(() => {
      setLoading(false);
      
      // In a real application, you would validate credentials with your backend
      if (email && password) {
        // Store user data in localStorage (in a real app, you'd use proper auth tokens)
        const userData = {
          type: loginType,
          email,
          adminType: loginType === 'admin' ? adminType : null,
          isLoggedIn: true
        };
        localStorage.setItem('user', JSON.stringify(userData));
        
        toast({
          title: "Login successful!",
          description: `Welcome ${email}`,
        });
        
        handleClose();
        navigate('/welcome'); // Changed from '/dashboard' to '/welcome'
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please fill in all required fields",
        });
      }
    }, 1000);
  };

  const handleRegister = () => {
    // For now, we'll just show a toast notification
    toast({
      title: "Registration",
      description: "Registration functionality will be implemented soon",
    });
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
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <Input
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center pt-2">
                  <Button 
                    type="submit" 
                    className="bg-blue-700 text-white hover:bg-blue-800"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="link" 
                    onClick={handleRegister}
                    className="text-blue-600 hover:underline"
                  >
                    Register
                  </Button>
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
                <form onSubmit={handleLogin} className="space-y-4 pt-2">
                  <Input
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="flex justify-between items-center pt-2">
                    <Button 
                      type="submit" 
                      className="bg-blue-700 text-white hover:bg-blue-800"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="link" 
                      onClick={handleRegister}
                      className="text-blue-600 hover:underline"
                    >
                      Register
                    </Button>
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
