import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2 block">
        <div className="text-xl">Pomodoro Clock</div>
        <div className="text-xs block">Created By Raymond Ng</div>
      </div>
    </div>
  );
};

export default NavBar;