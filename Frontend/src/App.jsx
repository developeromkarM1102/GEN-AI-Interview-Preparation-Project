import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Features/Auth/auth.context'
import { InterviewProvider } from './Features/Interview/interview.context'
import EntryLoading from './components/EntryLoading'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pricing from './pages/Pricing'
import ResumeAnalyzer from './pages/ResumeAnalyzer'
import Performance from './pages/Performance'
import Home from './pages/Home'
import InterviewInput from './pages/InterviewInput'
import InterviewReportPage from './pages/InterviewReportPage'
import Protected from './Features/Auth/Protected'
import Loading from './components/Loading'

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3000); 
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <EntryLoading />;
  }

  return (
    <div className='bg-black'>
      <AuthProvider>
        <InterviewProvider>
          <Navbar />

          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='loading' element={<Loading />} />
            <Route path='/ai-interviews-prep' element={
              <Protected>
                <InterviewInput />
              </Protected>
            } />
            <Route path='/ai-interview-report/:id' element={
              <Protected>
                <InterviewReportPage />
              </Protected>
            } />
            <Route path='/resume-review' element={
              <Protected>
                <ResumeAnalyzer />
              </Protected>
            } />
            <Route path='/performance' element={
              <Protected>
                <Performance />
              </Protected>
            } />

          </Routes>

          <Footer />
        </InterviewProvider>
      </AuthProvider>
    </div>
  )
}
export default App