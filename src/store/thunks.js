import { fetchShowSuccess } from './showSlice';

const BASE_URL = 'https://api.tvmaze.com/search/shows';

export const fetchShow = (showId) => async (dispatch) => {
  try {
    const result = await fetch(`${BASE_URL}?q=${showId}`).then((r) => r.json());
    dispatch(fetchShowSuccess(result));
  } catch (err) {
    console.log(err.message);
  }
};
