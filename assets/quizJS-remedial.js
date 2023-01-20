"use strict";
const linkImagesQuestion1 = [
  "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-1-1.png?v=1671724113",
  "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-1-3.png?v=1671724114",
  "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-1-4.png?v=1671724114",
  "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-1-2.png?v=1671724114",
];
const colorsScin = [
  "#fce8dd",
  "#fce7dc",
  "#fce7db",
  "#fbe5da",
  "#fbe5d9",
  "#fae3d6",
  "#fae3d5",
  "#fae2d4",
  "#f9e2d2",
  "#f9e1d1",
  "#f8e0ce",
  "#f8dfcd",
  "#f8dfcc",
  "#f7deca",
  "#f7ddc9",
  "#f6dcc7",
  "#f6dcc6",
  "#f6dcc5",
  "#f5dbc3",
  "#f5dac1",

  "#f5dac1",
  "#f4d8be",
  "#f4d7bd",
  "#f4d6ba",
  "#f3d4b7",
  "#f3d3b4",
  "#f2d1b1",
  "#f2d0b0",
  "#f2cead",
  "#f1ccaa",
  "#f1caa7",
  "#f0c8a5",
  "#f0c6a2",
  "#f0c5a0",
  "#efc49d",
  "#efc29b",
  "#eec098",
  "#eebf95",
  "#eebe93",
  "#edbc91",

  "#ebb98d",
  "#e9b68a",
  "#e7b386",
  "#e5b183",
  "#e2ad7f",
  "#e0ab7c",
  "#dea879",
  "#dca575",
  "#daa373",
  "#d8a26f",
  "#d69f6c",
  "#d39c69",
  "#d19a66",
  "#cf9763",
  "#cd9560",
  "#cb925d",
  "#c9905a",
  "#c68d57",
  "#c48a55",

  "#c18754",
  "#be8654",
  "#bb8254",
  "#b77e53",
  "#b47d53",
  "#b17a53",
  "#ae7852",
  "#ab7551",
  "#a77251",
  "#a47050",
  "#a16d50",
  "#9e6a4f",
  "#9a694e",
  "#97664d",
  "#94644d",
  "#91624c",
  "#8e5f4b",
  "#8a5d4a",
  "#875b49",

  "#835745",
  "#7e5342",
  "#7a503f",
  "#754d3b",
  "#714938",
  "#6d4635",
  "#684232",
  "#64402f",
  "#5f3c2c",
  "#5b3929",
  "#563526",
  "#523323",
  "#4e3021",
  "#492d1e",
  "#452a1c",
  "#402619",
  "#3c2417",
  "#372115",
  "#331e13",
  "#331e13",
  "#331e13",
  "#331e13",
];
let Quistion7ImgsData = [
  {
    id: 1,
    imgs: [
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-darkC.png?v=1672152349",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-bags.png?v=1672152348",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-wrinkles.png?v=1672152348",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-primary.png?v=1672152348",
    ],
    ids: ["Qz6-1", "Qz6-2", "Qz6-3", "primQz6"],
  },
  {
    id: 2,
    imgs: [
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-pigment.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-acne.png?v=1672153654",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-wrinklesFace.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-redness.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-scars.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-primary.png?v=1672152348",
    ],
    ids: ["Qz6-1", "Qz6-2", "Qz6-3", "Qz6-4", "Qz6-5", "primQz6"],
  },
  {
    id: 3,
    imgs: [
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-wrinklesFc.png?v=1674223424",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-shine.png?v=1674223424",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-tightness.png?v=1674223424",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-primary.png?v=1672152348",
    ],
    ids: ["primQz6", "Qz6-1", "Qz6-2", "Qz6-3"],
  },
  {
    id: 3,
    imgs: [
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-darkC_bags.png?v=1672214950",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-wrinklesFace.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-pigment.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-acne.png?v=1672153654",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-scars.png?v=1672153655",
      "https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-7-primary.png?v=1672152348",
    ],
    ids: ["Qz6-1", "Qz6-2", "Qz6-3", "Qz6-4", "Qz6-5", "primQz6"],
  },
];
const questions = [
  {
    //first
    question: "What kind of skin do you think you have?",
    answers: ["Normal", "Combination", "Oily", "Dry"],
    id: 1,
    finalAns: "",
    resualtsAnswers: [
      "People with normal skin can be envied — they do not have black dots and greasy shine, they are unfamiliar with peeling and a feeling of tightness",
      "Most often, there are practically no visible pores on it and there is no greasy shine. On the one hand, it's great: no shine — no problem. And on the other hand, this is the problem: the sebaceous glands do not work well, hence the acute shortage of lipids, and hence protection. Dry skin is thin, with a noticeable mesh of capillaries, dull, sensitive to temperature changes",
      "This type of skin is found in most people. You belong to them if you have: oily skin in the T-zone (forehead, nose, chin), in other areas — normal",
      "It is impossible to confuse this type of skin with another. Most often, oily skin begins to shine almost immediately after washing, enlarged pores are noticeable on it, there is a tendency to rashes and inflammation",
    ],
    selectedItem: "",
  },

  {
    //second
    question: "Select your age",
    answers: ["Under 20", "20-30", "30-40", "40-50", "50+"],
    id: 2,
    finalAns: "",
    resualtsAnswers: [
      "Hormonal changes can cause skin disorders that may disappear in the future. <br>Hormonal changes during puberty can have dramatic consequences for the skin - especially on the face, shoulders, chest and back. An increase in sebum production and disruption of the activity of corneocytes can lead to skin irritation, and it can become oily and prone to acne",
      "Genetics, lifestyle and environment determine at what stage the epidermis and dermis become thinner, but at the age of 25 the first signs of aging may already appear, usually in the form of facial wrinkles. When the skin becomes thinner, its barrier function and its natural UV protection also gradually decrease. Collagen mass and flexibility are also starting to weaken",
      "The barrier function of their skin is more weakened. The metabolic processes in the cells begin to slow down. The loss of natural moisture by the skin increases. The elasticity of the skin decreases",
      "Even if you did not attach much importance to skin care before the age of 40, at this turn it will require care from you. Fine wrinkles or already laid creases, dryness, discomfort, peeling, earthy complexion, local redness, rashes",
      "At this age, the production of the hormone estrogen decreases. This affects the skin — it becomes drier, thinner and more fragile, as the activity of the sebaceous glands decreases. The oval of the face becomes less clear, wrinkles and crow's feet appear, the elasticity of the skin decreases",
    ],
    selectedItem: "",
  },
  {
    //third
    question: "What is your skin tone?",
    answers: ["3"],
    id: 3,
    finalAns: "",
    // not recomedation
    resualtsAnswers: [],
    selectedItem: "",
  },
  {
    //fours
    question: "How much water do you drink a day?",
    answers: [
      "Tea or coffee only",
      "1-2 glasses",
      "3-5 glasses",
      "More than 5 glasses",
    ],
    id: 4,
    finalAns: "",
    resualtsAnswers: [
      "When drinking coffee, the body produces cortisol, a stress hormone. The constant presence of it in the body leads to premature aging of the skin, its thinning and dehydration. tea is washed out of the body by useful trace elements — magnesium, calcium and iron. Iron deficiency anemia leads to deterioration of the skin and hair",
      "When our skin lacks moisture, the amount of intercellular fluid decreases, collagen fibers dry out, thin and curl. Such skin is called dehydrated",
      "When the skin is sufficiently hydrated, it remains more dense and elastic. Bonus: it is less susceptible to irritations, which can be a great place for the growth of bacteria that cause pimples and acne",
      "Consuming too much water can cause a decrease in the concentration of sodium in the blood, which maintains a balance between the fluid inside and outside the cells. When the sodium level drops, the water moves outward and causes the cells to swell",
    ],
    selectedItem: "",
  },
  {
    //fives
    question: "How many hours do you sleep a day?",
    answers: [
      "Less than 6 hours",
      "From 6 to 7 hours",
      "From 7 to 8 hours",
      "More than 8 hours",
    ],
    id: 5,
    finalAns: "",
    resualtsAnswers: [
      "A minimum of 6 hours of sleep a night is needed to produce enough collagen to maintain your skin’s elasticity. Plus, those sleeping hours ensure you aren’t walking around with tired, darkened circles under your eyes. Bright and fresh look is one of the key conditions of a really good day",
      "Getting adequate sleep is one of the most important things you can do for your body, including your skin. Bright and fresh look is one of the key conditions of a really good day",
      "Getting adequate sleep is one of the most important things you can do for your body, including your skin. Bright and fresh look is one of the key conditions of a really good day",
      "Getting adequate sleep is one of the most important things you can do for your body, including your skin",
    ],
    selectedItem: "",
  },
  {
    //six
    question: "Choose your problematic area",
    answers: ["Eyes", "Face", "T-zone", "All together", "Neck", "No problems"],
    id: 6,
    finalAns: "",
    selectedItem: "",
    resualtsAnswers: [
      "",
      "",
      "",
      "",
      "After 25 years, the aging process starts. It is reflected in the decrease in the elasticity of soft tissues, in the weakening of muscle tone, in the formation of folds and wrinkles, the second chin, in the redistribution of fatty tissue located under the skin. Blood circulation in the neck and decollete is much weaker. In this regard, even with a well-groomed face, this part of the body is able to give out the true age of the owner, sometimes with an increase in age by several years. Try Remedial neck firming cream, it contains jojoba oil that gives elasticity and firmness to the skin, and effectively protects the skin from UV rays. Retinol brings ant-aging and lifting effect",
      "Lucky you! You have an absolutely right attitude to the skin, your skin gets all the necessary elements to stay fresh and lifted, don’t forget to drink enough water, walk in fresh air and take vitamins. In this case your skin will remain young far longer. Our congratulations! You have really nice skin, but even such skin requires care and attention. Remedial retinol and collagen with hyaluronic acid will support your skin, it moustires, lifts and protects the skin 24/7!",
    ],
  },

  //-----------------------------------------------------------------------------------------

  {
    question:
      "What kind of problem do you have?<span class='placeClarifyingQuestion'> Eyes</span>",
    answers: ["Dark circles", "Bags", "Wrinkles", "Other"],
    id: 7,
    finalAns: "",
    resualtsAnswers: [
      "The vessels, capillaries, and muscles that are located under the epidermis are darker than our skin, so if they shine through, visually it will look like bruises under the eyes. Also, the effect occurs when the permeability of the walls of blood vessels and capillaries is disturbed. There are three anatomical causes of bruises under the eyes: a very thin layer of dermis, thinning of the fat layer under the lower eyelids, violations of the permeability of the walls of blood vessels. Remedial eye cream can help you to fight dark circles with sodium hyaluronate, that will lift the skin and improve the skin tone",
      "Mild swelling or puffiness under the eyes is common as you age. With age, the tissues around the eyes, including some of the muscles supporting the eyelids, weaken. The fat that helps support the eye can then move into the lower eyelids, causing the eyelids to become puffy. Fluid can also accumulate in the space under your eyes, increasing puffiness. Remedial eye cream with niacinamide will soothe the skin and boost cell renewal",
      "Wrinkles are a common phenomenon for healthy skin. These are folds and grooves that appear due to the fact that the skin loses elasticity and strength over time.The reasons are: this is an age that spares no one, the result of the work of ultraviolet light, cigarettes. Fight wrinkles with Remedial eye cream fast and effectively. Balanced formula will help you bring the fresh sight back",
      "Edema – local accumulation of fluid in the eyelid and under-eye area, usually occurring during the night; causes: stress, smoking, alcohol, salt abuse, lack of sleep. Pigmentation develops with age. irritability and hypersensitivity of the skin around the eyes. Remedial eye cream with caffeine and collagen will moisture and give an anti-aging effect to your skin. The thinner and more delicate the skin, the faster it will react to any stimuli",
    ],
    selectedItem: "",
  },
  {
    question:
      "What kind of problem do you have?<span class='placeClarifyingQuestion'> Face</span>",
    answers: ["Pigment", "Acne", "Wrinkles", "Redness", "Scars", "Other"],
    id: 7,
    finalAns: "",
    resualtsAnswers: [
      "Pigmentation can develop due to hormonal failures, excessive exposure to ultraviolet light, vitamin C deficiency, pregnancy, kidney, liver or choleretic pathways, age-related changes in the body. If you want to remove pigments try to use Remedial dark spot corrector, it has hyaluronic acid, and vitamins C and E that will heal and renew the skin",
      "These can be black dots, red pimples, purulent painful rashes, white acne. In most cases, rashes affect the T-zone – the zone with the greatest activity of the sebaceous glands and the most enlarged pores. These are the forehead, nose and chin. Acne appears less frequently in the U-zone (cheeks and cheekbones). The causes are stress, skin lesions accompanied by inflammation, an unbalanced diet, frequent lack of sleep, bad habits, changes in the hormonal system. Using Remedial dark spot corrector will reduce stress and soothe the skin with anti-aging effect, also it will protect from the sun and dust",
      "Wrinkles are folds and thin depressions that form on the surface of the skin and give it an uneven relief. Wrinkles can be multiple and small or single, but deep. There are many reasons for the appearance of wrinkles: active facial expressions, stress, unhealthy lifestyle, hormonal maturation, solar radiation, inadequate care or lack thereof. Our skin needs help and Remedial has answers how to do it. Remedial collagen face cream, it’s a face moisturizer that will help erase fine lines and wrinkles",
      "The main causes are vascular diseases, digestive system, hormonal disorders, diseases of the endocrine system, smoking, frequent alcohol consumption, temperature changes, constant consumption of spicy food and others. Using Remedial glycolic acid pads will remove dead skin cells to unclog pores, green tea and eucalyptus will reduce redness and irritation",
      "Scars can remain on the skin after any injury penetrating into the dermal layer – purulent inflammation, deep incision (including after surgery), thermal or chemical burns, radiation exposure,  skin diseases. Remedial Scar Removal will help to get the clean skin back. It contains panthenol, that has moisturizing, restoring and soothing effects, enhances skin healing in case of sunburn and other injuries",
      "Papillomas are neoplasms on the skin caused by a virus, keratosis is small spots covered with coarse scales, vitiligo is pink or milky–white spots of rounded outline, chloasma is enhanced skin pigmentation with clear boundaries. Remember to look after your skin, Remedial retinol face cream will be a good helper in supporting your skin, it is effective at normalizing cell turnover and normalizing skin tone",
    ],
    selectedItem: "",
  },
  {
    question:
      "What kind of problem do you have?<span class='placeClarifyingQuestion'> T-zone</span>",
    answers: ["Wrinkles", "Shine", "Tightness", "Other"],
    id: 7,
    finalAns: "",
    resualtsAnswers: [
      "The skin in the T-zone is very thin, there is a minimal fat layer and few sebaceous glands. Causes: posture disorders, ultraviolet radiation, improper or insufficient care. The appearance of wrinkles is only 20% due to genetic factors – the structure of the skull and the type of tissue aging, the remaining 80% are the consequences of the negative influence of external environmental factors that can be minimized. The reasons are: active facial expressions, insufficient care, age and bad habits. You always can save your skin with our Remedial retinol and collagen face cream. Due to its balanced formula, there is an opportunity to renew skin with a lifting effect that will moisturize your skin and reduce irritation",
      "This appears due to too dense greasy cream that clogs the pores; due to a cleanser containing aggressive sulfates (all this leads to over-drying of the skin); due to rubbing the face with alcohol solutions; due to the lack of a tonic that must be used to restore the pH of the skin disturbed by washing. Remedial retinol cream normalizes the cycle of renewal of epidermal cells, accelerates the synthesis of collagen",
      "Small cracks appear, the skin surface becomes rough and rough to the touch. All these signs appear due to a decrease in moisture in the surface layers of the skin. Due to dehydration, with an increase in transepidermal water loss, a violation of the barrier function occurs. Remedial Face cream contains retinol that accelerates the process of micro-exfoliation of the skin (peeling effect), thereby normalizing the cycle of renewal of epidermal cells",
      "Itching of the skin, jaundice of the skin, age spots, allergic reactions on the skin, sagging skin. All these are problems that we can meet as well. The first and most important rule of home ways to combat acne is that you can not manually clean your face yourself. 'Squeezing out' pimples without proper preparation and preliminary procedures is too great a risk to spread the infection. There are 3 types of care products, the use of which supports the effect of complex therapeutic procedures for problem skin — moisturizing, toning and cleansing. It is highly desirable to give preference to any one product line. Remedial represents the whole range of products to take care of your skin: cream, pads, corrector - all contain necessary elements (retinol, collagen, jojoba oil, panthenol etc.). Build your perfect skin care with Remedial!",
    ],
    selectedItem: "",
  },
  {
    question:
      "What kind of problem do you have?<span class='placeClarifyingQuestion'> All together</span>",
    answers: [
      "Dark circles/Bags",
      "Wrinkles",
      "Age spots",
      "Acne",
      "Scars",
      "Other",
    ],
    id: 7,
    finalAns: "",
    resualtsAnswers: [
      "The vessels, capillaries, and muscles that are located under the epidermis are darker than our skin, so if they shine through, visually it will look like bruises under the eyes. Also, the effect occurs when the permeability of the walls of blood vessels and capillaries is disturbed. There are three anatomical causes of bruises under the eyes: a very thin layer of dermis, thinning of the fat layer under the lower eyelids, violations of the permeability of the walls of blood vessels. Remedial eye cream can help you to fight dark circles with sodium hyaluronate, that will lift the skin and improve the skin tone.  Mild swelling or puffiness under the eyes is common as you age. With age, the tissues around the eyes, including some of the muscles supporting the eyelids, weaken. The fat that helps support the eye can then move into the lower eyelids, causing the eyelids to become puffy. Fluid can also accumulate in the space under your eyes, increasing puffiness. Remedial eye cream with niacinamide will soothe the skin and boost cell renewal.",
      "Wrinkles are a common phenomenon for healthy skin. These are folds and grooves that appear due to the fact that the skin loses elasticity and strength over time.The reasons are: this is an age that spares no one, the result of the work of ultraviolet light, cigarettes. Fight wrinkles with Remedial eye cream fast and effectively. Balanced formula will help you bring the fresh sight back",
      "One of the most dangerous things for the skin of the face is a dirty pillowcase. It accumulates a huge amount of bacteria, dirt and your own old cells. This is a real biological bomb, so do not forget to defuse it at least once every two weeks. The constant change of cosmetics for the skin is scarier than any horror movie. Remedial beauty products will help you to overcome different skin problems, using products complexly will bring even better effect, choose what fits you exactly and make your skin perfect!",
      "These can be black dots, red pimples, purulent painful rashes, white acne. In most cases, rashes affect the T-zone – the zone with the greatest activity of the sebaceous glands and the most enlarged pores. These are the forehead, nose and chin. Acne appears less frequently in the U-zone (cheeks and cheekbones). The causes are stress, skin lesions accompanied by inflammation, an unbalanced diet, frequent lack of sleep, bad habits, changes in the hormonal system. Using Remedial dark spot corrector will reduce stress and soothe the skin with anti-aging effect, also it will protect from the sun and dust",
      "Scars can remain on the skin after any injury penetrating into the dermal layer – purulent inflammation, deep incision (including after surgery), thermal or chemical burns, radiation exposure,  skin diseases. Remedial Scar Removal will help to get the clean skin back. It contains panthenol, that has moisturizing, restoring and soothing effects, enhances skin healing in case of sunburn and other injuries",
      "One of the most dangerous things for the skin of the face is a dirty pillowcase. It accumulates a huge amount of bacteria, dirt and your own old cells. This is a real biological bomb, so do not forget to defuse it at least once every two weeks. The constant change of cosmetics for the skin is scarier than any horror movie. Remedial beauty products will help you to overcome different skin problems, using products complexly will bring even better effect, choose what fits you exactly and make your skin perfect!",
    ],
    selectedItem: "",
  },
  //-----------------------------------------------------------------------------------------
  {
    // eight
    question: "How much time do you spend in the sun?",
    answers: [
      "Under 3 hours per day",
      "3-6 hours per day",
      "More than 6 hours per day",
    ],
    id: 8,
    finalAns: "",
    resualtsAnswers: [
      "Even if you have a dark skin tone and you spend 20-30 minutes a day in the sun, there is a risk of getting very unpleasant consequences for your body. Dryness and tightness of the skin, age spots, wrinkles and even the risk of cancer - all these are the consequences of improper sunbathing and lack of proper skin care",
      "Ultraviolet radiation from the sun contributes to skin aging and the development of erythema and cancer, but is also useful for lowering blood pressure, vitamin D production and increasing the success of treatment of a number of diseases",
      "A long stay in the open sun carries a risk to people with high blood pressure, systemic connective tissue diseases, porphyria, vitiligo. Symptoms such as redness, pain, inflammation, fever, the appearance of blisters, blisters or other rashes on the skin indicate sunburn",
    ],
    selectedItem: "",
  },
  {
    //nine
    question: "What are your bad habits?",
    answers: [
      "Smoking",
      "Alcohol",
      "Eating fast food",
      "Eating sweets",
      "Eating spice food",
      "Nothing from the listed",
    ],
    id: 9,
    finalAns: "",
    resualtsAnswers: [
      "Under the influence of nicotine and resins, the activity of free radicals increases, which cause rapid aging of the skin due to a decrease in collagen and elastin molecules, which provide the skin with firmness and elasticity. Smoking also destroys vitamin C, which is so necessary to give the skin a fresh and healthy appearance",
      'Alcohol lowers the levels of vitamin C and E, which are powerful antioxidants, as well as the levels of vitamin A, which plays a key role in the production of collagen. We lose collagen and elastin, which causes the face to "sag", and therefore we can seriously say that alcohol accelerates the aging process of the skin',
      "In addition to trans fats, fast food contains food additives, flavor enhancers (otherwise you wouldn't dream of a hamburger before going to bed). All this chemical 'laboratory' can cause allergic dermatitis, acne exacerbation and other skin rashes",
      "Sugar instantly increases the level of insulin in the blood, and this activates the process of collagen glycation. Glycation is a beauty killer. Sugar molecules form bonds with proteins and stick together. They glue the fibers of collagen and elastin, which are 'candied', harden, become brittle and change the structure of the skin",
      "Spicy food affects the production of sebum. Spicy food expands the capillaries and makes them noticeable (a 'mesh' appears at the nose and eyelids) and is contraindicated for those who suffer from rosacea and acne",
      "Great news! You got rid of a hundred problems, keep going the same way, consume vitamins, and moisturize your skin with Remedial beauty products to make the skin even more perfect!",
    ],
    selectedItem: "",
  },
  {
    //ten
    question: "How often do take care of your skin?",
    answers: [
      "Several times a day",
      "Every day",
      "Ones per several days",
      "Several times per month",
      "No skin care",
    ],
    id: 10,
    finalAns: "",
    resualtsAnswers: [
      "Very nice approach! Daily facial skin care involves cleansing twice a day: not only in the evening, but also in the morning. And if evening cleansing seems natural to us, then morning cleansing may raise questions.It is necessary to remove traces of nocturnal activity of the skin and prepare it for further morning care",
      "It’s nice if you do this in the evening, after a hard day and make up. Don’t forget to clean, moisture the skin to soothe the skin and build the barrier for the harmful environment and dust",
      "Such an approach is good for cleaning like scrubbing. It’s a kind of stress for the skin, so it doesn’t need to be done every day. But usual cleaning and moisturizing should be done every day, because your skin exposures stress every day",
      "If it’s peeling then it's the correct choice. Properly selected facial skin care allows you to combat the signs of premature aging, dehydration, the appearance of fine wrinkles and hyperpigmentation. Don’t neglect every day skin care",
      "Dermatologists predict acne, itching, dehydration, peeling. Firstly, excess sebum clogs the pores, in which inflammation may occur. This is especially true for oily skin",
    ],
    selectedItem: "",
  },
];

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const ContainerForAnswers = document.querySelector("#list");
const ContainerForQuistion = document.querySelector("#header");
const ContainerForBottomButtons = document.querySelector(".buttons");

const ContainerForEndForm = document.querySelector(".form-from-GR");

const nextBtn = document.querySelector("#submit");
const prevBtn = document.querySelector("#prevQuiz");
let formBtn = document.querySelector("#formbtn");

const progress = document.querySelector("#progressQuiz");

let checkRadio;

let questionIndex = 0; //   !!0!!
const qviz = document.querySelector("#quiz");

// const ResultButton = document.querySelector("#resultbtn");

const loader = document.querySelector(".loader");

let error;

clearPage();
showQuestion();

// очистка вопроса и ответов
function clearPage() {
  ContainerForQuistion.innerHTML = "";
  ContainerForAnswers.innerHTML = "";
}

//---------------------------- функция перехода к следующему вопросу ----------------------------------------------------------------------------------------------------------------
function nextQuestion() {
  // проверка на то, что хотя что-то выбрано
  let buttonActive = document.querySelectorAll(".activeBtn");

  // кнопка back на первом вопросе скрыта
  if (questionIndex !== "0") {
    prevBtn.style.display = "block";
  }

  if (buttonActive) {
    questionIndex++;
    console.log(questionIndex);

    // форма ввода данных
    if (questionIndex >= questions.length) {
      questions[12].selectedItem = document.querySelector(".activeBtn").id;

      ContainerForEndForm.style.display = "block";
      ContainerForQuistion.style.display = "none";
      ContainerForAnswers.style.display = "none";
      // qviz.style.justifyContent = "center";

      nextBtn.style.display = "none";
      formBtn.style.display = "block";

      clearPage();
      showQuestion();
      return;
    } else {
      if (questionIndex == 3) {
        //----
        clearPage();
        showQuestion();
        return;
      } else if (questionIndex == 6) {
        questions[questionIndex - 1].selectedItem =
          document.querySelector(".activeBtn").id;

        if (document.querySelector(".activeBtn").id == 5) {
          questionIndex = 10;
        } else {
          questionIndex = Number(6 + Number(questions[5].selectedItem));
        }

        console.log(questionIndex);
        clearPage();
        showQuestion();

        return;
      } else if (questionIndex > 6 && questionIndex <= 10) {
        // развилка вопросов на 6 вопросе

        // if (questionIndex == 7) {
        // проверка вопроса с возможностью выбрать несколько вариантов отвнтов
        buttonActive = document.querySelectorAll(".activeBtn");
        console.log(buttonActive);
        let arr = [];
        for (let elem of buttonActive) {
          arr.push(elem.id);
        }
        if (arr.length == 1) {
          questions[questionIndex - 1].selectedItem = arr[0];
        } else {
          questions[questionIndex - 1].selectedItem = arr;
        }
        questionIndex = 10;
        clearPage();
        showQuestion();

        return;
      } else if (questionIndex <= questions.length) {
        // проверка на последний вопрос
        // обычный переход к следующему вопросу
        questions[questionIndex - 1].selectedItem =
          document.querySelector(".activeBtn").id;
        clearPage();
        showQuestion();
        console.log(questions);
        return;
      }
    }
  } else {
    console.log("no answer");
  }
}
//---------------------------- нажатие на кнопку далее ----------------------------------------------------------------------------------------------------------------
nextBtn.addEventListener("click", () => {
  nextQuestion();
});

