import { Link, Outlet } from 'react-router-dom';

const Notices = () => {
  return (
    <>
      <h2>NoticesPage</h2>
      <ul>
        <li>
          <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost/found</Link>
        </li>
        <li>
          <Link to="in-good-hands">in good hands</Link>
        </li>
        <li>
          <Link to="favorite">favorite</Link>
        </li>
        <li>
          <Link to="own">my ads</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Notices;
