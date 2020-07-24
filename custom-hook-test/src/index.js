import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { getPosts } from '../../actions/post';

const initialData = {data: []}


const App = ({ getPosts, post: { posts } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);


    return (
    <div className="app">
      <h2>Render the API response within the container below.</h2>
      <pre id="response-container" >
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
      </pre>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
