// import { lazy, Suspense } from 'react';
// import './App.css'
import ExampleLoaderSkeleton from './SkeletonLoader/Example1';
// import { FormicExample } from './components/formikExample'.

// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// import App2 from './FULL-errorboundry_LazyLoading_codeSpliting/App2';
// import Home from './components/routeEx/Home'
// import Dashboard from './components/routeEx/Dashboard'
// import Profile from './components/routeEx/Profile'
// const Home = lazy(() => import('./components/routeEx/Home'));
// const Dashboard = lazy(() => import('./components/routeEx/Dashboard'));
// const Profile = lazy(() => import('./components/routeEx/Profile'));


function App() {
  return (
    // <div>
    //   <Router>
    //     <div>
    //       <nav>
    //         <Link to="/">Home</Link> |
    //         <Link to="/dashboard">Dashboard</Link> |
    //         <Link to="/profile">Profile</Link>
    //       </nav>

    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/dashboard" element={<Dashboard />} />
    //           <Route path="/profile" element={<Profile />} />
    //         </Routes>
    //       </Suspense>
    //     </div>
    //   </Router>

    // </div>

    // <App2/>

    <ExampleLoaderSkeleton/>
    
  );
}

export default App;
