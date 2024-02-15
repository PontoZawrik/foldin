import style from './index.module.css'

function Marketing() {

    return(
        <section className={style.marketing}>
        <div className="container">
            <div className={style.wrapper}>
                <div className={style.text_wrapper}>
                    <h3 className={style.title}>
                        <span>Раздвижные конструкции</span><br/>
                        с высоким уровнем звукоизоляции</h3>
                        
    
                    <ul className={style.list}>
                        <li><p>Собственное производство в России</p></li>
                        <li><p>Уровень вукоизоляции до 52 дБ</p></li>
                        <li><p>Расчит проекта по вашим требованиям за 1 час</p></li>
                        <li><p>Гарантия на продукцию 3 года</p></li>
                        <li><p>Работа “под ключ”</p></li>
                    </ul>
    
                    <button className={style.button}>Получить рассчет проекта <img src="/src/assets/Marketing/button-decoration.svg"/></button>
                </div>
                
                <img src="/src/assets/Marketing/group-img.png"/>
            </div>
        </div>
    </section> 
    )
}

export default Marketing