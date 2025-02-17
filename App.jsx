
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import MovieList from './Components/MovieList'
import Favourites from './Components/Favourites'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
     {
      path:"/",
      element:
      <>
      <Header />
      <Home />
      <Footer />
      </>
     },
     {
      path: "/movieList",
      element: 
      <>
      <Header />
      <MovieList />
      <Footer />
      </>
     },
     {
      path: "/favourites",
      element: 
      <>
      <Header />
      <Favourites />
      <Footer />
      </>
     }
    ])

    

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
