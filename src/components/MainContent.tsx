import React from 'react';
import VideoCard from './VideoCard';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  views: number;
  uploadDate: string;
}

const dummyVideos: Video[] = [
  {
    id: '1',
    title: 'Amazing Landscape Video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465146344425-d5e63cc1ca2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80',
    channelName: 'NatureViews',
    views: 1234567,
    uploadDate: '2 weeks ago',
  },
  {
    id: '2',
    title: 'Cooking Delicious Pasta',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600891722919-52b4c5ba0353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    channelName: 'PastaLover',
    views: 876543,
    uploadDate: '1 week ago',
  },
  {
    id: '3',
    title: 'Space Exploration Documentary', 
    thumbnailUrl: 'https://images.unsplash.com/photo-1531260573843-1c9091521afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    channelName: 'SpaceXplore',
    views: 543210,
    uploadDate: '3 days ago',
  },
  {
    id: '4',
    title: 'Urban Exploration Adventure', 
    thumbnailUrl': 'https://images.unsplash.com/photo-1501594907352-045c43374af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
    channelName': 'TheUrbanRoamer',
    views': 987654,
    uploadDate': '5 days ago',
  },
  {
    id: '5',
    title: 'Mountain Biking in the Rockies', 
    thumbnailUrl': 'https://images.unsplash.com/photo-1540497077202-7ca83968f33f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    channelName': 'MountainBikeAdventures',
    views': 2345678,
    uploadDate': '1 day ago',
  },
  {
    id: '6',
    title: 'DIY Home Improvement Tips', 
    thumbnailUrl': 'https://images.unsplash.com/photo-1519388241629-fbb61912d156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    channelName': 'HomeImprovementGuru',
    views': 765432,
    uploadDate': '4 days ago',
  },
];

const MainContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {dummyVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default MainContent;
