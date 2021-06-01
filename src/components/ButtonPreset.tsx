import React from 'react';

type ButtonPresetProps = {
  value: string,
  setMinutesInput: (val: string) => void,
  setMinutes: (val: number) => void,
}

const ButtonPreset = ({ value, setMinutesInput, setMinutes } : ButtonPresetProps) => {
  const handleOnClick = () => {
    setMinutesInput(value);
    setMinutes(Number(value));
  }
  return (
    <button
      className="btn btn-outline btn-accent mb-3"
      onClick={handleOnClick}
    >
      {value} minutes
    </button>
  );
};

export default ButtonPreset;