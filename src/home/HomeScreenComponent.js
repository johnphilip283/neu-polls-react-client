import React from 'react';
import polls from './polls';
import HeadingComponent from '../header/HeadingComponent';
import PollComponent from '../poll/PollComponent';
import './homescreen.scss';

const HomeScreenComponent = ({ }) => {

   if (!window.localStorage.getItem('token')) {
      window.location.replace("/login");
      return;
   }

   return (
      <div class="container-home">
         <HeadingComponent/>
         <div className='feed container-fluid'>
            {polls.map(poll => <PollComponent poll={poll}/>)}
         </div>
      </div>
       
   )
};

export default HomeScreenComponent;