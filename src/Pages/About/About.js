import React from 'react'
import './About.css'
import Nav from '../../Components/Nav/Nav'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <Nav />
                <div className="about__snippet_container">
                    <div className="about__snippet">
                        <div className="about__snippet_header">
                            <div className="about__snippet_header-actions">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="about__snippet-content">
                            <span className="about__snippet-bracket">{"{"}</span>
                            <div className="about__snippet-brackets-nested">
                                <span className="about__snippet-pair"><span className="about__snippet-key">"name"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"Tejas Ravishankar"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"handle"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"@XtremeDevX"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"email"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"xtremedevx@gmail.com"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"age"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value--num">15</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"isDeveloper"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value--bool">true</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair">
                                    <span className="about__snippet-key">"technologies"</span>
                                    <span className="about__snippet-colon"> : </span>
                                    <span className="about__snippet-value--arr">
                                        <span className="about__snippet-array-bracket">[</span>
                                        <div className="about__snippet-array-brackets-nested">
                                            <span className="about__snippet-value">"rust"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"python"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"flutter"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"github"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"gitlab"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"firebase"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"mongodb"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"swift"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"flask"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"express"</span><span className="about__snippet-comma">,</span> <br />
                                        </div>
                                        <span className="about__snippet-array-bracket">]</span>
                                    </span>
                                    <span className="about__snippet-comma">,</span>
                                </span>
                                <span className="about__snippet-pair">
                                    <span className="about__snippet-key">"hobbies"</span>
                                    <span className="about__snippet-colon"> : </span>
                                    <span className="about__snippet-value--arr">
                                        <span className="about__snippet-array-bracket">[</span>
                                        <div className="about__snippet-array-brackets-nested">
                                            <span className="about__snippet-value">"gaming"</span>
                                        </div>
                                        <span className="about__snippet-array-bracket">]</span>
                                    </span>
                                    <span className="about__snippet-comma">,</span>
                                </span>
                                <span className="about__snippet-pair">
                                    <span className="about__snippet-key">"achievements"</span>
                                    <span className="about__snippet-colon"> : </span>
                                    <span className="about__snippet-value--arr">
                                        <span className="about__snippet-array-bracket">[</span>
                                        <div className="about__snippet-array-brackets-nested">
                                            <span className="about__snippet-value">"Oak Codefest (🏆)"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"TISBHacks (🏆)"</span>
                                        </div>
                                        <span className="about__snippet-array-bracket">]</span>
                                    </span>
                                    <span className="about__snippet-comma">,</span>
                                </span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"favoriteProject"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"Volt"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"favoriteFood"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"Nutella Crepes"</span></span>
                            </div>
                            <span className="about__snippet-bracket">{"}"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
