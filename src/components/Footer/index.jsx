import style from './index.module.css'

function Footer() {

    return(
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.foldin_wrapper}>
                        <img src="/src/assets/Footer/foldin.png" alt="" />
                        
                        <div className={style.social_wrapper}>
                            <a className={style.social_button} href="#">
                                <img src="/src/assets/Footer/facebook.svg" alt="" />
                            </a>

                            <a className={style.social_button} href="#">
                                <img src="/src/assets/Footer/vk.svg" alt="" />
                            </a>

                            <a className={style.social_button} href="#">
                                <img src="/src/assets/Footer/instagram.svg" alt="" />
                            </a>

                            <a className={style.social_button} href="#">
                                <img src="/src/assets/Footer/youtube.svg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div className={style.lists_wrapper}>
                        <div className={style.list}>
                            <h3>Продукция</h3>

                            <a href='#'>Раздвижные стены</a>
                            <a href='#'>Раздвижные перегородки</a>
                            <a href='#'>Материалы отделки</a>
                            <a href='#'>Новинки</a>
                            <a href='#'>Калькулятор</a>
                        </div>
                        
                        <div className={style.list}>
                            <h3>Области применения</h3>

                            <a href='#'>Офисные помещения</a>
                            <a href='#'>Бизнес центры</a>
                            <a href='#'>Банки</a>
                            <a href='#'>Торговые центры</a>
                            <a href='#'>Автосалоны</a>
                        </div>

                        <div className={style.list}>
                            <h3>О компании</h3>

                            <a href='#'>История</a>
                            <a href='#'>Наши лица</a>
                            <a href='#'>Новости</a>
                            <a href='#'>Статьи</a>
                            <a href='#'>Почему мы</a>
                            <a href='#'>FAQ</a>
                        </div>

                        <div className={style.list}>
                            <h3>Не теряйте нас</h3>

                            <div className={style.list_item}>
                                <p>Россия</p>
                                <a href="#">8 (800) 775-26-91</a>
                            </div>

                            <div className={style.list_item}>
                                <p>Москва</p>
                                <a href="#">+7 (495) 085-05-80</a>
                            </div>

                            <div className={style.list_item}>
                                <p>Санкт-Петербург</p>
                                <a href="#">+7 (812) 604-60-51</a>
                            </div>

                            <div className={style.list_item}>
                                <p>Почта</p>
                                <a href="#">info@foldin.ru</a>
                            </div>
                        </div>

                        <form action="">
                            <h3 className={style.title}>Оставьте заявку</h3>
                            
                            <div className={style.form_wrapper}>
                                <div className={style.input_wrapper}>
                                    <div className={style.input}>
                                        <img src="/src/assets/Footer/input_decor1.svg" alt="" />
                                        <input type="text" placeholder='Имя' />
                                    </div>

                                    <div className={style.input}>
                                        <img src="/src/assets/Footer/input_decor2.svg" alt="" />
                                        <input type="text" placeholder='Телефон' />
                                    </div>
                                </div>

                                <button className={style.button}><img src="/src/assets/Footer/btn_decor.svg" alt="" /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={style.bottom_footer}>
                <div className="container">
                    <div className={style.bottom_wrapper}>
                        <p>Политика конфиденциальности</p>
                        <p>Copyright © «Компания «ФОЛДИН» раздвижные перегородки», 2003-2021</p>
                        <p>made by azart.tech</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer