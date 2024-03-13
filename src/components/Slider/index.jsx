import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

import style from './index.module.css'

function Slider() {

    return(
        <section className={style.slider}>
            <div className={style.wrapper}>
                <div className={style.text_wrapper}>

                    <p className={style.title}>
                        <span>Самые разные</span><br/>
                        области применения
                    </p>
                        
    
                    <div className={style.p_wrapper}>
                        <p className={style.text}>
                            Мы применяем уникальную систему потолочных треков, парковочных зон и роликов. 
                            Все это обеспечивает плавное и абсолютно бесшумное перемещение панелей.
                        </p>

                        <p className={style.text}>
                            Раздвижные перегородки и стены изготавливаются на заказ в 
                            зависимости от типа помещения и индивидуальных требований заказчика.
                        </p>
                    </div>
    
                    <button className={style.button}>Перейти в раздел проектов<img src="/src/assets/Slider/button-decoration.svg"/></button>
                </div>



                <Swiper
                modules={[Scrollbar]}
                slidesPerView={'auto'}
                spaceBetween={40}
                scrollbar={{
                    draggable: true,
                    dragSize: 244,
                }}
                className={style.swiper}
                >

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_1.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Спортивные клубы</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_2.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Детские сады</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_3.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Конференц-залы</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_4.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Рестораны</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_5.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Отели</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_6.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Офисы</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_7.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Танцевальные школы</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_8.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Школы</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_9.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Квартиры</p>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Slider