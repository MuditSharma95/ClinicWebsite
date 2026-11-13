export type Locale = "en" | "hi";

export const treatments = [
  {
    slug: "skin-care",
    category: "skin",
    title: { en: "Skin care & skin conditions", hi: "त्वचा की देखभाल एवं त्वचा संबंधी समस्याएँ" },
    summary: {
      en: "Dermatologist-led assessment and guidance for common skin concerns, including acne, pigmentation, rashes and other skin conditions.",
      hi: "मुंहासे, पिगमेंटेशन, रैशेज़ और त्वचा की अन्य सामान्य समस्याओं के लिए त्वचा विशेषज्ञ द्वारा मूल्यांकन और मार्गदर्शन।"
    },
    overview: {
      en: "Skin concerns can have different causes and may look similar. An individual consultation helps assess the symptoms, skin type, medical history and possible contributing factors before discussing suitable care.",
      hi: "त्वचा संबंधी समस्याओं के अलग-अलग कारण हो सकते हैं और वे देखने में एक जैसी लग सकती हैं। परामर्श के दौरान लक्षणों, त्वचा के प्रकार, मेडिकल हिस्ट्री और संभावित कारणों का मूल्यांकन करके उपयुक्त देखभाल पर चर्चा की जाती है।"
    },
    points: {
      en: ["Assessment of the skin concern and its duration", "Review of skin type, current products and relevant medical history", "Guidance on daily skincare and sun protection", "Discussion of treatment options after clinical assessment"],
      hi: ["त्वचा संबंधी समस्या और उसकी अवधि का मूल्यांकन", "त्वचा के प्रकार, उपयोग किए जा रहे उत्पादों और मेडिकल हिस्ट्री की जानकारी", "रोज़ाना स्किनकेयर और धूप से बचाव संबंधी मार्गदर्शन", "चिकित्सकीय जाँच के बाद उपचार विकल्पों पर चर्चा"]
    },
    note: {
      en: "Avoid self-prescribing steroid, bleaching or prescription creams. The appropriate treatment depends on the diagnosis and individual skin needs.",
      hi: "बिना चिकित्सकीय सलाह के स्टेरॉयड, ब्लीचिंग या प्रिस्क्रिप्शन क्रीम का उपयोग न करें। सही उपचार निदान और त्वचा की व्यक्तिगत ज़रूरतों पर निर्भर करता है।"
    }
  },
  {
    slug: "acne-treatment",
    category: "skin",
    title: { en: "Acne & pimples", hi: "मुंहासे एवं पिंपल्स" },
    summary: { en: "A dermatologist-led assessment for acne, breakouts and related marks.", hi: "मुंहासों, बार-बार होने वाले ब्रेकआउट और उनसे जुड़े निशानों के लिए त्वचा विशेषज्ञ द्वारा मूल्यांकन।" },
    overview: { en: "Acne can affect people at different ages and may appear on the face, chest or back. The right care depends on the type and severity of acne, skin type, medical history and whether marks or scars are present.", hi: "मुंहासे अलग-अलग उम्र में हो सकते हैं और चेहरे, छाती या पीठ पर दिखाई दे सकते हैं। उचित देखभाल मुंहासों के प्रकार, उनकी गंभीरता, त्वचा के प्रकार, मेडिकल हिस्ट्री और निशानों की स्थिति पर निर्भर करती है।" },
    points: { en: ["Assessment of acne type, severity and triggers", "Guidance on a suitable skincare routine", "Discussion of medical treatment options where appropriate", "Advice for acne marks and scars after clinical assessment"], hi: ["मुंहासों के प्रकार, गंभीरता और संभावित कारणों का मूल्यांकन", "उपयुक्त स्किनकेयर रूटीन के बारे में मार्गदर्शन", "आवश्यकता के अनुसार दवाइयों और उपचार विकल्पों पर चर्चा", "जाँच के बाद मुंहासों के निशानों और दागों के लिए सलाह"] },
    note: { en: "Do not squeeze or pick acne. Treatment and expected response vary from person to person; consult the dermatologist for an individual plan.", hi: "मुंहासों को दबाने या कुरेदने से बचें। उपचार और परिणाम हर व्यक्ति में अलग हो सकते हैं; व्यक्तिगत योजना के लिए त्वचा विशेषज्ञ से परामर्श लें।" }
  },
  {
    slug: "hair-care",
    category: "hair",
    title: { en: "Hair fall & scalp concerns", hi: "बाल झड़ना एवं सिर की त्वचा की समस्याएँ" },
    summary: { en: "Evaluation of hair shedding, thinning, dandruff and scalp conditions.", hi: "बाल झड़ने, बालों के पतले होने, रूसी और सिर की त्वचा की समस्याओं का मूल्यांकन।" },
    overview: { en: "Hair fall can have many causes, including hereditary factors, hormonal changes, nutritional issues, illness and scalp conditions. A consultation helps identify the pattern and decide whether tests or treatment are appropriate.", hi: "बाल झड़ने के कई कारण हो सकते हैं, जैसे आनुवंशिक कारण, हार्मोन में बदलाव, पोषण संबंधी कमी, बीमारी और सिर की त्वचा के रोग। परामर्श से समस्या के प्रकार को समझने और जाँच या उपचार की आवश्यकता तय करने में मदद मिलती है।" },
    points: { en: ["Review of hair-loss pattern and duration", "Scalp examination where required", "Discussion of possible contributing factors", "Individualized treatment and hair-care guidance"], hi: ["बाल झड़ने के प्रकार और अवधि की जानकारी", "आवश्यकता होने पर सिर की त्वचा की जाँच", "संभावित कारणों पर चर्चा", "व्यक्तिगत उपचार और बालों की देखभाल संबंधी मार्गदर्शन"] },
    note: { en: "Sudden, patchy or rapidly progressing hair loss should be assessed by a qualified clinician. Avoid starting supplements or medicines without advice.", hi: "अचानक, जगह-जगह से या तेजी से बढ़ते बाल झड़ने की समस्या का चिकित्सकीय मूल्यांकन कराएँ। सलाह के बिना सप्लीमेंट या दवाइयाँ शुरू न करें।" }
  },
  {
    slug: "pigmentation-treatment",
    category: "skin",
    title: { en: "Pigmentation & uneven skin tone", hi: "झाइयाँ एवं त्वचा की असमान रंगत" },
    summary: { en: "Assessment of dark spots, melasma and uneven skin tone.", hi: "काले धब्बों, मेलाज़्मा और त्वचा की असमान रंगत का मूल्यांकन।" },
    overview: { en: "Pigmentation has different causes, and similar-looking marks may need different approaches. A dermatologist can assess the pattern, contributing factors and suitable options for your skin.", hi: "त्वचा पर दाग-धब्बों के अलग-अलग कारण हो सकते हैं और एक जैसे दिखने वाले निशानों के उपचार भी अलग हो सकते हैं। त्वचा विशेषज्ञ उनकी स्थिति, संभावित कारणों और आपकी त्वचा के लिए उपयुक्त विकल्पों का मूल्यांकन कर सकते हैं।" },
    points: { en: ["Assessment of the type and distribution of pigmentation", "Review of skincare, sun exposure and relevant history", "Guidance on sun protection and daily skincare", "Discussion of suitable medical or procedural options"], hi: ["पिगमेंटेशन के प्रकार और फैलाव का मूल्यांकन", "स्किनकेयर, धूप में रहने और संबंधित मेडिकल हिस्ट्री की जानकारी", "सन प्रोटेक्शन और रोज़ाना स्किनकेयर पर मार्गदर्शन", "उपयुक्त दवाइयों या प्रक्रियाओं के विकल्पों पर चर्चा"] },
    note: { en: "Do not use strong bleaching creams or prescription products without medical guidance. Results depend on the cause and individual response.", hi: "चिकित्सकीय सलाह के बिना तेज़ ब्लीचिंग क्रीम या प्रिस्क्रिप्शन उत्पादों का उपयोग न करें। परिणाम कारण और व्यक्ति की प्रतिक्रिया पर निर्भर करते हैं।" }
  },
  {
    slug: "gfc-prp-therapy",
    category: "hair",
    title: { en: "GFC / PRP therapy", hi: "GFC / PRP थेरेपी" },
    summary: { en: "Consultation to understand whether GFC or PRP may be suitable for your hair concern.", hi: "बालों से जुड़ी समस्या में GFC या PRP की उपयुक्तता समझने के लिए परामर्श।" },
    overview: { en: "GFC and PRP are procedures that use components derived from a person's own blood. They may be considered for selected hair-loss concerns after a clinical assessment. They are not suitable for everyone and cannot guarantee hair regrowth.", hi: "GFC और PRP ऐसी प्रक्रियाएँ हैं जिनमें व्यक्ति के अपने रक्त से प्राप्त घटकों का उपयोग किया जाता है। कुछ विशेष प्रकार की बाल झड़ने की समस्याओं में चिकित्सकीय मूल्यांकन के बाद इन पर विचार किया जा सकता है। ये सभी के लिए उपयुक्त नहीं होतीं और बाल दोबारा उगने की गारंटी नहीं देतीं।" },
    points: { en: ["Assessment of the type and cause of hair loss", "Discussion of expected benefits and limitations", "Review of suitability, risks and alternatives", "Procedure planning only when clinically appropriate"], hi: ["बाल झड़ने के प्रकार और कारण का मूल्यांकन", "संभावित लाभ और सीमाओं की जानकारी", "उपयुक्तता, जोखिम और अन्य विकल्पों पर चर्चा", "चिकित्सकीय रूप से उचित होने पर ही प्रक्रिया की योजना"] },
    note: { en: "A consultation is required before deciding on GFC or PRP. The clinician will explain whether the procedure is appropriate for you, along with possible risks, costs and alternatives.", hi: "GFC या PRP का निर्णय लेने से पहले परामर्श आवश्यक है। चिकित्सक आपकी स्थिति के अनुसार प्रक्रिया की उपयुक्तता, संभावित जोखिम, खर्च और अन्य विकल्प समझाएँगे।" }
  },
  {
    slug: "dermatosurgery",
    category: "procedures",
    title: { en: "Dermatosurgery", hi: "डर्मेटोसर्जरी" },
    summary: { en: "Specialist assessment for selected minor skin procedures.", hi: "चयनित छोटी त्वचा संबंधी प्रक्रियाओं के लिए विशेषज्ञ मूल्यांकन।" },
    overview: { en: "Dermatosurgery includes procedures performed to assess or manage selected skin conditions. The appropriate approach depends on the diagnosis, size and location of the concern, medical history and clinical findings.", hi: "डर्मेटोसर्जरी में त्वचा की कुछ समस्याओं के मूल्यांकन या उपचार के लिए की जाने वाली प्रक्रियाएँ शामिल होती हैं। सही प्रक्रिया का चयन समस्या के निदान, आकार, स्थान, मेडिकल हिस्ट्री और चिकित्सकीय जाँच पर निर्भर करता है।" },
    points: { en: ["Clinical examination of the skin concern", "Explanation of suitable procedure options", "Discussion of preparation, aftercare and possible risks", "Referral or further testing when needed"], hi: ["त्वचा संबंधी समस्या की चिकित्सकीय जाँच", "उपयुक्त प्रक्रिया के विकल्पों की जानकारी", "तैयारी, प्रक्रिया के बाद देखभाल और संभावित जोखिमों पर चर्चा", "आवश्यकता होने पर आगे की जाँच या रेफरल"] },
    note: { en: "Not every skin lesion requires a procedure. The need and suitability of any procedure are decided only after an in-person clinical assessment.", hi: "त्वचा की हर गाँठ या समस्या के लिए प्रक्रिया आवश्यक नहीं होती। किसी भी प्रक्रिया की आवश्यकता और उपयुक्तता का निर्णय प्रत्यक्ष चिकित्सकीय जाँच के बाद ही किया जाता है।" }
  },
  {
    slug: "nail-care",
    category: "nails",
    title: { en: "Nail disorders", hi: "नाखूनों से जुड़ी समस्याएँ" },
    summary: { en: "Evaluation of nail discoloration, thickening, infections and other nail changes.", hi: "नाखूनों के रंग में बदलाव, मोटापन, संक्रमण और अन्य समस्याओं का मूल्यांकन।" },
    overview: { en: "Changes in nails can be related to infection, inflammation, injury or other health conditions. A proper examination helps distinguish the cause and avoid unnecessary self-treatment.", hi: "नाखूनों में बदलाव संक्रमण, सूजन, चोट या अन्य स्वास्थ्य स्थितियों से जुड़े हो सकते हैं। सही जाँच से कारण समझने और बिना आवश्यकता स्वयं उपचार करने से बचने में मदद मिलती है।" },
    points: { en: ["Assessment of nail shape, colour and texture", "Evaluation for possible infection or inflammation", "Advice on tests when required", "Guidance on appropriate treatment and nail care"], hi: ["नाखूनों के आकार, रंग और बनावट का मूल्यांकन", "संभावित संक्रमण या सूजन की जाँच", "आवश्यकता होने पर जाँच की सलाह", "उपयुक्त उपचार और नाखूनों की देखभाल संबंधी मार्गदर्शन"] },
    note: { en: "Avoid applying household chemicals or taking antifungal medicines without diagnosis. Some nail conditions need laboratory confirmation.", hi: "बिना निदान के घरेलू रसायनों का उपयोग या एंटीफंगल दवाइयाँ न लें। नाखूनों की कुछ समस्याओं में लैब जाँच की आवश्यकता हो सकती है।" }
  }
] as const;

export function getTreatment(slug: string) {
  return treatments.find((item) => item.slug === slug);
}
