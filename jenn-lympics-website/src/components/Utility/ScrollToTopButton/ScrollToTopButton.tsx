import "./ScrollToTopButton.css";
import { FaChevronCircleUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    return (
        <button
            className="scroll-to-top"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        >
            <FaChevronCircleUp />
        </button>
    );
}