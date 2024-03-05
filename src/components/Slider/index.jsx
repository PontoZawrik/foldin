import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar';

import { Pagination } from 'swiper/modules';
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
    
                    <button className={style.button}>Перейти в раздел проектов<img src="/src/assets/Marketing/button-decoration.svg"/></button>
                </div>



                <Swiper
                modules={[Scrollbar]}
                slidesPerView={'auto'}
                spaceBetween={40}
                scrollbar={{
                    hide: false,
                    draggable: true,
                }}
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
                            <img src="/src/assets/Slider/slider_image_1.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Спортивные клубы</p>
                            </div>
                        </a>
                    </SwiperSlide>

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
                            <img src="/src/assets/Slider/slider_image_1.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Спортивные клубы</p>
                            </div>
                        </a>
                    </SwiperSlide>

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
                            <img src="/src/assets/Slider/slider_image_1.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Спортивные клубы</p>
                            </div>
                        </a>
                    </SwiperSlide>

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
                            <img src="/src/assets/Slider/slider_image_1.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Спортивные клубы</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide className={style.card}>
                        <a href="">
                            <img src="/src/assets/Slider/slider_image_1.png" alt=""/>

                            <div className={style.description}>
                                <p className={style.slide_text}>Спортивные клубы</p>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Slider