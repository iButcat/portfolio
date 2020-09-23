import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailEducation = (props) => {
    const [education, setEducation] = useState({});

    useEffect(() => {
        const id = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`https://alexismorin.herokuapp.com/portfolio/api/education/${id}`);
                setEducation(res.data);
            }
            catch (err) {

            }
        }

        fetchData();
    }, [props.match.params.id]);


    const createEducation = () => {
        return {__html: education.content};
    };

    return (
        <div className='container-fluid mt-5' id="detail-project">
          <div className="row">
            <div className="col col-sm-6">
              <img className="img-fluid" alt="project" id="detail-image" src={education.image} />
           </div>
           <div className="col col-sm-6">
             <h1 className='text-center'>{education.title}</h1>
             <div className='text-center'dangerouslySetInnerHTML={createEducation()} />
             <hr />
             <p>{education.description}</p>
             <p className="lead mb-5"><Link to='/' className="font-weight-bold">Back to Portfolio</Link></p>
           </div>
         </div>
       </div>
    );
}

export default DetailEducation;
