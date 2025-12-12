// Enhanced Sample Texts with Progressive Word Count and Complexity
// EASY: 15-20 words, simple sentences
// MEDIUM: 25-30 words, compound sentences
// HARD: 35-40 words, technical terms
// EXPERT: 45-50+ words, academic/technical complexity

const sampleTexts = {
    english: {
        easy: [
            "The quick brown fox jumps over the lazy dog, a classic sentence containing every English alphabet letter for practice.",
            "Typing practice improves both speed and accuracy, essential skills for modern digital communication and efficient work.",
            "Regular exercise benefits physical health and mental wellbeing, contributing to a balanced and productive lifestyle daily.",
            "Reading books expands vocabulary and enhances comprehension, developing critical thinking skills over consistent dedicated practice.",
            "Good nutrition provides energy for daily activities, supporting cognitive function and overall wellness throughout life's demands.",
            "Music influences emotions and memories, creating personal connections through rhythmic patterns and melodic harmonies we enjoy.",
            "Friendship brings joy and support, enriching our lives with shared experiences and meaningful conversations over time.",
            "Nature offers beauty and tranquility, refreshing the mind while providing inspiration for creative pursuits and peaceful reflection.",
            "Learning new skills requires patience and persistence, building competence through repeated practice and gradual improvement.",
            "Positive thinking helps overcome challenges, fostering resilience and optimism during difficult situations life presents us."
        ],
        medium: [
            "JavaScript's versatility enables both front-end web development and server-side programming, creating interactive applications that respond dynamically to user input across various platforms and devices.",
            "Responsive web design principles ensure websites adapt seamlessly to different screen sizes, improving user experience and accessibility on smartphones, tablets, and desktop computers equally.",
            "Sustainable energy solutions like solar and wind power reduce environmental impact while providing renewable alternatives to fossil fuels for long-term ecological balance.",
            "Artificial intelligence algorithms process vast datasets, identifying patterns and making predictions that transform industries through automation and intelligent decision support systems.",
            "Digital literacy has become essential in modern workplaces, requiring proficiency with software tools and understanding of online security practices for professional success.",
            "Effective communication skills involve clear expression, active listening, and appropriate feedback, enhancing collaboration and reducing misunderstandings in team environments.",
            "Time management strategies optimize productivity by prioritizing tasks, minimizing distractions, and allocating resources efficiently throughout the workday for maximum output.",
            "Cultural diversity enriches societies by exposing people to different perspectives, traditions, and values that foster tolerance and global understanding.",
            "Scientific research advances knowledge through systematic experimentation, peer review, and evidence-based conclusions that contribute to technological innovation.",
            "Financial planning involves budgeting, saving, and investing wisely to achieve long-term goals while managing economic uncertainties and market fluctuations."
        ],
        hard: [
            "Quantum computing harnesses quantum mechanical phenomena like superposition and entanglement to perform calculations exponentially faster than classical computers, potentially revolutionizing cryptography and complex simulations.",
            "Blockchain technology creates decentralized, immutable ledgers that enable secure, transparent transactions without intermediaries, forming the foundation for cryptocurrencies and smart contract applications across industries.",
            "Machine learning algorithms employ neural networks to analyze unstructured data, recognize complex patterns, and make autonomous decisions that continuously improve through iterative training processes and feedback loops.",
            "Neuroplasticity demonstrates the brain's remarkable capacity to reorganize synaptic connections in response to learning, experience, or injury, enabling recovery and adaptation throughout human development.",
            "Epigenetic modifications influence gene expression without altering DNA sequences, providing mechanisms for environmental factors to affect cellular function and potentially transmit traits across generations.",
            "Cryptographic protocols establish secure communication channels by encrypting sensitive information, implementing authentication mechanisms, and ensuring data integrity during transmission across vulnerable networks.",
            "Sustainable architecture integrates passive solar design, renewable materials, and energy-efficient systems to minimize environmental impact while enhancing occupant comfort and building longevity.",
            "Comparative literary analysis examines thematic connections, narrative structures, and cultural contexts across works from different historical periods, languages, and geographical regions.",
            "Phenomenological philosophy investigates structures of consciousness, intentionality, and lived experience through rigorous descriptive methods that bracket presuppositions about objective reality.",
            "Theoretical physics explores fundamental laws governing the universe, from quantum field theories describing subatomic particles to cosmological models explaining large-scale structure formation."
        ],
        expert: [
            "Poststructuralist deconstruction interrogates binary oppositions inherent to Western metaphysical thought, revealing how textual hierarchies privilege certain meanings while marginalizing alternatives through intricate rhetorical strategies and conceptual frameworks that challenge logocentric assumptions about language and representation.",
            "Quantum field theory reconciles quantum mechanics with special relativity by representing particles as excitations in underlying fields, mathematically describing fundamental interactions through gauge symmetries and renormalization procedures that account for virtual particle contributions to observable phenomena.",
            "Neurophilosophical inquiry bridges cognitive neuroscience with philosophical questions about consciousness, examining how neural correlates might explain subjective experience while addressing hard problems of qualia and the explanatory gap between physical processes and phenomenal awareness.",
            "Transcendental idealism posits that objects of experience conform to our cognitive faculties' a priori structures rather than existing independently, fundamentally distinguishing between phenomena as they appear and noumena as things-in-themselves beyond possible cognition.",
            "Computational complexity theory classifies problems according to inherent difficulty using formal models like Turing machines, establishing complexity hierarchies that distinguish between tractable polynomial-time solutions and intractable exponential-time requirements for optimal algorithm design.",
            "Cosmological inflation theory proposes exponential expansion of the early universe driven by scalar field dynamics, resolving horizon and flatness problems while generating primordial density fluctuations that evolve into large-scale structure through gravitational instability mechanisms.",
            "Hermeneutical phenomenology examines interpretive structures mediating understanding of lived experience and textual meaning, analyzing how pre-understandings and historical horizons shape interpretation within hermeneutic circles of part-whole relationships.",
            "Epistemological frameworks underpin scientific methodology through rigorous empirical validation protocols and theoretical substantiation requirements, establishing demarcation criteria distinguishing scientific claims from pseudoscientific assertions based on falsifiability and explanatory power.",
            "Phenotypic plasticity enables organisms to develop alternative morphological, physiological, or behavioral characteristics in response to environmental cues, representing adaptive responses that optimize fitness across variable ecological conditions without genetic alteration.",
            "Metaphilosophical analysis scrutinizes philosophical inquiry's nature, aims, and methods as second-order reflection, examining presuppositions about truth, justification, and conceptual analysis that underlie first-order philosophical investigations across diverse subdisciplines."
        ]
    },
    hindi: {
        easy: [
            "टाइपिंग सीखना आधुनिक समय की आवश्यकता है जो कार्य क्षमता और उत्पादकता में सुधार लाता है नियमित अभ्यास से।",
            "स्वस्थ आहार और व्यायाम दिनचर्या शारीरिक स्वास्थ्य और मानसिक संतुलन के लिए महत्वपूर्ण हैं सकारात्मक जीवनशैली में।",
            "पुस्तक पठन ज्ञान विस्तार और भाषा कौशल विकास में सहायक होता है सीखने की निरंतर प्रक्रिया के माध्यम से।",
            "प्रकृति सुंदरता और शांति प्रदान करती है मन को तरोताजा करने के लिए रचनात्मक प्रेरणा और विचार के साथ।",
            "मित्रता जीवन को सुखद बनाती है साझा अनुभवों और भावनात्मक समर्थन के माध्यम से कठिन समय में।",
            "संगीत भावनाओं को प्रभावित करता है यादगार क्षणों का सृजन करता है सांस्कृतिक अभिव्यक्ति और मनोरंजन के रूप में।",
            "नए कौशल सीखना धैर्य मांगता है क्रमिक सुधार और लगातार प्रयास के माध्यम से दक्षता निर्माण में।",
            "सकारात्मक सोच चुनौतियों का सामना करने में मदद करती है लचीलापन और आशावाद विकसित करती है व्यक्तिगत विकास के लिए।",
            "तकनीकी ज्ञान डिजिटल युग में आवश्यक है कंप्यूटर अनुप्रयोगों और ऑनलाइन संचार में दक्षता के लिए।",
            "समय प्रबंधन कार्यक्षमता बढ़ाता है प्राथमिकता निर्धारण और विकर्षण कमी के माध्यम से उत्पादक दिनचर्या के लिए।"
        ],
        medium: [
            "कृत्रिम बुद्धिमत्ता एल्गोरिदम बड़े डेटासेट का विश्लेषण करते हैं पैटर्न पहचान और भविष्यवाणियां करते हैं उद्योगों को परिवर्तित करने वाले स्वचालन और निर्णय समर्थन प्रणालियों के माध्यम से।",
            "साइबर सुरक्षा प्रोटोकॉल संवेदनशील जानकारी की सुरक्षा सुनिश्चित करते हैं एन्क्रिप्शन तकनीकों और प्रमाणीकरण विधियों का उपयोग करके डिजिटल संचार चैनलों की अखंडता बनाए रखने के लिए।",
            "नवीकरणीय ऊर्जा स्रोत जैसे सौर और पवन ऊर्जा पर्यावरणीय प्रभाव कम करते हैं जीवाश्म ईंधन के विकल्प प्रदान करते हैं दीर्घकालिक पारिस्थितिक संतुलन और सतत विकास के लिए।",
            "डिजिटल साक्षरता आधुनिक कार्यस्थलों में अनिवार्य हो गई है सॉफ्टवेयर उपकरणों में दक्षता और ऑनलाइन सुरक्षा प्रथाओं की समझ की आवश्यकता है पेशेवर सफलता के लिए।",
            "प्रभावी संचार कौशल स्पष्ट अभिव्यक्ति और सक्रिय श्रवण शामिल करते हैं उचित प्रतिक्रिया प्रदान करते हैं सहयोग बढ़ाने और टीम वातावरण में गलतफहमी कम करने के लिए।",
            "सांस्कृतिक विविधता समाजों को समृद्ध करती है विभिन्न परिप्रेक्ष्यों और परंपराओं से लोगों को अवगत कराकर सहिष्णुता और वैश्विक समझ को बढ़ावा देने वाले मूल्य।",
            "वैज्ञानिक अनुसंधान व्यवस्थित प्रयोग और सहकर्मी समीक्षा के माध्यम से ज्ञान को आगे बढ़ाता है प्रमाण-आधारित निष्कर्ष प्रदान करता है तकनीकी नवाचार में योगदान देने वाले।",
            "आर्थिक योजना बजट बनाने और निवेश निर्णयों को शामिल करती है दीर्घकालिक लक्ष्यों को प्राप्त करने के लिए बाजार अस्थिरताओं और आर्थिक अनिश्चितताओं का प्रबंधन करते हुए।",
            "शहरीकरण योजना स्मार्ट शहर विकास और अवसंरचना प्रबंधन की आवश्यकता रखती है जनसंख्या वृद्धि और पर्यावरणीय स्थिरता के बीच संतुलन बनाए रखने के लिए।",
            "शैक्षणिक नवाचार पाठ्यक्रम डिजाइन और शिक्षण विधियों को बदलता है डिजिटल उपकरणों और अनुभवात्मक शिक्षण के माध्यम से छात्र सग्रहता और सीखने के परिणामों को बढ़ाने के लिए।"
        ],
        hard: [
            "क्वांटम कंप्यूटिंग क्वांटम यांत्रिक घटनाओं जैसे सुपरपोजिशन और एंटेंगलमेंट का उपयोग करती है शास्त्रीय कंप्यूटरों की तुलना में तेजी से गणना करने के लिए क्रिप्टोग्राफी और जटिल सिमुलेशन में क्रांतिकारी परिवर्तन लाने की क्षमता के साथ।",
            "ब्लॉकचेन प्रौद्योगिकी विकेंद्रीकृत अपरिवर्तनीय लेजर बनाती है जो बिचौलियों के बिना सुरक्षित पारदर्शी लेनदेन सक्षम करती है क्रिप्टोकरेंसी और स्मार्ट कॉन्ट्रैक्ट अनुप्रयोगों की नींव रखती है विभिन्न उद्योगों में।",
            "न्यूरोप्लास्टिसिटी मस्तिष्क की उल्लेखनीय क्षमता प्रदर्शित करती है सीखने अनुभव या चोट के प्रतिक्रिया में सिनैप्टिक कनेक्शनों को पुनर्गठित करने की मानव विकास के दौरान सुधार और अनुकूलन सक्षम करती है।",
            "एपिजेनेटिक संशोधन डीएनए अनुक्रमों को बदले बिना जीन अभिव्यक्ति को प्रभावित करते हैं पर्यावरणीय कारकों के लिए तंत्र प्रदान करते हैं कोशिकीय कार्य को प्रभावित करने और संभावित रूप से पीढ़ियों में लक्षण संचारित करने के लिए।",
            "तुलनात्मक साहित्यिक विश्लेषण विषयगत संबंधों और कथा संरचनाओं की जांच करता है विभिन्न ऐतिहासिक अवधियों और भौगोलिक क्षेत्रों से साहित्यिक कृतियों में सांस्कृतिक संदर्भों की तुलना करता है।",
            "दार्शनिक घटनाविज्ञान चेतना की संरचनाओं की जांच करता है इरादतनता और जीवित अनुभव का अध्ययन करता है कठोर वर्णनात्मक विधियों के माध्यम से जो वस्तुनिष्ठ वास्तविकता के बारे में पूर्वधारणाओं को कोष्ठक में रखते हैं।",
            "सैद्धांतिक भौतिकी ब्रह्मांड को नियंत्रित करने वाले मौलिक नियमों की खोज करती है क्वांटम क्षेत्र सिद्धांतों से लेकर ब्रह्मांडीय मॉडलों तक जो बड़े पैमाने पर संरचना गठन की व्याख्या करते हैं।",
            "सतत वास्तुकला निष्क्रिय सौर डिजाइन और नवीकरणीय सामग्रियों को एकीकृत करती है ऊर्जा-कुशल प्रणालियों के साथ पर्यावरणीय प्रभाव को कम करते हुए निवासी आराम और भवन दीर्घायु बढ़ाने के लिए।",
            "मशीन लर्निंग एल्गोरिदम तंत्रिका नेटवर्क का उपयोग करते हैं असंरचित डेटा का विश्लेषण करने के लिए जटिल पैटर्न पहचानते हैं और स्वायत्त निर्णय लेते हैं जो पुनरावृत्त प्रशिक्षण प्रक्रियाओं के माध्यम से लगातार सुधारते हैं।",
            "साइबरनेटिक सिद्धांत जीवित प्रणालियों और कृत्रिम प्रणालियों के बीच संचार तंत्र का अध्ययन करते हैं प्रतिक्रिया लूप और नियंत्रण तंत्र का विश्लेषण करते हैं स्व-विनियमन और अनुकूली व्यवहार को समझने के लिए।"
        ],
        expert: [
            "उत्तरसंरचनावादी विखंडन पश्चिमी तत्वमीमांसीय चिंतन में निहित द्विआधारी विरोधों की गहन पड़ताल करता है प्रकट करता है कि कैसे पाठ्य पदानुक्रम निश्चित अर्थों को विशेषाधिकार देते हैं जबकि वैकल्पिक अर्थों को सीमांत करते हैं जटिल अलंकारिक रणनीतियों और वैचारिक रूपरेखाओं के माध्यम से जो भाषा और प्रतिनिधित्व के बारे में लोगोकेंद्रित धारणाओं को चुनौती देते हैं।",
            "क्वांटम क्षेत्र सिद्धांत विशेष सापेक्षता के साथ क्वांटम यांत्रिकी का सामंजस्य स्थापित करता है कणों को अंतर्निहित क्षेत्रों में उत्तेजनाओं के रूप में प्रस्तुत करके गेज समरूपताओं और पुनर्सामान्यीकरण प्रक्रियाओं के माध्यम से मौलिक अंतःक्रियाओं का गणितीय वर्णन करता है जो अवलोकनीय घटनाओं में आभासी कण योगदानों के लिए खाते हैं।",
            "न्यूरोफिलॉसफिकल जांच संज्ञानात्मक तंत्रिका विज्ञान को चेतना के बारे में दार्शनिक प्रश्नों से जोड़ती है जांच करती है कि कैसे तंत्रिका सहसंबंध व्यक्तिपरक अनुभव की व्याख्या कर सकते हैं जबकि गुणात्मक अनुभवों की कठिन समस्याओं और भौतिक प्रक्रियाओं एवं प्रघटनात्मक जागरूकता के बीच व्याख्यात्मक अंतर को संबोधित करते हैं।",
            "ट्रांसेंडेंटल आदर्शवाद यह दावा करता है कि अनुभव की वस्तुएं हमारी संज्ञानात्मक क्षमताओं की प्राथमिक संरचनाओं के अनुरूप होती हैं बजाय स्वतंत्र रूप से अस्तित्व में रहने के मौलिक रूप से प्रघटनाओं के बीच अंतर करते हुए जैसे वे प्रकट होते हैं और नौमेना के रूप में चीजें-स्वयं में संभावित अनुभूति से परे।",
            "गणनात्मक जटिलता सिद्धांत ट्यूरिंग मशीनों जैसे औपचारिक मॉडलों का उपयोग करके समस्याओं को उनकी अंतर्निहित कठिनाई के अनुसार वर्गीकृत करता है जटिलता पदानुक्रम स्थापित करता है जो सुगम बहुपद-समय समाधानों और इष्टतम एल्गोरिदम डिजाइन के लिए अंतर्निहित घातीय-समय आवश्यकताओं के बीच अंतर करता है।",
            "ब्रह्मांडीय मुद्रास्फीति सिद्धांत स्केलर क्षेत्र गतिकी द्वारा संचालित प्रारंभिक ब्रह्मांड के तीव्र विस्तार का प्रस्ताव रखता है क्षितिज और समतलता समस्याओं को हल करते हुए प्राथमिक घनत्व उतार-चढ़ाव उत्पन्न करता है जो गुरुत्वाकर्षण अस्थिरता तंत्रों के माध्यम से बड़े पैमाने पर संरचना में विकसित होते हैं।",
            "व्याख्यात्मक घटनाविज्ञान जीवित अनुभव और पाठ्य अर्थ की समझ को मध्यस्थता करने वाली व्याख्यात्मक संरचनाओं की जांच करता है विश्लेषण करता है कि कैसे पूर्व-समझ और ऐतिहासिक क्षितिज भाग-संपूर्ण संबंधों के व्याख्यात्मक चक्रों के भीतर व्याख्या को आकार देते हैं।",
            "ज्ञानमीमांसीय रूपरेखाएं कठोर अनुभवजन्य सत्यापन प्रोटोकॉल और सैद्धांतिक प्रमाणीकरण आवश्यकताओं के माध्यम से वैज्ञानिक पद्धति को आधार प्रदान करती हैं विज्ञान और छद्म विज्ञान के बीच विभेदन मानदंड स्थापित करती हैं असत्यापनीयता और व्याख्यात्मक शक्ति के आधार पर वैज्ञानिक दावों को अलग करते हुए।",
            "फेनोटाइपिक प्लास्टिसिटी जीवों को पर्यावरणीय संकेतों के प्रतिक्रिया में वैकल्पिक आकृति विज्ञानिक या व्यवहारिक विशेषताओं को विकसित करने में सक्षम बनाती है अनुकूली प्रतिक्रियाओं का प्रतिनिधित्व करती है जो आनुवंशिक परिवर्तन के बिना परिवर्तनशील पारिस्थितिक परिस्थितियों में फिटनेस को अनुकूलित करती हैं।",
            "मेटाफिलॉसफिकल विश्लेषण द्वितीय-क्रम चिंतन के रूप में दार्शनिक जांच की प्रकृति उद्देश्यों और विधियों की गहन समीक्षा करता है सत्य औचित्य और वैचारिक विश्लेषण के बारे में पूर्वधारणाओं की जांच करता है जो विविध उपविषयों में प्रथम-क्रम दार्शनिक अन्वेषणों को आधार प्रदान करते हैं।"
        ]
    },
    spanish: {
        easy: [
            "El rápido zorro marrón salta sobre el perro perezoso en esta oración clásica que contiene cada letra del alfabeto inglés.",
            "La práctica de mecanografía mejora velocidad y precisión, habilidades esenciales para comunicación digital moderna y trabajo eficiente.",
            "Ejercicio regular beneficia salud física y bienestar mental, contribuyendo a un estilo de vida equilibrado y productivo diariamente.",
            "Leer libros expande vocabulario y mejora comprensión, desarrollando habilidades de pensamiento crítico con práctica consistente y dedicada.",
            "Buena nutrición proporciona energía para actividades diarias, apoyando función cognitiva y bienestar general durante las demandas de la vida.",
            "La música influye emociones y recuerdos, creando conexiones personales a través de patrones rítmicos y armonías melódicas que disfrutamos.",
            "La amistad trae alegría y apoyo, enriqueciendo nuestras vidas con experiencias compartidas y conversaciones significativas con el tiempo.",
            "La naturaleza ofrece belleza y tranquilidad, refrescando la mente mientras proporciona inspiración para actividades creativas y reflexión pacífica.",
            "Aprender nuevas habilidades requiere paciencia y persistencia, construyendo competencia mediante práctica repetida y mejora gradual continua.",
            "Pensamiento positivo ayuda superar desafíos, fomentando resiliencia y optimismo durante situaciones difíciles que la vida nos presenta."
        ],
        medium: [
            "La versatilidad de JavaScript permite tanto desarrollo web front-end como programación del lado del servidor, creando aplicaciones interactivas que responden dinámicamente a la entrada del usuario en varias plataformas y dispositivos diferentes.",
            "Los principios de diseño web responsive aseguran que los sitios web se adapten sin problemas a diferentes tamaños de pantalla, mejorando la experiencia del usuario y accesibilidad en teléfonos inteligentes, tabletas y computadoras de escritorio por igual.",
            "Las soluciones de energía sostenible como la solar y eólica reducen el impacto ambiental mientras proporcionan alternativas renovables a los combustibles fósiles para el equilibrio ecológico a largo plazo.",
            "Los algoritmos de inteligencia artificial procesan grandes conjuntos de datos, identificando patrones y haciendo predicciones que transforman industrias mediante automatización y sistemas de apoyo a decisiones inteligentes.",
            "La alfabetización digital se ha vuelto esencial en lugares de trabajo modernos, requiriendo competencia con herramientas de software y comprensión de prácticas de seguridad en línea para el éxito profesional.",
            "Las habilidades de comunicación efectiva involucran expresión clara, escucha activa y retroalimentación apropiada, mejorando la colaboración y reduciendo malentendidos en entornos de equipo diversos.",
            "Las estrategias de gestión del tiempo optimizan la productividad priorizando tareas, minimizando distracciones y asignando recursos eficientemente durante la jornada laboral para máxima producción.",
            "La diversidad cultural enriquece sociedades exponiendo a las personas a diferentes perspectivas, tradiciones y valores que fomentan la tolerancia y comprensión global mutua.",
            "La investigación científica avanza el conocimiento mediante experimentación sistemática, revisión por pares y conclusiones basadas en evidencia que contribuyen a la innovación tecnológica continua.",
            "La planificación financiera involucra presupuestación, ahorro e inversión inteligente para alcanzar metas a largo plazo mientras se gestionan incertidumbres económicas y fluctuaciones del mercado."
        ],
        hard: [
            "La computación cuántica aprovecha fenómenos de mecánica cuántica como superposición y entrelazamiento para realizar cálculos exponencialmente más rápidos que las computadoras clásicas, revolucionando potencialmente la criptografía y simulaciones complejas.",
            "La tecnología blockchain crea registros descentralizados e inmutables que permiten transacciones seguras y transparentes sin intermediarios, formando la base para criptomonedas y aplicaciones de contratos inteligentes en industrias.",
            "Los algoritmos de aprendizaje automático emplean redes neuronales para analizar datos no estructurados, reconocer patrones complejos y tomar decisiones autónomas que mejoran continuamente mediante procesos de entrenamiento iterativos.",
            "La neuroplasticidad demuestra la capacidad notable del cerebro para reorganizar conexiones sinápticas en respuesta al aprendizaje, experiencia o lesión, permitiendo recuperación y adaptación durante el desarrollo humano.",
            "Las modificaciones epigenéticas influyen en la expresión génica sin alterar secuencias de ADN, proporcionando mecanismos para que factores ambientales afecten la función celular y transmitan potencialmente rasgos entre generaciones.",
            "Los protocolos criptográficos establecen canales de comunicación seguros cifrando información sensible, implementando mecanismos de autenticación y garantizando integridad de datos durante la transmisión a través de redes vulnerables.",
            "La arquitectura sostenible integra diseño solar pasivo, materiales renovables y sistemas energéticamente eficientes para minimizar el impacto ambiental mientras mejora el confort de ocupantes y longevidad del edificio.",
            "El análisis literario comparativo examina conexiones temáticas, estructuras narrativas y contextos culturales a través de obras de diferentes períodos históricos, idiomas y regiones geográficas diversas.",
            "La filosofía fenomenológica investiga estructuras de conciencia, intencionalidad y experiencia vivida mediante métodos descriptivos rigurosos que suspenden presuposiciones sobre la realidad objetiva.",
            "La física teórica explora leyes fundamentales que gobiernan el universo, desde teorías de campo cuántico que describen partículas subatómicas hasta modelos cosmológicos que explican formación de estructuras a gran escala."
        ],
        expert: [
            "La deconstrucción posestructuralista interroga las oposiciones binarias inherentes al pensamiento metafísico occidental, revelando cómo las jerarquías textuales privilegian ciertos significados mientras marginan alternativas mediante intrincadas estrategias retóricas y marcos conceptuales que desafían supuestos logocéntricos sobre lenguaje y representación.",
            "La teoría cuántica de campos reconcilia la mecánica cuántica con la relatividad especial representando partículas como excitaciones en campos subyacentes, describiendo matemáticamente interacciones fundamentales mediante simetrías gauge y procedimientos de renormalización que explican contribuciones de partículas virtuales a fenómenos observables.",
            "La investigación neurofilosófica tiende puentes entre la neurociencia cognitiva y cuestiones filosóficas sobre la conciencia, examinando cómo correlatos neurales podrían explicar la experiencia subjetiva mientras aborda problemas duros de cualia y la brecha explicativa entre procesos físicos y conciencia fenoménica.",
            "El idealismo trascendental postula que los objetos de experiencia se conforman a estructuras a priori de nuestras facultades cognitivas en lugar de existir independientemente, distinguiendo fundamentalmente entre fenómenos como aparecen y noúmenos como cosas-en-sí más allá de posible cognición.",
            "La teoría de complejidad computacional clasifica problemas según dificultad inherente usando modelos formales como máquinas de Turing, estableciendo jerarquías de complejidad que distinguen entre soluciones tratables en tiempo polinomial y requerimientos intratables en tiempo exponencial para diseño óptimo de algoritmos.",
            "La teoría cosmológica de la inflación propone expansión exponencial del universo temprano impulsada por dinámica de campos escalares, resolviendo problemas de horizonte y planitud mientras genera fluctuaciones primordiales de densidad que evolucionan hacia estructura a gran escala mediante mecanismos de inestabilidad gravitacional.",
            "La fenomenología hermenéutica examina estructuras interpretativas que median la comprensión de experiencia vivida y significado textual, analizando cómo precomprensiones y horizontes históricos dan forma a la interpretación dentro de círculos hermenéuticos de relaciones parte-todo.",
            "Los marcos epistemológicos sustentan la metodología científica mediante protocolos rigurosos de validación empírica y requisitos de sustanciación teórica, estableciendo criterios de demarcación que distinguen afirmaciones científicas de aserciones pseudocientíficas basadas en falsabilidad y poder explicativo.",
            "La plasticidad fenotípica permite a organismos desarrollar características morfológicas, fisiológicas o conductuales alternativas en respuesta a señales ambientales, representando respuestas adaptativas que optimizan aptitud a través de condiciones ecológicas variables sin alteración genética.",
            "El análisis metafilosófico escrutiniza la naturaleza, objetivos y métodos de la investigación filosófica como reflexión de segundo orden, examinando presuposiciones sobre verdad, justificación y análisis conceptual que subyacen a investigaciones filosóficas de primer orden a través de diversas subdisciplinas."
        ]
    },
    french: {
        easy: [
            "Le rapide renard brun saute par-dessus le chien paresseux dans cette phrase classique contenant chaque lettre de l'alphabet anglais.",
            "La pratique de la dactylographie améliore la vitesse et la précision, compétences essentielles pour la communication numérique moderne et le travail efficace.",
            "L'exercice régulier bénéficie à la santé physique et au bien-être mental, contribuant à un style de vie équilibré et productif quotidiennement.",
            "Lire des livres développe le vocabulaire et améliore la compréhension, développant les compétences de pensée critique avec une pratique constante et dédiée.",
            "Une bonne nutrition fournit de l'énergie pour les activités quotidiennes, soutenant la fonction cognitive et le bien-être général pendant les exigences de la vie.",
            "La musique influence les émotions et les souvenirs, créant des connexions personnelles à travers des modèles rythmiques et des harmonies mélodiques que nous apprécions.",
            "L'amitié apporte de la joie et du soutien, enrichissant nos vies avec des expériences partagées et des conversations significatives au fil du temps.",
            "La nature offre beauté et tranquillité, rafraîchissant l'esprit tout en fournissant de l'inspiration pour des activités créatives et une réflexion paisible.",
            "Apprendre de nouvelles compétences demande de la patience et de la persévérance, construisant la compétence par une pratique répétée et une amélioration graduelle.",
            "La pensée positive aide à surmonter les défis, favorisant la résilience et l'optimisme pendant les situations difficiles que la vie nous présente."
        ],
        medium: [
            "La polyvalence de JavaScript permet à la fois le développement web front-end et la programmation côté serveur, créant des applications interactives qui répondent dynamiquement aux entrées utilisateur sur diverses plates-formes et appareils différents.",
            "Les principes de conception web réactive assurent que les sites web s'adaptent harmonieusement à différentes tailles d'écran, améliorant l'expérience utilisateur et l'accessibilité sur smartphones, tablettes et ordinateurs de bureau également.",
            "Les solutions d'énergie durable comme le solaire et l'éolien réduisent l'impact environnemental tout en fournissant des alternatives renouvelables aux combustibles fossiles pour l'équilibre écologique à long terme.",
            "Les algorithmes d'intelligence artificielle traitent de vastes ensembles de données, identifiant des motifs et faisant des prédictions qui transforment les industries par l'automatisation et les systèmes d'aide à la décision intelligents.",
            "La littératie numérique est devenue essentielle sur les lieux de travail modernes, nécessitant la maîtrise des outils logiciels et la compréhension des pratiques de sécurité en ligne pour le succès professionnel.",
            "Les compétences de communication efficace impliquent une expression claire, une écoute active et des retours appropriés, améliorant la collaboration et réduisant les malentendus dans des environnements d'équipe diversifiés.",
            "Les stratégies de gestion du temps optimisent la productivité en priorisant les tâches, en minimisant les distractions et en allouant efficacement les ressources pendant la journée de travail pour un rendement maximal.",
            "La diversité culturelle enrichit les sociétés en exposant les gens à différentes perspectives, traditions et valeurs qui favorisent la tolérance et la compréhension mondiale mutuelle.",
            "La recherche scientifique fait progresser les connaissances par l'expérimentation systématique, l'examen par les pairs et les conclusions fondées sur des preuves qui contribuent à l'innovation technologique continue.",
            "La planification financière implique l'établissement de budgets, l'épargne et l'investissement judicieux pour atteindre des objectifs à long terme tout en gérant les incertitudes économiques et les fluctuations du marché."
        ],
        hard: [
            "L'informatique quantique exploite des phénomènes de mécanique quantique comme la superposition et l'intrication pour effectuer des calculs exponentiellement plus rapides que les ordinateurs classiques, révolutionnant potentiellement la cryptographie et les simulations complexes.",
            "La technologie blockchain crée des registres décentralisés et immuables qui permettent des transactions sécurisées et transparentes sans intermédiaires, formant la base des cryptomonnaies et des applications de contrats intelligents à travers les industries.",
            "Les algorithmes d'apprentissage automatique emploient des réseaux neuronaux pour analyser des données non structurées, reconnaître des motifs complexes et prendre des décisions autonomes qui s'améliorent continuellement par des processus d'entraînement itératifs.",
            "La neuroplasticité démontre la capacité remarquable du cerveau à réorganiser les connexions synaptiques en réponse à l'apprentissage, l'expérience ou la lésion, permettant la récupération et l'adaptation pendant le développement humain.",
            "Les modifications épigénétiques influencent l'expression génique sans altérer les séquences d'ADN, fournissant des mécanismes pour que les facteurs environnementaux affectent la fonction cellulaire et transmettent potentiellement des traits entre générations.",
            "Les protocoles cryptographiques établissent des canaux de communication sécurisés en chiffrant des informations sensibles, implémentant des mécanismes d'authentification et garantissant l'intégrité des données pendant la transmission à travers des réseaux vulnérables.",
            "L'architecture durable intègre la conception solaire passive, les matériaux renouvelables et les systèmes énergétiquement efficaces pour minimiser l'impact environnemental tout en améliorant le confort des occupants et la longévité du bâtiment.",
            "L'analyse littéraire comparative examine les connexions thématiques, les structures narratives et les contextes culturels à travers des œuvres de différentes périodes historiques, langues et régions géographiques diverses.",
            "La philosophie phénoménologique enquête sur les structures de la conscience, l'intentionnalité et l'expérience vécue par des méthodes descriptives rigoureuses qui mettent entre parenthèses les présuppositions concernant la réalité objective.",
            "La physique théorique explore les lois fondamentales qui gouvernent l'univers, des théories des champs quantiques décrivant les particules subatomiques aux modèles cosmologiques expliquant la formation des structures à grande échelle."
        ],
        expert: [
            "La déconstruction poststructuraliste interroge les oppositions binaires inhérentes à la pensée métaphysique occidentale, révélant comment les hiérarchies textuelles privilégient certaines significations tout en marginalisant des alternatives par des stratégies rhétoriques complexes et des cadres conceptuels qui défient les présupposés logocentriques concernant le langage et la représentation.",
            "La théorie quantique des champs réconcilie la mécanique quantique avec la relativité restreinte en représentant les particules comme des excitations dans des champs sous-jacents, décrivant mathématiquement les interactions fondamentales par des symétries de jauge et des procédures de renormalisation qui expliquent les contributions des particules virtuelles aux phénomènes observables.",
            "L'enquête neurophilosophique établit des ponts entre les neurosciences cognitives et les questions philosophiques sur la conscience, examinant comment les corrélats neuraux pourraient expliquer l'expérience subjective tout en abordant les problèmes difficiles des qualia et l'écart explicatif entre les processus physiques et la conscience phénoménale.",
            "L'idéalisme transcendantal postule que les objets d'expérience se conforment aux structures a priori de nos facultés cognitives plutôt que d'exister indépendamment, distinguant fondamentalement entre les phénomènes tels qu'ils apparaissent et les noumènes comme choses-en-soi au-delà de la cognition possible.",
            "La théorie de la complexité computationnelle classe les problèmes selon leur difficulté inhérente en utilisant des modèles formels comme les machines de Turing, établissant des hiérarchies de complexité qui distinguent entre les solutions traitables en temps polynomial et les exigences intraitable en temps exponentiel pour la conception optimale d'algorithmes.",
            "La théorie cosmologique de l'inflation propose l'expansion exponentielle de l'univers primitif entraînée par la dynamique des champs scalaires, résolvant les problèmes d'horizon et de platitude tout en générant des fluctuations primordiales de densité qui évoluent vers une structure à grande échelle par des mécanismes d'instabilité gravitationnelle.",
            "La phénoménologie herméneutique examine les structures interprétatives qui médiatisent la compréhension de l'expérience vécue et du sens textuel, analysant comment les précompréhensions et les horizons historiques façonnent l'interprétation dans des cercles herméneutiques de relations partie-tout.",
            "Les cadres épistémologiques sous-tendent la méthodologie scientifique par des protocoles rigoureux de validation empirique et des exigences de substantiation théorique, établissant des critères de démarcation qui distinguent les affirmations scientifiques des assertions pseudoscientifiques basées sur la falsifiabilité et le pouvoir explicatif.",
            "La plasticité phénotypique permet aux organismes de développer des caractéristiques morphologiques, physiologiques ou comportementales alternatives en réponse à des signaux environnementaux, représentant des réponses adaptatives qui optimisent l'aptitude à travers des conditions écologiques variables sans altération génétique.",
            "L'analyse métaphilosophique scrute la nature, les objectifs et les méthodes de la recherche philosophique comme réflexion de second ordre, examinant les présuppositions concernant la vérité, la justification et l'analyse conceptuelle qui sous-tendent les investigations philosophiques de premier ordre à travers diverses sous-disciplines."
        ]
    },
    german: {
        easy: [
            "Der schnelle braune Fuchs springt über den faulen Hund in diesem klassischen Satz, der jeden Buchstaben des englischen Alphabets enthält.",
            "Tipppraxis verbessert Geschwindigkeit und Genauigkeit, wesentliche Fähigkeiten für moderne digitale Kommunikation und effiziente Arbeit täglich.",
            "Regelmäßige Bewegung fördert körperliche Gesundheit und mentales Wohlbefinden, zu einem ausgewogenen und produktiven Lebensstil beitragend.",
            "Bücherlesen erweitert den Wortschatz und verbessert das Verständnis, kritische Denkfähigkeiten mit konsequenter und engagierter Praxis entwickelnd.",
            "Gute Ernährung liefert Energie für tägliche Aktivitäten, kognitive Funktion und allgemeines Wohlbefinden während der Anforderungen des Lebens unterstützend.",
            "Musik beeinflusst Emotionen und Erinnerungen, persönliche Verbindungen durch rhythmische Muster und melodische Harmonien schaffend, die wir genießen.",
            "Freundschaft bringt Freude und Unterstützung, unser Leben mit geteilten Erfahrungen und bedeutungsvollen Gesprächen im Laufe der Zeit bereichernd.",
            "Natur bietet Schönheit und Ruhe, den Geist erfrischend während sie Inspiration für kreative Aktivitäten und friedliche Reflexion bereitstellt.",
            "Neue Fähigkeiten lernen erfordert Geduld und Ausdauer, Kompetenz durch wiederholte Praxis und allmähliche Verbesserung aufbauend.",
            "Positives Denken hilft Herausforderungen zu überwinden, Resilienz und Optimismus während schwieriger Situationen fördernd, die das Leben präsentiert."
        ],
        medium: [
            "Die Vielseitigkeit von JavaScript ermöglicht sowohl Front-End-Webentwicklung als auch serverseitige Programmierung, interaktive Anwendungen schaffend, die dynamisch auf Benutzereingaben über verschiedene Plattformen und Geräte reagieren.",
            "Responsive Webdesign-Prinzipien stellen sicher, dass Websites sich nahtlos an verschiedene Bildschirmgrößen anpassen, Benutzererfahrung und Zugänglichkeit auf Smartphones, Tablets und Desktop-Computern gleichermaßen verbessernd.",
            "Nachhaltige Energielösungen wie Solar- und Windkraft reduzieren Umweltauswirkungen während sie erneuerbare Alternativen zu fossilen Brennstoffen für langfristiges ökologisches Gleichgewicht bereitstellen.",
            "Künstliche-Intelligenz-Algorithmen verarbeiten große Datensätze, Muster identifizierend und Vorhersagen treffend, die Industrien durch Automatisierung und intelligente Entscheidungsunterstützungssysteme transformieren.",
            "Digitale Kompetenz ist in modernen Arbeitsplätzen wesentlich geworden, erfordert Kompetenz mit Softwaretools und Verständnis von Online-Sicherheitspraktiken für beruflichen Erfolg.",
            "Effektive Kommunikationsfähigkeiten beinhalten klaren Ausdruck, aktives Zuhören und angemessenes Feedback, Zusammenarbeit verbessernd und Missverständnisse in Teamumgebungen reduzierend.",
            "Zeitmanagementstrategien optimieren Produktivität durch Priorisierung von Aufgaben, Minimierung von Ablenkungen und effiziente Zuteilung von Ressourcen während des Arbeitstages für maximale Leistung.",
            "Kulturelle Vielfalt bereichert Gesellschaften, indem sie Menschen verschiedenen Perspektiven, Traditionen und Werten aussetzt, die Toleranz und globales Verständnis gegenseitig fördern.",
            "Wissenschaftliche Forschung fördert Wissen durch systematische Experimentation, Peer-Review und evidenzbasierte Schlussfolgerungen, die zu technologischer Innovation kontinuierlich beitragen.",
            "Finanzplanung beinhaltet Budgetierung, Sparen und kluges Investieren, um langfristige Ziele zu erreichen während wirtschaftliche Unsicherheiten und Marktschwankungen verwaltet werden."
        ],
        hard: [
            "Quantencomputing nutzt quantenmechanische Phänomene wie Superposition und Verschränkung, um Berechnungen exponentiell schneller als klassische Computer durchzuführen, möglicherweise Kryptographie und komplexe Simulationen revolutionierend.",
            "Blockchain-Technologie schafft dezentrale, unveränderliche Register, die sichere, transparente Transaktionen ohne Zwischenhändler ermöglichen, die Grundlage für Kryptowährungen und Smart-Contract-Anwendungen über Industrien hinweg bildend.",
            "Maschinelle-Lernalgorithmen verwenden neuronale Netze, um unstrukturierte Daten zu analysieren, komplexe Muster zu erkennen und autonome Entscheidungen zu treffen, die sich durch iterative Trainingsprozesse kontinuierlich verbessern.",
            "Neuroplastizität demonstriert die bemerkenswerte Fähigkeit des Gehirns, synaptische Verbindungen als Reaktion auf Lernen, Erfahrung oder Verletzung neu zu organisieren, Genesung und Anpassung während der menschlichen Entwicklung ermöglichend.",
            "Epigenetische Modifikationen beeinflussen Genexpression ohne DNA-Sequenzen zu verändern, Mechanismen bereitstellend, durch die Umweltfaktoren Zellfunktion beeinflussen und möglicherweise Merkmale über Generationen übertragen.",
            "Kryptographische Protokolle etablieren sichere Kommunikationskanäle durch Verschlüsselung sensibler Informationen, Implementierung von Authentifizierungsmechanismen und Gewährleistung von Datenintegrität während der Übertragung über vulnerable Netzwerke.",
            "Nachhaltige Architektur integriert passives Solardesign, erneuerbare Materialien und energieeffiziente Systeme, um Umweltauswirkungen zu minimieren während Bewohnerkomfort und Gebäudelanglebigkeit verbessert werden.",
            "Vergleichende literarische Analyse untersucht thematische Verbindungen, narrative Strukturen und kulturelle Kontexte über Werke aus verschiedenen historischen Perioden, Sprachen und geographischen Regionen hinweg.",
            "Phänomenologische Philosophie erforscht Strukturen des Bewusstseins, Intentionalität und gelebte Erfahrung durch rigorose deskriptive Methoden, die Voraussetzungen über objektive Realität einklammern.",
            "Theoretische Physik erforscht grundlegende Gesetze, die das Universum regieren, von Quantenfeldtheorien, die subatomare Teilchen beschreiben, bis zu kosmologischen Modellen, die großskalige Strukturbildung erklären."
        ],
        expert: [
            "Poststrukturalistische Dekonstruktion hinterfragt die binären Oppositionen, die dem westlichen metaphysischen Denken innewohnen, enthüllend, wie textuelle Hierarchien bestimmte Bedeutungen privilegieren während Alternativen marginalisiert werden durch komplexe rhetorische Strategien und konzeptuelle Rahmen, die logozentrische Annahmen über Sprache und Repräsentation herausfordern.",
            "Quantenfeldtheorie versöhnt Quantenmechanik mit spezieller Relativitätstheorie, indem sie Teilchen als Anregungen in zugrundeliegenden Feldern darstellt, fundamentale Wechselwirkungen mathematisch beschreibend durch Eichtheorien und Renormierungsprozeduren, die virtuelle Teilchenbeiträge zu beobachtbaren Phänomenen erklären.",
            "Neurophilosophische Forschung verbindet kognitive Neurowissenschaft mit philosophischen Fragen über Bewusstsein, untersuchend, wie neuronale Korrelate subjektive Erfahrung erklären könnten während harte Probleme von Qualia und die Erklärungslücke zwischen physikalischen Prozessen und phänomenalem Bewusstsein angegangen werden.",
            "Transzendentaler Idealismus postuliert, dass Erfahrungsobjekte sich den a-priori-Strukturen unserer kognitiven Fähigkeiten anpassen, anstatt unabhängig zu existieren, grundlegend unterscheidend zwischen Phänomenen, wie sie erscheinen, und Noumena als Dinge-an-sich jenseits möglicher Erkenntnis.",
            "Berechnungskomplexitätstheorie klassifiziert Probleme gemäß ihrer inhärenten Schwierigkeit unter Verwendung formaler Modelle wie Turingmaschinen, Komplexitätshierarchien etablierend, die zwischen behandelbaren Polynomialzeit-Lösungen und unbehandelbaren exponentiellen Zeitanforderungen für optimalen Algorithmusentwurf unterscheiden.",
            "Kosmologische Inflationstheorie schlägt exponentielle Expansion des frühen Universums angetrieben durch Skalarfelddynamik vor, Horizont- und Flachheitsprobleme lösend während primordiale Dichtefluktuationen generiert werden, die sich durch gravitative Instabilitätsmechanismen zu großskaliger Struktur entwickeln.",
            "Hermeneutische Phänomenologie untersucht interpretative Strukturen, die das Verständnis gelebter Erfahrung und Textbedeutung vermitteln, analysierend, wie Vorverständnisse und historische Horizonte Interpretation innerhalb hermeneutischer Zirkel von Teil-Ganzes-Beziehungen gestalten.",
            "Epistemologische Rahmen unterlegen wissenschaftliche Methodologie durch rigorose empirische Validierungsprotokolle und theoretische Substantiiierungsanforderungen, Demarkationskriterien etablierend, die wissenschaftliche Behauptungen von pseudowissenschaftlichen Aussagen basierend auf Falsifizierbarkeit und Erklärungskraft unterscheiden.",
            "Phänotypische Plastizität ermöglicht Organismen, alternative morphologische, physiologische oder verhaltensbezogene Eigenschaften als Reaktion auf Umweltreize zu entwickeln, adaptive Reaktionen repräsentierend, die Fitness über variable ökologische Bedingungen ohne genetische Veränderung optimieren.",
            "Metaphilosophische Analyse untersucht die Natur, Ziele und Methoden der philosophischen Forschung als zweitstufige Reflexion, Voraussetzungen über Wahrheit, Rechtfertigung und konzeptuelle Analyse prüfend, die erststufige philosophische Untersuchungen über diverse Subdisziplinen hinweg unterlegen."
        ]
    },
    japanese: {
        easy: [
            "速い茶色の狐が怠惰な犬を飛び越えます。この古典的な文章には英語のアルファベットのすべての文字が含まれています。",
            "タイピングの練習は速度と正確性を向上させます。現代のデジタル通信と効率的な仕事に不可欠なスキルです。",
            "定期的な運動は身体的健康と精神的幸福に役立ちます。バランスの取れた生産的なライフスタイルに貢献します。",
            "本を読むことは語彙を拡大し理解を向上させます。一貫した献身的な練習を通じて批判的思考スキルを発展させます。",
            "良い栄養は日常活動のためのエネルギーを提供します。認知機能と全体的な健康を人生の要求の中でサポートします。",
            "音楽は感情と記憶に影響を与えます。リズミカルなパターンと旋律的なハーモニーを通じて個人的なつながりを作り出します。",
            "友情は喜びとサポートをもたらします。共有された経験と意味のある会話を通じて時間とともに私たちの生活を豊かにします。",
            "自然は美しさと静けさを提供します。心をリフレッシュしながら創造的な活動と平和な内省のためのインスピレーションを与えます。",
            "新しいスキルを学ぶには忍耐と粘り強さが必要です。繰り返しの練習と漸進的な改善を通じて能力を構築します。",
            "ポジティブ思考は課題を克服するのに役立ちます。人生が提示する困難な状況の中で回復力と楽観主義を育みます。"
        ],
        medium: [
            "JavaScriptの汎用性により、フロントエンドWeb開発とサーバーサイドプログラミングの両方が可能になります。様々なプラットフォームとデバイスでユーザー入力に動的に反応するインタラクティブなアプリケーションを作成します。",
            "レスポンシブWebデザインの原則により、Webサイトが異なる画面サイズにシームレスに適応し、スマートフォン、タブレット、デスクトップコンピューターでのユーザー体験とアクセシビリティを同様に向上させます。",
            "太陽光や風力などの持続可能なエネルギーソリューションは、環境影響を削減しながら、化石燃料に対する再生可能な代替手段を長期的な生態学的バランスのために提供します。",
            "人工知能アルゴリズムは大規模なデータセットを処理し、パターンを識別し、自動化とインテリジェントな意思決定支援システムを通じて産業を変革する予測を行います。",
            "デジタルリテラシーは現代の職場で不可欠になりました。ソフトウェアツールの習熟度とオンラインセキュリティプラクティスの理解が専門的成功のために必要です。",
            "効果的なコミュニケーションスキルには明確な表現、積極的傾聴、適切なフィードバックが含まれ、チーム環境での協力を向上させ誤解を減らします。",
            "タイムマネジメント戦略はタスクの優先順位付け、気晴らしの最小化、労働時間中のリソース効率的配分を通じて生産性を最適化し最大の出力を達成します。",
            "文化的多様性は人々を異なる視点、伝統、相互に寛容と世界的理解を育む価値観に触れさせることで社会を豊かにします。",
            "科学研究は体系的実験、ピアレビュー、技術革新に貢献するエビデンスに基づく結論を通じて知識を前進させます。",
            "財務計画には予算編成、節約、賢明な投資が含まれ、市場変動と経済的不確実性を管理しながら長期的目標を達成するために必要です。"
        ],
        hard: [
            "量子コンピューティングは重ね合わせや量子もつれなどの量子力学的現象を利用して、古典的コンピューターよりも指数関数的に速い計算を実行し、暗号学と複雑なシミュレーションを潜在的に革命化します。",
            "ブロックチェーン技術は分散型で不変の台帳を作成し、仲介者なしで安全で透明性のある取引を可能にし、産業全体で暗号通貨とスマートコントラクトアプリケーションの基盤を形成します。",
            "機械学習アルゴリズムはニューラルネットワークを使用して非構造化データを分析し、複雑なパターンを認識し、反復的トレーニングプロセスを通じて継続的に改善する自律的決定を行います。",
            "神経可塑性は、学習、経験、または損傷に対する応答としてシナプス接続を再編成する脳の顕著な能力を示し、人間の発達を通じて回復と適応を可能にします。",
            "エピジェネティック修飾はDNA配列を変更せずに遺伝子発現に影響を与え、環境要因が細胞機能に影響を与え、潜在的に世代を超えて形質を伝達するメカニズムを提供します。",
            "暗号プロトコルは機密情報を暗号化し、認証メカニズムを実装し、脆弱なネットワークを介した伝送中のデータ完全性を確保することで安全な通信チャネルを確立します。",
            "持続可能な建築はパッシブソーラーデザイン、再生可能材料、エネルギー効率の良いシステムを統合し、環境影響を最小限に抑えながら居住者の快適性と建物の長寿命を向上させます。",
            "比較文学分析は、異なる歴史的時代、言語、地理的領域からの作品を通じて主題的つながり、物語構造、文化的文脈を調べます。",
            "現象学的哲学は、客観的現実についての前提を括弧に入れる厳密な記述的方法を通じて、意識の構造、志向性、生きた経験を調査します。",
            "理論物理学は、素粒子を記述する量子場理論から大規模構造形成を説明する宇宙論的モデルまで、宇宙を支配する基本法則を探究します。"
        ],
        expert: [
            "ポスト構造主義的脱構築は、西洋の形而上学的思考に内在する二項対立を問い直し、言語と表現に関するロゴス中心主義的仮定に挑戦する複雑な修辞的戦略と概念的枠組みを通じて、テクスト的階層が特定の意味を特権化しながら代替案を周縁化する方法を明らかにします。",
            "場の量子論は、粒子を基礎となる場の励起として表現することで量子力学と特殊相対性理論を調和させ、ゲージ対称性と繰り込み手続きを通じて基本的相互作用を数学的に記述し、観測可能現象への仮想粒子寄与を説明します。",
            "神経哲学的探究は認知神経科学と意識に関する哲学的問いを橋渡しし、神経相関が主観的経験をどのように説明できるかを検討しながら、クオリアの困難な問題と物理的プロセスと現象的意識の間の説明ギャップに取り組みます。",
            "先験的観念論は、経験の対象が独立して存在するのではなく、私たちの認知的機能のアプリオリな構造に適合すると主張し、現象として現れるものと可能な認識を超えた物自体としてのノウメナを根本的に区別します。",
            "計算複雑性理論は、チューリングマシンのような形式的モデルを使用して、問題をその内在的困難度に従って分類し、最適なアルゴリズム設計のための扱いやすい多項式時間解と扱いにくい指数時間要件を区別する複雑性階層を確立します。",
            "宇宙論的インフレーション理論は、スカラー場力学によって駆動される初期宇宙の指数関数的膨張を提案し、地平線問題と平坦性問題を解決しながら、重力不安定メカニズムを通じて大規模構造に進化する原始密度揺らぎを生成します。",
            "解釈学的現象学は、生きた経験とテキスト意味の理解を媒介する解釈的構造を検討し、部分-全体関係の解釈学的循環内で前理解と歴史的視野が解釈をどのように形成するかを分析します。",
            "認識論的枠組みは、厳密な経験的検証プロトコルと理論的実証要件を通じて科学的方法論を基礎づけ、反証可能性と説明力に基づいて科学的主張と疑似科学的主張を区別する境界設定基準を確立します。",
            "表現型可塑性は、環境信号に対する応答として生物が代替的な形態学的、生理学的、または行動的特性を発達させることを可能にし、遺伝的変更なしに可変的生態条件にわたって適応度を最適化する適応的応答を表します。",
            "メタ哲学的探求は、第二階の反省として哲学的探究の性質、目的、方法を精査し、多様な下位分野にわたる第一階の哲学的調査を基礎づける真理、正当化、概念的分析に関する前提を調べます。"
        ]
    }
};


