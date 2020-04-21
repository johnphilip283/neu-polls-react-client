import React from 'react';

const GifDescriptionComponent = ({ gif }) => {

    if (!gif) {
        return null;
    }

    return (
        <div className='text-center img-responsive preview'>
            <div className='d-flex justify-content-center'>
                <div className='text-center img-responsive image-container mt-3'>
                    <img className='m-3' src={gif.images.fixed_width.url} alt=""/>
                </div>
            </div>
            <div className='gif-description p-4'>
                {gif.rating && <p>Rating: {gif.rating.toUpperCase()}</p>}
                {gif.source_tld && <p>Original Source: <a href={gif.source_tld}>{gif.source_tld}</a></p>}
                {gif.url && <p>Original GIPHY Link: {gif.url}</p>}
                {gif.trending_datetime && gif.trending_datetime !== '1970-01-01T00:00:00' && <p>GIF was trending around: {new Date(gif.trending_datetime).toLocaleDateString()}</p>}
            </div>
        </div>


    );
}

export default GifDescriptionComponent;