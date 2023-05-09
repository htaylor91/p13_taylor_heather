import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './routes/Layout';
import HomePage from './routes/HomePage';
import ErrorPage from './routes/ErrorPage';
import SignInPage from './routes/SignInPage';
import PrivateOutlet from './routes/PrivateOutlet';
import ProfilePage from './features/user/ProfilePage';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route index element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />

            {/* protected routes */}
            <Route path="/profile" element={<PrivateOutlet />}>
              <Route index element={<ProfilePage />} />
            </Route>
        </Route>

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
