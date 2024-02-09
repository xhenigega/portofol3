import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrowone } from "../assets/icons";

const Projects = () => {


  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      I've recently completed several projects during my learning journey, and each one holds a special place in my heart.As I continue to evolve, I welcome you to explore these projects with me.   Although they may still be in progress, I'm eager to share my progress and welcome any feedback or contributions you might have.
      </p>
<p className="mt-12 text-xl text-center font-bold ">Feel free to explore </p>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-80 h-80'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-72 h-72 object-contain'
                />
              </div>
            </div>

            <div className='mt-14 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mb-14 mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-yellow-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrowone}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;