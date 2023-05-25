import React, { useState } from 'react'
import "./services.css"


const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What i offer</span>

            <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">
                        Product <br/> Designer</h3>
                </div>

                <span className="services_button" 
                onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 1 ?"services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Product Designer</h3>
                        <p className="services_modal-description">My work as a Product Designer focuses on researching, designing, and improving digital products to deliver unique experiences and meet customer needs, applying user-centered design principles.</p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Research and analysis.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Goal definition.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Prototyping.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                User experience design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Iteration and continuous improvement.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon">

                    </i>
                    <h3 className="services_title">UI/UX <br/> Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} className="services_button">
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 2 ?"services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">UI/UX Designer</h3>
                        <p className="services_modal-description">As a UI/UX Designer, my work revolves around creating intuitive, attractive, and satisfying interfaces for users. I prioritize both user experience and user interface to design products that meet user needs and expectations while aligning with the business goals of the company.</p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                User Experience (UX) Design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                User Interface (UI) Design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Prototyping.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Usability Testing.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon">

                    </i>
                    <h3 className="services_title">
                        Visual <br/> Designer</h3>
                </div>

                <span onClick={() => toggleTab(3)}  className="services_button">
                    View More<i className="uil uil-arrow-right services_button-icon"></i>
                </span>

                <div className={toggleState === 3 ?"services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)}  className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Visual Designer </h3>
                        <p className="services_modal-description">My work as a Visual Designer revolves around creating an attractive and consistent visual appearance, utilizing design principles, selecting, editing images, and designing custom graphic elements. All of this is done to ensure an effective implementation of the visual design of the product</p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                User Interface (UI) Design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Visual structure design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Image selection and editing.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Custom graphic elements creation.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Responsive design.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Visual maintenance and updates.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            </div>
        </section>

    )
};

export default Services;