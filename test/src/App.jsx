import "./App.css";
import Profile from "./Props/Profile";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Profilepage from "./pages/Profilepage";
import About from "./pages/About";

import { useState } from "react";

function App() {
  const [ispage, setPage] = useState("Profile");

  return (
    <>
      <Nav />

      <Sidebar setPage={setPage} />

      {ispage === "Profile" && (
        <>
          <Profile
            name="Laboni Rahman"
            role="CSE Graduate"
            uni="KUET"
          />

          <Profile
            name="John Doe"
            role="Software Engineer"
            uni="BUET"
          />
        </>
      )}

      {ispage === "Home" && <Home />}

      {ispage === "About" && <About />}

      {ispage === "Profilepage" && <Profilepage />}
    </>
  );
}

export default App;