import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
const mockIssues = [
  { id: 1, type: "Pothole", lat: 28.6139, lng: 77.2090, status: "open" },
  { id: 2, type: "Garbage", lat: 28.6129, lng: 77.2295, status: "progress" },
  { id: 3, type: "Streetlight", lat: 28.6449, lng: 77.2167, status: "resolved" },
  { id: 4, type: "Water Leak", lat: 28.5355, lng: 77.3910, status: "open" },
];

const IssueMap = () => {
  return (
    <Card className="w-full h-[500px] overflow-hidden bg-muted/50">
      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/30">
        {/* Placeholder for actual map integration */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Interactive Map View</h3>
            <p className="text-muted-foreground max-w-md">
              Real-time GIS map showing all reported issues. Click markers to view details and status.
            </p>
          </div>
          {/* Mock markers info */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Badge variant="outline" className="border-status-open text-status-open">
              <MapPin className="h-3 w-3 mr-1" />
              Open Issues
            </Badge>
            <Badge variant="outline" className="border-status-progress text-status-progress">
              <MapPin className="h-3 w-3 mr-1" />
              In Progress
            </Badge>
            <Badge variant="outline" className="border-status-resolved text-status-resolved">
              <MapPin className="h-3 w-3 mr-1" />
              Resolved
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IssueMap;
