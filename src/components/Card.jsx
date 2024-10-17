
import '../styles/card.css'


const AllCategories = ({actionIcon, labelAction, onActionBtn} ) => {

    return (
        <div className='card'>
            <div>{actionIcon}</div>
            <button className='btn-card' onClick={() => onActionBtn(labelAction)} >
                {labelAction}
            </button>
        </div>

    );
}

export default AllCategories;