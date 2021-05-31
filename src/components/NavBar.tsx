import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 px-2 mx-2 block">
        <div className="text-xl">Pomodoro Clock</div>
        <div className="text-xs block">Created By Raymond Ng</div>
      </div>
      <div className="flex-none px-2 mx-2">
        <a
          href="https://github.com/rayng86/pomodoro-clock"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-ghost">github</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
