import { Home, About, Contact, Orders, Profile, Search, NotFound, Bio, Chemistry, Daniyal, Hikmat, Karachi, Majeed, Social } from "./routes/routes";
import { Header, Footer } from "./components/components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/huts/bio" element={<Bio />} />
          <Route path="/huts/chemistry" element={<Chemistry />} />
          <Route path="/huts/daniyal" element={<Daniyal />} />
          <Route path="/huts/hikmat" element={<Hikmat />} />
          <Route path="/huts/karachi" element={<Karachi />} />
          <Route path="/huts/majeed" element={<Majeed />} />
          <Route path="/huts/social" element={<Social />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
