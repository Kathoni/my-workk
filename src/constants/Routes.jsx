import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {publicLinks} from "./Links"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"


const Landing = React.lazy(() => import('../pages/Landing'))
const About=React.lazy(()=>import('../pages/About'))
const Team=React.lazy(()=>import('../pages/Team'))
const Contact=React.lazy(()=>import('../pages/Contact'))

function BaseRouter () {
  return (
    <>
    <Router>
      <Navbar/>
    <Suspense fallback={<div>Loading...</div>}>
     <Routes>
        <Route exact path={publicLinks?.Landing} element={<Landing/>} />
        <Route  path={publicLinks?.About} element={<About/>} />
        <Route  path={publicLinks?.Team} element={<Team/>} />
        <Route  path={publicLinks?.Contact} element={<Contact/>} />
     </Routes>
    </Suspense>
    <Footer/>
    </Router>
    </>
  )
}

export default BaseRouter 