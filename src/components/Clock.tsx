import React, { useState, useEffect } from 'react';

export function UTCClock() {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState('');
  const [utcOffset, setUtcOffset] = useState(0);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(tz || 'UTC');
    } catch (error) {
      console.error('Error getting timezone:', error);
      setTimeZone('UTC');
    }

    const offset =- new Date().getTimezoneOffset() / 60;
    setUtcOffset(offset);

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

const formatTime = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: timeZone || 'UTC' // Usa 'UTC' si timeZone no está definido
  };

  return date.toLocaleTimeString('es-MX', options);
};

  const getTimeZoneMessage = () => {
    if (utcOffset === -6) {
      return "Estamos en la misma zona horaria (UTC-6)";
    } else {
      const diff = utcOffset + 6;
      const direction = diff > 0 ? "adelante" : "atrás";
      return `Estás ${Math.abs(diff)} hora${Math.abs(diff) !== 1 ? 's' : ''} ${direction} de México (UTC-6)`;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex flex-col items-center space-y-4 text-white">
          <div className="text-5xl font-GilroyBold text-gray-700" aria-live="polite">{formatTime(time)}</div>
          <p className="text-lg text-gray-600 font-GilroySemibold">Zona horaria: {timeZone}</p>
          <p className="text-md text-center text-gray-600 font-GilroyRegular" aria-live="polite">{getTimeZoneMessage()}</p>
        </div>
      </div>
    </div>
  );
}