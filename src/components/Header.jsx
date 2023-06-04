import Navigation from './other/Navigations';
import Login from './other/Login';

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full h-20">
      <div className="flex items-center justify-between w-[20rem] border-cyan-900 border-2">
        <h1 className="text-3xl font-bold">SNAP</h1>
        <Navigation />
      </div>

      <Login />
    </header>
  );
};

export default Header;
