import '../assets/styles/Mainpage__cards.css';
import imagen1 from '../assets/img/km4444-cf1.jpg'
import imagen2 from '../assets/img/km4444-cf2.jpg'

function MainPage__cards() {
    return (
        <section className="cards__container">
            <div className="card">
                <div className="card__image">
                    <img src={imagen1} />
                    
                    <div className="cardInfo__item glass">
                        <span className='cardInfo__item--line'>Explorer</span>
                        <h4 className='cardInfo__item--title'>Jersey Explorer</h4>
                        <span className='cardInfo__item--genre'>Unisex Naranja</span>
                        <span className='cardInfo__item--price'>$ 142.000</span>
                        
                    </div>

                    <div className='card__item--new'>
                        Nuevo
                    </div>

                    <div className='item-Hover'>
                        <img src={imagen2} alt="" />
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

export { MainPage__cards };