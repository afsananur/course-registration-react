import PropTypes from 'prop-types';
import Cadit from './Cadit';

const Cadits = ({hour, cadits}) => {
  
    return (
        <div className=''>
           
            <div >
            
            <hr />
            <h1 className="text-xl font-semibold py-3">Course Name: {cadits.length}  </h1>

            {
               cadits.map(cadit => <Cadit key={cadit.id} cadit={cadit}></Cadit>) 
            }
            </div>
            <hr />
            <h1 className="text-xl font-semibold pt-2 pb-2">Total Credit Hour : {hour}</h1>
            <hr />
        </div>
    );
};

Cadits.propTypes = {
    hour: PropTypes.object,
    cadits: PropTypes.object.isRequired
}

export default Cadits;