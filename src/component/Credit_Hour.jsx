import PropTypes from 'prop-types';

const RemeningCadit = ({CaditHour, showAlert}) => {
    console.log(showAlert);

    
    return (
        <div>
            <h1 className="text-lg font-medium text-green-600 pt-2 pb-2">
                Credit Hour Remaining :
                <span className="text-fuchsia-600"> {CaditHour}hr</span>
                </h1>
                {
                    showAlert && <h1 >Your Limited is Exit</h1>
                }
        </div>
    );
};
RemeningCadit.propTypes ={
    CaditHour:PropTypes.object.isRequired,
    showAlert:PropTypes.object.isRequired,
}

export default RemeningCadit;