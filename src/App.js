import './App.css';

import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTopicPage from './component/AddTopicPage';
import BlogEditor from './component/BlogEditor';
import Show from './component/Show';
import RecommendedTopic from './component/RecommendedTopic';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/add-topic" Component={AddTopicPage} />
          <Route path="/" Component={Navbar} />
          
          <Route path="/blog-editor" Component={BlogEditor} />
          <Route  path="/blog-editor/show" Component={Show}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
