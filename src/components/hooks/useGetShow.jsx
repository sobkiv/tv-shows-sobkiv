import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useGetShow = () => {
  const { id } = useParams();
  const shows = useSelector(state => state.show.data);
  const show = shows.filter(el => el.show.id === Number(id))[0].show;

  return show;
};

export default useGetShow;
