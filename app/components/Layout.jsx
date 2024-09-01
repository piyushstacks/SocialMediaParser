// components/Layout.jsx
import Link from 'next/link';
import App from '../components/App';

const Layout = ({ children }) => (
  <div>
    {/* <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/parse">Parse Website</Link></li>
        <li><Link href="/windows">Windows Automation</Link></li>
      </ul>
    </nav> */}
    <App>

    </App>
    <main>{children}</main>
  </div>
);

export default Layout;
