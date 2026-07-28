import Profile from "./components/Profile/Profile";
import Information from "./components/Information/Information";
import InfoList from "./components/InfoList/InfoList";
import LinkList from "./components/LinksList/LinksList";
import About from "./components/About/About";
import Eduex from "./components/EduAndExp/Eduex";
import { LanguageSwitch } from "./components/LanguageSwitcher/LanguageSwitcher";
import { FadeIn } from "./components/FadeIn/FedeIn";
import { PrintButton } from "./components/PrintButton/PrintButton";
import { useRef } from "react";

function APP() {
  const componentRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div ref={componentRef} className="container">
        <div className="grid-container">
          <aside id="areaLeft">
            <div>
              <div className="header-actions">
                <PrintButton contentRef={componentRef} />
                <LanguageSwitch />
              </div>
              <Profile />
            </div>
            <Information />
            <InfoList
              headingKey="headings.skills"
              items={[
                "HTML",
                "CSS",
                "SCSS",
                "JS",
                "React.js",
                "Vue.js",
                "TypeScript",
                "Vite",
                "Bootstrap",
                "Tailwindcss",
                "Docker",
                "PostgreSQL"
              ]}
            />
            <InfoList
              headingKey="headings.hobby"
              items={["Motobike", "Snowboarding", "MTB", "Console Games & PC"]}
            />
            <LinkList
              items={[
                {
                  label: "Linkedin",
                  icon: "linkedin",
                  link: "https://www.linkedin.com/in/skazko-oleksandr/",
                },
                {
                  label: "Github",
                  icon: "github",
                  link: "https://github.com/Skazko-O",
                },
                {
                  label: "Instagram",
                  icon: "instagram",
                  link: "https://instagram.com/skazkoa",
                },
                {
                  label: "Facebook",
                  icon: "facebook",
                  link: "https://www.facebook.com/skazko.a",
                },
              ]}
            />
          </aside>
          <main id="areaRight">
            <FadeIn>
              <About />
            </FadeIn>
            <FadeIn>
              <Eduex type="education" />
            </FadeIn>
            <FadeIn>
              <Eduex type="experience" />
            </FadeIn>
          </main>
        </div>
      </div>
    </>
  );
}

export default APP;
