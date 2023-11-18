import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import HomePage from './pages/HomePage';
import AllProductPage from './pages/AllProductPage';
import SingleProductPage from './pages/SingleProductPage';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<AllProductPage />} />
          <Route path='/products/:category/:id' element={<SingleProductPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;