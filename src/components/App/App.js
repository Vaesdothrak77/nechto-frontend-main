import Home from "../Modules/Home/Home";
import Module1 from "../Modules/Module1/Module1";
import Lessons1 from "../Modules/Module1/Lesson1/Lesson1";
import BooksArticles from "../Modules/BooksArticles/BooksArticles";
import Guests from "../Modules/Guests/Guests";
import SubpageGuests from "../Modules/Guests/SubpageGuests";
import AdditionalFiles from "../Modules/AdditionalFiles/AdditionalFiles";
import VideoGuests from "../Modules/Guests/VideoGuests";
import VideoSubpage from "../Modules/VideoSubpage/VideoSubpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module1" element={<Module1 />} />
        <Route path="/lessons1" element={<Lessons1 />} />
        <Route path="/books" element={<BooksArticles />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/subpage" element={<SubpageGuests />} />
        <Route path="/addfile" element={<AdditionalFiles />} />
        <Route path="/video" element={<VideoGuests />} />
        <Route path="/videosub" element={<VideoSubpage />} />
      </Routes>
    </Router>
  );
}

export default App;
