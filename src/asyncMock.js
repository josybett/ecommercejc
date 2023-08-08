const products = [
    {
        "id": 1,
        "categoria": "escenciales",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20200429094231_2x3_566x819_5ml_60210411_black_spruce_ec_es_web.jpg",
        "titulo": "Abeto Negro 5 mL",
        "precio": 65.00,
        "descripcion": "Usado históricamente por los aborígenes americanos para promover la salud cutánea y como parte de sus prácticas de sanación y limpieza espiritual, el aceite de abeto negro (Black Spruce) es un poderoso aceite esencial leñoso."
    },
    {
        "id": 2,
        "categoria": "escenciales",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20201201103036_2x3_566x819_5ml_60201587_juniper_berry_ec_es_web.jpg",
        "titulo": "Baya de Enebro",
        "precio": 24.00,
        "descripcion": "Extraído del árbol conífero, el aceite esencial de baya de enebro (Juniper Berry) tiene una rica historia de usos y beneficios tradicionales."
    },
    {
        "id": 3,
        "categoria": "escenciales",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20201201115403_2x3_566x819_5ml_60205969_cinnamon_ec_es_web.jpg",
        "titulo": "Canela",
        "precio": 28.00,
        "descripcion": "La canela se obtiene de un árbol tropical perenne que crece hasta más de 13 metros de altura y tiene cortezas, hojas y flores sumamente fragantes."
    },
    {
        "id": 4,
        "categoria": "escenciales",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20211027105413_2x3_566x819_10ml_60215153_davana_touch_ec_es_web.jpg",
        "titulo": "Davana Touch",
        "precio": 39.00,
        "descripcion": "Este aceite a menudo se cultiva en los jardines de la India, presenta un agradable aroma herbáceo con notas de ciruela y pasas. Cuando se aplica a la piel aparte de hidratarla, crea un aroma único al combinarse con la química de tu piel."
    },
    {
        "id": 5,
        "categoria": "escenciales",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20200610152748_2x3_566x819_15ml_60210435_lemon_eucalyptus_ec_es_web.jpg",
        "titulo": "Eucalipto Limón",
        "precio": 15.00,
        "descripcion": "El aceite esencial de Eucalipto limón se extrae de una planta de la familia de los eucaliptos que produce una resina azul con aroma de limón, un árbol alto con corteza lisa."
    },
    {
        "id": 6,
        "categoria": "mezclas",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/SPN/20210511153305_2x3_566x819_15ml_60211380_adaptive_ec_es_web.jpg",
        "titulo": "Adaptiv",
        "precio": 42.75,
        "descripcion": "Cuando el estrés y la tensión parecen no cesar, Adaptiv es la solución precisa. Usa Adaptiv para sentirte cómodo nuevos ambientes o situaciones. Cuando se acerque una gran reunión o para otros eventos importantes, mantén a la mano Adaptiv."
    },
    {
        "id": 7,
        "categoria": "mezclas",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20220127105324_2x3_566x819_10ml_60210334_beautiful_touch_ec_es_web.jpg",
        "titulo": "Beautiful Touch",
        "precio": 25.50,
        "descripcion": "Esta mezcla bella de edición limitada te ayuda a abrazar los aceites esenciales a través de la combinación de olivo fragante, lima, bergamota e incienso en una mezcla floral armoniosa. Las vigorosas aromas de lima y bergamota ayudan a crear un ambiente edificante. Utilizando las aromas reconfortantes y relajantes, Beautiful Touch (mezcla tópica) crea un aroma personal deliciosa y dulce."
    },
    {
        "id": 8,
        "categoria": "mezclas",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/SPN/20200821130036_2x3_566x819_15ml_60205980_citrus_bliss_ec_es_web.jpg",
        "titulo": "Citrus Bliss",
        "precio": 19.50,
        "descripcion": "La mezcla vigorizante Citrus Bliss fusiona los beneficios de los aceites esenciales cítricos."
    },
    {
        "id": 9,
        "categoria": "mezclas",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20210204115231_2x3_566x819_5ml_60201643_cheer_ec_es_web.jpg",
        "titulo": "dōTERRA Cheer",
        "precio": 27.00,
        "descripcion": "Todo mundo sabe que una disposición alegre y una actitud positiva pueden vencer muchos de los obstáculos y retos de la vida ¿no es cierto? Pero a veces ni el mucho auto hablarnos basta para evitar la tristeza."
    },
    {
        "id": 10,
        "categoria": "inmune",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20210205133854_2x3_566x819_15ml_60201680_on_guard_ec_es_web.jpg",
        "titulo": "On Guard",
        "precio": 34.00,
        "descripcion": "Como una de las mezclas de aceites esenciales más populares de doTERRA, On Guard tiene usos y beneficios increíbles tanto para el cuerpo como en el hogar."
    },
    {
        "id": 11,
        "categoria": "inmune",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20201021141215_2x3_566x819_60209701_27ml_onguard_sanitizing_mist_ec_es_web.jpg",
        "titulo": "On Guard® Sanitizing Mist",
        "precio": 9.00,
        "descripcion": "Ya todos conocemos el poder de la mezcla de aceites esenciales On Guard y las maravillas que hace para ayudarnos a mantener a nuestras familias y hogares fuera del alcance de amenazas medioambientales. A veces nos toca salir y deseamos que On Guard tuviera un modo de aplicación cómodo, práctico y fácil de usar. Ahora tenemos la brisa limpiadora (On Guard Sanitizing Mist)."
    },
    {
        "id": 12,
        "categoria": "inmune",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20210302113824_2x3_566x819_60201521_onguard_toothpaste_ec_es_web.jpg",
        "titulo": "Pasta de Dientes On Guard",
        "precio": 11.00,
        "descripcion": "Limpia y protege los dientes con todos los beneficios de la mezcla de aceites esenciales On Guard."
    },
    {
        "id": 13,
        "categoria": "inmune",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20210211134526_2x3_566x819_60201704_onguard_beadlet_ec_es_web.jpg",
        "titulo": "On Guard™ Perlas Bucales",
        "precio": 20.00,
        "descripcion": "Las perlas bucales On Guard son una manera fácil y práctica de obtener los beneficios de la mezcla de aceites esenciales On Guard."
    },
    {
        "id": 14,
        "categoria": "deep_blue",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20211209152551_2x3_566x819_60214930_deep_blue_polyphenol_complex_ec_es_web.jpg",
        "titulo": "Deep Blue Polyphenol Complex",
        "precio": 60.00,
        "descripcion": "La marca Deep Blue® es sinónimo de apoyo relajante. La mezcla de aceites esenciales CPTG®, así como el ungüento, han proporcionado alivio a muchos y gozan de confianza entre sus usuarios. Tiene sentido que un suplemento ingerible complemente los beneficios tópicos de la línea de productos Deep Blue."
    },
    {
        "id": 15,
        "categoria": "deep_blue",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20220606105435_2x3_600x900_60217776_deep_blue_stick_co_ec_es_web.jpg",
        "titulo": "Deep Blue® Barra",
        "precio": 30.00,
        "descripcion": "Infusionado con la mezcla doTERRA Deep Blue con aceites esenciales CPTG®, más las benéficas propiedades de Copaiba, la barra doTERRA Deep Blue crea una sensación refrescante."
    },
    {
        "id": 16,
        "categoria": "deep_blue",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20200619155619_2x3_566x819_60212713_deep_blue_rub_ec_es_web.jpg",
        "titulo": "Deep Blue® Crema",
        "precio": 41.00,
        "descripcion": "Deep Blue Rub (crema) es una rica crema tópica infundida con la mezcla relajante Deep Blue de aceites esenciales CPGT™. Formulada con una mezcla patentada de extractos vegetales naturales y otros potentes ingredientes, la crema brinda una reconfortante sensación de frescura y calidez a las áreas afectadas."
    },
    {
        "id": 17,
        "categoria": "deep_blue",
        "img": "https://beta-doterra.myvoffice.com/ShoppingCart/LNG/ENG/20200311075813_792x612_10ml_60201748_touch_deep_blue_ec_es_web.jpg",
        "titulo": "Deep Blue® Touch",
        "precio": 51.00,
        "descripcion": "Experimenta los beneficios de nuestra mezcla de aceites esenciales patentada Deep Blue en una suave fórmula que es perfecta para niños y adultos."
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products)
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.filter(prod => prod.categoria === category))
        }, 500);
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products.find(prod => prod.id === id))
        })
    })
}
