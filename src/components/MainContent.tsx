import React from 'react';

const MainContent = () => {
  const videoData = [
    {
      id: '1',
      title: 'Epic Mountain Biking Adventure',
      thumbnailUrl: 'https://images.unsplash.com/photo-1579572354847-a9a73b8e4803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      channelName: 'AdventureTime',
      views: 1234567,
      uploadDate: '1 week ago',
    },
    {
      id: '2',
      title: 'Surfing in Bali',
      thumbnailUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      channelName: 'SurfLife',
      views: 876543,
      uploadDate: '3 days ago',
    },
    {
      id: '3',
      title: 'Hiking the Appalachian Trail',
      thumbnailUrl: 'https://images.unsplash.com/photo-1518733040701-f20585f92570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      channelName: 'TrailBlazers',
      views: 567890,
      uploadDate: '2 weeks ago',
    },
    {
      id: '4',
      title: 'Urban Exploration Adventure',
      thumbnailUrl: 'https://images.unsplash.com/photo-1501594907352-045c43374af0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
      channelName: 'TheUrbanRoamer',
      views: 987654,
      uploadDate: '5 days ago',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoData.map((video) => (
          <div key={video.id} className="border rounded-md p-4">
            <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover mb-2 rounded-md" />
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-gray-600">{video.channelName}</p>
            <div className="flex justify-between mt-2">
              <p className="text-sm text-gray-500">{video.views} views</p>
              <p className="text-sm text-gray-500">{video.uploadDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
