import React from 'react';
import HeadingComponent from '../header/HeadingComponent';

const AboutComponent = ({ }) => {
    return (
        <div class='about-page'>
            <HeadingComponent/>

            <div className='container-fluid container-text'>
                    <div className='text-header'>
                        <h3 className='mb-2'>NEU Polls: The one-stop shop for all your burning questions.</h3>
                        <hr/>
                        <p>NEU Polls is a space where you can create, vote, and comment 
                            on polls that you and others make! This platform is based off a 
                            Northeastern University Facebook group called NEU Polls, which 
                            consists of different Northeastern students writing polls 
                            and other students voting on it. The platform is meant to offer 
                            a safe and open space for people to ask questions, both funny/casual 
                            and serious/introspective polls, and foster open communication via 
                            comments about the questions and answers that users provide.
                            </p>
                    </div>
                
            </div>
        </div>
    );
}

export default AboutComponent;