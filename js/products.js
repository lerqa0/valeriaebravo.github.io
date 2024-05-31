const products = [
    {
        id: 1,
        name: "Ulei Hidrofil Cica 1%",
        brand: "A-Derma",
        price: 316,
        capacity: 150,
        categoryLevel1: 1,
        categoryLevel2: 3,
        categoryLevel3: 8,
    },

    {
        id: 2,
        name: "Spumă De Curățare",
        brand: "A'pieu",
        price: 182,
        capacity: 200,
        categoryLevel1: 1,
        categoryLevel2: 3,
        categoryLevel3: 9,
    },

    {
        id: 3,
        name: "Mască Din Țesătură",
        brand: "Round Lab",
        price: 40,
        capacity: 15,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 4,
    },

    {
        id: 4,
        name: "Dokdo Apă Micelară",
        brand: "Round Lab",
        price: 129,
        capacity: 100,
        categoryLevel1: 1,
        categoryLevel2: 3,
        categoryLevel3: 7,
    },

    {
        id: 5,
        name: "Patch-uri anti-inflamatorii",
        brand: "Missha",
        price: 120,
        capacity: 96,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 6,
    },

    {
        id: 6,
        name: "Cremă cu vitamine Bad Vita",
        brand: "A'pieu",
        price: 216,
        capacity: 50,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 3,
    },

    {
        id: 7,
        name: "Cremă revitalizantă hidratantă",
        brand: "A-derma",
        price: 184,
        capacity: 100,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 2,
    },

    {
        id: 8,
        name: "Ulei hidrofil Gentle Deep",
        brand: "Frudia",
        price: 344,
        capacity: 200,
        categoryLevel1: 1,
        categoryLevel2: 3,
        categoryLevel3: 8,
    },

    {
        id: 9,
        name: "Mască revitalizantă Green",
        brand: "jay jun",
        price: 15,
        capacity: 10,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 4,
    },

    {
        id: 10,
        name: "Spumă de curățare Ppoyan",
        brand: "A-Derma",
        price: 191,
        capacity: 150,
        categoryLevel1: 1,
        categoryLevel2: 3,
        categoryLevel3: 9,
    },

    {
        id: 11,
        name: "Cremă-gel hidratant Okra",
        brand: "jay jun",
        price: 299,
        capacity: 50,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 2,
    },

    {
        id: 12,
        name: "Cremă cu efect de reînnoire",
        brand: "a'pieu",
        price: 211,
        capacity: 50,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 1,
    },

    {
        id: 13,
        name: "Demachiant pentru ochi",
        brand: "jay jun",
        price: 144,
        capacity: 100,
        categoryLevel1: 1,
        categoryLevel2: 3,
        categoryLevel3: 7,
    },

    {
        id: 14,
        name: "Cremă de față hidratantă",
        brand: "frudia",
        price: 178,
        capacity: 50,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 2,
    },

    {
        id: 15,
        name: "Mască de noapte Skin Fitness",
        brand: "missha",
        price: 30,
        capacity: 10,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 5,
    },

    {
        id: 16,
        name: "Cremă de față anti-age",
        brand: "missha",
        price: 1625,
        capacity: 60,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 1,
    },

    {
        id: 17,
        name: "Mască revitalizantă",
        brand: "frudia",
        price: 25,
        capacity: 10,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 4,
    },

    {
        id: 18,
        name: "Cremă hrănitoare Soybean",
        brand: "round lab",
        price: 479,
        capacity: 80,
        categoryLevel1: 1,
        categoryLevel2: 1,
        categoryLevel3: 3,
    },

    {
        id: 19,
        name: "Patch-uri anti-inflamatoare",
        brand: "a'pieu",
        price: 179,
        capacity: 72,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 6,
    },

    {
        id: 20,
        name: "Mască de noapte Basil",
        brand: "a'pieu",
        price: 60,
        capacity: 50,
        categoryLevel1: 1,
        categoryLevel2: 2,
        categoryLevel3: 5,
    },

    {
        id: 21,
        name: "Pudră pulbere triplă",
        brand: "frudia",
        price: 278,
        capacity: 15,
        categoryLevel1: 2,
        categoryLevel2: 6,
        categoryLevel3: 0,
    },

    {
        id: 22,
        name: "Tint pentru buze",
        brand: "jay jun",
        price: 255,
        capacity: 3,
        categoryLevel1: 2,
        categoryLevel2: 5,
        categoryLevel3: 0,
    },

    {
        id: 23,
        name: "Set de farduri de pleoape",
        brand: "missha",
        price: 510,
        capacity: 7,
        categoryLevel1: 2,
        categoryLevel2: 4,
        categoryLevel3: 0,
    },

    {
        id: 24,
        name: "Eyeliner pentru ochi",
        brand: "a'pieu",
        price: 85,
        capacity: 5,
        categoryLevel1: 2,
        categoryLevel2: 4,
        categoryLevel3: 0,
    },

    {
        id: 25,
        name: "Șampon pentru păr Dermatical",
        brand: "a-derma",
        price: 184,
        capacity: 200,
        categoryLevel1: 3,
        categoryLevel2: 7,
        categoryLevel3: 0,
    },

    {
        id: 26,
        name: "Gel pentru corp Aloe Vera",
        brand: "jay jun",
        price: 80,
        capacity: 300,
        categoryLevel1: 3,
        categoryLevel2: 8,
        categoryLevel3: 0,
    },

    {
        id: 27,
        name: "Ulei de păr parfumat",
        brand: "round lab",
        price: 198,
        capacity: 30,
        categoryLevel1: 3,
        categoryLevel2: 7,
        categoryLevel3: 0,
    },

    {
        id: 28,
        name: "Loțiune parfumată pentru corp",
        brand: "frudia",
        price: 151,
        capacity: 400,
        categoryLevel1: 3,
        categoryLevel2: 8,
        categoryLevel3: 0,
    },
];

const getProductById = (id) => {
    return products.filter(item => item.id === parseInt(id))[0];
}