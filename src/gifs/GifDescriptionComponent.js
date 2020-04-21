import React from 'react';

const GifDescriptionComponent = ({ gif }) => {

    if (!gif) {
        return null;
    }

    const {images, rating, source_tld, url, trending_datetime } = gif;

    return (
        <div className='text-center img-responsive preview'>
            <div className='d-flex justify-content-center'>
                <div className='text-center img-responsive image-container mt-3'>
                    <img className='m-3' src={images.fixed_width.url} alt=""/>
                </div>
            </div>
            <div className='gif-description p-4'>
                {rating && <p>Rating: {rating.toUpperCase()}</p>}
                {source_tld && <p>Original Source: <a href={source_tld}>{source_tld}</a></p>}
                {url && <p>Original GIPHY Link: {url}</p>}
                {trending_datetime && trending_datetime !== '1970-01-01T00:00:00' && <p>GIF was trending around: {new Date(trending_datetime).toLocaleDateString()}</p>}
            </div>
        </div>


    );
}

export default GifDescriptionComponent;