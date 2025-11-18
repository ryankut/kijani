module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/products.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_PRODUCTS",
    ()=>ALL_PRODUCTS,
    "getProductById",
    ()=>getProductById,
    "searchProducts",
    ()=>searchProducts
]);
const ALL_PRODUCTS = [
    // Skincare
    {
        id: 1,
        name: 'Hydrating Face Serum',
        price: 45,
        category: 'skincare',
        image: '/hydrating-face-serum.jpg',
        images: [
            '/hydrating-face-serum.jpg',
            '/hydrating-face-serum.jpg',
            '/hydrating-face-serum.jpg'
        ],
        rating: 4.8,
        reviews: 124,
        ingredients: [
            'Hyaluronic Acid',
            'Vitamin E',
            'Aloe Vera Extract',
            'Green Tea Extract'
        ],
        howToUse: 'Apply 2-3 drops to clean skin. Gently massage until absorbed. Use morning and evening.',
        reviewsData: [
            {
                name: 'Sarah M.',
                rating: 5,
                comment: 'Amazing serum! My skin feels hydrated and plump.'
            },
            {
                name: 'John D.',
                rating: 4,
                comment: 'Good product, noticeable results after 2 weeks.'
            },
            {
                name: 'Emma L.',
                rating: 5,
                comment: 'Best hydrating serum I have ever used!'
            }
        ]
    },
    {
        id: 2,
        name: 'Eye Cream',
        price: 52,
        category: 'skincare',
        image: '/eye-cream-luxury.jpg',
        images: [
            '/eye-cream-luxury.jpg',
            '/eye-cream-luxury.jpg',
            '/eye-cream-luxury.jpg'
        ],
        rating: 4.9,
        reviews: 89,
        ingredients: [
            'Retinol',
            'Peptides',
            'Caffeine',
            'Hyaluronic Acid'
        ],
        howToUse: 'Dab small amount around eyes. Pat gently with ring finger. Use morning and night.',
        reviewsData: [
            {
                name: 'Lisa R.',
                rating: 5,
                comment: 'Reduced puffiness and fine lines significantly.'
            },
            {
                name: 'Mike T.',
                rating: 5,
                comment: 'Eye area looks brighter and more youthful.'
            },
            {
                name: 'Nina P.',
                rating: 4,
                comment: 'Good results, slightly pricey.'
            }
        ]
    },
    {
        id: 3,
        name: 'Moisturizer SPF',
        price: 62,
        category: 'skincare',
        image: '/moisturizer-spf-sunscreen.jpg',
        images: [
            '/moisturizer-spf-sunscreen.jpg',
            '/moisturizer-spf-sunscreen.jpg',
            '/moisturizer-spf-sunscreen.jpg'
        ],
        rating: 4.7,
        reviews: 156,
        ingredients: [
            'SPF 30',
            'Jojoba Oil',
            'Niacinamide',
            'Ceramides'
        ],
        howToUse: 'Apply generously to face and neck. Wait 15 minutes before sun exposure. Reapply every 2 hours.',
        reviewsData: [
            {
                name: 'Alex J.',
                rating: 4,
                comment: 'Great SPF moisturizer, keeps skin protected.'
            },
            {
                name: 'Rachel H.',
                rating: 5,
                comment: 'No white cast, blends beautifully.'
            },
            {
                name: 'Tom S.',
                rating: 4,
                comment: 'Good daily protection.'
            }
        ]
    },
    {
        id: 4,
        name: 'Facial Cleanser',
        price: 38,
        category: 'skincare',
        image: '/facial-cleanser-luxury.jpg',
        images: [
            '/facial-cleanser-luxury.jpg',
            '/facial-cleanser-luxury.jpg',
            '/facial-cleanser-luxury.jpg'
        ],
        rating: 4.8,
        reviews: 201,
        ingredients: [
            'Chamomile Extract',
            'Glycerin',
            'Sodium Cocoyl Isethionate',
            'Vitamin B5'
        ],
        howToUse: 'Wet face with lukewarm water. Massage cleanser for 30 seconds. Rinse thoroughly with water.',
        reviewsData: [
            {
                name: 'Karen B.',
                rating: 5,
                comment: 'Gentle yet effective. My skin feels clean.'
            },
            {
                name: 'David L.',
                rating: 5,
                comment: 'No harsh chemicals, perfect for sensitive skin.'
            },
            {
                name: 'Lucy M.',
                rating: 4,
                comment: 'Good quality cleanser.'
            }
        ]
    },
    {
        id: 5,
        name: 'Night Cream',
        price: 58,
        category: 'skincare',
        image: '/night-cream-moisturizer.jpg',
        images: [
            '/night-cream-moisturizer.jpg',
            '/night-cream-moisturizer.jpg',
            '/night-cream-moisturizer.jpg'
        ],
        rating: 4.6,
        reviews: 98,
        ingredients: [
            'Shea Butter',
            'Retinol',
            'Squalane',
            'Peptides'
        ],
        howToUse: 'Apply to face and neck before bed. Use 3-4 nights per week for best results.',
        reviewsData: [
            {
                name: 'Sofia K.',
                rating: 4,
                comment: 'Rich formula, wakes up with soft skin.'
            },
            {
                name: 'Marcus W.',
                rating: 5,
                comment: 'Noticeable improvement in skin texture.'
            },
            {
                name: 'Julia N.',
                rating: 4,
                comment: 'Good night moisturizer.'
            }
        ]
    },
    {
        id: 6,
        name: 'Face Mask',
        price: 42,
        category: 'skincare',
        image: '/luxury-face-mask-skincare.jpg',
        images: [
            '/luxury-face-mask-skincare.jpg',
            '/luxury-face-mask-skincare.jpg',
            '/luxury-face-mask-skincare.jpg'
        ],
        rating: 4.9,
        reviews: 167,
        ingredients: [
            'Kaolin Clay',
            'Green Tea',
            'Charcoal',
            'Lavender Oil'
        ],
        howToUse: 'Apply evenly to face. Leave for 10-15 minutes. Rinse with warm water. Use 2x weekly.',
        reviewsData: [
            {
                name: 'Olivia F.',
                rating: 5,
                comment: 'My skin feels so refreshed after using this.'
            },
            {
                name: 'Ryan P.',
                rating: 5,
                comment: 'Best detoxifying mask I have tried.'
            },
            {
                name: 'Chloe A.',
                rating: 4,
                comment: 'Good quality mask.'
            }
        ]
    },
    {
        id: 7,
        name: 'Toner',
        price: 35,
        category: 'skincare',
        image: '/face-toner-skincare.jpg',
        images: [
            '/face-toner-skincare.jpg',
            '/face-toner-skincare.jpg',
            '/face-toner-skincare.jpg'
        ],
        rating: 4.7,
        reviews: 142,
        ingredients: [
            'Rose Water',
            'Witch Hazel',
            'Glycerin',
            'Niacinamide'
        ],
        howToUse: 'Apply with cotton pad after cleansing. Gently swipe over face and neck. Follow with moisturizer.',
        reviewsData: [
            {
                name: 'Grace T.',
                rating: 4,
                comment: 'Balances skin well, minimizes pores.'
            },
            {
                name: 'Nathan C.',
                rating: 5,
                comment: 'Smooth application, great toner.'
            },
            {
                name: 'Zoe L.',
                rating: 4,
                comment: 'Good toning effect.'
            }
        ]
    },
    {
        id: 8,
        name: 'Retinol Treatment',
        price: 68,
        category: 'skincare',
        image: '/retinol-treatment-skincare.jpg',
        images: [
            '/retinol-treatment-skincare.jpg',
            '/retinol-treatment-skincare.jpg',
            '/retinol-treatment-skincare.jpg'
        ],
        rating: 4.8,
        reviews: 178,
        ingredients: [
            'Retinol',
            'Peptides',
            'Squalane',
            'Vitamin E'
        ],
        howToUse: 'Use 2-3x weekly at night. Start with pea-sized amount. Gradually increase frequency. Use SPF during day.',
        reviewsData: [
            {
                name: 'Victoria E.',
                rating: 5,
                comment: 'Amazing anti-aging results!'
            },
            {
                name: 'Christopher M.',
                rating: 4,
                comment: 'Skin looks younger and firmer.'
            },
            {
                name: 'Amy S.',
                rating: 5,
                comment: 'Best retinol product ever.'
            }
        ]
    },
    {
        id: 9,
        name: 'Silk Serum',
        price: 49.99,
        category: 'skincare',
        image: '/luxury-purple-cosmetic-serum-bottle.jpg',
        images: [
            '/luxury-purple-cosmetic-serum-bottle.jpg',
            '/luxury-cosmetic-bottle-detail.jpg',
            '/luxury-cosmetic-packaging.jpg'
        ],
        rating: 4.8,
        reviews: 124,
        ingredients: [
            'Silk Protein',
            'Hyaluronic Acid',
            'Rose Hip Oil',
            'Vitamin C'
        ],
        howToUse: 'Apply 3-4 drops to clean skin. Massage gently until absorbed. Use day and night.',
        reviewsData: [
            {
                name: 'Diana L.',
                rating: 5,
                comment: 'Silk soft skin after application!'
            },
            {
                name: 'Henry G.',
                rating: 5,
                comment: 'Love the luxurious feel of this serum.'
            },
            {
                name: 'Patricia R.',
                rating: 4,
                comment: 'Good silk serum.'
            }
        ]
    },
    {
        id: 10,
        name: 'Lavender Mask',
        price: 39.99,
        category: 'skincare',
        image: '/luxury-purple-face-mask-jar.jpg',
        images: [
            '/luxury-purple-face-mask-jar.jpg',
            '/luxury-purple-face-mask-jar.jpg',
            '/luxury-purple-face-mask-jar.jpg'
        ],
        rating: 4.9,
        reviews: 89,
        ingredients: [
            'Lavender Extract',
            'Aloe Vera',
            'Chamomile',
            'Glycerin'
        ],
        howToUse: 'Apply mask evenly. Relax for 15-20 minutes. Rinse with lukewarm water. Use 2-3x weekly.',
        reviewsData: [
            {
                name: 'Sophie D.',
                rating: 5,
                comment: 'Calming and soothing mask, smells wonderful.'
            },
            {
                name: 'Andrew V.',
                rating: 5,
                comment: 'Perfect for sensitive skin.'
            },
            {
                name: 'Rebecca K.',
                rating: 4,
                comment: 'Good lavender mask.'
            }
        ]
    },
    {
        id: 11,
        name: 'Pearl Cream',
        price: 59.99,
        category: 'skincare',
        image: '/luxury-white-pearl-cream-jar.jpg',
        images: [
            '/luxury-white-pearl-cream-jar.jpg',
            '/luxury-white-pearl-cream-jar.jpg',
            '/luxury-white-pearl-cream-jar.jpg'
        ],
        rating: 4.7,
        reviews: 156,
        ingredients: [
            'Pearl Powder',
            'Shea Butter',
            'Gold Leaf',
            'Hyaluronic Acid'
        ],
        howToUse: 'Apply to face and neck after toner. Pat gently to absorb. Use morning and evening.',
        reviewsData: [
            {
                name: 'Iris J.',
                rating: 4,
                comment: 'Luxurious feel, skin looks radiant.'
            },
            {
                name: 'Kevin Y.',
                rating: 4,
                comment: 'Good moisturizing pearl cream.'
            },
            {
                name: 'Fiona X.',
                rating: 5,
                comment: 'Best pearl cream for glow!'
            }
        ]
    },
    {
        id: 12,
        name: 'Rose Oil',
        price: 44.99,
        category: 'skincare',
        image: '/luxury-rose-oil-bottle.jpg',
        images: [
            '/luxury-rose-oil-bottle.jpg',
            '/luxury-rose-oil-bottle.jpg',
            '/luxury-rose-oil-bottle.jpg'
        ],
        rating: 4.8,
        reviews: 201,
        ingredients: [
            'Rose Hip Oil',
            'Jojoba Oil',
            'Argan Oil',
            'Vitamin E'
        ],
        howToUse: 'Use 2-3 drops on damp skin. Gently massage in circular motions. Can be used as night oil.',
        reviewsData: [
            {
                name: 'Hannah U.',
                rating: 5,
                comment: 'Beautiful rose fragrance, nourishing oil.'
            },
            {
                name: 'Lucas Q.',
                rating: 5,
                comment: 'Skin feels rejuvenated and glowing.'
            },
            {
                name: 'Molly O.',
                rating: 4,
                comment: 'Good rose oil.'
            }
        ]
    },
    {
        id: 13,
        name: 'Glow Toner',
        price: 34.99,
        category: 'skincare',
        image: '/luxury-purple-toner-bottle.jpg',
        images: [
            '/luxury-purple-toner-bottle.jpg',
            '/luxury-purple-toner-bottle.jpg',
            '/luxury-purple-toner-bottle.jpg'
        ],
        rating: 4.6,
        reviews: 98,
        ingredients: [
            'Niacinamide',
            'Glycerin',
            'Witch Hazel',
            'Vitamin B3'
        ],
        howToUse: 'Apply with cotton pad after cleansing. Swipe across face gently. Follow with moisturizer.',
        reviewsData: [
            {
                name: 'Noah I.',
                rating: 4,
                comment: 'Makes skin glow beautifully.'
            },
            {
                name: 'Ava H.',
                rating: 4,
                comment: 'Good toner for radiant skin.'
            },
            {
                name: 'Ethan G.',
                rating: 5,
                comment: 'Love the glowing effect!'
            }
        ]
    },
    {
        id: 14,
        name: 'Night Elixir',
        price: 54.99,
        category: 'skincare',
        image: '/luxury-night-serum-bottle.jpg',
        images: [
            '/luxury-night-serum-bottle.jpg',
            '/luxury-night-serum-bottle.jpg',
            '/luxury-night-serum-bottle.jpg'
        ],
        rating: 4.9,
        reviews: 167,
        ingredients: [
            'Retinol',
            'Squalane',
            'Peptides',
            'Lavender Oil'
        ],
        howToUse: 'Apply to clean skin before bed. Use 3-4 nights weekly. Follow with night cream.',
        reviewsData: [
            {
                name: 'Mason F.',
                rating: 5,
                comment: 'Wake up with glowing, refreshed skin.'
            },
            {
                name: 'Lily E.',
                rating: 5,
                comment: 'Best night serum for restoration.'
            },
            {
                name: 'Jack D.',
                rating: 4,
                comment: 'Good night elixir.'
            }
        ]
    },
    // Makeup
    {
        id: 15,
        name: 'Luxury Lipstick',
        price: 38,
        category: 'makeup',
        image: '/luxury-lipstick-makeup.jpg',
        images: [
            '/luxury-lipstick-makeup.jpg',
            '/luxury-lipstick-makeup.jpg',
            '/luxury-lipstick-makeup.jpg'
        ],
        rating: 4.8,
        reviews: 145,
        ingredients: [
            'Beeswax',
            'Jojoba Oil',
            'Vitamin E',
            'Color Pigments'
        ],
        howToUse: 'Apply directly to lips. Use lip liner for precision. Reapply as needed throughout the day.',
        reviewsData: [
            {
                name: 'Georgia C.',
                rating: 5,
                comment: 'Rich color and long-lasting formula.'
            },
            {
                name: 'Oscar B.',
                rating: 4,
                comment: 'Beautiful luxury lipstick.'
            },
            {
                name: 'Piper A.',
                rating: 5,
                comment: 'Best lipstick ever!'
            }
        ]
    },
    {
        id: 16,
        name: 'Foundation Primer',
        price: 35,
        category: 'makeup',
        image: '/foundation-primer-makeup.jpg',
        images: [
            '/foundation-primer-makeup.jpg',
            '/foundation-primer-makeup.jpg',
            '/foundation-primer-makeup.jpg'
        ],
        rating: 4.7,
        reviews: 132,
        ingredients: [
            'Silicones',
            'Glycerin',
            'Vitamin E',
            'Mineral Pigments'
        ],
        howToUse: 'Apply to clean, moisturized skin. Wait 1-2 minutes. Apply foundation over primer.',
        reviewsData: [
            {
                name: 'Quinn Z.',
                rating: 4,
                comment: 'Smooth base for makeup application.'
            },
            {
                name: 'Riley Y.',
                rating: 5,
                comment: 'Foundation lasts all day with this primer.'
            },
            {
                name: 'Sam X.',
                rating: 4,
                comment: 'Good primer.'
            }
        ]
    },
    {
        id: 17,
        name: 'Mascara Pro',
        price: 32,
        category: 'makeup',
        image: '/mascara-professional-makeup.jpg',
        images: [
            '/mascara-professional-makeup.jpg',
            '/mascara-professional-makeup.jpg',
            '/mascara-professional-makeup.jpg'
        ],
        rating: 4.9,
        reviews: 189,
        ingredients: [
            'Waxes',
            'Film-forming Agents',
            'Pigments',
            'Oils'
        ],
        howToUse: 'Wiggle brush from lash root to tip. Apply 2-3 coats for desired volume. Remove with makeup remover.',
        reviewsData: [
            {
                name: 'Taylor W.',
                rating: 5,
                comment: 'Voluminous lashes, no clumping!'
            },
            {
                name: 'Union V.',
                rating: 5,
                comment: 'Professional-grade mascara.'
            },
            {
                name: 'Vale U.',
                rating: 4,
                comment: 'Good mascara.'
            }
        ]
    },
    {
        id: 18,
        name: 'Eye Shadow Palette',
        price: 55,
        category: 'makeup',
        image: '/eyeshadow-palette-makeup.jpg',
        images: [
            '/eyeshadow-palette-makeup.jpg',
            '/eyeshadow-palette-makeup.jpg',
            '/eyeshadow-palette-makeup.jpg'
        ],
        rating: 4.8,
        reviews: 267,
        ingredients: [
            'Mica',
            'Talc',
            'Iron Oxides',
            'Titanium Dioxide'
        ],
        howToUse: 'Apply with brush or finger to eyelids. Blend for seamless finish. Use eyeshadow primer for longevity.',
        reviewsData: [
            {
                name: 'Vera T.',
                rating: 5,
                comment: 'Rich pigments, versatile colors.'
            },
            {
                name: 'Wade S.',
                rating: 5,
                comment: 'Best eyeshadow palette!'
            },
            {
                name: 'Xavier R.',
                rating: 4,
                comment: 'Good eyeshadow.'
            }
        ]
    },
    {
        id: 19,
        name: 'Blush',
        price: 28,
        category: 'makeup',
        image: '/blush-makeup-product.jpg',
        images: [
            '/blush-makeup-product.jpg',
            '/blush-makeup-product.jpg',
            '/blush-makeup-product.jpg'
        ],
        rating: 4.6,
        reviews: 118,
        ingredients: [
            'Talc',
            'Mica',
            'Color Pigments',
            'Oils'
        ],
        howToUse: 'Apply to apples of cheeks with fluffy brush. Blend upward toward temples for natural look.',
        reviewsData: [
            {
                name: 'Yara Q.',
                rating: 4,
                comment: 'Natural-looking blush, blends well.'
            },
            {
                name: 'Zeke P.',
                rating: 4,
                comment: 'Good blush color.'
            },
            {
                name: 'Amber O.',
                rating: 5,
                comment: 'Love this blush!'
            }
        ]
    },
    {
        id: 20,
        name: 'Eyeliner',
        price: 22,
        category: 'makeup',
        image: '/eyeliner-makeup.jpg',
        images: [
            '/eyeliner-makeup.jpg',
            '/eyeliner-makeup.jpg',
            '/eyeliner-makeup.jpg'
        ],
        rating: 4.7,
        reviews: 154,
        ingredients: [
            'Waxes',
            'Film-formers',
            'Pigments',
            'Emollients'
        ],
        howToUse: 'Apply along upper lash line. Create winged effect if desired. Use liquid for precision, pencil for softness.',
        reviewsData: [
            {
                name: 'Charlie N.',
                rating: 4,
                comment: 'Precise eyeliner application.'
            },
            {
                name: 'Dakota M.',
                rating: 5,
                comment: 'Perfect eyeliner definition.'
            },
            {
                name: 'Emory L.',
                rating: 4,
                comment: 'Good eyeliner.'
            }
        ]
    },
    {
        id: 21,
        name: 'Foundation',
        price: 48,
        category: 'makeup',
        image: '/foundation-makeup-product.jpg',
        images: [
            '/foundation-makeup-product.jpg',
            '/foundation-makeup-product.jpg',
            '/foundation-makeup-product.jpg'
        ],
        rating: 4.8,
        reviews: 203,
        ingredients: [
            'Water',
            'Silicones',
            'Pigments',
            'Preservatives'
        ],
        howToUse: 'Apply with brush, sponge, or fingers. Blend outward from center of face for even coverage.',
        reviewsData: [
            {
                name: 'Faye K.',
                rating: 5,
                comment: 'Full coverage, natural finish.'
            },
            {
                name: 'Gene J.',
                rating: 5,
                comment: 'Best foundation for all skin types.'
            },
            {
                name: 'Harmony I.',
                rating: 4,
                comment: 'Good foundation.'
            }
        ]
    },
    {
        id: 22,
        name: 'Highlighter',
        price: 32,
        category: 'makeup',
        image: '/highlighter-makeup-product.jpg',
        images: [
            '/highlighter-makeup-product.jpg',
            '/highlighter-makeup-product.jpg',
            '/highlighter-makeup-product.jpg'
        ],
        rating: 4.9,
        reviews: 176,
        ingredients: [
            'Mica',
            'Silica',
            'Color Pigments',
            'Binders'
        ],
        howToUse: 'Apply to high points of face: cheekbones, brow bone, bridge of nose. Blend gently for glow.',
        reviewsData: [
            {
                name: 'Iris H.',
                rating: 5,
                comment: 'Gorgeous shimmer, luminous glow!'
            },
            {
                name: 'Jude G.',
                rating: 5,
                comment: 'Best highlighter for shine.'
            },
            {
                name: 'Kade F.',
                rating: 4,
                comment: 'Good highlighter.'
            }
        ]
    },
    {
        id: 23,
        name: 'Liquid Lipstick',
        price: 29.99,
        category: 'makeup',
        image: '/liquid-lipstick-makeup.jpg',
        images: [
            '/liquid-lipstick-makeup.jpg',
            '/liquid-lipstick-makeup.jpg',
            '/liquid-lipstick-makeup.jpg'
        ],
        rating: 4.7,
        reviews: 142,
        ingredients: [
            'Film-formers',
            'Resins',
            'Pigments',
            'Emollients'
        ],
        howToUse: 'Apply with precision applicator. Start from center of lips and glide outward. Allow to set.',
        reviewsData: [
            {
                name: 'Lena E.',
                rating: 4,
                comment: 'Long-lasting liquid lipstick.'
            },
            {
                name: 'Marco D.',
                rating: 5,
                comment: 'Bold color that lasts all day.'
            },
            {
                name: 'Nina C.',
                rating: 4,
                comment: 'Good liquid lipstick.'
            }
        ]
    },
    // Fragrance
    {
        id: 24,
        name: 'Floral Fragrance',
        price: 85,
        category: 'fragrance',
        image: '/floral-fragrance-perfume.jpg',
        images: [
            '/floral-fragrance-perfume.jpg',
            '/floral-fragrance-perfume.jpg',
            '/floral-fragrance-perfume.jpg'
        ],
        rating: 4.8,
        reviews: 189,
        ingredients: [
            'Rose',
            'Jasmine',
            'Peony',
            'Vanilla'
        ],
        howToUse: 'Spray 2-3 times on pulse points: wrists, neck, behind ears. Dab to diffuse if desired.',
        reviewsData: [
            {
                name: 'Oscar B.',
                rating: 5,
                comment: 'Beautiful floral scent, lasts all day.'
            },
            {
                name: 'Piper A.',
                rating: 5,
                comment: 'Perfect floral fragrance!'
            },
            {
                name: 'Quinn Z.',
                rating: 4,
                comment: 'Good floral perfume.'
            }
        ]
    },
    {
        id: 25,
        name: 'Vanilla Fragrance',
        price: 75,
        category: 'fragrance',
        image: '/vanilla-fragrance-perfume.jpg',
        images: [
            '/vanilla-fragrance-perfume.jpg',
            '/vanilla-fragrance-perfume.jpg',
            '/vanilla-fragrance-perfume.jpg'
        ],
        rating: 4.7,
        reviews: 165,
        ingredients: [
            'Vanilla',
            'Caramel',
            'Amber',
            'Musk'
        ],
        howToUse: 'Apply to pulse points for optimal diffusion. Reapply as needed throughout the day.',
        reviewsData: [
            {
                name: 'Riley Y.',
                rating: 4,
                comment: 'Warm vanilla scent, very comforting.'
            },
            {
                name: 'Sam X.',
                rating: 5,
                comment: 'Love this vanilla fragrance!'
            },
            {
                name: 'Taylor W.',
                rating: 4,
                comment: 'Good vanilla perfume.'
            }
        ]
    },
    {
        id: 26,
        name: 'Citrus Splash',
        price: 68,
        category: 'fragrance',
        image: '/citrus-splash-perfume.jpg',
        images: [
            '/citrus-splash-perfume.jpg',
            '/citrus-splash-perfume.jpg',
            '/citrus-splash-perfume.jpg'
        ],
        rating: 4.9,
        reviews: 178,
        ingredients: [
            'Lemon',
            'Orange',
            'Bergamot',
            'Grapefruit'
        ],
        howToUse: 'Spray on pulse points. Perfect for daytime. Freshens throughout the day with reapplication.',
        reviewsData: [
            {
                name: 'Union V.',
                rating: 5,
                comment: 'Fresh citrus splash, energizing scent!'
            },
            {
                name: 'Vale U.',
                rating: 5,
                comment: 'Best citrus fragrance ever!'
            },
            {
                name: 'Vera T.',
                rating: 4,
                comment: 'Good citrus perfume.'
            }
        ]
    },
    {
        id: 27,
        name: 'Woody Essence',
        price: 92,
        category: 'fragrance',
        image: '/woody-essence-perfume.jpg',
        images: [
            '/woody-essence-perfume.jpg',
            '/woody-essence-perfume.jpg',
            '/woody-essence-perfume.jpg'
        ],
        rating: 4.8,
        reviews: 142,
        ingredients: [
            'Sandalwood',
            'Cedarwood',
            'Vetiver',
            'Patchouli'
        ],
        howToUse: 'Apply to warm areas of body: wrists, chest, inner elbows for best diffusion.',
        reviewsData: [
            {
                name: 'Wade S.',
                rating: 5,
                comment: 'Sophisticated woody scent, very elegant.'
            },
            {
                name: 'Xavier R.',
                rating: 4,
                comment: 'Good woody fragrance.'
            },
            {
                name: 'Yara Q.',
                rating: 5,
                comment: 'Best woody perfume!'
            }
        ]
    },
    {
        id: 28,
        name: 'Ocean Breeze',
        price: 72,
        category: 'fragrance',
        image: '/ocean-breeze-perfume.jpg',
        images: [
            '/ocean-breeze-perfume.jpg',
            '/ocean-breeze-perfume.jpg',
            '/ocean-breeze-perfume.jpg'
        ],
        rating: 4.6,
        reviews: 154,
        ingredients: [
            'Sea Salt',
            'Aquatic Notes',
            'Driftwood',
            'Seaweed'
        ],
        howToUse: 'Perfect for warm weather. Apply generously to pulse points and clothing.',
        reviewsData: [
            {
                name: 'Zeke P.',
                rating: 4,
                comment: 'Refreshing ocean breeze fragrance.'
            },
            {
                name: 'Amber O.',
                rating: 4,
                comment: 'Good aquatic perfume.'
            },
            {
                name: 'Charlie N.',
                rating: 5,
                comment: 'Love this ocean scent!'
            }
        ]
    },
    {
        id: 29,
        name: 'Rose Garden',
        price: 88,
        category: 'fragrance',
        image: '/rose-garden-perfume.jpg',
        images: [
            '/rose-garden-perfume.jpg',
            '/rose-garden-perfume.jpg',
            '/rose-garden-perfume.jpg'
        ],
        rating: 4.9,
        reviews: 201,
        ingredients: [
            'Rose',
            'Gardenia',
            'Lily',
            'Green Notes'
        ],
        howToUse: 'Spray on pulse points for lasting fragrance. Ideal for romantic occasions.',
        reviewsData: [
            {
                name: 'Dakota M.',
                rating: 5,
                comment: 'Romantic rose garden fragrance!'
            },
            {
                name: 'Emory L.',
                rating: 5,
                comment: 'Best rose perfume ever!'
            },
            {
                name: 'Faye K.',
                rating: 4,
                comment: 'Good rose garden fragrance.'
            }
        ]
    },
    {
        id: 30,
        name: 'Musk Elegance',
        price: 78,
        category: 'fragrance',
        image: '/musk-elegance-perfume.jpg',
        images: [
            '/musk-elegance-perfume.jpg',
            '/musk-elegance-perfume.jpg',
            '/musk-elegance-perfume.jpg'
        ],
        rating: 4.7,
        reviews: 167,
        ingredients: [
            'Musk',
            'Amber',
            'Vanilla',
            'Sandalwood'
        ],
        howToUse: 'Apply to skin for sensual, lasting fragrance. Creates a beautiful personal scent profile.',
        reviewsData: [
            {
                name: 'Gene J.',
                rating: 4,
                comment: 'Elegant musk fragrance.'
            },
            {
                name: 'Harmony I.',
                rating: 5,
                comment: 'Love the musk elegance!'
            },
            {
                name: 'Iris H.',
                rating: 4,
                comment: 'Good musk perfume.'
            }
        ]
    },
    {
        id: 31,
        name: 'Jasmine Night',
        price: 82,
        category: 'fragrance',
        image: '/jasmine-night-perfume.jpg',
        images: [
            '/jasmine-night-perfume.jpg',
            '/jasmine-night-perfume.jpg',
            '/jasmine-night-perfume.jpg'
        ],
        rating: 4.8,
        reviews: 189,
        ingredients: [
            'Jasmine',
            'Tuberose',
            'Ylang Ylang',
            'Tonka'
        ],
        howToUse: 'Perfect for evening wear. Apply to pulse points for optimal scent throw.',
        reviewsData: [
            {
                name: 'Jude G.',
                rating: 5,
                comment: 'Beautiful jasmine night fragrance!'
            },
            {
                name: 'Kade F.',
                rating: 5,
                comment: 'Best night perfume ever!'
            },
            {
                name: 'Lena E.',
                rating: 4,
                comment: 'Good jasmine fragrance.'
            }
        ]
    },
    {
        id: 32,
        name: 'Lavender Essence',
        price: 64.99,
        category: 'fragrance',
        image: '/lavender-essence-perfume.jpg',
        images: [
            '/lavender-essence-perfume.jpg',
            '/lavender-essence-perfume.jpg',
            '/lavender-essence-perfume.jpg'
        ],
        rating: 4.8,
        reviews: 132,
        ingredients: [
            'Lavender',
            'Chamomile',
            'Eucalyptus',
            'Bergamot'
        ],
        howToUse: 'Apply to pulse points. Calming scent perfect for relaxation and everyday wear.',
        reviewsData: [
            {
                name: 'Marco D.',
                rating: 5,
                comment: 'Calming lavender essence!'
            },
            {
                name: 'Nina C.',
                rating: 4,
                comment: 'Good lavender fragrance.'
            },
            {
                name: 'Oscar B.',
                rating: 5,
                comment: 'Best lavender perfume!'
            }
        ]
    },
    // Wellness
    {
        id: 33,
        name: 'Hair Growth Supplement',
        price: 48,
        category: 'wellness',
        image: '/hair-growth-supplement.jpg',
        images: [
            '/hair-growth-supplement.jpg',
            '/hair-growth-supplement.jpg',
            '/hair-growth-supplement.jpg'
        ],
        rating: 4.7,
        reviews: 118,
        ingredients: [
            'Biotin',
            'Collagen',
            'Keratin',
            'Vitamins B & C'
        ],
        howToUse: 'Take 2 capsules daily with water. Best results after 3 months of consistent use.',
        reviewsData: [
            {
                name: 'Piper A.',
                rating: 4,
                comment: 'Noticeable hair growth after 2 months.'
            },
            {
                name: 'Quinn Z.',
                rating: 4,
                comment: 'Good hair supplement.'
            },
            {
                name: 'Riley Y.',
                rating: 5,
                comment: 'Best hair growth supplement!'
            }
        ]
    },
    {
        id: 34,
        name: 'Collagen Powder',
        price: 55,
        category: 'wellness',
        image: '/collagen-powder-beauty.jpg',
        images: [
            '/collagen-powder-beauty.jpg',
            '/collagen-powder-beauty.jpg',
            '/collagen-powder-beauty.jpg'
        ],
        rating: 4.8,
        reviews: 176,
        ingredients: [
            'Hydrolyzed Collagen',
            'Vitamin C',
            'Hyaluronic Acid',
            'Biotin'
        ],
        howToUse: 'Mix 1 scoop with water or beverage daily. Best taken in the morning.',
        reviewsData: [
            {
                name: 'Sam X.',
                rating: 5,
                comment: 'Skin feels more elastic and hydrated.'
            },
            {
                name: 'Taylor W.',
                rating: 5,
                comment: 'Best collagen powder!'
            },
            {
                name: 'Union V.',
                rating: 4,
                comment: 'Good collagen supplement.'
            }
        ]
    },
    {
        id: 35,
        name: 'Vitamin Serum',
        price: 52,
        category: 'wellness',
        image: '/vitamin-serum-wellness.jpg',
        images: [
            '/vitamin-serum-wellness.jpg',
            '/vitamin-serum-wellness.jpg',
            '/vitamin-serum-wellness.jpg'
        ],
        rating: 4.9,
        reviews: 203,
        ingredients: [
            'Vitamin C',
            'Vitamin E',
            'Vitamin B Complex',
            'Antioxidants'
        ],
        howToUse: 'Apply 2-3 drops to face daily. Use morning and night for best results.',
        reviewsData: [
            {
                name: 'Vale U.',
                rating: 5,
                comment: 'Brightens skin significantly!'
            },
            {
                name: 'Vera T.',
                rating: 5,
                comment: 'Best vitamin serum ever!'
            },
            {
                name: 'Wade S.',
                rating: 4,
                comment: 'Good vitamin serum.'
            }
        ]
    },
    {
        id: 36,
        name: 'Hydration Tablets',
        price: 35,
        category: 'wellness',
        image: '/hydration-tablets-wellness.jpg',
        images: [
            '/hydration-tablets-wellness.jpg',
            '/hydration-tablets-wellness.jpg',
            '/hydration-tablets-wellness.jpg'
        ],
        rating: 4.6,
        reviews: 145,
        ingredients: [
            'Electrolytes',
            'Coconut Water',
            'Vitamin B',
            'Minerals'
        ],
        howToUse: 'Dissolve 1 tablet in water. Drink throughout the day for optimal hydration.',
        reviewsData: [
            {
                name: 'Xavier R.',
                rating: 4,
                comment: 'Great hydration tablets.'
            },
            {
                name: 'Yara Q.',
                rating: 4,
                comment: 'Good wellness product.'
            },
            {
                name: 'Zeke P.',
                rating: 5,
                comment: 'Best hydration tablets!'
            }
        ]
    },
    {
        id: 37,
        name: 'Skin Glow Capsules',
        price: 62,
        category: 'wellness',
        image: '/skin-glow-capsules.jpg',
        images: [
            '/skin-glow-capsules.jpg',
            '/skin-glow-capsules.jpg',
            '/skin-glow-capsules.jpg'
        ],
        rating: 4.8,
        reviews: 189,
        ingredients: [
            'Astaxanthin',
            'Lutein',
            'Selenium',
            'Vitamin A'
        ],
        howToUse: 'Take 1 capsule daily with meals. Consistent use recommended for visible glow.',
        reviewsData: [
            {
                name: 'Amber O.',
                rating: 5,
                comment: 'Skin looks more radiant and glowing!'
            },
            {
                name: 'Charlie N.',
                rating: 4,
                comment: 'Good glow capsules.'
            },
            {
                name: 'Dakota M.',
                rating: 5,
                comment: 'Best skin glow supplement!'
            }
        ]
    },
    {
        id: 38,
        name: 'Bio Serum',
        price: 45,
        category: 'wellness',
        image: '/bio-serum-wellness.jpg',
        images: [
            '/bio-serum-wellness.jpg',
            '/bio-serum-wellness.jpg',
            '/bio-serum-wellness.jpg'
        ],
        rating: 4.7,
        reviews: 132,
        ingredients: [
            'Bioactive Peptides',
            'Marine Extract',
            'Hyaluronic Acid',
            'CoQ10'
        ],
        howToUse: 'Apply 3-5 drops to face and neck daily. Massage gently until absorbed.',
        reviewsData: [
            {
                name: 'Emory L.',
                rating: 4,
                comment: 'Good bio serum.'
            },
            {
                name: 'Faye K.',
                rating: 5,
                comment: 'Skin feels rejuvenated!'
            },
            {
                name: 'Gene J.',
                rating: 4,
                comment: 'Nice serum.'
            }
        ]
    },
    {
        id: 39,
        name: 'Antioxidant Blend',
        price: 58,
        category: 'wellness',
        image: '/antioxidant-blend-wellness.jpg',
        images: [
            '/antioxidant-blend-wellness.jpg',
            '/antioxidant-blend-wellness.jpg',
            '/antioxidant-blend-wellness.jpg'
        ],
        rating: 4.9,
        reviews: 167,
        ingredients: [
            'Green Tea Extract',
            'Resveratrol',
            'Quercetin',
            'Polyphenols'
        ],
        howToUse: 'Mix 1 scoop daily with water or juice. Antioxidant protection for overall wellness.',
        reviewsData: [
            {
                name: 'Harmony I.',
                rating: 5,
                comment: 'Great antioxidant blend!'
            },
            {
                name: 'Iris H.',
                rating: 5,
                comment: 'Best antioxidant supplement!'
            },
            {
                name: 'Jude G.',
                rating: 4,
                comment: 'Good antioxidant product.'
            }
        ]
    },
    {
        id: 40,
        name: 'Youth Complex',
        price: 70,
        category: 'wellness',
        image: '/youth-complex-supplement.jpg',
        images: [
            '/youth-complex-supplement.jpg',
            '/youth-complex-supplement.jpg',
            '/youth-complex-supplement.jpg'
        ],
        rating: 4.8,
        reviews: 154,
        ingredients: [
            'NAD+',
            'Telomerase Activators',
            'Mitochondrial Support',
            'Anti-Aging Complex'
        ],
        howToUse: 'Take 2 capsules daily. Best results when combined with healthy lifestyle.',
        reviewsData: [
            {
                name: 'Kade F.',
                rating: 5,
                comment: 'Feeling more youthful and energetic!'
            },
            {
                name: 'Lena E.',
                rating: 5,
                comment: 'Best youth complex!'
            },
            {
                name: 'Marco D.',
                rating: 4,
                comment: 'Good supplement.'
            }
        ]
    },
    // Sets
    {
        id: 41,
        name: 'Skincare Starter Set',
        price: 89,
        category: 'sets',
        image: '/skincare-starter-set.jpg',
        images: [
            '/skincare-starter-set.jpg',
            '/skincare-starter-set.jpg',
            '/skincare-starter-set.jpg'
        ],
        rating: 4.9,
        reviews: 267,
        ingredients: [
            'Multiple skincare actives'
        ],
        howToUse: 'Use each product as directed. Complete skincare routine included.',
        reviewsData: [
            {
                name: 'Nina C.',
                rating: 5,
                comment: 'Perfect starter set for skincare!'
            },
            {
                name: 'Oscar B.',
                rating: 5,
                comment: 'Best value skincare set!'
            },
            {
                name: 'Piper A.',
                rating: 4,
                comment: 'Good skincare bundle.'
            }
        ]
    },
    {
        id: 42,
        name: 'Makeup Essentials Bundle',
        price: 125,
        category: 'sets',
        image: '/makeup-essentials-bundle.jpg',
        images: [
            '/makeup-essentials-bundle.jpg',
            '/makeup-essentials-bundle.jpg',
            '/makeup-essentials-bundle.jpg'
        ],
        rating: 4.8,
        reviews: 312,
        ingredients: [
            'Various makeup pigments and binders'
        ],
        howToUse: 'All essential makeup products included. Apply as desired.',
        reviewsData: [
            {
                name: 'Quinn Z.',
                rating: 5,
                comment: 'Amazing makeup bundle!'
            },
            {
                name: 'Riley Y.',
                rating: 5,
                comment: 'Best makeup set ever!'
            },
            {
                name: 'Sam X.',
                rating: 4,
                comment: 'Good makeup essentials.'
            }
        ]
    },
    {
        id: 43,
        name: 'Luxury Travel Set',
        price: 79,
        category: 'sets',
        image: '/luxury-travel-set.jpg',
        images: [
            '/luxury-travel-set.jpg',
            '/luxury-travel-set.jpg',
            '/luxury-travel-set.jpg'
        ],
        rating: 4.7,
        reviews: 198,
        ingredients: [
            'Travel-size luxury products'
        ],
        howToUse: 'Portable sizes for on-the-go beauty routine. TSA compliant.',
        reviewsData: [
            {
                name: 'Taylor W.',
                rating: 4,
                comment: 'Perfect travel set.'
            },
            {
                name: 'Union V.',
                rating: 5,
                comment: 'Best travel bundle!'
            },
            {
                name: 'Vale U.',
                rating: 4,
                comment: 'Good portable set.'
            }
        ]
    },
    {
        id: 44,
        name: 'Date Night Set',
        price: 95,
        category: 'sets',
        image: '/date-night-makeup-set.jpg',
        images: [
            '/date-night-makeup-set.jpg',
            '/date-night-makeup-set.jpg',
            '/date-night-makeup-set.jpg'
        ],
        rating: 4.8,
        reviews: 276,
        ingredients: [
            'Glamorous makeup and fragrance'
        ],
        howToUse: 'Create stunning date night looks with this complete collection.',
        reviewsData: [
            {
                name: 'Vera T.',
                rating: 5,
                comment: 'Perfect for date night!'
            },
            {
                name: 'Wade S.',
                rating: 5,
                comment: 'Best date set!'
            },
            {
                name: 'Xavier R.',
                rating: 4,
                comment: 'Good date collection.'
            }
        ]
    },
    {
        id: 45,
        name: 'Glow Getter Set',
        price: 110,
        category: 'sets',
        image: '/glow-getter-set.jpg',
        images: [
            '/glow-getter-set.jpg',
            '/glow-getter-set.jpg',
            '/glow-getter-set.jpg'
        ],
        rating: 4.9,
        reviews: 287,
        ingredients: [
            'Glowing skincare and makeup'
        ],
        howToUse: 'Achieve radiant glowing skin with this complete routine.',
        reviewsData: [
            {
                name: 'Yara Q.',
                rating: 5,
                comment: 'Amazing glow collection!'
            },
            {
                name: 'Zeke P.',
                rating: 5,
                comment: 'Best glow set ever!'
            },
            {
                name: 'Amber O.',
                rating: 4,
                comment: 'Good glow bundle.'
            }
        ]
    },
    {
        id: 46,
        name: 'Wellness Bundle',
        price: 135,
        category: 'sets',
        image: '/wellness-bundle-set.jpg',
        images: [
            '/wellness-bundle-set.jpg',
            '/wellness-bundle-set.jpg',
            '/wellness-bundle-set.jpg'
        ],
        rating: 4.8,
        reviews: 234,
        ingredients: [
            'Complete wellness products'
        ],
        howToUse: 'Full wellness routine for complete beauty and health.',
        reviewsData: [
            {
                name: 'Charlie N.',
                rating: 5,
                comment: 'Complete wellness solution!'
            },
            {
                name: 'Dakota M.',
                rating: 4,
                comment: 'Good wellness bundle.'
            },
            {
                name: 'Emory L.',
                rating: 5,
                comment: 'Best wellness set!'
            }
        ]
    },
    {
        id: 47,
        name: 'Complete Beauty Set',
        price: 150,
        category: 'sets',
        image: '/complete-beauty-set.jpg',
        images: [
            '/complete-beauty-set.jpg',
            '/complete-beauty-set.jpg',
            '/complete-beauty-set.jpg'
        ],
        rating: 4.9,
        reviews: 298,
        ingredients: [
            'Full beauty collection'
        ],
        howToUse: 'Everything needed for complete beauty routine.',
        reviewsData: [
            {
                name: 'Faye K.',
                rating: 5,
                comment: 'Incredible complete set!'
            },
            {
                name: 'Gene J.',
                rating: 5,
                comment: 'Best beauty collection!'
            },
            {
                name: 'Harmony I.',
                rating: 4,
                comment: 'Good complete set.'
            }
        ]
    },
    {
        id: 48,
        name: 'Signature Collection',
        price: 180,
        category: 'sets',
        image: '/signature-collection-set.jpg',
        images: [
            '/signature-collection-set.jpg',
            '/signature-collection-set.jpg',
            '/signature-collection-set.jpg'
        ],
        rating: 4.9,
        reviews: 324,
        ingredients: [
            'Premium signature products'
        ],
        howToUse: 'Luxury signature products for elevated beauty experience.',
        reviewsData: [
            {
                name: 'Iris H.',
                rating: 5,
                comment: 'Luxurious signature set!'
            },
            {
                name: 'Jude G.',
                rating: 5,
                comment: 'Best signature collection!'
            },
            {
                name: 'Kade F.',
                rating: 4,
                comment: 'Good premium set.'
            }
        ]
    },
    // Haircare
    {
        id: 49,
        name: 'Volumizing Shampoo',
        price: 32,
        category: 'haircare',
        image: '/volumizing-shampoo-haircare.jpg',
        images: [
            '/volumizing-shampoo-haircare.jpg',
            '/volumizing-shampoo-haircare.jpg',
            '/volumizing-shampoo-haircare.jpg'
        ],
        rating: 4.7,
        reviews: 156,
        ingredients: [
            'Volumizing Polymers',
            'Wheat Protein',
            'Panthenol',
            'Biotin'
        ],
        howToUse: 'Wet hair with warm water. Apply shampoo, massage scalp. Rinse thoroughly.',
        reviewsData: [
            {
                name: 'Lena E.',
                rating: 4,
                comment: 'Great volume in hair.'
            },
            {
                name: 'Marco D.',
                rating: 5,
                comment: 'Best volumizing shampoo!'
            },
            {
                name: 'Nina C.',
                rating: 4,
                comment: 'Good volume product.'
            }
        ]
    },
    {
        id: 50,
        name: 'Deep Conditioner',
        price: 38,
        category: 'haircare',
        image: '/deep-conditioner-haircare.jpg',
        images: [
            '/deep-conditioner-haircare.jpg',
            '/deep-conditioner-haircare.jpg',
            '/deep-conditioner-haircare.jpg'
        ],
        rating: 4.8,
        reviews: 189,
        ingredients: [
            'Keratin',
            'Argan Oil',
            'Shea Butter',
            'Silk Proteins'
        ],
        howToUse: 'Apply to damp hair from mid-length to ends. Leave for 10-15 minutes. Rinse.',
        reviewsData: [
            {
                name: 'Oscar B.',
                rating: 5,
                comment: 'Hair feels deeply moisturized!'
            },
            {
                name: 'Piper A.',
                rating: 5,
                comment: 'Best deep conditioner!'
            },
            {
                name: 'Quinn Z.',
                rating: 4,
                comment: 'Good conditioning.'
            }
        ]
    },
    {
        id: 51,
        name: 'Hair Growth Serum',
        price: 48,
        category: 'haircare',
        image: '/hair-growth-serum.jpg',
        images: [
            '/hair-growth-serum.jpg',
            '/hair-growth-serum.jpg',
            '/hair-growth-serum.jpg'
        ],
        rating: 4.9,
        reviews: 214,
        ingredients: [
            'Minoxidil',
            'Caffeine',
            'Biotin',
            'Plant Extracts'
        ],
        howToUse: 'Apply directly to scalp daily. Massage gently. Best results after 3-6 months.',
        reviewsData: [
            {
                name: 'Riley Y.',
                rating: 5,
                comment: 'Noticeable hair growth!'
            },
            {
                name: 'Sam X.',
                rating: 5,
                comment: 'Best hair serum!'
            },
            {
                name: 'Taylor W.',
                rating: 4,
                comment: 'Good growth serum.'
            }
        ]
    },
    {
        id: 52,
        name: 'Silk Hair Mask',
        price: 42,
        category: 'haircare',
        image: '/silk-hair-mask-treatment.jpg',
        images: [
            '/silk-hair-mask-treatment.jpg',
            '/silk-hair-mask-treatment.jpg',
            '/silk-hair-mask-treatment.jpg'
        ],
        rating: 4.8,
        reviews: 167,
        ingredients: [
            'Silk Proteins',
            'Hyaluronic Acid',
            'Panthenol',
            'Vitamin E'
        ],
        howToUse: 'Apply to hair after shampooing. Leave for 20 minutes. Rinse thoroughly.',
        reviewsData: [
            {
                name: 'Union V.',
                rating: 5,
                comment: 'Hair feels incredibly silky!'
            },
            {
                name: 'Vale U.',
                rating: 4,
                comment: 'Good silk mask.'
            },
            {
                name: 'Vera T.',
                rating: 5,
                comment: 'Best hair mask!'
            }
        ]
    },
    {
        id: 53,
        name: 'Keratin Treatment',
        price: 55,
        category: 'haircare',
        image: '/keratin-treatment-haircare.jpg',
        images: [
            '/keratin-treatment-haircare.jpg',
            '/keratin-treatment-haircare.jpg',
            '/keratin-treatment-haircare.jpg'
        ],
        rating: 4.9,
        reviews: 245,
        ingredients: [
            'Brazilian Keratin',
            'Collagen',
            'Amino Acids',
            'Formaldehyde-free'
        ],
        howToUse: 'Apply to damp hair. Leave for 60 minutes. Dry and straighten hair. Results last 3-4 weeks.',
        reviewsData: [
            {
                name: 'Wade S.',
                rating: 5,
                comment: 'Smooth, frizz-free hair!'
            },
            {
                name: 'Xavier R.',
                rating: 5,
                comment: 'Best keratin treatment!'
            },
            {
                name: 'Yara Q.',
                rating: 4,
                comment: 'Good treatment.'
            }
        ]
    },
    {
        id: 54,
        name: 'Anti-Frizz Spray',
        price: 28,
        category: 'haircare',
        image: '/anti-frizz-spray-haircare.jpg',
        images: [
            '/anti-frizz-spray-haircare.jpg',
            '/anti-frizz-spray-haircare.jpg',
            '/anti-frizz-spray-haircare.jpg'
        ],
        rating: 4.7,
        reviews: 132,
        ingredients: [
            'Silicone Oil',
            'Argan Oil',
            'Vitamin E',
            'UV Protectant'
        ],
        howToUse: 'Spray on dry or damp hair before styling. Distributes evenly for frizz control.',
        reviewsData: [
            {
                name: 'Zeke P.',
                rating: 4,
                comment: 'Great frizz control.'
            },
            {
                name: 'Amber O.',
                rating: 4,
                comment: 'Good anti-frizz spray.'
            },
            {
                name: 'Charlie N.',
                rating: 5,
                comment: 'Best frizz control!'
            }
        ]
    },
    {
        id: 55,
        name: 'Hair Oil Elixir',
        price: 35,
        category: 'haircare',
        image: '/hair-oil-elixir.jpg',
        images: [
            '/hair-oil-elixir.jpg',
            '/hair-oil-elixir.jpg',
            '/hair-oil-elixir.jpg'
        ],
        rating: 4.8,
        reviews: 178,
        ingredients: [
            'Argan Oil',
            'Coconut Oil',
            'Jojoba Oil',
            'Lavender Essential Oil'
        ],
        howToUse: 'Apply to hair tips and ends. Use as overnight treatment or styling oil.',
        reviewsData: [
            {
                name: 'Dakota M.',
                rating: 5,
                comment: 'Hair shines beautifully!'
            },
            {
                name: 'Emory L.',
                rating: 4,
                comment: 'Good hair oil.'
            },
            {
                name: 'Faye K.',
                rating: 5,
                comment: 'Best hair elixir!'
            }
        ]
    },
    {
        id: 56,
        name: 'Scalp Therapy Shampoo',
        price: 36,
        category: 'haircare',
        image: '/scalp-therapy-shampoo.jpg',
        images: [
            '/scalp-therapy-shampoo.jpg',
            '/scalp-therapy-shampoo.jpg',
            '/scalp-therapy-shampoo.jpg'
        ],
        rating: 4.6,
        reviews: 145,
        ingredients: [
            'Salicylic Acid',
            'Tea Tree Oil',
            'Zinc Pyrithione',
            'Aloe Vera'
        ],
        howToUse: 'Apply to scalp, massage for 2-3 minutes. Rinse thoroughly. Use 2-3 times weekly.',
        reviewsData: [
            {
                name: 'Gene J.',
                rating: 4,
                comment: 'Scalp feels healthier.'
            },
            {
                name: 'Harmony I.',
                rating: 4,
                comment: 'Good therapy shampoo.'
            },
            {
                name: 'Iris H.',
                rating: 5,
                comment: 'Best scalp treatment!'
            }
        ]
    }
];
const searchProducts = (query)=>{
    if (!query.trim()) return [];
    const lowercaseQuery = query.toLowerCase();
    return ALL_PRODUCTS.filter((product)=>product.name.toLowerCase().includes(lowercaseQuery) || product.category.toLowerCase().includes(lowercaseQuery)).slice(0, 8);
};
const getProductById = (id)=>{
    return ALL_PRODUCTS.find((product)=>product.id === id);
};
}),
"[project]/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadsetIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headset.js [app-ssr] (ecmascript) <export default as HeadsetIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Header() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSearchResults, setShowSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Shop All',
            href: '/shop-all'
        },
        {
            label: 'Shop',
            dropdown: [
                {
                    label: 'Makeup',
                    href: '/makeup'
                },
                {
                    label: 'Skincare',
                    href: '/skincare'
                },
                {
                    label: 'Wellness',
                    href: '/wellness'
                },
                {
                    label: 'Fragrance',
                    href: '/fragrance'
                },
                {
                    label: 'Sets',
                    href: '/sets'
                },
                {
                    label: 'Haircare',
                    href: '/haircare'
                }
            ]
        },
        {
            label: 'About',
            href: '/about'
        }
    ];
    const handleSearch = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim()) {
            const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["searchProducts"])(query);
            setSearchResults(results);
            setShowSearchResults(true);
        } else {
            setSearchResults([]);
            setShowSearchResults(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSearchResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-primary-foreground text-xs sm:text-sm py-2 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: "REHHA — Glow Your Everyday Glam"
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sm:hidden",
                            children: "REHHA - Premium Beauty"
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 sm:gap-4 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    children: "EN"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/support",
                                    className: "hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadsetIcon$3e$__["HeadsetIcon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/header.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-card shadow-sm sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-xl sm:text-2xl text-primary font-semibold",
                                        children: "REHHA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex flex-1 mx-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full relative",
                                            ref: searchRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search products...",
                                                    value: searchQuery,
                                                    onChange: handleSearch,
                                                    onFocus: ()=>searchQuery && setShowSearchResults(true),
                                                    className: "w-full pl-10 pr-4 py-2 bg-muted rounded-full text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                showSearchResults && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-50",
                                                    children: searchResults.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/product/${product.id}`,
                                                            className: "flex items-center gap-3 p-2 hover:bg-muted rounded-lg transition",
                                                            onClick: ()=>setShowSearchResults(false),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: product.image || "/placeholder.svg",
                                                                    alt: product.name,
                                                                    className: "w-10 h-10 rounded object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-medium text-foreground truncate",
                                                                            children: product.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/header.tsx",
                                                                            lineNumber: 104,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-muted-foreground capitalize",
                                                                            children: product.category
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/header.tsx",
                                                                            lineNumber: 105,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 103,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold text-primary",
                                                                    children: [
                                                                        "$",
                                                                        product.price
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, product.id, true, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/account",
                                                className: "flex items-center gap-2 hover:text-primary transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cart",
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:hidden flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/account",
                                                className: "text-foreground hover:text-primary transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/cart",
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsOpen(!isOpen),
                                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 55
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden mt-4 pt-4 border-t border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    ref: searchRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search products...",
                                                    value: searchQuery,
                                                    onChange: handleSearch,
                                                    onFocus: ()=>searchQuery && setShowSearchResults(true),
                                                    className: "w-full pl-10 pr-4 py-2 bg-muted rounded-full text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        showSearchResults && searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-2 z-50 max-h-64 overflow-y-auto",
                                            children: searchResults.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/product/${product.id}`,
                                                    className: "flex items-center gap-3 p-2 hover:bg-muted rounded-lg transition",
                                                    onClick: ()=>{
                                                        setShowSearchResults(false);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: product.image || "/placeholder.svg",
                                                            alt: product.name,
                                                            className: "w-10 h-10 rounded object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-foreground truncate",
                                                                    children: product.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground capitalize",
                                                                    children: product.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-primary",
                                                            children: [
                                                                "$",
                                                                product.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, product.id, true, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden mt-4 pt-4 border-t border-border space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "flex flex-col gap-3",
                                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                item.dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setOpenDropdown(openDropdown === item.label ? null : item.label),
                                                    className: "flex items-center justify-between w-full hover:text-primary transition text-base",
                                                    children: [
                                                        item.label,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: `w-4 h-4 transition ${openDropdown === item.label ? 'rotate-180' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "block hover:text-primary transition text-base",
                                                    onClick: ()=>setIsOpen(false),
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 23
                                                }, this),
                                                item.dropdown && openDropdown === item.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-4 mt-2 space-y-2 border-l border-border",
                                                    children: item.dropdown.map((subitem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: subitem.href,
                                                            className: "block px-4 py-2 hover:bg-muted hover:text-primary transition first:rounded-t-lg last:rounded-b-lg text-sm",
                                                            onClick: ()=>setIsOpen(false),
                                                            children: subitem.label
                                                        }, subitem.href, false, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:block bg-secondary/20 border-t border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto w-full px-4 py-2 flex justify-center gap-8 text-sm text-black bg-neutral-300",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        item.dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setOpenDropdown(openDropdown === item.label ? null : item.label),
                                            className: "hover:text-primary transition flex items-center gap-1 py-2",
                                            children: [
                                                item.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `w-4 h-4 transition ${openDropdown === item.label ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "hover:text-primary transition py-2 block",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this),
                                        item.dropdown && openDropdown === item.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 mt-0 w-40 bg-card border border-border rounded-lg shadow-lg z-20",
                                            children: item.dropdown.map((subitem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: subitem.href,
                                                    className: "block px-4 py-2 hover:bg-muted hover:text-primary transition first:rounded-t-lg last:rounded-b-lg text-sm",
                                                    children: subitem.label
                                                }, subitem.href, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 251,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-primary text-primary-foreground py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 7,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm opacity-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "All Products"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 9,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 9,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Skincare"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 10,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 10,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Makeup"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 11,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 11,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Sets"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 12,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 12,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 8,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm opacity-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 18,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/support",
                                                className: "hover:opacity-100 transition",
                                                children: "Support"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Blog"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 20,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Careers"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 21,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm opacity-90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Shipping"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Returns"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:opacity-100 transition",
                                                children: "Privacy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Newsletter"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "opacity-90 mb-3 text-xs",
                                    children: "Get exclusive offers and beauty tips"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter email",
                                    className: "w-full px-3 py-2 rounded-lg bg-primary-foreground text-primary text-sm"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2",
                            children: "© 2025 REHHA. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            children: "Designed & Developed by Sujan Das under the © 2025 Wearofit. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/product/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ProductPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const productId = Number(params.id);
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].find((p)=>p.id === productId);
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('50ml');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ingredients');
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-7xl mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-muted-foreground",
                        children: "Product not found"
                    }, void 0, false, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/product/[id]/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/product/[id]/page.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    const images = product.images || [
        '/placeholder.svg',
        '/placeholder.svg',
        '/placeholder.svg'
    ];
    const productDetails = {
        brand: 'REHHA',
        rating: product.rating || 4.8,
        reviews: product.reviews || 124,
        description: 'Indulge in luxury with our premium beauty product, infused with rare botanical extracts and premium ingredients. Perfect for all skin types.'
    };
    const relatedProducts = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALL_PRODUCTS"].filter((p)=>p.category === product.category && p.id !== productId).slice(0, 6);
    const handleAddToCart = ()=>{
        console.log(`[v0] Added ${quantity}x ${product.name} (${selectedSize}) to cart`);
    };
    const handleRatingClick = ()=>{
        setActiveTab('reviews');
        setTimeout(()=>{
            document.querySelector('[data-reviews-section]')?.scrollIntoView({
                behavior: 'smooth'
            });
        }, 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted rounded-2xl overflow-hidden h-96 lg:h-[500px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: images[selectedImage] || "/placeholder.svg",
                                            alt: product.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/product/[id]/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedImage(idx),
                                                className: `w-20 h-20 rounded-lg overflow-hidden border-2 transition ${selectedImage === idx ? 'border-primary' : 'border-border'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: img || "/placeholder.svg",
                                                    alt: "",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-primary text-sm font-semibold mb-2",
                                                children: productDetails.brand
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-3xl lg:text-4xl font-bold text-foreground mb-4",
                                                children: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: handleRatingClick,
                                                className: "flex items-center gap-4 mb-4 cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1 group-hover:scale-110 transition-transform",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: `w-5 h-5 ${i < Math.floor(productDetails.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`
                                                            }, i, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 100,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground group-hover:text-foreground transition cursor-pointer",
                                                        children: [
                                                            "(",
                                                            productDetails.reviews,
                                                            " reviews)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground text-lg",
                                                children: productDetails.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-b border-border py-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl font-bold text-primary mb-2",
                                                children: [
                                                    "$",
                                                    product.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Free shipping on orders over $50"
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-foreground mb-2",
                                                        children: "Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            '30ml',
                                                            '50ml',
                                                            '100ml'
                                                        ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setSelectedSize(size),
                                                                className: `px-4 py-2 border rounded-lg transition ${selectedSize === size ? 'border-primary bg-primary/10' : 'border-border hover:border-primary hover:bg-primary/10'}`,
                                                                children: size
                                                            }, size, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-foreground mb-2",
                                                        children: "Quantity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                                className: "w-10 h-10 border border-border rounded-lg hover:bg-muted transition",
                                                                children: "−"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-semibold",
                                                                children: quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setQuantity(quantity + 1),
                                                                className: "w-10 h-10 border border-border rounded-lg hover:bg-muted transition",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleAddToCart,
                                                className: "flex-1 bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:bg-primary/90 transition text-lg flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Add to Cart"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-secondary/20 rounded-xl p-4 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-5 h-5 text-primary flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground",
                                                        children: "100% Natural Ingredients"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-5 h-5 text-primary flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground",
                                                        children: "Cruelty-Free & Vegan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-5 h-5 text-primary flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground",
                                                        children: "Dermatologist Tested"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card rounded-2xl p-8 shadow-md mb-16",
                        "data-reviews-section": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8 border-b border-border mb-6 overflow-x-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('ingredients'),
                                        className: `pb-4 font-semibold transition whitespace-nowrap ${activeTab === 'ingredients' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`,
                                        children: "Ingredients"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('howToUse'),
                                        className: `pb-4 font-semibold transition whitespace-nowrap ${activeTab === 'howToUse' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`,
                                        children: "How to Use"
                                    }, void 0, false, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab('reviews'),
                                        className: `pb-4 font-semibold transition whitespace-nowrap ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`,
                                        children: [
                                            "Reviews (",
                                            productDetails.reviews,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-foreground",
                                children: [
                                    activeTab === 'ingredients' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold mb-4",
                                                children: "Key Ingredients:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: product.ingredients?.map((ingredient, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "• ",
                                                            ingredient
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === 'howToUse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold mb-4",
                                                children: "How to Use:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground leading-relaxed",
                                                children: product.howToUse
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    activeTab === 'reviews' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm mb-2",
                                                                    children: "Average Rating"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-4xl font-bold text-primary",
                                                                            children: productDetails.rating
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                                            lineNumber: 244,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-1",
                                                                            children: [
                                                                                ...Array(5)
                                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                    className: `w-5 h-5 ${i < Math.floor(productDetails.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`
                                                                                }, i, false, {
                                                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                                                    lineNumber: 247,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                                            lineNumber: 245,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-foreground",
                                                                    children: productDetails.reviews
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground text-sm",
                                                                    children: "customer reviews"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/product/[id]/page.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: product.reviewsData?.map((review, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 mb-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-semibold text-foreground",
                                                                                        children: review.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                                        lineNumber: 265,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "inline-flex items-center gap-1 bg-green-500/10 text-green-700 text-xs px-2 py-1 rounded-full font-medium",
                                                                                        children: "✓ Verified Purchase"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                                        lineNumber: 266,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                                lineNumber: 264,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex gap-1",
                                                                                children: [
                                                                                    ...Array(5)
                                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                        className: `w-4 h-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`
                                                                                    }, i, false, {
                                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                                        lineNumber: 272,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                                lineNumber: 270,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-muted-foreground whitespace-nowrap ml-4",
                                                                        children: "2 weeks ago"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-muted-foreground leading-relaxed mb-3",
                                                                children: review.comment
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "flex items-center gap-1 text-muted-foreground hover:text-primary transition",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                                lineNumber: 281,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Helpful"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                                lineNumber: 282,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-muted-foreground",
                                                                        children: "·"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "text-muted-foreground hover:text-primary transition",
                                                                        children: "Report"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                        lineNumber: 285,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            !product.reviewsData || product.reviewsData.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-4",
                                                    children: "No reviews yet. Be the first to share your experience!"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-8 text-foreground",
                                children: "You May Also Like"
                            }, void 0, false, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: relatedProducts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `/product/${p.id}`,
                                        className: "group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-64 bg-muted overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: p.image || "/placeholder.svg",
                                                    alt: p.name,
                                                    className: "w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/product/[id]/page.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-foreground mb-2",
                                                        children: p.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1",
                                                                children: [
                                                                    ...Array(5)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: `w-4 h-4 ${i < Math.floor(p.rating) ? 'fill-accent text-accent' : 'text-muted-foreground'}`
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: [
                                                                    "(",
                                                                    p.reviews,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl font-bold text-primary",
                                                        children: [
                                                            "$",
                                                            p.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/product/[id]/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/product/[id]/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/app/product/[id]/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/product/[id]/page.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/product/[id]/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/product/[id]/page.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/product/[id]/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9b9b5144._.js.map