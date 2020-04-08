import React from 'react';
import polls from './polls';
import HeadingComponent from '../header/HeadingComponent';

const HomeScreenComponent = ({ }) => {
   console.log("2");
   return (
       <div className='container-fluid'>
           <div className='col-3 d-inline bg-primary'>
            hi
           </div>
           <div className='col-3 d-inline'>
            i'm
           </div>
           <div className='col-3 d-inline'>
            john
           </div>
        </div>
   )
};

export default HomeScreenComponent;