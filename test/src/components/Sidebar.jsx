import { useState, useEffect, useRef } from "react";

function Sidebar({ setPage }) {
  const [ShowList, SetShowlist] = useState(false);

  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  function SideOnclick() {
    SetShowlist(!ShowList);
  }

  useEffect(() => {  // runs code when state changes
    function handleOutsideClick(event) {
      if (
        ShowList &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        SetShowlist(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ShowList]);

  return (
    <>
      <button
        ref={buttonRef}
        className="side"
        onClick={SideOnclick}
      >
         ☰
      </button>

      {ShowList && (
        <div ref={sidebarRef} className="sidebar open">
          <h2>Menu</h2>

          <button onClick={() => setPage("Home")}>
            Home
          </button>

          <button onClick={() => setPage("About")}>
            About
          </button>

          <button onClick={() => setPage("Profilepage")}>
            Profile
          </button>
        </div>
      )}
    </>
  );
}

export default Sidebar;