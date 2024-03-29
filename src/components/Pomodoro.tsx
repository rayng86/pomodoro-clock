import React, { useState, useEffect } from 'react';
import DisplayTimer from './DisplayTimer';
import TimerInput from './TimerInput';
import validate from '../validate';
import ButtonPreset from './ButtonPreset';

const Pomodoro = () => {
  const [minutesInput, setMinutesInput] = useState<string>('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [className, setClassName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isOver, setIsOver] = useState(false);

  let timeLeft: number;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let currentMinutes = e.target.value;
    // limit maximum minutes that can be set to 2 characters
    if (e.target.value.length <= 2) {
      setMinutesInput(currentMinutes);
      setMinutes(Number(currentMinutes));
    }
    let error = validate(currentMinutes);
    setError(error);
  };

  const tick = () => {
    timeLeft = minutes * 60 + seconds;

    timeLeft--;
    if (timeLeft < 0) {
      setIsActive(false);
      setIsOver(true);
    } else {
      setIsOver(false);
      let currentMinutes = Math.floor(timeLeft / 60);
      setMinutes(currentMinutes);
      setSeconds(timeLeft - currentMinutes * 60);
      checkTimeRemaining();
    }
  };

  const displayNotification = () => {
    if (isOver) {
      return `Time's up!`;
    }
    return null;
  };

  const handleCountDown = (isActive: boolean) => {
    setError(validate(minutesInput));
    if (Number(minutesInput) > 0) {
      if (isActive) {
        setIsActive(true);
      } else {
        setIsActive((prevState) => !prevState);
      }
    }
  };

  const reset = () => {
    timeLeft = Number(minutesInput) * 60;
    setMinutes(Number(minutesInput));
    setSeconds(0);
    setClassName('');
    setIsActive(false);
  };

  const checkTimeRemaining = () => {
    if (timeLeft <= 10) {
      setClassName('text-red-500');
    } else {
      setClassName('');
    }
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;
    let speed = 1000 / 1;

    if (isActive) {
      timerId = setInterval(() => {
        tick();
      }, speed);
    } else if (!isActive && minutes > 0 && seconds > 0) {
      // @ts-ignore
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  });

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ background: 'url(images/bg-001.jpeg)' }}
    >
      <div className="text-center hero-content">
        <div className="max-w-md">
          <div className="card shadow-xl image-full w-80">
            <div className="justify-end card-body">
              <h1 className="card-title">{displayNotification()}</h1>
              <div>
                <DisplayTimer
                  minutes={minutes}
                  seconds={seconds}
                  className={className}
                />
              </div>
              <TimerInput
                minutesInput={minutesInput}
                placeholder="Minutes"
                handleInput={handleInput}
                isDisabled={isActive}
              />
              <div className="text-red-300 label-text inline-flex items-center my-2 text-xs">
                {error}
              </div>
              <h2 className="uppercase mb-2">Quick Presets</h2>
              <ButtonPreset
                setMinutesInput={setMinutesInput}
                setMinutes={setMinutes}
                value={'5'}
              />
              <ButtonPreset
                setMinutesInput={setMinutesInput}
                setMinutes={setMinutes}
                value={'25'}
              />
              <div className="btn-group flex justify-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => handleCountDown(!isActive)}
                >
                  {!isActive ? 'start' : 'pause'} timer
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={reset}
                >
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
