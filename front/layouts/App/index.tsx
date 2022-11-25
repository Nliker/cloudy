import React from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const MainPage = loadable(() => import('@pages/MainPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main_page" element={<MainPage />} />
    </Routes>
  );
};

export default App;