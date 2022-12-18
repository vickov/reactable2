// pages/_app.js
//import './formstyle.css'

//DONE: Implement React Async
//DONE: Move Fetching to Requests.js
//DONE: Integrate React-Router (possibly ortogonally) - inpect React Asnyc lazy loading - possible to construct app with configuration
//DONE: Integrate Navbar or Sidebar
//DONE: Create new Table component (Users) from the render part - Done?
//DONe: Interactive search integration - React table global filter
//Done: Update (not Delete)
//TODO: Insert
//TODO: Integrate fiscalization
//TODO: Integrate tabs
//TODO: Test react-big-scheduler (or simplier alternative with list)
//TODO: Separate app into folder and concerns


import React from 'react'
// After (Next.js)
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}