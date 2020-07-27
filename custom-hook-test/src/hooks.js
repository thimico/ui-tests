import { useState, useEffect } from 'react';
import { getGifts } from './api.js';

export const useFetchData = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await getGifts(url);

        if (mounted) setData(result.data)
      } catch (error) {
        if (mounted) setIsError(true);
      }

      if (mounted) setIsLoading(false);
    };

    fetchData();

    return () => {
      mounted = false;
    }
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};