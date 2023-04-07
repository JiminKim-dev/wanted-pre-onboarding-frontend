import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-200">
    <h1 className="mb-6 text-6xl font-bold">TodoList</h1>
    <div className=" flex items-center justify-between p-10 bg-white rounded-3xl w-[60%] h-[60vh] min-w-[360px]">
      <Outlet />
    </div>
  </div>
);

export default Layout;
