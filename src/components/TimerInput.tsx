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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const ALLOWED_CHARS_REGEXP = /[0-9/]+/;
    if (!ALLOWED_CHARS_REGEXP.test(e.key)) {
      e.preventDefault();
    }
  };
  return (
    <input
      className="input input-bordered text-black"
      id="timerInput"
      type="number"
      placeholder={placeholder}
      value={minutesInput}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
      disabled={isDisabled}
    />
  );
};

export default TimerInput;