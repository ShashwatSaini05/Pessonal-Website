import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const IssueReportForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Issue Reported Successfully",
        description: "Your report has been submitted and will be reviewed shortly.",
      });
    }, 1500);
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Report an Issue</h2>
        <p className="text-muted-foreground">Help us keep the city clean and safe</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="issue-type">Issue Type</Label>
          <Select>
            <SelectTrigger id="issue-type">
              <SelectValue placeholder="Select issue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pothole">Pothole</SelectItem>
              <SelectItem value="garbage">Garbage Overflow</SelectItem>
              <SelectItem value="streetlight">Broken Streetlight</SelectItem>
              <SelectItem value="water">Water Leakage</SelectItem>
              <SelectItem value="footpath">Damaged Footpath</SelectItem>
              <SelectItem value="traffic">Faulty Traffic Signal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Describe the issue in detail..."
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>Upload Photo</Label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
            <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
            <Input type="file" className="hidden" accept="image/*" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Location</Label>
          <div className="flex gap-2">
            <Input placeholder="Auto-detected: Connaught Place, New Delhi" readOnly />
            <Button type="button" variant="outline" size="icon">
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Location will be automatically tagged using GPS</p>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Report"}
        </Button>
      </form>
    </Card>
  );
};

export default IssueReportForm;
