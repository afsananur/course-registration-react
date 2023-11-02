import PropTypes from 'prop-types'

const Cadit = ({cadit}) => {
    const {title}=cadit;
    return (
        <div>
            <h3 className='text-sm pt-3'>{title}</h3>
        </div>
    );
};

Cadit.propTypes={cadit: PropTypes.object

}
export default Cadit;