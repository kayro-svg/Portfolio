import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">

                    <div className={toggleState === 1 ? "qualification_button  qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification_button  qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                    </div>
                </div>

                <div className="qualification_sections">

                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Enterprise Programming</h3>
                                <span className="qualification_subtitle">Associates Degree <br/>Panamá - UNACHI</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>


                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Information Technology Management</h3>
                                <span className="qualification_subtitle">Bachelor's Degree (undergraduate) <br/>Panamá - UNACHI</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Several online courses</h3>
                                <span className="qualification_subtitle">Self-Taught</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>


                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Backend & Frontend Development</h3>
                                <span className="qualification_subtitle">Case Studies</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> 2018 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Website Design for eCommerce</h3>
                                <span className="qualification_subtitle">Zona Sur AutoPartes</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> Dec, 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Frontend Development</h3>
                                <span className="qualification_subtitle">Walcakes - Entrepreneurship</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> Jan, 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Website Redesign for eCommerce</h3>
                                <span className="qualification_subtitle">mydeplus.net</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> Mar, 2023
                                </div>
                            </div> 
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Wordpress Developer/Designer & SEO optimization</h3>
                                <span className="qualification_subtitle">Academia LEF</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> May, 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Website Developer & SEO Optimization</h3>
                                <span className="qualification_subtitle">Esquematízate LTD</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"></i> June - August, 2023
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification