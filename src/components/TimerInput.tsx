import React from 'react';

type TimerInputProps = {
  minutesInput: string;
  placeholder: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

const TimerInput = ({
  minutesInput,
  placeholder,
  handleInput,
  isDisabled,
}: TimerInputProps) => {
  return (
    <input
      className="input input-bordered text-black"
      id="timerInput"
      type="number"
      placeholder={placeholder}
      value={minutesInput}
      onChange={handleInput}
      disabled={isDisabled}
    />
  );
};

export default TimerInput;