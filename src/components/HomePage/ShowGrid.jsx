import React from 'react';
import ShowCard from './ShowCard/ShowCard';
import IMAGE_NOT_FOUND from '../../assets/not-found.png';
import { useSelector } from 'react-redux';
import { FlexGrid } from '../styled';
import NoResult from './NoResult';

const ShowGrid = () => {
  const data = useSelector((state) => state.show.data);

  return (
    <FlexGrid>
      {data.length !== 0 ? (
        data.map(({ show }) => {
          return (
            <ShowCard
              key={show.id}
              id={show.id}
              name={show.name}
              image={show.image ? show.image.original : IMAGE_NOT_FOUND}
              rating={show.rating.average}
            />
          );
        })
      ) : (
        <NoResult />
      )}
    </FlexGrid>
  );
};

export default ShowGrid;
