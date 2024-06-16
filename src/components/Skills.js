import React, { useState, useEffect } from 'react';
import htmlImage from "./svgs/html-5-svgrepo-com.png"
import csssImage from "./svgs/css-3-svgrepo-com.png"
import javascriptImage from "./svgs/javascript-svgrepo-com.png"
import reactImage from "./svgs/reactjs-svgrepo-com.png"
import tailwindImage from "./svgs/tailwindcss-icon-svgrepo-com.png"
import rubyImage from "./svgs/ruby-svgrepo-com.png"
import railsImage from "./svgs/rails-svgrepo-com.png"
import sqliteImage from "./svgs/sqlite-svgrepo-com.png"
import postgreqlImage from "./svgs/postgresql-svgrepo-com.png"
import vscodeImage from "./svgs/vs-code-svgrepo-com.png"
import postmanImage from "./svgs/postman-icon-svgrepo-com.png"
import gitImage from "./svgs/git-svgrepo-com.png"
import figmaImage from "./svgs/figma-svgrepo-com.png"
import pythonImage from "./svgs/python.png"

const Skills = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    useEffect(() => {
        document.getElementById('defaultOpen').click();
    }, []);

    const showTab = (event, tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="skills" id="skills">
            <p id='the-bold-h1'>My <span className='colored-name'>Skills</span></p>
            <div className="skills-div-two">
                <div className="tabs">
                    <div
                        className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
                        onClick={(e) => showTab(e, 'tab1')}
                        id="defaultOpen"
                    >
                        Front end
                    </div>
                    <div
                        className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
                        onClick={(e) => showTab(e, 'tab2')}
                    >
                        Back end
                    </div>
                    <div
                        className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
                        onClick={(e) => showTab(e, 'tab3')}
                    >
                        Database
                    </div>
                    <div
                        className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
                        onClick={(e) => showTab(e, 'tab4')}
                    >
                        Tools
                    </div>
                    <div
                        className={`tab ${activeTab === 'tab5' ? 'active' : ''}`}
                        onClick={(e) => showTab(e, 'tab5')}
                    >
                        Platforms
                    </div>
                </div>
                <div className="tabs-two">
                    <div id="tab1" className={`tabcontent ${activeTab === 'tab1' ? 'active' : ''}`}>
                        <div>
                            <img src={htmlImage} alt="HTML5" />
                            <p>HTML5</p>
                        </div>
                        <div>
                            <img src={csssImage} alt="CSS3" />
                            <p>CSS3</p>
                        </div>
                        <div>
                            <img src={javascriptImage} alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img src={reactImage} alt="Reactjs" />
                            <p>Reactjs</p>
                        </div>
                        <div>
                            <img src={tailwindImage} alt="Tailwindcss" />
                            <p>Tailwindcss</p>
                        </div>
                    </div>
                    <div id="tab2" className={`tabcontent ${activeTab === 'tab2' ? 'active' : ''}`}>
                        <div>
                            <img src={rubyImage} alt="Ruby" />
                            <p>Ruby</p>
                        </div>
                        <div>
                            <img src={railsImage} alt="Rails" />
                            <p>Rails</p>
                        </div>
                        <div>
                            <img src={pythonImage} alt="Python" />
                            <p>Python</p>
                        </div>
                    </div>
                    <div id="tab3" className={`tabcontent ${activeTab === 'tab3' ? 'active' : ''}`}>
                        <div>
                            <img src={sqliteImage} alt="SqLite" />
                            <p>SqLite</p>
                        </div>
                        <div>
                            <img src={postgreqlImage} alt="Postgresql" />
                            <p>Postgresql</p>
                        </div>
                    </div>
                    <div id="tab4" className={`tabcontent ${activeTab === 'tab4' ? 'active' : ''}`}>
                        <div>
                            <img src={vscodeImage} alt="Visual studio" />
                            <p>Visual studio</p>
                        </div>
                        <div>
                            <img src={postmanImage} alt="Postman" />
                            <p>Postman</p>
                        </div>
                        <div>
                            <img src={gitImage} alt="Git" />
                            <p>Git</p>
                        </div>
                        <div>
                            <img src={figmaImage} alt="Figma" />
                            <p>Figma</p>
                        </div>
                    </div>
                    <div id="tab5" className={`tabcontent ${activeTab === 'tab5' ? 'active' : ''}`}>
                        <div>
                            <img src="./svgs/heroku-icon-svgrepo-com.png" alt="Heroku" />
                            <p>Heroku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
