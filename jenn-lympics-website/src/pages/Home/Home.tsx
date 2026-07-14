import EventInfo from "../../components/EventInfo/EventInfo";
import Hero from "../../components/Hero/Hero";
import ScrollToTopButton from "../../components/Utility/ScrollToTopButton/ScrollToTopButton";

export default function Home() {
    return (
        <>
            <Hero />
            <EventInfo />
            <ScrollToTopButton />
        </>
    );
}