// ============================================
// DOM ELEMENTS - ORGANIZED BY FUNCTION
// ============================================

// Theme & UI Elements
const themeSelectorShow = document.querySelector('.theme-selector-show');
const themeDropdown = document.getElementById('theme-dropdown');
const themeOptions = document.querySelectorAll('.theme-option');
const currentTheme = document.querySelector('.current-theme');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Test Configuration Elements
const languageSelect = document.getElementById('language-select');
const timeSelect = document.getElementById('time-select');
const difficultySelect = document.getElementById('difficulty-select');

// Real-time Stats Elements
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timerDisplay = document.getElementById('timer');

// Progress Tracking Elements
const wordsProgressDisplay = document.getElementById('words-progress');
const charsProgressDisplay = document.getElementById('chars-progress');
const progressFill = document.getElementById('progress-fill');

// Typing Interface Elements
const textDisplay = document.getElementById('text-display');
const typingInput = document.getElementById('typing-input');

// Control Button Elements
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');

// Celebration Modal Elements
const celebrationContainer = document.getElementById('celebration-container');
const closeCelebrationButton = document.getElementById('close-celebration');
const confettiPiecesContainer = document.getElementById('confetti-pieces-container');

// Final Results Elements
const finalWpmDisplay = document.getElementById('final-wpm');
const finalAccuracyDisplay = document.getElementById('final-accuracy');
const finalWordsDisplay = document.getElementById('final-words');
const finalCharactersDisplay = document.getElementById('final-characters');
const finalTimeDisplay = document.getElementById('final-time');

