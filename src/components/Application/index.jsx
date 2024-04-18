import style from './index.module.css'

function Application() {

    const data = [
        {name: "Спортивные клубы", image: "sport_club.png"},
        {name: "Детские сады", image: "kindergarten.png"},
        {name: "Конференц-залы", image: "conference_room.png"},
        {name: "Танцевальные школы", image: "dance_school.png"},
        {name: "Рестораны", image: "restaurant.png"}
    ]

    let renderCards = data.map((el, index) => {
        return(
            <div className={style.card}>
                <div className={style.description}>
                    <p className={style.number}>{index+1}</p>
                    <p className={style.text}>{el.name}</p>
                </div>

                <img src={`/src/assets/Application/${el.image}`} alt="" />

                <button className={style.button}><img src="/src/assets/Application/btn_decor.svg" alt="" /></button>
            </div>
        )
    })

    return(
        <section className={style.application}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.text_wrapper}>
                        <h2 className={style.title}>
                            <span>Области применения</span> <br />
                            наших развижных конструкций
                        </h2>
                        <p>
                            Раздвижные перегородки можно быстро установить в момент строительства или ремонта, а также в любой момент после этого. <br />
                            Монтаж производится оперативно и не требует никаких согласований.
                        </p>
                    </div>

                    <div className={style.card_wrapper}>
                        {renderCards}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Application