import style from './index.module.css'

function LinkCatalog() {

    return(
        <section className={style.link_catalog}>
        <div className="container">
            <div className={style.card_wrapper}>

            <a href="">
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
                </a>
    
                <a href="">
                    <div className={style.card}>
                        <img src="/src/assets/LinkCatalog/image-2.png" alt=""/>
    
                        <div className={style.description}>
                            <div className={style.text_wrapper}>
                                <h5 className={style.title}>Раздвижные перегородки</h5>
                                <ul className={style.list}>
                                    <li>от 22 000 ₽/м²</li>
                                    <li>3 бренда</li>
                                    <li>11 типов конструкций</li>
                                </ul>
                            </div>

                            <div className={style.img_wrapper}>
                                <img src="/src/assets/LinkCatalog/arrow.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    </section>
    )
}

export default LinkCatalog