// ============================================
// TEST STATE VARIABLES
// ============================================

let currentColorTheme = 'purple-blue';
let testStarted = false;
let testCompleted = false;
let timerInterval;
let timeLeft;
let totalTime;
let startTime;
let endTime;
let correctChars = 0;
let totalChars = 0;
let currentText = '';
let currentIndex = 0;
let totalWords = 0;
let typedWords = 0;
let totalTextLength = 0;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Counts exact words in text based on spaces
 * @param {string} text - Text to count words from
 * @returns {number} - Exact word count
 */
function countExactWords(text) {
    // Remove extra spaces, split by spaces, filter out empty strings
    const words = text.trim().replace(/\s+/g, ' ').split(' ');
    return words.filter(word => word.length > 0).length;
}

/**
 * Counts words in typed input in real-time
 * @param {string} text - Typed input text
 * @returns {number} - Current word count
 */
function countTypedWords(text) {
    if (!text.trim()) return 0;
    const words = text.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
}

/**
 * Updates progress stats display
 */
function updateProgressStats() {
    wordsProgressDisplay.textContent = `${typedWords}/${totalWords}`;
    charsProgressDisplay.textContent = `${totalChars}/${totalTextLength}`;
}

/**
 * Gets random value between min and max
 */
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Updates timer display with proper formatting
 */
