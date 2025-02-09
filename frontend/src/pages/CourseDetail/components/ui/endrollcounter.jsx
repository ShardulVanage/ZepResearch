import React, { useState, useEffect } from 'react';

const EnrollmentCounter = ({ baseNumber = 289, dailyIncrease = 15 }) => {
  const [enrollment, setEnrollment] = useState(baseNumber);

  useEffect(() => {
    // Get the initial increase based on days passed since a reference date
    const referenceDate = new Date('2025-02-09').getTime(); // Using current date as reference
    const currentDate = new Date().getTime();
    const daysPassed = Math.floor((currentDate - referenceDate) / (24 * 60 * 60 * 1000));
    const initialIncrease = daysPassed * dailyIncrease;

    // Set initial enrollment with accumulated increase
    setEnrollment(baseNumber + initialIncrease);

    // Calculate time until next midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow - now;

    // Set up the interval to increase enrollment every 24 hours
    const timeout = setTimeout(() => {
      setEnrollment(prev => prev + dailyIncrease);
      
      // Set up recurring interval after initial timeout
      const interval = setInterval(() => {
        setEnrollment(prev => prev + dailyIncrease);
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

      return () => clearInterval(interval);
    }, timeUntilMidnight);

    return () => clearTimeout(timeout);
  }, [baseNumber, dailyIncrease]);

  return (
        <div>
          <p>{enrollment}</p>
        </div>
      
  );
};

export default EnrollmentCounter;