import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ThumbsUp, MessageSquare, Clock } from "lucide-react";

const mockIssues = [
  {
    id: 1,
    type: "Pothole",
    description: "Large pothole on MG Road causing traffic issues",
    location: "MG Road, Bangalore",
    status: "open",
    upvotes: 24,
    comments: 5,
    time: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    type: "Garbage",
    description: "Overflowing garbage bins at market area",
    location: "Sadar Bazaar, Delhi",
    status: "progress",
    upvotes: 18,
    comments: 3,
    time: "5 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    type: "Streetlight",
    description: "Non-functional streetlight creating safety concerns",
    location: "Park Street, Kolkata",
    status: "resolved",
    upvotes: 32,
    comments: 8,
    time: "1 day ago",
    imageUrl: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=400&h=300&fit=crop"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "open": return "border-status-open text-status-open";
    case "progress": return "border-status-progress text-status-progress";
    case "resolved": return "border-status-resolved text-status-resolved";
    default: return "border-status-closed text-status-closed";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "open": return "Open";
    case "progress": return "In Progress";
    case "resolved": return "Resolved";
    default: return "Closed";
  }
};

const IssuesFeed = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {mockIssues.map((issue) => (
        <Card key={issue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${issue.imageUrl})` }}
          />
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <Badge variant="outline">{issue.type}</Badge>
              <Badge variant="outline" className={getStatusColor(issue.status)}>
                {getStatusLabel(issue.status)}
              </Badge>
            </div>
            
            <h3 className="font-semibold line-clamp-2">{issue.description}</h3>
            
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="line-clamp-1">{issue.location}</span>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex gap-4 text-sm text-muted-foreground">
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{issue.upvotes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>{issue.comments}</span>
                </button>
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>{issue.time}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IssuesFeed;
