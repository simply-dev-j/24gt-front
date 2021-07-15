import React from "react";
import BaseProps from "../../base/baseProps";
import logo from "@assets/img/logo.png";
import logo_ard from "@assets/img/logo_ard.png";
import logo_waz from "@assets/img/logo_waz.png";
import vogue from "@assets/img/vogue_img.png";
import brandeins from "@assets/img/brandeins_img.png";
import contact_form_img from "@assets/img/contact_form_img.png";
import banner_img from "@assets/img/banner_img.png";
import gift_img from "@assets/img/gift_img.png";
import gift2_img from "@assets/img/gift2_img.png";
import green_circle from "@assets/img/green_circle.png";
import { Link } from "react-router-dom";
import * as contact_form_ic from "@assets/img/contact_form_ic";
import YoutubePopupComponent from "@component/YoutubePopupComponent";
import "./LandingScreen.css";
import Carousel from 'react-multi-carousel';
import * as green_logos from "@assets/img/blue_logo";
import "react-multi-carousel/lib/styles.css";
import CalendarContactModel from "@model/CalendarContact.model";
import { useTranslation, Trans } from 'react-i18next';
import { Link as ScrollLink, Element } from 'react-scroll'


export interface LandingScreenProps extends BaseProps {
    submitContactForm:(contactForm:CalendarContactModel) => void
}

