
import React, { useState } from 'react';
import { User, Building2, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

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
    setConfirmPassword('');
    setActiveTab("login");
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
        // Navigate to welcome page after successful login
        navigate('/welcome');
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please fill in all required fields",
        });
      }
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      
      if (!email || !password || !confirmPassword) {
        toast({
          variant: "destructive",
          title: "Registration failed",
          description: "Please fill in all required fields",
        });
        return;
      }
      
      if (password !== confirmPassword) {
        toast({
          variant: "destructive",
          title: "Registration failed",
          description: "Passwords do not match",
        });
        return;
      }
      
      // In a real app, you would send this data to your backend
      const userData = {
        type: loginType,
        email,
        adminType: loginType === 'admin' ? adminType : null,
        isLoggedIn: true
      };
      localStorage.setItem('user', JSON.stringify(userData));
      
      toast({
        title: "Registration successful!",
        description: "Your account has been created and you're now logged in.",
      });
      
      handleClose();
      navigate('/welcome');
    }, 1000);
  };

  // This is the type selection screen
  if (!loginType) {
    return (
      <Dialog open={show} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Login / Register</DialogTitle>
          </DialogHeader>
          
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
        </DialogContent>
      </Dialog>
    );
  }

  // After type selection, show login/register tabs
  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {loginType === 'user' ? 'User' : 'Admin'} Account
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            {loginType === 'admin' && (
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
            )}
            
            {(loginType === 'user' || (loginType === 'admin' && adminType)) && (
              <form onSubmit={handleLogin} className="space-y-4">
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
                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 text-white hover:bg-blue-800"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>
            )}
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            {loginType === 'admin' && (
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
            )}
            
            {(loginType === 'user' || (loginType === 'admin' && adminType)) && (
              <form onSubmit={handleRegister} className="space-y-4">
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
                <Input
                  type="password" 
                  placeholder="Confirm Password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-green-600 text-white hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Register"}
                </Button>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
