import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import { ErrorBoundary } from './ErrorBoundery';

function App2() {

    const Home = lazy(() => import('./Home'));
    const Login = lazy(() => import('./Login'));
    const Dashboard = lazy(() => import('./Dashboard'));


    return (
        <div>

            <Router>
                <Navbar />
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </Router>

        </div>
    );
}

export default App2;