import React, { Component } from 'react'
import "./advantages.css"

export class Advantages extends Component {
  render() {
    return (
      <div className='wrapper_advantages'>
          <div className='hiter'>Наши преимущества</div>
          <div className='dvantages_items'>
              
              <div className='fist_block'> 
              <img  src='./imgForBlocks/money 1.svg' alt='money'></img>
                <p>Удобные способы оплаты</p>
                <span>Мы предлагаем возможность<br/> безналичной оплаты</span>
              </div>

              <div className='second_block'> 
              <img  src='./imgForBlocks/bus.svg' alt='bus'></img>
                <p>Cвоевремнная доставка</p>
                <span>100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.</span>
              </div>

              <div className='third_block'> 
              <img  src='./imgForBlocks/beets.svg' alt='beets'></img>
                <p>Профессиональная консультация</p>
                <span>Мы проконсультируем и индивидуально подойдем к Вашему заказу </span>
              </div>

              <div className='four_block'> 
              <img  src='./imgForBlocks/shop.svg' alt='shop'></img>
                <p>Акции и бонусы для покупателей</p>
                <span>Промокоды со скидками для постоянных клиентов, акции на новые позиции</span>
              </div>
              
        </div>
      </div>
    )
  }
}

export default Advantages;