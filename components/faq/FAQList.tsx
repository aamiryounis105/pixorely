import { faqs } from "./faq.data";
import FAQItem from "./FAQItem";

export default function FAQList() {
  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          faq={faq}
        />
      ))}
    </div>
  );
}