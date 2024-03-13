import { useState } from 'react'
import style from './index.module.css'

function Sale() {
    const [setZn, Zn] = useState(true)

  

    return(
        <section className={style.sale}>
            <div className="container">
                <div className={style.wrapper}>
                    <img src="/src/assets/Sale/image.png"/>

                    <div className={style.text_wrapper}>
                        <p className={style.title}>
                            А может хотите <span>персональную скидку</span> специально для вас?
                        </p>

                        <div className={style.p_wrapper}>
                            <p>Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время для обсуждения всех деталей спецпредложения специально для вас.</p>

                            <p className={style.bold}>Для начала, давайте определимся, к какому типу клиентов вы себя относите :)</p>
                        </div>

                        <div className={style.button_wrapper}>
                            <div className="item" onClick={() => renderList()}>
                                
                            </div>

                            <ul className="list">

                            </ul>

                            <button className='button'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale