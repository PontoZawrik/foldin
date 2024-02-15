import style from './index.module.css'

function LinkCatalog() {

    return(
        <section className={style.link_catalog}>
        <div className="container">
            <div className={style.card_wrapper}>

                <div className={style.card}>
                    <img src="/src/assets/LinkCatalog/image-1.png" alt=""/>
    
                    <div className={style.description}>
                        <div className={style.text_wrapper}>
                            <h5 className={style.title}>Раздвижные стены</h5>
                            <ul className={style.list}>
                                <li>от 18 000 ₽/м²</li>
                                <li>2 бренда</li>
                                <li>7 типов конструкций</li>
                            </ul>
                        </div>
                        
                        <div className={style.img_wrapper}>
                            <img src="/src/assets/LinkCatalog/arrow.svg" alt=""/>
                        </div>
                    </div>
                </div>
    
                <div className={style.card}>
                    <img src="/src/assets/LinkCatalog/image-2.png" alt=""/>
    
                    <div className={style.description}>
                        <div className={style.text_wrapper}>
                            <h5 className={style.title}>Раздвижные стены</h5>
                            <ul className={style.list}>
                                <li>от 18 000 ₽/м²</li>
                                <li>2 бренда</li>
                                <li>7 типов конструкций</li>
                            </ul>
                        </div>

                        <div className={style.img_wrapper}>
                            <img src="/src/assets/LinkCatalog/arrow.svg" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default LinkCatalog