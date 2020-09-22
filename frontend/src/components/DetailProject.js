import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailProject = (props) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`https://alexismorin.herokuapp.com/portfolio/api/project/${id}`);
                setProject(res.data);
            }
            catch (err) {

            }
        }

        fetchData();
    }, [props.match.params.id]);


    const createProject = () => {
        return {__html: project.content};
    };

    return (
        <div className='container-fluid mt-5' id="detail-project">
          <div className="row">
            <div className="col col-sm-6">
              <img className="img-fluid" alt="project" id="detail-image" src={project.image} />
           </div>
           <div className="col col-sm-6">
             <h1 className='text-center'>{project.title}</h1>
             <div className='text-center'dangerouslySetInnerHTML={createProject()} />
             <hr />
             <p>{project.description}</p>
             <p className="lead mb-5"><Link to='/' className="font-weight-bold">Back to Portfolio</Link></p>
           </div>
         </div>
       </div>
    );
}

export default DetailProject;