//---------------------------- нажатие на кнопку back ----------------------------------------------------------------------------------------------------------------
prevBtn.addEventListener("click", () => {
  console.log(questionIndex);
  if (questionIndex <= 1) {
    prevBtn.style.display = "none";
  }
  // откат к вопросу после ветвления
  if (questionIndex == 10) {
    if (questions[5].selectedItem > 3) {
      questionIndex = 5;
    } else {
      questionIndex = Number(6 + Number(questions[5].selectedItem));
    }
    clearPage();
    showQuestion();
    return;
  }
  // откат к вопросу ветвления
  if (questionIndex > 6 && questionIndex <= 9) {
    questionIndex = 5;
    clearPage();
    showQuestion();
    return;
  }
  // откат к вопросу, если был на форме
  if (questionIndex >= questions.length) {
    ContainerForEndForm.style.display = "none";
    ContainerForQuistion.style.display = "block";
    ContainerForAnswers.style.display = "flex";
    questionIndex = 12;
    showQuestion();

    qviz.style.justifyContent = "space-between";
    nextBtn.style.display = "none";
    formBtn.style.display = "none";
  } else if (questionIndex > 0 && questionIndex < 13) {
    questionIndex--;
    clearPage();
    showQuestion();
  }
});

// ---------------------------отрисовка вопросов----------------------------------------------------------------------------------------------------------------------------------
function showQuestion() {
  if (questionIndex < questions.length) {
    const headerTemplate = `<h3 class='title'>%title%</h3>`;

    let title = headerTemplate.replace(
      "%title%",
      questions[questionIndex]["question"]
    );

    ContainerForQuistion.innerHTML = title;
    let numberAnswer = 0;

    for (let answerText of questions[questionIndex]["answers"]) {
      let questionTemplate;

      if (questionIndex == 0) {
        questionTemplate = `<button class="itemAnswer" id="${numberAnswer}"><img src="${linkImagesQuestion1[numberAnswer]}" alt="${answerText}"><h5>%answer%</h5></button>`;
      } else {
        questionTemplate = `<button class="itemAnswer" id="${numberAnswer}">%answer%</button>`;
      }

      let answerHtml = questionTemplate.replace("%answer%", answerText);

      ContainerForAnswers.innerHTML += answerHtml;
      numberAnswer++;
    }

    if (questionIndex == 0) {
      ContainerForAnswers.style.display = "grid";
      ContainerForAnswers.style.width = "100%";
    } else if (questionIndex == 1) {
      ContainerForAnswers.style.display = "flex";
      // adaptiv for question-2
      let pageWidth = document.documentElement.scrollWidth;
      const buttonsStyle2 = document.querySelectorAll(".itemAnswer");
      if (pageWidth < 1200 && pageWidth > 991) {
        ContainerForAnswers.style.width = "940px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "280px";
          elem.style.height = "110px";
        });
      } else if (pageWidth < 991) {
        ContainerForAnswers.style.width = "680px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "200px";
          elem.style.height = "120px";
        });
      } else {
        ContainerForAnswers.style.width = "1080px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "300px";
          elem.style.height = "120px";
        });
      }
    } else if (questionIndex == 2) {
      // range (scin color)
      ContainerForAnswers.style.display = "flex";
      ContainerForAnswers.style.width = "100%";

      ContainerForBottomButtons.classList.remove("buttonsColumn");
      ContainerForBottomButtons.classList.add("buttonsRow");
    } else if (questionIndex == 5) {
      // выбор проблемной зоны
      // adaptiv for question-6-------------------------------
      let pageWidth = document.documentElement.scrollWidth;
      if (pageWidth < 1200 && pageWidth > 991) {
        ContainerForAnswers.style.width = "70%";
      } else if (pageWidth < 991) {
        ContainerForAnswers.style.width = "90%";
      } else {
        ContainerForAnswers.style.width = "55%";
      }
      //------------------------------------------------------
      ContainerForAnswers.style.display = "grid";
      ContainerForAnswers.style.gridTemplateColumns = "1fr 1fr";
      ContainerForBottomButtons.classList.remove("buttonsColumn");
      ContainerForBottomButtons.classList.add("buttonsRow");
      ContainerForAnswers.innerHTML =
        "<div class='quistion6ImgBlock'><img src='https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-6-Primary.png?v=1671791283' id='primQz6'><img src='https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-6-eyes.png?v=1672214539' id='Qz6-1'><img src='https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-6-face_09517dd2-db80-4983-968c-e188e381ef2e.png?v=1672215699' id='Qz6-2'><img src='https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-6-tzona.png?v=1671791283' id='Qz6-3'><img src='https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-6-neck.png?v=1672214289' id='Qz6-4'><img src='https://cdn.shopify.com/s/files/1/0566/4322/3596/files/answer-6-all.png?v=1671791283' id='Qz6-5'></div><div class='answers6withImg'><button class='itemAnswer' id='0'>Eyes</button><button class='itemAnswer' id='1'>Face</button><button class='itemAnswer' id='2'>T-zone</button><button class='itemAnswer' id='4'>Neck</button><button class='itemAnswer' id='3'>All together</button><button class='itemAnswer' id='5'>No problems</button></div>";
      const imgs6Quiz = document.querySelectorAll(".quistion6ImgBlock img");
      // скрываю все png (кроме главной), а в answerVariant отслеживаю!
      for (let img of imgs6Quiz) {
        if (img.id !== "primQz6") {
          img.style.opacity = "0";
        }
      }
    } else if (questionIndex >= 6 && questionIndex <= 9) {
      // 6 - eyes / 7 - face / 8 - T-zone / 9 - all together
      // выбор точечной проблемы ( уточняющий вопрос )
      // adaptiv for questions-id-7-------------------------------
      let pageWidth = document.documentElement.scrollWidth;
      if (pageWidth < 1200 && pageWidth > 991) {
        ContainerForAnswers.style.width = "70%";
      } else if (pageWidth < 991) {
        ContainerForAnswers.style.width = "90%";
      } else {
        ContainerForAnswers.style.width = "55%";
      }
      //------------------------------------------------------
      ContainerForAnswers.style.display = "grid";
      ContainerForAnswers.style.gridTemplateColumns = "1fr 1fr";
      ContainerForBottomButtons.classList.remove("buttonsColumn");
      ContainerForBottomButtons.classList.add("buttonsRow");

      numberAnswer = 0;

      //Quistion7ImgsData

      ContainerForAnswers.innerHTML =
        "<div class='quistion6ImgBlock'>%images%</div>";

      let resultsLeftColumnImages = "";
      let inNum = 0;
      if (questionIndex == 6) {
        inNum = 0;
      } else if (questionIndex == 7) {
        inNum = 1;
      } else if (questionIndex == 8) {
        inNum = 2;
      } else if (questionIndex == 9) {
        inNum = 3;
      }

      for (let i = 0; i < Quistion7ImgsData[inNum].ids.length; i++) {
        let imagesTemplate;

        imagesTemplate = `<img src="${Quistion7ImgsData[inNum].imgs[i]}" id="${Quistion7ImgsData[inNum].ids[i]}">`;

        resultsLeftColumnImages += imagesTemplate;
      }

      ContainerForAnswers.innerHTML = ContainerForAnswers.innerHTML.replace(
        "%images%",
        resultsLeftColumnImages
      );
      ContainerForAnswers.innerHTML =
        ContainerForAnswers.innerHTML +
        "<div class='answers6withImg'>%answerrs%</div>";
      let resultsRightColumnAnswers = "";
      for (let answerText of questions[questionIndex]["answers"]) {
        let questionTemplate;

        questionTemplate = `<button class="itemAnswer" id="${numberAnswer}">%answer%</button>`;

        let answerHtml = questionTemplate.replace("%answer%", answerText);

        resultsRightColumnAnswers += answerHtml;
        numberAnswer++;
      }
      ContainerForAnswers.innerHTML = ContainerForAnswers.innerHTML.replace(
        "%answerrs%",
        resultsRightColumnAnswers
      );

      const imgs6Quiz = document.querySelectorAll(".quistion6ImgBlock img");
      // тут скрываю все png (кроме главной), а в answerVariant отслеживаю!
      for (let img of imgs6Quiz) {
        if (img.id !== "primQz6") {
          img.style.opacity = "0";
        }
      }
    } else if (questionIndex == 12) {
      // How often do take care of your skin? ( последний вопрос )
      ContainerForBottomButtons.classList.remove("buttonsColumn");
      ContainerForBottomButtons.classList.add("buttonsRow");

      ContainerForAnswers.style.display = "flex";
      // adaptiv for question-last
      let pageWidth = document.documentElement.scrollWidth;
      const buttonsStyle2 = document.querySelectorAll(".itemAnswer");
      if (pageWidth < 1200 && pageWidth > 991) {
        ContainerForAnswers.style.width = "940px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "280px";
          elem.style.height = "110px";
        });
      } else if (pageWidth < 991) {
        ContainerForAnswers.style.width = "680px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "200px";
          elem.style.height = "120px";
        });
      } else {
        ContainerForAnswers.style.width = "1080px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "300px";
          elem.style.height = "120px";
        });
      }
    } else if (questionIndex >= 7) {
      // How much time do you spend in the sun?
      ContainerForBottomButtons.classList.remove("buttonsColumn");
      ContainerForBottomButtons.classList.add("buttonsRow");

      let pageWidth = document.documentElement.scrollWidth;
      const buttonsStyle2 = document.querySelectorAll(".itemAnswer");
      if (pageWidth < 1200 && pageWidth > 991) {
        ContainerForAnswers.style.gridTemplateColumns = "280px 280px 280px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "280px";
        });
      } else if (pageWidth < 991) {
        ContainerForAnswers.style.gridTemplateColumns = "200px 200px 200px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "200px";
        });
      } else {
        ContainerForAnswers.style.gridTemplateColumns = "300px 300px 300px";
        buttonsStyle2.forEach((elem) => {
          elem.style.width = "300px";
        });
      }

      ContainerForAnswers.style.display = "grid";
      ContainerForAnswers.style.width = "100%";
    } else {
      ContainerForAnswers.style.display = "grid";
      ContainerForAnswers.style.width = "100%";
      ContainerForAnswers.style.gridTemplateColumns = "300px 300px";

      ContainerForBottomButtons.classList.remove("buttonsRow");
      ContainerForBottomButtons.classList.add("buttonsColumn");
    }

    // ---------------------- progress ----------------------------------------------------
    progress.innerHTML = `<div class="textProgressQuiz">${questions[questionIndex].id}</div>/10`;
    // ------------------------------------------------------------------------------------
    answerVariant();
  }
}