const LandingScreen: React.FunctionComponent<LandingScreenProps> = (props: LandingScreenProps) => {

    const [visibleOfNavbar, setVisibleOfNavbar] = React.useState(false);
    const [videoShow, setVideoShow] = React.useState(true);
    const [contactForm, setContactForm] = React.useState(new CalendarContactModel());
    const {t} = useTranslation();
    const responsive = {
        general: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 1023, min: 0 },
            items: 4
        }
    };

    const onSubmit = (e:any) => {
        e.preventDefault()
        props.submitContactForm(contactForm)
    }
    let carouselRef: Carousel | null;

    return (
        <div className="app-container mx-auto" style={{ fontFamily: "Barlow" }}>
            {/* Nav bar */}
            <div className="container items-center mx-auto flex pt-42p pb-63p 
                lg:flex-wrap
                sm:p-2">
                {/* Logo section */}
                <div className="flex justify-between items-center lg:w-full">
                    <div>
                        <Link to="/" >
                            <img src={logo} alt={"logo"} className="sm:w-14"/>
                        </Link>
                    </div>
                    <div className="hidden lg:block lg:mr-5">
                        <button onClick={() => {
                            setVisibleOfNavbar(!visibleOfNavbar)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={"flex flex-1 lg:flex-col " + (!visibleOfNavbar ? "lg:hidden" : "")}>
                    <div className="items-center flex justify-start lg:flex-col">
                        <Link to="/" >
                            <div className="text-xl text-gray-400 mx-4">Bekannt aus…</div>
                        </Link>
                        <Link to="/" >
                            <img src={logo_ard} alt={"logo_ard"} />
                        </Link>
                        <Link to="/" className="ml-4">
                            <img src={vogue} alt={"vogue"} />
                        </Link>
                        <Link to="/" className="ml-4">
                            <img src={brandeins} alt={"brandeins"} />
                        </Link>
                        <Link to="/" className="ml-4">
                            <img src={logo_waz} alt={"waz"} />
                        </Link>
                    </div>


                    {/* Action section */}
                    <div className="items-center flex justify-end flex-1 lg:flex-col">
                        <Link to="/" className="inline-block mr-1">
                            <div className="text-18 font-semibold p-5">
                                {t("navigation.faqs")}
                            </div>
                        </Link>
                        <Link to="/" className="inline-block">
                            <div className="text-18 font-extrabold text-white px-42p py-24p rounded bg-secondary h-1 flex items-center">
                                {t("navigation.sample_received")}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-wrap h-825p 2xl:h-auto">
                <div className="lg:hidden sm:block sm:w-full" style={{width:"470px"}}>
                    <img src={contact_form_img} className="object-cover w-full h-full"/>
                </div>
                <div className="flex flex-col lg:w-full sm:mt-4 sm:overflow-x-hidden sm:w-full" style={{width:"725px"}}>
                    <div>
                        <div className="leading-4 text-white text-18p font-extrabold text-center flex items-center justify-center transform rotate-12
                        float-right bg-center bg-no-repeat bg-contain w-135p h-135p mr-20p
                        sm:text-8p sm:leading-none sm:w-70p sm:h-70p"
                            style={{
                                backgroundImage:`url(${green_circle})`,
                            }}
                        >
                            kostenfreies<br/>
                            Muster <br/>
                            erhalten
                        </div>
                        <div className="px-62p sm:px-8">
                            <div className="text-20p text-accent font-semibold mt-60p sm:text-15p sm:mt-4">
                                <Trans
                                    i18nKey="landing.save_samples_title"
                                    components={{ bold: <strong /> }}
                                />
                            </div>
                            <p className="text-primary font-bold text-55p leading-none mt-30p 2xl:text-42p sm:text-24p sm:mt">
                                <Trans
                                    i18nKey="landing.good_deed_calendar_title"
                                    components={{ br: <br/> }}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="px-62p flex-1 flex mt-80p sm:px-8 sm:mt-0">
                        <div className="flex flex-1 sm:flex-col sm:mt-10">
                            <p className="font-bold text-black text-18p flex-1 leading-none sm:text-15p">
                                <Trans
                                    i18nKey="landing.good_deed_calendar_description"
                                    components={{ br: <br/> }}
                                />
                            </p>
                            <div className="flex flex-col flex-1 ml-2 text-18p font-semibold justify-between 
                                            sm:mt-10 sm:ml-0 sm:text-15p">
                                <div className="flex items-start items-center">
                                    <img className="mt-1.5 mr-2" src={contact_form_ic.ic_bildung} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p">
                                        {t('landing.good_deed_detail_education')}
                                    </p>
                                </div>
                                <div className="flex items-start items-center mt-3">
                                    <img className="mt-1.5 mr-2" src={contact_form_ic.ic_nutrition} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p">
                                        {t('landing.good_deed_detail_nutrition')}
                                    </p>
                                </div>
                                <div className="flex items-start items-center mt-3">
                                    <img className="mt-1.5 mr-2" src={contact_form_ic.ic_health} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p">
                                        {t('landing.good_deed_detail_health')}
                                    </p>
                                </div>
                                <div className="flex items-start items-center mt-3">
                                    <img className="mt-1.5 mr-2" src={contact_form_ic.ic_nature} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p">
                                        {t('landing.good_deed_detail_nature')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around align-bottom mt-60p sm:mt-10">
                        <button className="w-62p text-center" onClick={() => {
                            carouselRef?.previous(1)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <Carousel 
                            responsive={responsive} 
                            className="flex flex-1 h-88p" 
                            itemClass="h-88p" 
                            renderButtonGroupOutside={true}  
                            infinite={true}
                            containerClass="overflow-hidden"
                            arrows={false}
                            ref={el => (carouselRef = el)}
                        >
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_amref} alt={"aga_brand_img"} draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_aga} alt={"jetzt_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_bos} alt={"children_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_children} alt={"clean_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_clean} alt={"aga_brand_img"} draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_forderverein} alt={"jetzt_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_go_ahead} alt={"children_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_homadenhilfe} alt={"clean_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_jetzt} alt={"aga_brand_img"} draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_orienthelfer} alt={"jetzt_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_pen} alt={"children_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_puete} alt={"clean_brand_img"}  draggable={false}/>
                            <img className="object-scale-down w-full h-full" src={green_logos.logo_wilderness} alt={"clean_brand_img"}  draggable={false}/>
                        </Carousel>
                        <button className="w-62p" onClick={() => {
                            carouselRef?.next(1)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Element 
                    name="contact_form" 
                    id="contact_form" 
                    className="flex bg-primary flex-col contain justify-between px-52p py-30p 
                        lg:w-full lg:mt-20 lg:p-5
                        sm:mt-5 sm:w-full"
                    style={{width:"490px"}}>
                    <div className="text-white text-24p font-semibold text-center 
                                    sm:text-18p sm:mx-0">
                        <Trans
                            i18nKey="landing.contact_form_title"
                            components={{bold: <strong />}}
                        />
                    </div>
                    <form className="flex flex-col flex-1 mt-30p lg:mt-5 sm:mx-0" onSubmit={onSubmit}>
                        <input 
                            className="flex-1 text-18p px-15p rounded sm:text-15p sm:p-2" 
                            id="company" type="text" 
                            placeholder={t('landing.conatct_form_company')} 
                            value={contactForm.company} 
                            onChange={e => setContactForm({...contactForm, company:e.target.value})}
                        />
                        <div className="flex flex-1 mt-14p sm:flex-col">
                            <input 
                                className="flex-1 flex-1 px-15p mr-2 w-1/2 text-18p rounded
                                sm:text-15p sm:p-2 sm:mr-0 sm:w-full" 
                                id="firstname" 
                                type="text" 
                                placeholder={t('landing.conatct_form_firstname')} 
                                value={contactForm.firstName}
                                onChange={e => setContactForm({...contactForm, firstName:e.target.value})}
                            />
                            <input 
                                className="flex-1 flex-1 px-15p ml-4 w-1/2 text-18p rounded
                                sm:text-15p sm:p-2 sm:ml-0 sm:w-full sm:mt-14p" 
                                id="lastname" 
                                type="text" 
                                placeholder={t('landing.conatct_form_lastname')} 
                                value={contactForm.lastName}
                                onChange={e => setContactForm({...contactForm, lastName:e.target.value})}
                            />
                        </div>
                        <input 
                            className="flex-1 px-15p mt-14p text-18p sm:text-15p rounded sm:p-2" 
                            id="address" 
                            type="text" 
                            placeholder={t('landing.conatct_form_address')} 
                            value={contactForm.address}
                            onChange={e => setContactForm({...contactForm, address:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p sm:text-15p rounded sm:p-2" 
                            id="city" 
                            type="text" 
                            placeholder={t('landing.conatct_form_city')} 
                            value={contactForm.city}
                            onChange={e => setContactForm({...contactForm, city:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p sm:text-15p rounded sm:p-2" 
                            id="plz" 
                            type="text" 
                            placeholder={t('landing.conatct_form_plz')} 
                            value={contactForm.plz}
                            onChange={e => setContactForm({...contactForm, plz:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p sm:text-15p rounded sm:p-2" 
                            id="land" 
                            type="text" 
                            placeholder={t('landing.conatct_form_land')} 
                            value={contactForm.land}
                            onChange={e => setContactForm({...contactForm, land:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p sm:text-15p rounded sm:p-2" 
                            id="telephone" 
                            type="phone" 
                            placeholder={t('landing.conatct_form_telephone')} 
                            value={contactForm.telephone}
                            onChange={e => setContactForm({...contactForm, telephone:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p sm:text-15p rounded sm:p-2" 
                            id="email" 
                            type="email" 
                            placeholder={t('landing.conatct_form_email')} 
                            value={contactForm.email}
                            onChange={e => setContactForm({...contactForm, email:e.target.value})}
                        />
                        <button 
                            className="py-26p mt-30p text-xl text-white bg-secondary text-21p font-semibold rounded
                            sm:text-18p sm:p-3" 
                            id="submit" 
                            type="submit"
                        >
                            {t('landing.conatct_form_submit')}
                        </button>
                    </form>
                </Element>
            </div>

            <div className="bg-primary py-107p mt-77p
                sm:py-5">
                <div className="container mx-auto sm:px-5">
                    <div className="flex justify-center lg:flex-wrap sm:flex-col">
                        <div className="text-white ml-94p w-614p lg:w-full sm:ml-0">
                            <p className="font-bold text-24p
                            sm:mt-5 sm:text-18p">
                                {t('landing.what_other_company_say_title')}
                            </p>
                            <p className="text-42p leading-none font-bold mt-35p sm:text-24p">
                                <Trans
                                    i18nKey="landing.what_other_company_say_content"
                                    components={{ br: <br/> }}
                                />
                            </p>
                            <p className="text-24p leading-none font-bold font-bold mt-60p sm:text-18p">
                                {t('landing.what_other_company_say_footer')}
                            </p>
                            <ScrollLink to="contact_form" smooth={'easeOutQuart'} duration={1000} className="inline-block mt-43p mb-5 cursor-pointer sm:w-full">
                                <div className="text-21p font-extrabold text-white py-24p px-35p rounded bg-secondary h-1 flex items-center justify-center
                                sm:text-15p">
                                    {t('landing.order_sample_calendar')}
                                </div>
                            </ScrollLink>
                        </div>
                        <div className="flex flex-1 content-end mr-40p sm:w-full lg:w-full sm:mr-0">
                            <img src={banner_img} className="object-scale-down object-bottom h-auto w-full"/>
                        </div>
                    </div>
                    <div className="px-94p py-10 bg-white flex justify-center lg:flex-wrap sm:px-5">
                        <p className="leading-tight text-primary mr-94p flex-2 font-bold text-24p mr-5 
                        lg:w-full
                        sm:text-15p sm:mr-0">
                            {t('landing.what_other_company_say_talker')}
                        </p>
                        <p className="leading-tight col-span-2 flex-6 font-semibold text-24p lg:w-full
                        sm:text-15p sm:mt-5">
                            {t('landing.what_other_company_say_content2')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center lg:flex-wrap lg:mt-10">
                <img className="w-1/3 lg:w-full lg:max-h-96 lg:object-scale-down" src={gift_img} alt=""/>
                <div className="w-1/3 flex flex-col pl-145p lg:w-full lg:p-10 lg:items-center">
                    <div className="leading-none text-30p font-extrabold text-primary text-center">
                        {t('landing.last_year_project_title')}
                    </div>
                    <div className="text-20p mt-27p sm:text-18p">
                        <div className="flex items-center">
                            <img src={contact_form_ic.ic_nature_x2} className="h-83p w-83p sm:w-16 sm:h-16"/>
                            <div className="text-primary leading-none ml-2 sm:text-15p">
                                <Trans
                                    i18nKey="landing.last_year_project_nature"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img src={contact_form_ic.ic_health_x2} className="h-83p w-83p sm:w-16 sm:h-16"/>
                            <div className="text-primary leading-none ml-2 sm:text-15p">
                                <Trans
                                    i18nKey="landing.last_year_project_health"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img src={contact_form_ic.ic_bildung_x2} className="h-83p w-83p sm:w-16 sm:h-16"/>
                            <div className="text-primary leading-none ml-2 sm:text-15p">
                                <Trans
                                    i18nKey="landing.last_year_project_education"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img src={contact_form_ic.ic_nutrition_x2} className="h-83p w-83p sm:w-16 sm:h-16"/>
                            <div className="text-primary leading-none ml-2 sm:text-15p">
                                <Trans
                                    i18nKey="landing.last_year_project_nutrition"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="p-4 mt-57p text-21p font-extrabold text-white bg-secondary w-full text-center cursor-pointer rounded sm:text-15p">
                            <ScrollLink to="contact_form" smooth={'easeOutQuart'} duration={1000}>
                                {t('landing.order_sample_calendar')}
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-items-end xl:p-20 lg:p-0 lg:w-full lg:max-h-96">
                    <img className="m-auto lg:w-full lg:object-scale-down" src={gift2_img} />
                </div>
                
            </div>
            {/* {
                videoShow ? (
                    <YoutubePopupComponent
                        url={"https://www.youtube.com/watch?v=G-kQara25LU"}
                        onClose={() => setVideoShow(false)}
                    />
                ) : null
            } */}
            
        </div>
    )
}

export default LandingScreen;