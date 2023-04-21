import { Route, Routes } from 'react-router-dom';
import AllBlogs from './components/AllBlog';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
