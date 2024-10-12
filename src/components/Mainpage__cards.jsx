import PropTypes from 'prop-types';
import '../assets/styles/Mainpage__cards.css';

function MainPage__cards(props) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={props.mainImage} alt="Product Image" />
                
                <div className="cardInfo__item glass">
                    <span className='cardInfo__item--line'>{props.line}</span>
                    <h4 className='cardInfo__item--title'>{props.name}</h4>
                    <span className='cardInfo__item--genre'>{props.genre}</span>
                    <span className='cardInfo__item--price'>$ {props.price}</span>
                </div>

                {props.isNew && <div className='card__item--new'>Nuevo</div>}

                <div className='item-Hover'>
                    <img src={props.secondaryImage} alt="Secondary Image" />
                </div>

                <div className='item-sizes glass'>
                    <ol>
                        {props.size.map((size, index) => (
                            <li key={index}>{size}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

MainPage__cards.propTypes = {
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isNew: PropTypes.bool.isRequired,
    size: PropTypes.arrayOf(PropTypes.string).isRequired,
    mainImage: PropTypes.string.isRequired,
    secondaryImage: PropTypes.string.isRequired,
};

export default MainPage__cards;