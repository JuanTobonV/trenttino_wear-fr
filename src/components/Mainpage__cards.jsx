import '../assets/styles/Mainpage__cards.css';
import PropTypes from 'prop-types';


function MainPage__cards(props) {
    return (
        <section className="cards__container">
            <div className="card">
                <div className="card__image">
                    <img src= {props.mainImage} />
                    
                    <div className="cardInfo__item glass">
                        <span className='cardInfo__item--line'>{props.line}</span>
                        <h4 className='cardInfo__item--title'>{props.name}</h4>
                        <span className='cardInfo__item--genre'>{props.genre}</span>
                        <span className='cardInfo__item--price'>$ {props.price}</span>
                        
                    </div>

                    <div className='card__item--new'>
                        Nuevo
                    </div>

                    <div className='item-Hover'>
                        <img src = {props.secondaryImage}alt="" />
                    </div>

                    <div className='item-sizes glass'>
                        <ol>
                            <li>XS</li>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
}

MainPage__cards.propTypes = {
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    mainImage: PropTypes.string.isRequired,
    secondaryImage: PropTypes.string.isRequired,
};

export { MainPage__cards };
