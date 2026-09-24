import { useState } from "react";
import homeBg from "./assets/homeBg.jpg";
import "./components/nav.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [activePage, setActivePage] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: "🏠" },
    { name: "Dashboard", icon: "🚪" },
    { name: "My People", icon: "👤" },
    { name: "Notifications", icon: "🔔" },
    { name: "Settings", icon: "⚙️" },
  ];

  const handleMenuClick = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  return (
    <div
      className={darkMode ? "app" : "app dark"}
      style={{ fontSize: `${fontSize}px` }}
    >

      {/* Hamburger Button */}
     {!sidebarOpen && (
  <button
    className="hamburger"
    onClick={() => setSidebarOpen(true)}
  >
    ☰
  </button>
)}

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="logo">
           Career Lens
        </div>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "menu active"
                  : "menu"
              }
              onClick={() => handleMenuClick(item.name)}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

      </aside>

      {/* Main Content */}
      <main className="main">

        <header className="header">
        { activePage != "Home"  && (
          <div>
            <h1>{activePage}</h1>
          </div> )}

        </header>

          {activePage === "Home" && (
  <div
    className="home"
    style={{ backgroundImage: `url(${homeBg})` }}
  >
    <h1>Career Lens</h1>
  </div>
)}

        {/* Notifications */}
        {activePage === "Notifications" && (
          <div className="content-box">

            <h2>Notifications</h2>

            <div className="notification">
              <span>🔔</span>

              <div>
                <strong>New message received</strong>
                <p>You have received a new message.</p>
              </div>
            </div>

            <div className="notification">
              <span>🎉</span>

              <div>
                <strong>Congratulations!</strong>
                <p>Your project has been successfully updated.</p>
              </div>
            </div>

          </div>
        )}


        {/* My People */}
        {activePage === "My People" && (
          <div className="content-box">

            <h2>My People</h2>

            <div className="my_people">
              <div className="avatar">JD</div>

              <div>
                <strong>John Doe</strong>
                <p>Project update and next steps</p>
              </div>
            </div>

            <div className="email">
              <div className="avatar">AS</div>

              <div>
                <strong>Admin Support</strong>
                <p>Your account settings were updated</p>
              </div>
            </div>

          </div>
        )}


        {/* Settings */}
        {activePage === "Settings" && (
          <div className="content-box settings">

            <h2>Settings</h2>

            {/* Dark Mode */}
            <div className="setting">

              <div>
                <strong>Appearance</strong>
                <p>Switch between light and dark mode.</p>
              </div>

              <button
                className={darkMode ? "toggle on" : "toggle"}
                onClick={() => setDarkMode(!darkMode)}
              >
                <span></span>
              </button>

            </div>


            {/* Font Size */}
            <div className="setting">

              <div>
                <strong>Font Size</strong>
                <p>Adjust the application's font size.</p>
              </div>

              <div className="font-controls">

                <button
                  onClick={() =>
                    setFontSize((size) =>
                      Math.max(12, size - 1)
                    )
                  }
                >
                  A-
                </button>

                <span>{fontSize}px</span>

                <button
                  onClick={() =>
                    setFontSize((size) =>
                      Math.min(24, size + 1)
                    )
                  }
                >
                  A+
                </button>

              </div>

            </div>


            {/* Notifications */}
            <div className="setting">

              <div>
                <strong>Notifications</strong>
                <p>
                  Receive notifications about account activity.
                </p>
              </div>

              <input type="checkbox" defaultChecked />

            </div>


            {/* Email Notifications */}
            <div className="setting">

              <div>
                <strong>Email Notifications</strong>
                <p>
                  Receive important updates through email.
                </p>
              </div>

              <input type="checkbox" defaultChecked />

            </div>

          </div>
        )}

      </main>

    </div>
  );
}
export default App;