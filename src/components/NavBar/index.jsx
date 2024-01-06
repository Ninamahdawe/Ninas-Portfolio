// import { Link, Events, scrollSpy } from "react-scroll";
// import { useState, useEffect } from "react";

// function Nav() {
//   const [navItems, setNavItems] = useState([
//     "Home",
//     "About me",
//     "Portfolio",
//     "Projects",
//     "Contact",
//   ]);
//   const [backgroundColor, setBackgroundColor] = useState("transparent");

//   useEffect(() => {
//     function handleScrollStart() {
//       setBackgroundColor("transparent");
//     }

//     function handleScrollEnd() {
//       if (window.scrollY > 50) {
//         setBackgroundColor("#f0f0f0");
//       } else {
//         setBackgroundColor("transparent");
//       }
//     }
//     Events.scrollEvent.register("begin", handleScrollStart);
//     Events.scrollEvent.register("end", handleScrollEnd);
//     scrollSpy.update();

//     return () => {
//       Events.scrollEvent.remove("begin", handleScrollStart);
//       Events.scrollEvent.remove("end", handleScrollEnd);
//     };
//   }, []);

//   return (
//     <nav style={{ backgroundColor }}>
//       <ul className="nav-list">
//         {navItems.map((item, index) => (
//           <li key={index}>
//             <Link
//               activeClass="active"
//               to={item.toLowerCase().replace(/\s/g, "")} // remove spaces for the 'to' prop
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               {item}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Nav;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const [navItems] = useState([
    "Home",
    "About me",
    "Portfolio",
    "Projects",
    "Contact",
  ]);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBackgroundColor("bg-gray-100");
      } else {
        setBackgroundColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 ${backgroundColor} shadow-md`}>
      <div className="flex justify-center items-center p-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s/g, "")}`}
            // className="text-gray-700 hover:text-blue-500 cursor-pointer mx-4" // Increased spacing with mx-4
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