function updateTimerDisplay() {
    timerDisplay.textContent = `${timeLeft}s`;
}

// ============================================
// THEME MANAGEMENT SYSTEM
// ============================================

// Toggle theme selector dropdown
themeSelectorShow.addEventListener('click', function(e) {
    e.stopPropagation();
    themeSelectorShow.classList.toggle('active');
    themeDropdown.classList.toggle('show');
});

// Handle theme selection
themeOptions.forEach(option => {
    option.addEventListener('click', function(e) {
        e.stopPropagation();

        // Remove active class from all options
        themeOptions.forEach(opt => opt.classList.remove('active'));
        
        // Add active class to selected option
        this.classList.add('active');

        // Update current theme
        currentColorTheme = this.getAttribute('data-color-theme');
        body.setAttribute('data-color-theme', currentColorTheme);

        // Update theme indicator color
        const themeBtn = this.querySelector('.theme-btn');
        currentTheme.style.background = themeBtn.style.background;

        // Close dropdown
        themeSelectorShow.classList.remove('active');
        themeDropdown.classList.remove('show');
    });
});

// Dark/Light mode toggle
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
    body.setAttribute('data-color-theme', currentColorTheme);
});

// Close dropdown when clicking outside
document.addEventListener('click', function() {
    themeSelectorShow.classList.remove('active');
    themeDropdown.classList.remove('show');
});

