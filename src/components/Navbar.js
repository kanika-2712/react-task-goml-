// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Navbar = () => {
//   return (
//     // <nav>
//     //   <ul>
//     //     <li><Link to="/">Home</Link></li>
//     //     <li><Link to="/movies">Movies</Link></li>
//     //     <li><Link to="/concerts">Concerts</Link></li>
//     //     <li><Link to="/events">Events</Link></li>
//     //   </ul>
//     // </nav>

//     <nav className="navbar">
//         <div className="logo">E-Cube</div>
//         <ul className="nav-links">
//          <li><Link to="/">Home</Link></li>
//          <li><Link to="/movies">Movies</Link></li>
//          <li><Link to="/concerts">Concerts</Link></li>
//          <li><Link to="/events">Events</Link></li>
//         </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">E-Cube</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/movies" className="nav-link">Movies</Link></li>
        <li><Link to="/concerts" className="nav-link">Concerts</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
