
import React, { useState } from 'react';
import { Upload, X, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const ReportMissingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    description: '',
    lastSeenDate: '',
    lastSeenLocation: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactRelation: ''
  });
  
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      if (images.length + filesArray.length > 5) {
        toast({
          variant: "destructive",
          title: "Too many images",
          description: "You can only upload up to 5 images.",
        });
        return;
      }
      
      // Create URLs for image previews
      const newImageUrls = filesArray.map(file => URL.createObjectURL(file));
      
      setImages(prevImages => [...prevImages, ...filesArray]);
      setImageUrls(prevUrls => [...prevUrls, ...newImageUrls]);
    }
  };

  const removeImage = (index: number) => {
    // Release object URL to avoid memory leaks
    URL.revokeObjectURL(imageUrls[index]);
    
    setImages(images.filter((_, i) => i !== index));
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission with setTimeout
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Report submitted",
        description: `Missing person report for ${formData.fullName} has been submitted successfully.`,
      });
      
      // Reset form (in a real app you might redirect or do something else)
      setFormData({
        fullName: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        description: '',
        lastSeenDate: '',
        lastSeenLocation: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        contactRelation: ''
      });
      
      // Clear images
      imageUrls.forEach(url => URL.revokeObjectURL(url));
      setImages([]);
      setImageUrls([]);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Report a Missing Person</h1>
      <p className="text-gray-500">
        Please provide as much accurate information as possible to help locate the missing individual.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Details about the missing individual</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  id="fullName" 
                  name="fullName" 
                  placeholder="Enter full name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  name="age" 
                  type="number" 
                  placeholder="Enter age" 
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('gender', value)}
                  value={formData.gender}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input 
                  id="height" 
                  name="height"
                  placeholder="Enter height in cm" 
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input 
                  id="weight" 
                  name="weight" 
                  placeholder="Enter weight in kg" 
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Physical Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  placeholder="Provide details about appearance, clothing, distinctive features, etc." 
                  className="min-h-24"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Last Known Information</CardTitle>
            <CardDescription>Details about when and where the person was last seen</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lastSeenDate">Last Seen Date</Label>
                <Input 
                  id="lastSeenDate" 
                  name="lastSeenDate" 
                  type="date" 
                  value={formData.lastSeenDate}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="lastSeenLocation">Last Seen Location</Label>
                <Textarea 
                  id="lastSeenLocation" 
                  name="lastSeenLocation" 
                  placeholder="Provide detailed location information" 
                  value={formData.lastSeenLocation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Photos</CardTitle>
            <CardDescription>Upload up to 5 recent photos of the missing person</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {imageUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={url} 
                    alt={`Upload ${index + 1}`} 
                    className="h-32 w-full object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
              
              {imageUrls.length < 5 && (
                <div className="h-32 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors">
                  <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center">
                    <Plus className="h-8 w-8 mb-2" />
                    <span className="text-sm">Add Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                      multiple
                    />
                  </label>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2">Clear, recent photos help with identification.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Who to contact regarding this case</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Name</Label>
                <Input 
                  id="contactName" 
                  name="contactName" 
                  placeholder="Your full name"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactRelation">Relation to Missing Person</Label>
                <Input 
                  id="contactRelation" 
                  name="contactRelation" 
                  placeholder="e.g., Parent, Sibling, Friend"
                  value={formData.contactRelation}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Phone Number</Label>
                <Input 
                  id="contactPhone" 
                  name="contactPhone" 
                  type="tel" 
                  placeholder="Your phone number"
                  value={formData.contactPhone}
                  onChange={handleChange} 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email</Label>
                <Input 
                  id="contactEmail" 
                  name="contactEmail" 
                  type="email" 
                  placeholder="Your email address"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>Processing...</>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Report
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default ReportMissingForm;
