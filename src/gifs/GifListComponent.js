import React from 'react';
import './gif.scss';

const GifListComponent = ({ gifs, gifSelectHandler }) => {

    if (!gifs.length) {
        return null;
    }

    return (
        <div className='gif-container'>
            {<h3 className='p-3'>Select a GIF:</h3>}
            {gifs.map(gif => <div className='text-center img-responsive m-3 p-2 gif-background'>
                                    <img src={gif.images.fixed_width.url} alt="" onClick={gifSelectHandler(gif)}/>
                                </div>)}
            <div className='mb-3'></div>
        </div>
    );
}

export default GifListComponent;