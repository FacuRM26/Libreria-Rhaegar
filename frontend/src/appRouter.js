//src/appRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/app';
import AddBook from './components/addBook';
import GetBook from './components/getBook';

const AppRouter = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book/:id" element={<GetBook />} />
    </Routes>
    </Router>
  );
};

export default AppRouter;
