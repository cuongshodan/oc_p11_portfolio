"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import MyServices from "../../components/MyServices/MyServices";
import Portfolio from "../../components/Portfolio/Portfolio";
import TechStack from "../../components/TechStack/TechStack";


const Homepage = () => {

    const pathname = usePathname();

    useEffect(() => {
        // Check if this is the homepage and a revisit
        if (pathname === "/" && !history.state?.reloaded) {
            // Update history state to indicate the page has been reloaded
            history.replaceState({ reloaded: true }, "");
            window.location.reload();
        }
    }, [pathname]);

    return (
        <>
            <Hero />
            <About />
            <MyServices />
            <TechStack />
            <Portfolio />
        </>
    );
};

export default Homepage;