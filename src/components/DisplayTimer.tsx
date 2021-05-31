import React from 'react';

const timeFormatterHelper = (int: number) => (int < 10 ? '0' + int : int);

type DisplayTimerProps = {
  minutes: number;
  seconds: number;
  className: string;
}

const DisplayTimer = ({
  minutes,
  seconds,
  className,
}: DisplayTimerProps) => {
  const formattedMinutes = timeFormatterHelper(minutes);
  const formattedSeconds = timeFormatterHelper(seconds);

  return (
    <div className={className}>
      <span className="font-mono text-6xl countdown my-4">
        <span style={{ ['--value' as any]: formattedMinutes }} /> :
        <span style={{ ['--value' as any]: formattedSeconds }} />
      </span>
    </div>
  );
};

export default DisplayTimer;