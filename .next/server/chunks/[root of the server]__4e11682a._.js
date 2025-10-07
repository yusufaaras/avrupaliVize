module.exports = {

"[project]/.next-internal/server/app/api/data/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/data/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const HeaderData = [
    {
        label: 'Ana Sayfa',
        href: '/#'
    },
    {
        label: 'Hakkımızda',
        href: '/#product'
    },
    {
        label: 'Hizmetler',
        href: '/#features '
    },
    {
        label: 'Fiyatlandırma',
        href: '/#pricing'
    },
    {
        label: 'İletişim',
        href: '/#contact '
    }
];
const FeatureData = [
    {
        imgSrc: '/images/features/time.svg',
        heading: 'Hızlı Randevu',
        paragraph: 'Vize başvurunuz için en uygun tarihte hızlıca randevu alın. Sürecinizi vakit kaybetmeden başlatın.'
    },
    {
        imgSrc: '/images/features/signal.svg',
        heading: 'Uzman Danışmanlık',
        paragraph: 'Vize işlemlerinin her aşamasında uzman ekibimizin desteğiyle başvurunuzu sorunsuz tamamlayın.'
    },
    {
        imgSrc: '/images/features/dollar.svg',
        heading: 'Uygun Fiyatlı Belge Takibi',
        paragraph: 'Vize başvurunuz için gerekli tüm belgeleri uygun fiyatlarla eksiksiz hazırlayın, başvuru sürecinizi kolayca takip edin.'
    }
];
const PlansData = [
    {
        heading: '120 Günlük',
        price: {
            monthly: 150,
            yearly: 150
        },
        subscriber: 1,
        button: 'UYGULAMAYA GİT',
        option: [
            '7/24 randevu takibi',
            'İstediğiniz tarihe randevu alma',
            'Randevu alındığı anda SMS',
            'Anında email'
        ],
        category: [
            'monthly',
            'yearly'
        ],
        imgSrc: '/images/pricing/starone.svg'
    },
    {
        heading: '60 Günlük',
        price: {
            monthly: 200,
            yearly: 200
        },
        subscriber: 1,
        button: 'UYGULAMAYA GİT',
        option: [
            '7/24 randevu takibi',
            'İstediğiniz tarihe randevu alma',
            'Randevu alındığı anda SMS',
            'Anında email'
        ],
        category: [
            'monthly',
            'yearly'
        ],
        imgSrc: '/images/pricing/startwo.svg'
    },
    {
        heading: '30 Günlük',
        price: {
            monthly: 300,
            yearly: 300
        },
        subscriber: 1,
        button: 'UYGULAMAYA GİT',
        option: [
            '7/24 randevu takibi',
            'İstediğiniz tarihe randevu alma',
            'Randevu alındığı anda SMS',
            'Anında email'
        ],
        category: [
            'monthly',
            'yearly'
        ],
        imgSrc: '/images/pricing/starthree.svg'
    },
    {
        heading: '15 Günlük',
        price: {
            monthly: 400,
            yearly: 400
        },
        subscriber: 1,
        button: 'UYGULAMAYA GİT',
        option: [
            '7/24 randevu takibi',
            'İstediğiniz tarihe randevu alma',
            'Randevu alındığı anda SMS',
            'Anında email'
        ],
        category: [
            'monthly',
            'yearly'
        ],
        imgSrc: '/images/pricing/starone.svg'
    }
];
const FooterLinks = [
    {
        label: 'Hakkımızda',
        href: '/#product'
    },
    {
        label: 'Fiyatlandırma',
        href: '/#pricing'
    },
    {
        label: 'Hizmetler',
        href: '/#features '
    },
    {
        label: 'İletişim',
        href: '/#contact '
    }
];
const SocialLinks = [
    {
        imgSrc: 'fa-brands:facebook-f',
        link: 'https://www.facebook.com',
        width: 10
    },
    {
        imgSrc: 'fa6-brands:instagram',
        link: 'https://www.instagram.com',
        width: 14
    },
    {
        imgSrc: 'fa6-brands:twitter',
        link: 'https://www.twitter.com',
        width: 14
    }
];
const GET = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        HeaderData,
        FeatureData,
        PlansData,
        FooterLinks,
        SocialLinks
    });
};
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__4e11682a._.js.map