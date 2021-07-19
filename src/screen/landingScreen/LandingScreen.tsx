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
import youtube_button from "@assets/img/youtube_button.png";
import green_circle from "@assets/img/green_circle.png";
import { Link } from "react-router-dom";
import * as contact_form_ic from "@assets/img/contact_form_ic";
import YoutubePopupComponent from "@component/YoutubePopupComponent";
import ThanksPopupComponent from "@component/ThanksPopupComponent";
import "./LandingScreen.css";
import Carousel from 'react-multi-carousel';
import * as green_logos from "@assets/img/blue_logo";
import * as footer_logos from "@assets/img/footer_logo";
import "react-multi-carousel/lib/styles.css";
import CalendarContactModel from "@model/CalendarContact.model";
import { useTranslation, Trans } from 'react-i18next';
import { Link as ScrollLink, Element } from 'react-scroll'


export interface LandingScreenProps extends BaseProps {
    requestCalendarSuccessed:boolean,
    submitContactForm:(contactForm:CalendarContactModel) => void
}

const LandingScreen: React.FunctionComponent<LandingScreenProps> = (props: LandingScreenProps) => {

    const [visibleOfNavbar, setVisibleOfNavbar] = React.useState(false);
    const [visibleOfSucDlg, setVisibleOfSucDlg] = React.useState(false);
    const [videoShow, setVideoShow] = React.useState(false);
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

    React.useEffect(() => {
        if(props.requestCalendarSuccessed) {
            setVisibleOfSucDlg(true);
        }
    }, [props.requestCalendarSuccessed]);

    return (
        <div className="app-container mx-auto" style={{ fontFamily: "Barlow" }}>
            {/* Nav bar */}
            <div className="w-1685p items-center mx-auto flex pt-42p pb-63p 
                2xl:w-1204p 2xl:pt-70p 2xl:pb-50p 2xl:pl-38p 2xl:flex-col
                x:pt-80p xl:pl-0 xl:w-904p
                lg:w-684p
                md:w-586p
                sm:w-full sm:p-5">
                {/* Logo section */}
                <div className="flex justify-between items-center 2xl:w-full xl:flex-wrap">
                    <div>
                        {/* TODO: if language is switchable, all external links should be stored in i18n resource file in case of that  */}
                        <a href="https://www.24-gute-taten.de/" target="_blank" rel="noreferrer">
                            <img src={logo} alt={"logo"} className="sm:w-14"/>
                        </a>
                    </div>
                    <div className="items-center flex justify-start 
                        xl:order-last xl:w-full xl:justify-between
                        sm:mt-5">
                        <div>
                            <div className="text-xl text-gray-400 mx-4">Bekannt aus…</div>
                        </div>
                        <div>
                            <img src={logo_ard} alt={"logo_ard"} />
                        </div>
                        <div className="ml-4">
                            <img src={vogue} alt={"vogue"} />
                        </div>
                        <div className="ml-4">
                            <img src={brandeins} alt={"brandeins"} />
                        </div>
                        <div className="ml-4">
                            <img src={logo_waz} alt={"waz"} />
                        </div>
                    </div>
                    <div className="hidden 2xl:block">
                        {/* <button onClick={() => {
                            setVisibleOfNavbar(!visibleOfNavbar)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button> */}
                    </div>
                </div>
                {/* TODO: Since navigation button is not shown, below action section will not show anymore. */}
                <div className={"hidden flex flex-1 2xl:flex-col " + (!visibleOfNavbar ? "2xl:hidden" : "")}>
                    {/* Action section */}
                    <div className="items-center flex justify-end flex-1 2xl:flex-col">
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
            {/* End navbar */}
            <div className="w-1685p mx-auto flex flex-wrap h-825p 
                2xl:h-auto 2xl:w-1204p
                xl:w-904p
                lg:w-684p
                md:w-586p
                sm:w-full
                ">
                <div className="w-470p relative
                    xl:w-745p xl:h-730p
                    lg:w-full lg:h-674p
                    md:h-576p">
                    <img src={contact_form_img} className="object-cover w-full h-full"/>
                    <div className="absolute top-0 left-0 w-full h-full flex">
                        <button className="m-auto">
                            <img src={youtube_button} alt="" onClick={() => setVideoShow(true)}/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-725p
                    xl:w-full
                    lg:w-full sm:mt-4 sm:overflow-x-hidden sm:w-full" >
                    <div>
                        <div className="leading-4 text-white text-18p font-extrabold text-center flex items-center justify-center transform rotate-12
                            float-right bg-center bg-no-repeat bg-contain w-135p h-135p mr-20p
                            2xl:mt-m37p
                            xl:mt-m686p xl:w-200p xl:h-200p xl:text-27p xl:leading-21p
                            lg:mt-m588p lg:mr-m33p lg:w-200p lg:h-200p lg:text-27p lg:leading-21p
                            md:mt-m433p md:w-170p md:h-170p md:mr-m21p md:text-22p
                            sm:text-8p sm:leading-none sm:w-70p sm:h-70p sm:mt-m433p"
                            style={{
                                backgroundImage:`url(${green_circle})`,
                            }}
                        >
                            kostenfreies<br/>
                            Muster <br/>
                            erhalten
                        </div>
                        <div className="px-62p 
                            xl:px-0
                            lg:text-center
                            sm:px-8">
                            <div className="text-20p text-accent font-semibold mt-60p 
                                2xl:mt-18p
                                xl:text-28p xl:mt-46p
                                lg:text-36p lg:leading-36p lg:px-24 lg:mt-50p
                                sm:text-18p sm:mt-4 sm:px-0 sm:text-18p sm:leading-24p">
                                <Trans
                                    i18nKey="landing.save_samples_title"
                                    components={{ bold: <strong /> }}
                                />
                            </div>
                            <div className="text-primary font-bold text-55p leading-55p mt-30p 
                                2xl:mt-26p
                                xl:mt-18p xl:leading-55p
                                lg:leading-55p
                                sm:text-30p sm:leading-36p">
                                <div className="xl:hidden">
                                    <Trans
                                        i18nKey="landing.good_deed_calendar_title"
                                        components={{ br: <br/> }}
                                    />
                                </div>
                                <div className="hidden xl:block">
                                    <Trans
                                        i18nKey="landing.good_deed_calendar_title"
                                        components={{ br: <span/> }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-62p flex-1 flex mt-80p 
                        2xl:mt-70p
                        xl:px-0
                        sm:mt-10 sm:px-5">
                        <div className="flex flex-1 
                            lg:flex-col
                            sm:flex-col">
                            <p className="font-bold text-black text-18p flex-1 leading-18p
                                xl:text-28p xl:leading-28p
                                lg:text-center lg:text-36p lg:leading-36p
                                sm:text-18p sm:leading-24p">
                                <Trans
                                    i18nKey="landing.good_deed_calendar_description"
                                    components={{ br: <br/> }}
                                />
                            </p>
                            <div className="flex flex-col flex-1 ml-2 text-18p font-semibold justify-between 
                                lg:text-36p lg:leading-36p
                                sm:mt-0 sm:ml-0 sm:text-15p">
                                <div className="flex items-start items-center
                                    lg:mt-94p
                                    md:flex-col md:items-start
                                    sm:mt-10 sm:flex-row">
                                    <img className="w-33p h-33p mt-1.5 mr-2 xl:w-45p xl:h-45p lg:w-60p lg:h-60p sm:w-33p sm:h-33p" src={contact_form_ic.ic_bildung} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p xl:text-28p xl:leading-28p lg:ml-50p md:ml-5 sm:text-18p sm:leading-24p">
                                        {t('landing.good_deed_detail_education')}
                                    </p>
                                </div>
                                <div className="flex items-start items-center mt-3
                                    lg:mt-94p
                                    md:flex-col md:items-start md:mt-35p
                                    sm:mt-5 sm:flex-row">
                                    <img className="w-33p h-33p mt-1.5 mr-2 xl:w-45p xl:h-45p lg:w-60p lg:h-60p sm:w-33p sm:h-33p" src={contact_form_ic.ic_nutrition} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p xl:text-28p xl:leading-28p lg:ml-50p md:ml-5 sm:text-18p sm:leading-24p">
                                        {t('landing.good_deed_detail_nutrition')}
                                    </p>
                                </div>
                                <div className="flex items-start items-center mt-3
                                    lg:mt-94p
                                    md:flex-col md:items-start md:mt-35p
                                    sm:mt-5 sm:flex-row">
                                    <img className="w-33p h-33p mt-1.5 mr-2 xl:w-45p xl:h-45p lg:w-60p lg:h-60p sm:w-33p sm:h-33p" src={contact_form_ic.ic_health} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p xl:text-28p xl:leading-28p lg:ml-50p md:ml-5 sm:text-18p sm:leading-24p">
                                        {t('landing.good_deed_detail_health')}
                                    </p>
                                </div>
                                <div className="flex items-start items-center mt-3
                                    lg:mt-94p
                                    md:flex-col md:items-start md:mt-35p
                                    sm:mt-5 sm:flex-row">
                                    <img className="w-33p h-33p mt-1.5 mr-2 xl:w-45p xl:h-45p lg:w-60p lg:h-60p sm:w-33p sm:h-33p" src={contact_form_ic.ic_nature} alt={"green_check_img"} />
                                    <p className="leading-none ml-20p xl:text-28p xl:leading-28p lg:ml-50p md:ml-5 sm:text-18p sm:leading-24p">
                                        {t('landing.good_deed_detail_nature')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around align-bottom mt-60p 
                        2xl:mt-115p 2xl:mb-50p
                        sm:mt-10">
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
                    className="flex bg-primary flex-col contain justify-between px-52p py-30p  w-490p h-825p
                        2xl:w-full 2xl:mt-60p
                        xl:h-1250p xl:py-51p xl:px-79p
                        lg:w-full lg:mt-20 lg:px-70p lg:py-43p lg:h-1147p
                        md:py-60p
                        sm:mt-5 sm:w-full sm:p-7 sm:h-auto">
                    <div className="text-white text-24p font-semibold text-center  
                        xl:text-36p xl:leading-36p
                        lg:text-33p lg:leading-33p
                        sm:text-18p sm:mx-0">
                        <Trans
                            i18nKey="landing.contact_form_title"
                            components={{bold: <strong />}}
                        />
                    </div>
                    <form className="flex flex-col flex-1 mt-30p lg:mt-43p md:mt-60p sm:mx-0 sm:mt-5" onSubmit={onSubmit}>
                        <input 
                            className="flex-1 text-18p px-15p rounded xl:text-28p lg:text-24p sm:text-15p sm:p-2" 
                            id="company" type="text" 
                            placeholder={t('landing.conatct_form_company')} 
                            value={contactForm.company} 
                            onChange={e => setContactForm({...contactForm, company:e.target.value})}
                        />
                        <div className="flex flex-1 mt-14p
                            xl:mt-20p xl:text-28p
                            lg:mt-18p
                            sm:flex-col">
                            <input 
                                className="flex-1 flex-1 px-15p mr-2 w-1/2 text-18p rounded
                                lg:text-24p
                                sm:text-15p sm:p-2 sm:mr-0 sm:w-full" 
                                id="firstname" 
                                type="text" 
                                placeholder={t('landing.conatct_form_firstname')} 
                                value={contactForm.firstName}
                                onChange={e => setContactForm({...contactForm, firstName:e.target.value})}
                            />
                            <input 
                                className="flex-1 flex-1 px-15p ml-4 w-1/2 text-18p rounded
                                lg:text-24p
                                sm:text-15p sm:p-2 sm:ml-0 sm:w-full sm:mt-14p" 
                                id="lastname" 
                                type="text" 
                                placeholder={t('landing.conatct_form_lastname')} 
                                value={contactForm.lastName}
                                onChange={e => setContactForm({...contactForm, lastName:e.target.value})}
                            />
                        </div>
                        <input 
                            className="flex-1 px-15p mt-14p text-18p xl:mt-20p xl:text-28p lg:text-24p lg:mt-18p sm:text-15p rounded sm:p-2" 
                            id="address" 
                            type="text" 
                            placeholder={t('landing.conatct_form_address')} 
                            value={contactForm.address}
                            onChange={e => setContactForm({...contactForm, address:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p xl:mt-20p xl:text-28p lg:text-24p lg:mt-18p sm:text-15p rounded sm:p-2" 
                            id="city" 
                            type="text" 
                            placeholder={t('landing.conatct_form_city')} 
                            value={contactForm.city}
                            onChange={e => setContactForm({...contactForm, city:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p xl:mt-20p xl:text-28p lg:text-24p lg:mt-18p sm:text-15p rounded sm:p-2" 
                            id="plz" 
                            type="text" 
                            placeholder={t('landing.conatct_form_plz')} 
                            value={contactForm.plz}
                            onChange={e => setContactForm({...contactForm, plz:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p xl:mt-20p xl:text-28p lg:text-24p lg:mt-18p sm:text-15p rounded sm:p-2" 
                            id="land" 
                            type="text" 
                            placeholder={t('landing.conatct_form_land')} 
                            value={contactForm.land}
                            onChange={e => setContactForm({...contactForm, land:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p xl:mt-20p xl:text-28p lg:text-24p lg:mt-18p sm:text-15p rounded sm:p-2" 
                            id="telephone" 
                            type="phone" 
                            placeholder={t('landing.conatct_form_telephone')} 
                            value={contactForm.telephone}
                            onChange={e => setContactForm({...contactForm, telephone:e.target.value})}
                        />
                        <input 
                            className="flex-1 px-15p mt-14p text-18p xl:mt-20p xl:text-28p lg:text-24p lg:mt-18p sm:text-15p rounded sm:p-2" 
                            id="email" 
                            type="email" 
                            placeholder={t('landing.conatct_form_email')} 
                            value={contactForm.email}
                            onChange={e => setContactForm({...contactForm, email:e.target.value})}
                        />
                        <button 
                            className="py-26p mt-30p text-xl text-black bg-secondary text-21p font-semibold rounded
                                xl:text-28p xl:py-45p
                                lg:mt-40p lg:h-105p
                                sm:text-18p sm:p-2 sm:h-auto"
                            id="submit" 
                            type="submit"
                        >
                            {t('landing.conatct_form_submit')}
                        </button>
                    </form>
                </Element>
            </div>

            <div className="hidden mx-auto
                lg:w-684p lg:h-820p lg:mt-30p lg:block
                md:w-586p md:h-700p
                sm:w-full sm:h-380p">
                <img className="w-full h-full object-cover" 
                    src={gift_img} alt=""/>
            </div>

            <div className="bg-primary py-107p mt-77p mx-auto
                2xl:w-1204p 2xl:mt-27p 2xl:py-70p
                xl:w-904p xl:py-90p
                lg:w-684p
                md:w-586p
                sm:w-full sm:py-5">
                <div className="w-1685p mx-auto
                    2xl:w-auto 2xl:px-52p
                    sm:px-5">
                    <div className="flex justify-center 
                        xl:flex-col
                        lg:flex-wrap 
                        sm:flex-col">
                        <div className="text-white ml-94p w-614p
                            2xl:ml-0 2xl:w-502p
                            xl:w-full xl:text-center
                            sm:ml-0">
                            <p className="font-bold text-24p
                                xl:text-28p
                                sm:mt-5 sm:text-18p">
                                {t('landing.what_other_company_say_title')}
                            </p>
                            <p className="text-42p leading-none font-bold mt-35p 
                                xl:text-55p xl:mt-5p xl:leading-55p
                                lg:text-55p lg:px-45p lg:mt-30p lg:leading-55p
                                md:px-0
                                sm:text-24p sm:leading-27p">
                                <Trans
                                    i18nKey="landing.what_other_company_say_content"
                                    components={{ br: <br/> }}
                                />
                            </p>
                            <p className="text-24p leading-none font-bold font-bold mt-60p
                                xl:mt-50p xl:px-115p
                                lg:text-28p lg:px-0
                                sm:text-18p">
                                {t('landing.what_other_company_say_footer')}
                            </p>
                            <ScrollLink to="contact_form" smooth={'easeOutQuart'} duration={1000} className="inline-block mt-43p mb-5 cursor-pointer xl:mt-80p lg:mt-43p sm:w-full">
                                <div className="text-21p font-extrabold text-black py-24p px-35p rounded bg-secondary h-1 flex items-center justify-center
                                    xl:text-28p xl:px-65p xl:py-50p xl:leading-28p
                                    lg:px-60p lg:py-42p lg:text-28p
                                    sm:text-15p sm:p-3 sm:h-auto">
                                    {t('landing.order_sample_calendar')}
                                </div>
                            </ScrollLink>
                        </div>
                        <div className="flex flex-1 content-end mr-40p 
                            2xl:mr-0
                            xl:w-full xl:h-1 xl:px-65p xl:pt-65p
                            sm:w-full sm:px-0
                            ">
                            <img src={banner_img} className="object-scale-down object-bottom h-auto w-full"/>
                        </div>
                    </div>
                    <div className="px-94p py-10 bg-white flex justify-center 
                        2xl:px-52p 2xl:py-42p
                        xl:flex-col xl:py-70p
                        lg:flex-wrap lg:px-45p lg:py-70p
                        sm:px-5 sm:py-5">
                        <p className="leading-tight text-primary mr-94p flex-2 font-bold text-24p mr-5 
                            xl:text-28p xl:leading-28p
                            lg:w-full lg:text-28p lg:leading-28p
                            sm:text-15p sm:mr-0">
                            {t('landing.what_other_company_say_talker')}
                        </p>
                        <p className="leading-tight col-span-2 flex-6 font-semibold text-24p lg:w-full
                            xl:text-28p xl:leading-28p xl:mt-45p
                            lg:text-28p lg:leading-28p lg:mt-20p
                            sm:text-15p sm:mt-5">
                            {t('landing.what_other_company_say_content2')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center mx-auto
                2xl:mt-57p 2xl:w-1204p 2xl:h-765p
                xl:w-904p xl:flex-col xl:h-auto
                lg:w-684p lg:mt-77p
                md:w-586p
                sm:w-full sm:mt-10">
                <img className="w-1/3 h-full object-cover
                    2xl:w-1/2 
                    xl:w-full xl:h-1056p
                    lg:hidden" 
                    src={gift_img} alt=""/>
                <div className="w-1/3 flex flex-col pl-145p 
                    2xl:w-1/2 2xl:pl-45p
                    xl:w-full xl:py-94p
                    lg:pt-0 lg:pb-43p
                    sm:w-full sm:px-5">
                    <div className="leading-none text-30p font-extrabold text-primary text-center
                        xl:text-42p
                        lg:text-36p
                        sm:text-24p">
                        {t('landing.last_year_project_title')}
                    </div>
                    <div className="text-20p mt-27p sm:text-18p">
                        <div className="flex items-center">
                            <img src={contact_form_ic.ic_nature_x2} className="h-83p w-83p xl:w-130p xl:h-130p sm:w-14 sm:h-14"/>
                            <div className="text-primary leading-none ml-2 
                                xl:text-36p xl:leading-36p
                                lg:text-22p
                                sm:text-15p sm:leading-17p">
                                <Trans
                                    i18nKey="landing.last_year_project_nature"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img src={contact_form_ic.ic_health_x2} className="h-83p w-83p xl:w-130p xl:h-130p sm:w-14 sm:h-14"/>
                            <div className="text-primary leading-none ml-2
                                xl:text-36p xl:leading-36p
                                lg:text-22p
                                sm:text-15p sm:leading-17p">
                                <Trans
                                    i18nKey="landing.last_year_project_health"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img src={contact_form_ic.ic_bildung_x2} className="h-83p w-83p xl:w-130p xl:h-130p sm:w-14 sm:h-14"/>
                            <div className="text-primary leading-none ml-2
                                xl:text-36p xl:leading-36p
                                lg:text-22p
                                sm:text-15p sm:leading-17p">
                                <Trans
                                    i18nKey="landing.last_year_project_education"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img src={contact_form_ic.ic_nutrition_x2} className="h-83p w-83p xl:w-130p xl:h-130p sm:w-14 sm:h-14"/>
                            <div className="text-primary leading-none ml-2 
                                xl:text-36p xl:leading-36p
                                lg:text-22p
                                sm:text-15p sm:leading-17p">
                                <Trans
                                    i18nKey="landing.last_year_project_nutrition"
                                    components={{ br: <br/> }}
                                />
                            </div>
                        </div>
                        <div className="p-4 mt-57p text-21p font-extrabold text-black bg-secondary w-full text-center cursor-pointer rounded 
                            2xl:w-max
                            xl:text-28p xl:px-65p xl:py-40p xl:leading-28p xl:mt-135p
                            lg:mt-135p lg:py-30p lg:text-28p
                            md:mt-100p
                            sm:text-15p sm:w-full sm:h-auto sm:p-2 sm:mt-10">
                            <ScrollLink to="contact_form" smooth={'easeOutQuart'} duration={1000}>
                                {t('landing.order_sample_calendar')}
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-items-end 
                    2xl:hidden
                    xl:p-20 lg:p-0 
                    lg:w-full 
                    lg:max-h-96">
                    <img className="m-auto lg:w-full lg:object-scale-down" src={gift2_img} />
                </div>
                
            </div>
            {
                videoShow ? (
                    <YoutubePopupComponent
                        url={"https://www.youtube.com/watch?v=G-kQara25LU"}
                        onClose={() => setVideoShow(false)}
                    />
                ) : null
            }
            {
                visibleOfSucDlg ? (
                    <ThanksPopupComponent
                        onClose={() => setVisibleOfSucDlg(false)}
                    />
                ) : null
            }
            
            {/* footer */}
            <div className="bg-primary h-263p flex
                xl:h-560p
                sm:h-auto sm:py-10">
                <div className="w-1310p h-160p mx-auto my-auto flex justify-between 
                    2xl:w-1138p
                    xl:flex-col xl:h-380p
                    sm:h-auto">
                    <div className="text-22p font-regular text-white mt-87p w-2/5
                        xl:mt-0 xl:text-center xl:w-full
                        xl:text-32p
                        sm:text-18p sm:mt-5">
                        <a href="https://www.24-gute-taten.de/impressum" target="_blank" rel="noreferrer" className="hover:underline">
                            {t('footer.Impressum')}
                        </a>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                        <a href="https://www.24-gute-taten.de/datenschutzerklaerung" target="_blank" rel="noreferrer" className="hover:underline">
                            {t('footer.data_protection')}
                        </a>
                    </div>
                    {/* logos */}
                    <div className="flex flex-col items-center justify-self-center
                         xl:order-first">
                        <div>
                            <a href="https://www.24-gute-taten.de/" target="_blank" rel="noreferrer">
                                <img className="w-92p h-92p xl:w-127p xl:h-127p sm:w-92p sm:h-92p" src={footer_logos.logo}/>
                            </a>
                        </div>
                        <div className="flex mt-23p">
                            <a className="mx-5p" href="https://www.facebook.com/24guteTaten" target="_blank" rel="noreferrer">
                                <img className="w-42p h-42p xl:w-56p xl:h-56p sm:w-42p sm:h-42p" src={footer_logos.logo_facebook}/>
                            </a>
                            <a className="mx-5p" href="https://www.instagram.com/24guteTaten/" target="_blank" rel="noreferrer">
                                <img className="w-42p h-42p xl:w-56p xl:h-56p sm:w-42p sm:h-42p" src={footer_logos.logo_instagram}/>
                            </a>
                            <a className="mx-5p" href="https://www.youtube.com/user/24guteTaten" target="_blank" rel="noreferrer">
                                <img className="w-42p h-42p xl:w-56p xl:h-56p sm:w-42p sm:h-42p" src={footer_logos.logo_youtube}/>
                            </a>
                            <a className="mx-5p" href="https://twitter.com/24guteTaten" target="_blank" rel="noreferrer">
                                <img className="w-42p h-42p xl:w-56p xl:h-56p sm:w-42p sm:h-42p" src={footer_logos.logo_twitter}/>
                            </a>
                        </div>
                    </div>
                    {/* end logos */}
                    <div className="text-22p font-regular text-white mt-87p w-2/5 text-right
                        xl:mt-0 xl:text-center xl:w-full
                        xl:text-32p
                        sm:text-18p sm:mt-5">
                        <a href="https://www.24-gute-taten.de/kontakt" target="_blank" rel="noreferrer" className="hover:underline">
                            {t('footer.contact')}
                        </a>
                    </div>
                </div>
            </div>
            {/* end footer */}
        </div>
    )
}

export default LandingScreen;