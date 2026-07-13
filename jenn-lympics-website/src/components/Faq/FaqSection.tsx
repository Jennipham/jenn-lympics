import "./FAQ.css";

import FAQItem from "./FAQItem";
import { faqs } from "./faqs";

export default function FaqSection() {

    return (

        <section className="faq">

            <p className="faq-tag">
                NEED HELP?
            </p>

            <h1>Frequently Asked Questions</h1>

            <p className="faq-subtitle">
                Everything you need to know before the big day.
            </p>

            <div className="faq-list">

                {faqs.map((faq) => (

                    <FAQItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                    />

                ))}

            </div>

            <div className="faq-contact">

                <h3>
                    Still have a question?
                </h3>

                <p>
                    Just ask Jenn.
                </p>

            </div>

        </section>

    );

}