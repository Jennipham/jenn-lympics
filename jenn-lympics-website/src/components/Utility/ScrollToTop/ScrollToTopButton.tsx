import { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
    const [showButton, setShowButton] = useState<boolean>(false);
    const [bottomOffset, setBottomOffset] = useState<number>(32);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);

            const footer = document.querySelector("footer") as HTMLElement | null;

            if (!footer) {
                setBottomOffset(32);
                return;
            }

            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop < windowHeight) {
                setBottomOffset(windowHeight - footerTop + 24);
            } else {
                setBottomOffset(32);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!showButton) return null;

    return (
        <button
            className="scroll-to-top"
            style={{ bottom: `${bottomOffset}px` }}
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            aria-label="Scroll to top"
        >
            <FaChevronCircleUp />
        </button>
    );
}