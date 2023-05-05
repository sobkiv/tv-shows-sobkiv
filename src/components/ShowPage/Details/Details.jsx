import React from 'react';
import { DetailsWrapper } from './Detalis.styled';
import Schedule from '../Schedule';
import useGetShow from '../../hooks/useGetShow';

const Details = () => {
  const { status, schedule, url } = useGetShow();

  return (
    <DetailsWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      {schedule.time && schedule.days.length !== 0 ? (
        <Schedule />
      ) : (
        <p>No schedule</p>
      )}
      <a href={url} target="blank">
        Link to show
      </a>
    </DetailsWrapper>
  );
};

export default Details;
