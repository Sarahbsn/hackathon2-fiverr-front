import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  const navbarLinks = [
    {
      id: 1,
      link: '/friends',
      title: 'Friends',
    },
    {
      id: 2,
      link: '/events/1',
      title: 'Events',
    },
    {
      id: 3,
      link: '/blog',
      title: 'Blog',
    },
    {
      id: 4,
      link: '/forum',
      title: 'Forum',
    },
    {
      id: 5,
      link: '/resources',
      title: 'My Profil',
    },
  ];

  return (
    <nav>
      <ul>
        {navbarLinks &&
          navbarLinks.map(({ id, link, title }) => (
            <li key={`${link}-${id}`}>
              <NavLink className="nav-links" exact to={link}>
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
