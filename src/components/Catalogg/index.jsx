import style from './index.module.css'

function Catalogg() {

    return(
        <section className={style.catalog}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2 className={style.section_title}>Наша <span>продукция</span></h2>

                    <div className={style.card_wrapper}>
                        <a href="">
                        <div className={style.big_card}>
                            <img src="/src/assets/Catalog/bigCard_1.png" alt=""/>
    
                            <div className={style.big_description}>
                                <div className={style.text_wrapper}>
                                    <h5 className={style.title}>Раздвижные стены</h5>
                                    <ul className={style.list}>
                                        <li>от 18 000 ₽/м²</li>
                                        <li>2 бренда</li>
                                        <li>7 типов конструкций</li>
                                    </ul>
                                </div>
                        
                                <div className={style.img_wrapper}>
                                    <img src="/src/assets/Catalog/btn_arrow.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        </a>

                        <a href="">
                        <div className={style.big_card}>
                            <img src="/src/assets/Catalog/bigCard_2.png" alt=""/>
    
                            <div className={style.big_description}>
                                <div className={style.text_wrapper}>
                                    <h5 className={style.title}>Раздвижные перегородки</h5>
                                    <ul className={style.list}>
                                        <li>от 22 000 ₽/м²</li>
                                        <li>3 бренда</li>
                                        <li>11 типов конструкций</li>
                                    </ul>
                                </div>
                        
                                <div className={style.img_wrapper}>
                                    <img src="/src/assets/Catalog/btn_arrow.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className={style.card_wrapper}>
                        <a href="">
                        <div className={style.card}>
                            <img src="/src/assets/Catalog/card_1.png" alt=""/>
    
                            <div className={style.description}>
                                <h5 className={style.title}>Материалы отделки</h5>
                        
                                <div className={style.img_wrapper}>
                                    <img src="/src/assets/Catalog/btn_arrow.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        </a>

                        <a href="">
                        <div className={style.card}>
                            <img src="/src/assets/Catalog/card_2.png" alt=""/>
    
                            <div className={style.description}>
                                <h5 className={style.title}>Новинки</h5>
                        
                                <div className={style.img_wrapper}>
                                    <img src="/src/assets/Catalog/btn_arrow.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>

                    

                    <div className={style.background}>
                        <div className={style.PDF_catalog}>
                            <div className={style.PDF_wrapper}>
                                <h5 className={style.title}>Каталог Folding 2021</h5>
                                <p className={style.PDF_text}>Подробный каталог в PDF формате с дополнительной информацией о товарах</p>
                            </div>

                            <div className={style.img_wrapper}>
                                    <img src="/src/assets/Catalog/btn_arrow.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalogg