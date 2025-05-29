import consultation from "../../assets/images/consultation.jpg";
import affordable from "../../assets/images/affordable.jpg";
export const consultOne = consultation;
export const consultTwo = affordable;

// Doctors Accordions Questions
export const questionsAccordion = [
  {
    id: 1,
    question: "Are your doctors verified?",
    answer:
      "We work with licensed doctors with verifiable years of practice under their belts. You can rest assured of their expertise.",
  },
  {
    id: 2,
    question: "What happens if I miss my appointment?",
    answer:
      "You will have one more option to reschedule for another date. After 2 missed consultations the booking is deactivated and you will have to book/pay for another consultation",
  },
  {
    id: 3,
    question: "Will I get a recording of my session with the doctor?",
    answer: "You can make a request for your session to be recorded",
  },
  {
    id: 4,
    question: "Is my medical information safe with the doctors?",
    answer:
      "Yes. Your medical information is safe. Privacy and confidentiality is guaranteed.",
  },
];
// Doctors Accordions Questions end

// consultation types array
export const typesConsultation = [
  {
    id: 1,
    title: "Physical Consultation",
    desc: "Speak to a doctor in person by visiting our partner facilities",
    price: 50000,
    testsInculdes: [
      "On site Consultation",
      "Secure end-end data Encryption",
      "Experts in a wide range of specializations",
      "One-on-one with a certified doctor",
      "Recommended treatment plans",
    ],
  },
  {
    id: 2,
    title: "Virtual Consultation",
    desc: "Consult with a doctor over a secured call",
    price: 20000,
    testsInculdes: [
      "Convenient & hassle free",
      "Secure end-end data Encryption",
      "Experts in a wide range of specializations",
      "One-on-one with a certified doctor",
      "Recommended treatment plans",
    ],
  },
];
