import PropTypes from 'prop-types';

import{FaBookmark} from 'react-icons/fa';


const Course = ({course, handleCredit}) => {
    const {title,img,details,price,hour
    }= course;

    
    return (
        <div className='py-4 p-3 shadow-xl'>
           <div>
           <img src={img} alt={`all img ${title}`} />
            <h2 className='text-ms font-bold py-2'>{title}</h2>

            <p className='text-slate-500 text-sm'>{details}</p>
           </div>
           <div className='flex
           gap-8'>
            <h3 className='text-slate-500 text-ms py-2'>$   <span className='px-2'>Price : </span>   {price}</h3>

            <button className='m-2'><FaBookmark></FaBookmark></button>


            <h3 className='text-slate-500 text-ms py-2 '> Credit :  {hour}hr</h3>
           </div>
           <button className='bg-blue-400 text-white w-full rounded-md py-2' onClick={()=>handleCredit(course,  hour)} >Selected</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleCredit:PropTypes.func
   
}

export default Course;