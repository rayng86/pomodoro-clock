import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ background: 'url(images/bg-001.jpeg)' }}
    >
      <div className="text-center hero-content">
        <div className="max-w-md">
          <div className="card shadow-xl image-full w-80">
            <div className="justify-end card-body">
              <h1>Pomodoro Initial Component Setup</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pomodoro;
