import { useEffect, useState } from 'react';
import { CountdownHookProps } from './types';

const useCountdown = ({ second }: CountdownHookProps) => {

  const [timeLeft, setTimeLeft] = useState<number>(second);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const reset = () => {
    setTimeLeft(second)
  }

  return {
    count: timeLeft,
    reset
  }
}

export default useCountdown