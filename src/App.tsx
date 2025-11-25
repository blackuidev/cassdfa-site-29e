import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">YouTube</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/trending" className="hover:text-gray-300">Trending</Link></li>
          <li><Link to="/subscriptions" className="hover:text-gray-300">Subscriptions</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Sidebar = () => (
  <aside className="bg-gray-700 text-white w-64 p-4">
    <ul>
      <li><Link to="/" className="block py-2 hover:bg-gray-600 px-4 rounded">Home</Link></li>
      <li><Link to="/trending" className="block py-2 hover:bg-gray-600 px-4 rounded">Trending</Link></li>
      <li><Link to="/subscriptions" className="block py-2 hover:bg-gray-600 px-4 rounded">Subscriptions</Link></li>
      <li><Link to="/library" className="block py-2 hover:bg-gray-600 px-4 rounded">Library</Link></li>
      <li><Link to="/history" className="block py-2 hover:bg-gray-600 px-4 rounded">History</Link></li>
    </ul>
  </aside>
);

const Home = () => (
  <main className="p-4">
    <h2>Home</h2>
    <p>Welcome to the YouTube clone!</p>
  </main>
);

const Trending = () => (
  <main className="p-4">
    <h2>Trending</h2>
    <p>Check out what's trending!</p>
  </main>
);

const Subscriptions = () => (
  <main className="p-4">
    <h2>Subscriptions</h2>
    <p>See content from your favorite creators.</p>
  </main>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 bg-gray-900 text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