// Prevent dropdown close when clicking inside
themeDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
});

// ============================================
// TEST INITIALIZATION FUNCTION
// ============================================

function initializeTest() {
    // Get user selections
    const language = languageSelect.value;
    const difficulty = difficultySelect.value;
    
    // Get random text from selected category
    const textArray = sampleTexts[language][difficulty];
    currentText = textArray[Math.floor(Math.random() * textArray.length)];
    
    // Calculate exact statistics from text
    totalWords = countExactWords(currentText);
    totalTextLength = currentText.length;
    typedWords = 0;

    // Clear text display
    textDisplay.innerHTML = '';
    
    // Create character spans with proper space handling
    for (let i = 0; i < currentText.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'character';
        
        // Handle spaces specially
        if (currentText[i] === ' ') {
            charSpan.innerHTML = '&nbsp;';
            charSpan.classList.add('space-character');
        } else {
            charSpan.textContent = currentText[i];
        }
        
        textDisplay.appendChild(charSpan);
    }

    // Set first character as current
    if (textDisplay.children.length > 0) {
        textDisplay.children[0].classList.add('current');
    }

    // Reset all test state variables
    testStarted = false;
    testCompleted = false;
    currentIndex = 0;
    correctChars = 0;
    totalChars = 0;

    // Reset UI elements
    typingInput.value = '';
    typingInput.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
    
    // Reset stats displays
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '0%';
    progressFill.style.width = '0%';
    
    // Update progress stats
    updateProgressStats();

    // Setup timer
    totalTime = parseInt(timeSelect.value);
    timeLeft = totalTime;
    updateTimerDisplay();

    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Scroll to top of text display
    textDisplay.scrollTop = 0;
}

// ============================================
// TEST CONTROL FUNCTIONS
// ============================================

function startTest() {
    if (testStarted) return;

    testStarted = true;
    startTime = new Date();
    typingInput.disabled = false;
    typingInput.focus();
    startButton.disabled = true;

    // Start countdown timer
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    updateTimerDisplay();

    // End test when time runs out
    if (timeLeft <= 0) {
        endTest();
    }
}

function endTest() {
    testCompleted = true;
    endTime = new Date();
    clearInterval(timerInterval);
    typingInput.disabled = true;

    // Calculate final statistics
    
    // FIX: Ensure minimum time to prevent division by very small numbers
    const timeTakenSeconds = Math.max((endTime - startTime) / 1000, 0.1);
    
    // Final WPM calculation with safety checks
    let finalWpm = 0;
    
    // FIX: Only calculate WPM if sufficient time has passed
    if (timeTakenSeconds > 0.1) {
        finalWpm = Math.round((correctChars / 5) / (timeTakenSeconds / 60));
        // FIX: Cap WPM at 999 to prevent unrealistic numbers
        finalWpm = Math.min(finalWpm, 999);
    }
    
    // Final accuracy calculation with safety checks
    let accuracy = 0;
    
    // FIX: Only calculate accuracy when characters were typed
    if (totalChars > 0) {
        accuracy = Math.round((correctChars / totalChars) * 100);
        // FIX: Cap accuracy at 100% to prevent exceeding 100%
        accuracy = Math.min(accuracy, 100);
    }
    
    // Final word count
    typedWords = countTypedWords(typingInput.value);

    // Show celebration with all results
    // FIX: Round time to nearest second for display
    showCelebration(finalWpm, accuracy, typedWords, totalChars, Math.round(timeTakenSeconds));
}

