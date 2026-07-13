import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

type Props = {
    question: string;
    answer: string;
};

export default function FaqItem({ question, answer }: Props) {

    const [open, setOpen] = useState(false);

    return (

        <div className={`faq-item ${open ? "open" : ""}`}>

            <button
                className="faq-question"
                onClick={() => setOpen(!open)}
            >
                <span>{question}</span>

                {open ? <HiMinus /> : <HiPlus />}
            </button>

            {open && (
                <div className="faq-answer">
                    {answer}
                </div>
            )}

        </div>

    );

}