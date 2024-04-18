import { useState } from 'react'
import style from './index.module.css'

function Header() {
    const arrayClientele = ["Архитектор", "Клиент", "Партнёр"]

    const arrayNav = [
        {id: 1, name: "Продукция",          href: "catalog"},
        {id: 2, name: "Области применения", href: "use"},
        {id: 3, name: "Калькулятор",        href: "calc"},
        {id: 4, name: "Проекты",            href: "projects"},
        {id: 5, name: "Информация",         href: "info"},
        {id: 6, name: "Новости",            href: "news"},
        {id: 7, name: "О компании",         href: "about"},
        {id: 8, name: "Контакты",           href: "contacts"}
    ]

    // const architect = [1, 2, 3, 4, 5, 6, 7, 8]
    // const client = [1, 4, 6, 7, 8]
    // const partner = [1, 2, 5, 6, 7, 8]

    const [isActive, setActive] = useState("Архитектор")

    let itemList = arrayClientele.map((el) => {
        return(
            <div onClick={() => {setActive(el)}}
            className={`${style.header_card} ${isActive == el ? style.active : ""}`}>
                {el}
            </div>
        )
    })

    let itemNav = arrayNav.map((el) => {
        return (
            <li><a href={el.href}>{el.name}</a></li>
        )
    })

    return (
        <header>
        <div className="container">
            <div className={style.header_top}>
                <a href="/"><img src="/src/assets/Header/logo.svg" alt=""/></a>

                <div className={style.top_list}>
                    {itemList}
                </div>

                <a href="#"><img src="/src/assets/Header/logo-profile.svg" alt=""/></a>
            </div>
        </div>

        <nav className={style.nav}>
            <ul className={style.nav_list}>
                {itemNav}
            </ul>
        </nav>
    </header>
    )
}

export default Header