//-------------------------------------- отправка формы  ---------------------------------------------------------------------------------------------------------------------
formBtn.addEventListener("click", () => {
  console.log("form");
  validation();
});

// вешаем события на кнопки ответов
function answerVariant() {
  checkRadio = null;
  let buttons = document.querySelectorAll(".itemAnswer");

  if (questions[questionIndex].id == 7) {
    nextBtn.style.display = "block";

    const imgs6Quiz = document.querySelectorAll(".quistion6ImgBlock img");

    for (let btn of buttons) {
      btn.addEventListener("click", () => {
        if (btn.innerHTML == "Other") {
          for (let btn2 of buttons) {
            btn2.classList.remove("activeBtn");
            btn2.classList.add("itemAnswer");
          }
          for (let img of imgs6Quiz) {
            if (img.id !== "primQz6") {
              img.style.opacity = "0";
            }
          }
          btn.classList.toggle("activeBtn");
        } else {
          btn.classList.toggle("activeBtn");
          // уточняющий вопрос, проявление картинки   -------------------------------------------------------------------------
          if (btn.id == "0") {
            imgs6Quiz[0].style.opacity == "1"
              ? (imgs6Quiz[0].style.opacity = "0")
              : (imgs6Quiz[0].style.opacity = "1");
          } else if (btn.id == "1") {
            imgs6Quiz[1].style.opacity == "1"
              ? (imgs6Quiz[1].style.opacity = "0")
              : (imgs6Quiz[1].style.opacity = "1");
          } else if (btn.id == "2") {
            imgs6Quiz[2].style.opacity == "1"
              ? (imgs6Quiz[2].style.opacity = "0")
              : (imgs6Quiz[2].style.opacity = "1");
          } else if (btn.id == "3") {
            imgs6Quiz[3].style.opacity == "1"
              ? (imgs6Quiz[3].style.opacity = "0")
              : (imgs6Quiz[3].style.opacity = "1");
          } else if (btn.id == "4") {
            imgs6Quiz[4].style.opacity == "1"
              ? (imgs6Quiz[4].style.opacity = "0")
              : (imgs6Quiz[4].style.opacity = "1");
          } else if (btn.id == "5") {
            imgs6Quiz[5].style.opacity == "1"
              ? (imgs6Quiz[5].style.opacity = "0")
              : (imgs6Quiz[5].style.opacity = "1");
          } else if (btn.id == "6") {
            imgs6Quiz[6].style.opacity == "1"
              ? (imgs6Quiz[6].style.opacity = "0")
              : (imgs6Quiz[6].style.opacity = "1");
          }
          // --------------------------------------------------------------------------------------------------------------------
          for (let btn3 of buttons) {
            if (btn3.innerHTML == "Other") {
              btn3.classList.remove("activeBtn");
              btn3.classList.add("itemAnswer");
            }
          }
        }
      });
    }
  } else if (questions[questionIndex].id == 3) {
    nextBtn.style.display = "block";
    ContainerForAnswers.innerHTML =
      "<div class='parentscincolor'><div class='blockcolorParent'><div class='blockcolor'>!!!</div></div><input class='colorscinrange' type='range' min='1' max='100' value='38' id='myRange'><div id='hintQuiz3'>!</div><div id='tooltipQuiz'>Use the slider above to change the color</div></div>";

    const RangeQuizColorSkin = document.querySelector("#myRange");
    const BlockScinColor = document.querySelector(".blockcolor");

    RangeQuizColorSkin.addEventListener("input", inpHandler);
    function inpHandler(e) {
      // console.log(`input: ${e.target.value}`);
      BlockScinColor.style.background = colorsScin[e.target.value];
    }

    const hint = document.querySelector("#hintQuiz3");
    const tooltip = document.querySelector("#tooltipQuiz");
    hint.addEventListener("mouseover", () => {
      tooltip.style.opacity = "1";
      tooltip.style.visibility = "visible";
    });
    hint.addEventListener("mouseout", () => {
      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
    });
  } else if (questions[questionIndex].id == 6) {
    // логика смены картинок ( выбор проблемы )
    nextBtn.style.display = "block";
    const imgs6Quiz = document.querySelectorAll(".quistion6ImgBlock img");
    for (let btn of buttons) {
      btn.addEventListener("click", () => {
        for (let btn of buttons) {
          btn.classList.remove("activeBtn");
          btn.classList.add("itemAnswer");
        }

        imgs6Quiz.forEach((img) => {
          if (img.id !== "primQz6") {
            img.style.opacity = "0";
          }
        });
        if (btn.id == 0) {
          imgs6Quiz[1].style.opacity = "1";
        } else if (btn.id == 1) {
          imgs6Quiz[2].style.opacity = "1";
        } else if (btn.id == 2) {
          imgs6Quiz[3].style.opacity = "1";
        } else if (btn.id == 3) {
          imgs6Quiz[5].style.opacity = "1";
        } else if (btn.id == 4) {
          imgs6Quiz[4].style.opacity = "1";
        } else if (btn.id == 5) {
          imgs6Quiz[0].style.opacity = "1";
        }

        btn.classList.remove("itemAnswer");
        btn.classList.add("activeBtn");
      });
    }
  } else {
    nextBtn.style.display = "none";

    for (let btn of buttons) {
      btn.addEventListener("click", () => {
        for (let btn of buttons) {
          btn.classList.remove("activeBtn");
          btn.classList.add("itemAnswer");
        }
        btn.classList.remove("itemAnswer");
        btn.classList.add("activeBtn");
        checkRadio = btn.id;
        //-----------------------------------
        // активация кнопки дальше

        setTimeout(nextQuestion, 400);

        //-----------------------------------
      });
    }
  }
}

