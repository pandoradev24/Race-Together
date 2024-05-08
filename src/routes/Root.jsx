import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="mx-auto w-screen max-w-[120rem] h-screen">
      <Outlet />
    </main>
  );
};

export default Root;
