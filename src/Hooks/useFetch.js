import { useReducer, useEffect } from "react";
import axios from "axios";

const init = {
  jobs: [],
  loading: false,
  error: false,
};

const ACTIONS = {
  REQUEST: "request",
  GET_DATA: "getdata",
  ERROR: "error",
};
const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST:
      return { jobs: [], loading: true, error: false };
    case ACTIONS.GET_DATA:
      return { ...state, jobs: action.payload.jobs, loading: false };
    case ACTIONS.ERROR:
      return { ...state, jobs: [], loading: false, error: true };

    default:
      return state;
  }
};
const useFetch = (params, page) => {
  const [state, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    dispatch({ type: ACTIONS.REQUEST });
    const cancelToken = axios.CancelToken.source();
    axios
      .get(URL, {
        params: {
          cancelToken: cancelToken.token,
          markdown: true,
          page: page,
          ...params,
        },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);

  return state;
};

export default useFetch;