function disabledColorBtnContinue() {
  // свойства заблокированной кнопки
}

///////////////////////showRez////////////////////////////////

function randomMinMax(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

/////////////////Validation
// //Проверка  Email and Number
// const EMAIL_REGEXP =
//   /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const NUMBER_REGEXP = /^\+1[- .]?\(?(?:\d{3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

// function validation() {
//   error = false;
//   let nameForm = document.querySelector("input[name='name']");
//   let emailForm = document.querySelector(".emailFormQuiz");
//   let phoneForm = document.querySelector("input[name='custom_phone']");
//   // let nameForm = document.querySelector(".nameQuiz");
//   // let emailForm = document.querySelector(".emailQuiz");
//   // let phoneForm = document.querySelector(".telQuiz");

//   if (nameForm.value !== "") {
//     nameForm.classList.remove("misstake-class");
//   } else {
//     nameForm.classList.add("misstake-class");
//     console.log("nameForm");
//     error = true;
//   }

//   // if (EMAIL_REGEXP.test(emailForm.value)) {
//   if (emailForm.value !== "") {
//     emailForm.classList.remove("misstake-class");
//   } else {
//     emailForm.classList.add("misstake-class");
//     console.log("emailForm");
//     console.log(emailForm.value);
//     error = true;
//   }

//   if (NUMBER_REGEXP.test(phoneForm.value)) {
//     phoneForm.classList.remove("misstake-class");
//   } else {
//     phoneForm.classList.add("misstake-class");
//     console.log("phoneForm");
//     error = true;
//   }

//   if (!error) {
//     nameForm.classList.remove("misstake-class");
//     phoneForm.classList.remove("misstake-class");
//     emailForm.classList.remove("misstake-class");

//     nameForm.value = "";
//     phoneForm.value = "";
//     emailForm.value = "";

//     return true;
//   } else {
//     return false;
//   }
// }

//--------------------------------------------------------------------------------------------------------------

//Проверка  Email and Number
const NAME_REGEXP = /^[a-zA-Z\s]{2,20}$/;
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const NUMBER_REGEXP = /^\+1[- .]?\(?(?:\d{3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
function isNameValid(name) {
  return NAME_REGEXP.test(name);
}
function isEmailValid(value1) {
  return EMAIL_REGEXP.test(value1);
}
function isNumberValid(value2) {
  return NUMBER_REGEXP.test(value2);
}
function validation() {
  let email = document.querySelector(".emailFormQuiz");
  let phone = document.querySelector("input[name='custom_mobile_phone']");
  let name = document.querySelector("input[name='name']");
  console.log(email.value);
  console.log(phone.value);
  console.log(name.value);
  if (!isNameValid(name.value)) {
    name.classList.add("misstake-class");
    console.log(name.value);
  } else {
    name.classList.remove("misstake-class");
  }
  if (!isNumberValid(phone.value)) {
    phone.classList.add("misstake-class");
    console.log(phone.value);
  } else {
    phone.classList.remove("misstake-class");
  }
  if (!isEmailValid(email.value)) {
    email.classList.add("misstake-class");
    console.log(email.value);
  } else {
    email.classList.remove("misstake-class");
  }
  if (
    isEmailValid(email.value) &&
    isNumberValid(phone.value) &&
    isNameValid(name.value)
  ) {
    console.log("valid - yes");
    name.classList.remove("misstake-class");
    phone.classList.remove("misstake-class");
    email.classList.remove("misstake-class");
    qviz.style.display = "none";
    loader.style.display = "flex";
    localStorage.setItem("resultArrQuestion", JSON.stringify(questions));
    ContainerForEndForm.submit();
    email.value = "";
    phone.value = "";
    name.value = "";
  }
}

////////////////////////Fons change///////////////

function quizStart() {
  const pageWidth = document.documentElement.scrollWidth;
  if (pageWidth < 500 && questionIndex == 0) {
    ContainerForAnswers.classList.remove("quiz-list");
    ContainerForAnswers.classList.add("quiz-listFor1Mb");
  } else {
    ContainerForAnswers.classList.remove("quiz-listFor1Mb");
    ContainerForAnswers.classList.add("quiz-list");
  }

  let open = document.querySelector(".firstPage");
  open.style.display = "none";
  qviz.style.display = "flex";
  qviz.style.flexDirection = "column";
}

let startQuiz = document.querySelector(".start");
startQuiz.addEventListener("click", quizStart);
