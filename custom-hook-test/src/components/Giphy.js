import React, {Fragment} from "react";
import getGiphy from "../actions/giphy";

function Giphy({ tag, triggers = [], ...config }) {
    const q = "dog";

    const { response, loading, error } = getGiphy({
        q: q
    });

    const { data } = response || {};
    const { title } = config;

    return (
        <Fragment>
            {loading && <p>Loading Image...</p>}
            {error && <p>Error!</p>}
            {data && (
                <div className="gif">
                    {title && <p>{data.data.title}</p>}
                    <img alt="Gif" src={data.data.image_original_url} />
                </div>
            )}
        </Fragment>
    );
}

export default Giphy;