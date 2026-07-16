import Profile from "./components/Profile/Profile"
import Information from "./components/Information/Information"
import InfoList from "./components/InfoList/InfoList"
import LinkList from "./components/LinksList/LinksList"
import About from "./components/About/About"
import Eduex from "./components/EduAndExp/Eduex"
import { LanguageSwitch } from "./components/LanguageSwitcher/LanguageSwitcher"
import { FadeIn } from "./components/FadeIn/FedeIn"

function APP() {

    return (
        <>
            <div className="container">
                <div className="grid-container">
                    <aside id="areaLeft">
                        <div>
                           <div style={{display: "flex", justifyContent: "flex-end" }}> 
                            <LanguageSwitch /> 
                            </div>
                            <Profile />
                        </div>
                        <Information />
                        <InfoList
                            headingKey="headings.skills"
                            items={["HTML", "CSS", "SCSS", "JS", "React", "TypeScript", "Vite", "Bootstrap"]}
                        />
                        <InfoList
                            headingKey="headings.hobby"
                            items={["Motobike", "Snowboarding", "MTB", "Console Games & PC"]}
                        />
                        <LinkList                           
                            items={[
                                { label: "Linkedin", icon: "linkedin", link: "https://www.linkedin.com/in/skazko-oleksandr/" },
                                { label: "Github", icon: "github", link: "https://github.com/Skazko-O" },
                                { label: "Instagram", icon: "instagram", link: "https://instagram.com/skazkoa" },
                                { label: "Facebook", icon: "facebook", link: "https://fb.com" }
                            ]}
                        />
                    </aside>
                    <main id="areaRight">
                        <FadeIn><About /></FadeIn>
                        <FadeIn><Eduex type="education" /></FadeIn>
                        <FadeIn><Eduex type="experience" /></FadeIn>
                    </main>
                </div>
            </div>
        </>
    )
}

export default APP