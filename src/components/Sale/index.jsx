import { useState, useRef } from 'react'
import style from './index.module.css'

function Sale() {
    const clientele = ["Архитектор", "Клиент", "Партнёр"]

    const [isOpen, setOpen] = useState(false)
    const [selected, setSelected] = useState("Архитектор")

    let itemList = clientele.map((client) => {
        return(
            <li onClick={() => {setOpen(false); setSelected(client)}}>
                <img src="/src/assets/Sale/dropdown_item.svg" alt="" />
                {client}
            </li>
        )
    })
  

    return(
        <section className={style.sale}>
            <div className="container">
                <div className={style.background}>
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
                                <div className={style.dropdown_btn} onClick={() => setOpen(!isOpen)}>
                                    <img src="/src/assets/Sale/dropdown_item.svg" alt="" />
                                    {selected}

                                    <img 
                                        className={`${style.dropdown_img} ${isOpen ? style.active : ""}`} 
                                        src="/src/assets/Sale/dropdown_btn.svg" alt="" 
                                    />
                                </div>

                                {isOpen && (
                                    <ul className={style.dropdown_list}>
                                        {itemList}
                                    </ul>
                                )}

                                <button className={style.button}><img src="/src/assets/Sale/button_decor.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sale