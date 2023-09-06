import MainPage from "../pages/mainPage/ui/mainPage"
import Footer from "../widgets/footer/"
import Header from "../widgets/header/"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<MainPage />}/>

      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
