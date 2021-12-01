import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { caption: 'A', to: '/a' },
  { caption: 'B', to: '/b' },
];

export function NavBar() {
  return (
    <nav >
      <div >
        <Link to="/" >
          React 18
        </Link>
        <div >
          <ul>
            {navItems.map((navItem) => (
              <li key={navItem.to}>
                <NavLink to={navItem.to}>
                  {navItem.caption}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}