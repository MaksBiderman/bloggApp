import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import AddPost from './components/pages/addPost';
import EditPost from './components/pages/editPost';
import Post from './components/pages/post';
import NotFound from './components/pages/notFound';
import Header from './components/views/Header/header';
import Footer from './components/views/Footer/footer';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
