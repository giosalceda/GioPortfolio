import { FaGithubSquare } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Socials = ({ link, icon: Icon }) => {
  return (
    <a
      href={link}
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Security best practice
      className=" hover:text-yellow "
    >
      <Icon className="size-10 lg:size-13" />
    </a>
  );
};

// function to scroll to section
const sections = ["home", "projects", "about"];
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

const Navigation = () => {
  // helper function to get the active nav depending on the user scroll
  const [active, setActive] = useState("home");
  const location = useLocation();

  // Observe which part of the landing page the user is viewing
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Function to generate class string
  const getButtonStyle = (name) => {
    return `cursor-pointer text-lg lg:text-2xl ${
      active === name ? "underline text-yellow font-semibold" : "text-gray-400"
    }`;
  };

  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.scrollTo) {
      scrollToSection("home");
    }

    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);

      // clear state so it doesn't scroll again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleButtonClick = async (section) => {
    if (isHome) {
      scrollToSection(section);
      return;
    }

    if (!isHome && section === "home") {
      navigate("/");
      return;
    }

    if (!isHome && section === "projects") {
      navigate(-1);
      return;
    }

    if (!isHome && section === "about") {
      navigate("/", { state: { scrollTo: section } });
      return;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 lg:px-20 py-3 bg-black ">
      <div className="flex justify-between items-center w-full ">
        {/* GIO SALCEDA: GAME DEV */}
        <button
          onClick={() => handleButtonClick("home")}
          className="cursor-pointer text-start"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-yellow  ">Gio Salceda</h1>
          <h2 className="text-md ">Game Developer</h2>
        </button>

        {/* NAV BUTTONS */}
        <div className="space-x-12  hidden md:flex">
          {/* HOME */}
          <button
            onClick={() => handleButtonClick("home")}
            className={getButtonStyle("home")}
          >
            <h2>HOME</h2>
          </button>

          {/* PROJECTS */}
          <button
            onClick={() => handleButtonClick("projects")}
            className={getButtonStyle("projects")}
          >
            <h2>PROJECTS</h2>
          </button>

          {/* ABOUT */}
          <button
            onClick={() => handleButtonClick("about")}
            className={getButtonStyle("about")}
          >
            <h2>ABOUT</h2>
          </button>
        </div>

        {/* SOCIALS */}
        <div className="flex space-x-2 lg:space-x-4 items-center ">
          <Socials
            link="https://linkedin.com/in/gio-salceda"
            icon={FaLinkedin}
          />
          <Socials
            link="https://github.com/giosalceda"
            icon={FaGithubSquare}
          />
          
          <a
            href="/Gio_Salceda_Resume.pdf"
            download
            className=" hover:text-yellow flex flex-col items-center"
          >
            <HiNewspaper className="size-12 lg:size-14 hover:text-yellow"/>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
