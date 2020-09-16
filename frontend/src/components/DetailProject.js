import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DetailProject = (props) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        const id = props.match.params.id;
        console.log(id)

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
        <div className='container-fluid mt-5'>
            <h1 className='display-2'>{project.title}</h1>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createProject()} />
            <hr />
            <p>{project.description}</p>
            <p className="lead mb-5"><Link to='/' className="font-weight-bold">Portfolio</Link></p>
        </div>
    );
}

export default DetailProject;
