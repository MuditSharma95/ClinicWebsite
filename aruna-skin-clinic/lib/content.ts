export type Locale = "en" | "hi";

export const content = {
  en: {
    nav: { home: "Home", about: "About Doctor", treatments: "Treatments", gallery: "Clinic", contact: "Contact", book: "Book an Appointment" },
    heroEyebrow: "DERMATOLOGY • SKIN • HAIR • NAILS",
    heroTitle: "Healthy skin.\nConfidence that shows.",
    heroText: "Thoughtful dermatological care for your skin, hair and nail concerns — close to home in Khatima.",
    explore: "Explore treatments", doctorLabel: "CONSULTANT DERMATOLOGIST",
    introEyebrow: "PERSONALIZED DERMATOLOGICAL CARE", introTitle: "Care that begins with listening.",
    introText: "Every skin and hair concern is different. Get a considered consultation and guidance based on your individual needs.",
    doctorTitle: "Meet your dermatologist", doctorText: "Dr. Sachin Goyal brings specialist training in dermatology, venereology, leprosy and dermatosurgery.",
    treatmentsEyebrow: "HOW WE CAN HELP", treatmentsTitle: "Care for every layer of you", treatmentsText: "Explore the areas of dermatology covered at Aruna Skin Clinic.",
    learnMore: "Explore care", whyEyebrow: "THE ARUNA APPROACH", whyTitle: "Professional care, a personal approach", whyItems: ["Specialist-led consultation", "Care guided by your individual concerns", "Clear explanations and practical guidance"],
    galleryEyebrow: "A LOOK INSIDE", galleryTitle: "A welcoming space for your care", galleryText: "A calm, comfortable clinic environment in Khatima.",
    faqEyebrow: "GOOD TO KNOW", faqTitle: "Frequently asked questions", faqs: [
      ["How do I book an appointment?", "Tap any Book Appointment button to send an enquiry to the clinic on WhatsApp. The clinic team can confirm availability."],
      ["Which concerns can I consult for?", "The clinic provides dermatology consultations for skin, hair and nail concerns, along with its listed specialist services."],
      ["Where is the clinic located?", "Aruna Skin Clinic is in Khatima, Uttarakhand. Use the Contact section for the confirmed address and directions."],
    ],
    contactEyebrow: "WE'RE HERE TO HELP", contactTitle: "Let's talk about your skin health.", contactText: "Reach out to enquire about a consultation or find the clinic in Khatima.",
    address: "Clinic address", hours: "Consultation hours", call: "Call the clinic", directions: "Get directions", footerLine: "Thoughtful care for skin, hair and nails.",
    treatments: [
      { slug: "skin-care", title: "Skin concerns", desc: "Consultation for acne, pigmentation, eczema, psoriasis and other skin conditions.", tag: "SKIN", image: "skin", imageAlt: "Dermatologist assessing a patient’s skin" },
      { slug: "hair-care", title: "Hair & scalp", desc: "Assessment and guidance for hair fall, dandruff and scalp-related concerns.", tag: "HAIR", image: "hair", imageAlt: "Dermatologist examining a patient’s scalp" },
      { slug: "nail-care", title: "Nail disorders", desc: "Evaluation of nail changes, infections and other nail-related conditions.", tag: "NAILS", image: "nails", imageAlt: "Clinical examination of a fingernail" },
      { slug: "dermatosurgery", title: "Dermatosurgery", desc: "Specialist assessment for suitable dermatological procedures.", tag: "SPECIALIST CARE", image: "dermatosurgery", imageAlt: "Dermatologist performing a minor skin procedure" },
    ],
    whatsappMessage: "Hello Aruna Skin Clinic, I would like to enquire about an appointment with Dr. Sachin Goyal. Please share the available timings."
  },
  hi: {
    nav: { home: "होम", about: "डॉक्टर के बारे में", treatments: "उपचार", gallery: "क्लिनिक", contact: "संपर्क", book: "अपॉइंटमेंट बुक करें" },
    heroEyebrow: "त्वचा • बाल • नाखून • त्वचा रोग विशेषज्ञ",
    heroTitle: "स्वस्थ त्वचा।\nआत्मविश्वास के साथ।",
    heroText: "आपकी त्वचा, बालों और नाखूनों से जुड़ी समस्याओं के लिए विशेषज्ञ परामर्श — अब खटीमा में।",
    explore: "उपचार देखें", doctorLabel: "त्वचा रोग विशेषज्ञ",
    introEyebrow: "व्यक्तिगत त्वचा संबंधी देखभाल", introTitle: "आपकी बात सुनने से शुरू होती है बेहतर देखभाल।",
    introText: "त्वचा और बालों से जुड़ी हर समस्या अलग होती है। अपनी आवश्यकता के अनुसार विशेषज्ञ परामर्श और उचित मार्गदर्शन प्राप्त करें।",
    doctorTitle: "अपने त्वचा रोग विशेषज्ञ से मिलें", doctorText: "डॉ. सचिन गोयल त्वचा रोग, यौन संचारित रोग, कुष्ठ रोग एवं डर्मेटोसर्जरी में विशेषज्ञ प्रशिक्षण प्राप्त हैं।",
    treatmentsEyebrow: "हमारी सेवाएँ", treatmentsTitle: "त्वचा, बाल और नाखूनों की देखभाल", treatmentsText: "अरुणा स्किन क्लिनिक में उपलब्ध त्वचा रोग संबंधी परामर्श सेवाएँ देखें।",
    learnMore: "और जानें", whyEyebrow: "अरुणा की देखभाल", whyTitle: "विशेषज्ञ परामर्श, व्यक्तिगत देखभाल", whyItems: ["विशेषज्ञ द्वारा परामर्श", "आपकी समस्या के अनुसार मार्गदर्शन", "उपचार और देखभाल की स्पष्ट जानकारी"],
    galleryEyebrow: "क्लिनिक की झलक", galleryTitle: "आपकी देखभाल के लिए एक सहज वातावरण", galleryText: "खटीमा में एक शांत और सुविधाजनक क्लिनिक।",
    faqEyebrow: "ज़रूरी जानकारी", faqTitle: "अक्सर पूछे जाने वाले प्रश्न", faqs: [
      ["अपॉइंटमेंट कैसे बुक करें?", "अपॉइंटमेंट के लिए किसी भी बुकिंग बटन पर टैप करके WhatsApp पर क्लिनिक को संदेश भेजें। क्लिनिक की टीम उपलब्धता की पुष्टि करेगी।"],
      ["किन समस्याओं के लिए परामर्श ले सकते हैं?", "क्लिनिक में त्वचा, बाल और नाखूनों से जुड़ी समस्याओं तथा सूचीबद्ध विशेषज्ञ सेवाओं के लिए परामर्श उपलब्ध है।"],
      ["क्लिनिक कहाँ स्थित है?", "अरुणा स्किन क्लिनिक खटीमा, उत्तराखंड में स्थित है। सही पता और दिशा-निर्देश के लिए संपर्क अनुभाग देखें।"],
    ],
    contactEyebrow: "हम आपकी सहायता के लिए हैं", contactTitle: "अपनी त्वचा की सेहत के बारे में बात करें।", contactText: "परामर्श के लिए संपर्क करें या खटीमा स्थित क्लिनिक तक पहुँचें।",
    address: "क्लिनिक का पता", hours: "परामर्श का समय", call: "क्लिनिक को कॉल करें", directions: "रास्ता देखें", footerLine: "त्वचा, बाल और नाखूनों की विशेषज्ञ देखभाल।",
    treatments: [
      { slug: "skin-care", title: "त्वचा संबंधी समस्याएँ", desc: "मुंहासे, झाइयाँ, एक्जिमा, सोरायसिस और अन्य त्वचा रोगों के लिए परामर्श।", tag: "त्वचा", image: "skin", imageAlt: "त्वचा की चिकित्सकीय जाँच" },
      { slug: "hair-care", title: "बाल एवं सिर की त्वचा", desc: "बाल झड़ना, रूसी और सिर की त्वचा से जुड़ी समस्याओं का मूल्यांकन एवं मार्गदर्शन।", tag: "बाल", image: "hair", imageAlt: "सिर की त्वचा की चिकित्सकीय जाँच" },
      { slug: "nail-care", title: "नाखूनों के रोग", desc: "नाखूनों में बदलाव, संक्रमण और अन्य समस्याओं का मूल्यांकन।", tag: "नाखून", image: "nails", imageAlt: "नाखूनों की चिकित्सकीय जाँच" },
      { slug: "dermatosurgery", title: "डर्मेटोसर्जरी", desc: "उपयुक्त त्वचा संबंधी प्रक्रियाओं के लिए विशेषज्ञ मूल्यांकन।", tag: "विशेषज्ञ देखभाल", image: "dermatosurgery", imageAlt: "त्वचा संबंधी छोटी प्रक्रिया" },
    ],
    whatsappMessage: "नमस्ते अरुणा स्किन क्लिनिक, मैं डॉ. सचिन गोयल से अपॉइंटमेंट के बारे में जानकारी लेना चाहता/चाहती हूँ। कृपया उपलब्ध समय बताएं।"
  }
} as const;
