import React from 'react';
import useGetShow from '../hooks/useGetShow';

const Schedule = () => {
  const show = useGetShow();

  return (
    <div>
      Schedule: {show.schedule.time} on {show.schedule.days[0]}
    </div>
  );
};

export default Schedule;
