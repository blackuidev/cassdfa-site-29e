import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  uploader: string;
  views: number;
  uploadDate: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnailUrl, title, uploader, views, uploadDate }) => {
  return (
    <Card className="w-full h-full hover:scale-105 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-video w-full">
          <img
            src={thumbnailUrl}
            alt={title}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-1">
          {uploader}
        </CardDescription>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground p-4">
        {views.toLocaleString()} views • {uploadDate}
      </CardFooter>
    </Card>
  );
};

export default VideoCard;
