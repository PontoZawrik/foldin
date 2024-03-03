import style from './index.module.css'

function Header() {

    return (
        <header>
        <div className="container">
            <div className={style.top}>
                <a href="#"><img src="/src/assets/Header/logo.svg" alt=""/></a>

                <ul className={style.top_list}>
                    <li>
                        <a href="#" className={style.nav_card}>
                            Архитекторам
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" className={`${style.nav_card} ${style.active}`}>
                            Клиентам
                        </a>
                    </li>
        
                    <li>
                        <a href="#" className={style.nav_card}>
                            Партнёрам
                        </a>
                    </li>
                </ul>

                <a href="#"><img src="/src/assets/Header/logo-profile.svg" alt=""/></a>
            </div>
        </div>

        <nav className={style.nav}>
            <ul className={style.nav_list}>
                <li><a href="#">Продукция</a></li>
                <li><a href="#">Области применения</a></li>
                <li><a href="#">Калькулятор</a></li>
                <li><a href="#">Проекты</a></li>
                <li><a href="#">Информация</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header