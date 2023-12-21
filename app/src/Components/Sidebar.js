import React from 'react';

const Sidebar = () => {
    /* const styling={
        height:"90vh"
    }; */
  return (
    <div className="sidebar w-25 position-fixed bg-secondary p-3 rounded ">
      <div className="sidebar-header text-white">
        Sidebar Header
      </div>
      <div className="sidebar-menu  ">
        <div><a href="google.com" class="text-white text-decoration-none">Dashboard</a></div>
        <div><a href="google.com" class="text-white text-decoration-none">Products</a></div>
        <div><a href="google.com" class="text-white text-decoration-none">Orders</a></div>
        <div><a href="google.com" class="text-white text-decoration-none ">Customers</a></div>
      </div>
    </div>
  );
};

export default Sidebar;