// ============================================
// TYPING INPUT HANDLER
// ============================================

function handleTypingInput(e) {
    if (!testStarted || testCompleted) return;

    const inputValue = typingInput.value;

    // Handle backspace/delete
    if (e.inputType === 'deleteContentBackward') {
        if (currentIndex > 0) {
            currentIndex--;

            const prevCharSpan = textDisplay.children[currentIndex];
            const currentCharSpan = textDisplay.children[currentIndex + 1];
            
            // Update character highlighting
            prevCharSpan.classList.remove('current', 'incorrect', 'correct');
            prevCharSpan.classList.add('current');
            
            if (currentCharSpan) {
                currentCharSpan.classList.remove('current');
            }

            // Adjust character counts
            if (currentIndex < totalChars) {
                if (prevCharSpan.classList.contains('correct')) {
                    correctChars--;
                }
                totalChars = Math.max(0, totalChars - 1);
            }

            // Update word count
            typedWords = countTypedWords(inputValue);

            // Update progress bar to go back
            const progress = Math.min(100, (currentIndex / currentText.length) * 100);
            progressFill.style.width = `${progress}%`;
            
            // Update all displays
            updateRealTimeStats();
            updateProgressStats();
        }
        return;
    }

    // Handle regular typing
    if (currentIndex < currentText.length) {
        const typedChar = inputValue[currentIndex];
        const currentCharSpan = textDisplay.children[currentIndex];

        // Check character accuracy
        if (typedChar === currentText[currentIndex]) {
            currentCharSpan.classList.add('correct');
            currentCharSpan.classList.remove('incorrect');
            correctChars++;
        } else {
            currentCharSpan.classList.add('incorrect');
            currentCharSpan.classList.remove('correct');
        }

        // Move to next character
        currentCharSpan.classList.remove('current');
        totalChars++;
        currentIndex++;

        // Update word count
        typedWords = countTypedWords(inputValue);
        
        // Set next character as current
        if (currentIndex < currentText.length) {
            const nextCharSpan = textDisplay.children[currentIndex];
            nextCharSpan.classList.add('current');
            
            // Auto-scroll to keep current character visible
            nextCharSpan.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }

        // Update progress bar
        const progress = Math.min(100, (currentIndex / currentText.length) * 100);
        progressFill.style.width = `${progress}%`;

        // Update all real-time displays
        updateRealTimeStats();
        updateProgressStats();

        // Check if text is complete
        if (currentIndex === currentText.length) {
            endTest();
        }
    }
}

