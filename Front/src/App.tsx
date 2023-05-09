import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout';
import HomePage from './routes/HomePage';
import ErrorPage from './routes/ErrorPage';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
