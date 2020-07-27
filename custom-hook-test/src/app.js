import React, { useState } from "react";
import { useFetchData } from './hooks';
import { getFetchUrl } from './api';
import "./styles.css";

const initialData = {data: []}

export function App() {
  const [query, setQuery] = useState('dog');
  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData(
    getFetchUrl(query),
    initialData,
  );

  return (
    <div className="app">
      <h2>Render the API response within the container below.</h2>
      <pre id="response-container" />
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <main id="gallery">
          {data.data.map(item => (
            <figure key={item.id}>
              <img src={item.images.preview_gif.url} alt={item.title} title={item.title} />
            </figure>
          ))}
        </main>
      )}
    </div>
  );
}
