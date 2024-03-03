import style from './index.module.css'

function Statistics() {

    return(
        <section className={style.statistics}>
            <div className="container">
                <h2 className={style.title}>Разделите любое помещение на “до и после”</h2>
                <p className={style.description}>Современные и практичные раздвижные перегородки компании ФОЛДИН не требуют перепланировки помещения, <br />
                    получения разрешительных документов и выполнения сложных строительных работ. </p>

                <div className={style.wrapper}>
                    <div className={style.card}>
                        <img src="/src/assets/Statistics/image-1.svg" alt="" />

                        <p className={style.cardTitle}>18 
                            <span className={style.span}>лет</span>
                        </p>

                        <p className={style.cardDescription}>
                            работы <br />
                            на рынке
                        </p>
                    </div>

                    <div className={style.card}>
                        <img src="/src/assets/Statistics/image-2.svg" alt="" />

                        <p className={style.cardTitle}>8 
                            <span className={style.span}>лет</span>
                        </p>
                        <p className={style.cardDescription}>
                            собственному <br />
                            производству
                        </p>
                    </div>

                    <div className={style.card}>
                        <img src="/src/assets/Statistics/image-3.svg" alt="" />

                        <p className={style.cardTitle}>62</p>
                        <p className={style.cardDescription}>
                            высококлассных <br />
                            сотрудника
                        </p>
                    </div>

                    <div className={style.card}>
                        <img src="/src/assets/Statistics/image-4.svg" alt="" />

                        <p className={style.cardTitle}>12</p>
                        <p className={style.cardDescription}>
                            запатентованных <br />
                            разработок
                        </p>
                    </div>

                    <div className={style.card}>
                        <img src="/src/assets/Statistics/image-5.svg" alt="" />

                        <p className={style.cardTitle}>400</p>
                        <p className={style.cardDescription}>
                            производимых <br />
                            панелей в месяц
                        </p>
                    </div>

                    <div className={style.card}>
                        <img src="/src/assets/Statistics/image-6.svg" alt="" />

                        <p className={style.cardTitle}>3 000</p>
                        <p className={style.cardDescription}>
                            конструкций <br />
                            по всей России
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics