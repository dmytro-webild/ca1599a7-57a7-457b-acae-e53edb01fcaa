import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import AboutVisionWebPage from "@/pages/AboutVisionWebPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-vision-web" element={<AboutVisionWebPage />} />
      </Route>
    </Routes>
  );
}
