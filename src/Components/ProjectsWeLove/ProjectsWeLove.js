import React from 'react';
import ImageBox from './../ImageBox';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';
import './../Splash/Splash.css';

function ProjectsWeLove(props){
    const {projects} = props;
    const projectCards = projects.map( (project, i) => {
        return(
            <a className={`love-${i}`} key={`love-box-${i}`}>
                <ImageBox
                    featured={project}
                />
                <p>{project.description}</p>
                <p className='snippet-funded'>{project.funded}</p>
            </a>
        )
    })
    return(
        <div className='projects-we-love'>
            <div className='love-top'>
                <h4 >Projects We Love</h4>
                <a>VIEW ALL <FaLongArrowRight/></a>
            </div>
            {projectCards}
        </div>
    )
}
export default ProjectsWeLove;