// ============================================
// REAL-TIME STATISTICS UPDATER
// ============================================

function updateRealTimeStats() {
    const currentTime = new Date();
    const timeElapsedSeconds = Math.max((currentTime - startTime) / 1000, 0.1);
    
    // Calculate current WPM with safety checks
    let currentWpm = 0;
    
    // FIX: Only calculate WPM after brief delay to prevent unrealistic spikes
    if (timeElapsedSeconds > 0.1) { 
        currentWpm = Math.round((correctChars / 5) / (timeElapsedSeconds / 60));
        // FIX: Cap WPM at 999 to prevent unrealistic numbers
        currentWpm = Math.min(currentWpm, 999);
    }
    
    // Calculate current accuracy with safety checks
    let currentAccuracy = 0;
    
    // FIX: Only calculate accuracy when there are typed characters
    if (totalChars > 0) {
        currentAccuracy = Math.round((correctChars / totalChars) * 100);
        // FIX: Cap accuracy at 100% to prevent exceeding 100%
        currentAccuracy = Math.min(currentAccuracy, 100);
    }

    // Update displays
    wpmDisplay.textContent = currentWpm;
    accuracyDisplay.textContent = currentAccuracy + '%';
}

// ============================================
// CONFETTI ANIMATION SYSTEM
// ============================================

const confettiColors = [
    'var(--confetti-color-1)',
    'var(--confetti-color-2)',
    'var(--confetti-color-3)',
    'var(--confetti-color-4)',
    'var(--confetti-color-5)'
];

function createConfettiPiece() {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    // Set random properties for variety
    piece.style.setProperty('--size', `${getRandomValue(8, 18)}px`);
    piece.style.setProperty('--confetti-color', confettiColors[Math.floor(Math.random() * confettiColors.length)]);
    piece.style.setProperty('--start-x', `${getRandomValue(0, 100)}%`);
    piece.style.setProperty('--rotation', `${getRandomValue(0, 360)}deg`);
    piece.style.setProperty('--duration', `${getRandomValue(3, 7)}s`);
    piece.style.setProperty('--delay', `${getRandomValue(0, 0.5)}s`);
    piece.style.setProperty('--lateral-start', `${getRandomValue(-100, 100)}px`);
    piece.style.setProperty('--lateral-end', `${getRandomValue(-200, 200)}px`);

    // Add to container
    confettiPiecesContainer.appendChild(piece);

    // Clean up after animation
    piece.addEventListener('animationend', () => {
        piece.remove();
    });
}

// ============================================
// CELEBRATION MODAL FUNCTIONS
// ============================================

function showCelebration(wpm, accuracy, typedWordsCount, typedCharsCount, timeTakenSeconds) {
    // Update all final statistics
    finalWpmDisplay.textContent = wpm;
    finalAccuracyDisplay.textContent = accuracy + '%';
    finalWordsDisplay.textContent = `${typedWordsCount}/${totalWords}`;
    finalCharactersDisplay.textContent = `${typedCharsCount}/${totalTextLength}`;
    finalTimeDisplay.textContent = `${timeTakenSeconds}s`;
    
    // Show celebration modal
    celebrationContainer.classList.add('show');

    // Create confetti celebration
    for (let i = 0; i < 70; i++) {
        createConfettiPiece();
    }
}

function closeCelebration() {
    celebrationContainer.classList.remove('show');
    confettiPiecesContainer.innerHTML = '';
    initializeTest();
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

// Test control buttons
startButton.addEventListener('click', startTest);
resetButton.addEventListener('click', initializeTest);

// Celebration modal control
closeCelebrationButton.addEventListener('click', closeCelebration);

// Typing input handler
typingInput.addEventListener('input', handleTypingInput);

// Test configuration changes
languageSelect.addEventListener('change', initializeTest);
difficultySelect.addEventListener('change', initializeTest);
timeSelect.addEventListener('change', function() {
    totalTime = parseInt(this.value);
    timeLeft = totalTime;
    updateTimerDisplay();
    initializeTest();
});

// Initialize test on page load
document.addEventListener('DOMContentLoaded', initializeTest);

// Handle Tab key for indentation
typingInput.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Insert tab character
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);
        
        // Update cursor position
        this.selectionStart = this.selectionEnd = start + 1;

        // Trigger input event
        const inputEvent = new Event('input', { bubbles: true });
        this.dispatchEvent(inputEvent);
    }
});