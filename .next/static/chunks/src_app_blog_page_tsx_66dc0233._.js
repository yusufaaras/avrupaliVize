(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_blog_page_tsx_66dc0233._.js", {

"[project]/src/app/blog/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Örnek blog verileri
const blogPosts = [
    {
        id: 1,
        category: "Amerika Vize Başvurusu",
        title: "Amerika Vize Randevusu Bekleme Süresi Hakkında Bilmeniz Gerekenler",
        views: 758,
        image: "/images/blog/blog3.jpeg",
        summary: "Amerika Birleşik Devletleri’ne seyahat etmek isteyen birçok kişinin karşılaştığı ilk zorluklardan biri, Amerika vize randevusu bekleme süresidir. Bu süreç, başvuru sahipleri için planlamayı zorlaştıran en kritik aşamalardan biridir. Randevu tarihinin ne zaman verileceği, vize türü, başvurulan şehir ve dönemsel yoğunluk gibi birçok faktöre bağlı olarak değişiklik gösterebilir. Bu yazımızda, Amerika vize randevusu bekleme süresinin neye göre şekillendiğini, süreci etkileyen faktörleri ve bu süreci...",
        link: "#"
    },
    {
        id: 2,
        category: "Amerika Vize Başvurusu",
        title: "Amerika Vize Randevusu Alırken En Sık Yapılan 8 Hata ve Çözümleri",
        views: 625,
        image: "/images/blog/blog2.jpeg",
        summary: "Amerika vizesi başvuru süreci birçok kişi için karmaşık ve stresli olabiliyor. Özellikle Amerika vize randevusu alma aşaması, sürecin en kritik adımlarından biri. Doğru adımları atmamak ya da küçük bir hata yapmak, vize sürecinin uzamasına hatta başvurunun reddedilmesine bile neden olabiliyor. Bu yazımızda, başvuru sahiplerinin en sık yaptığı randevu hatalarını ve bu hataların nasıl önlenebileceğini detaylı şekilde ele alacağız...",
        link: "#"
    },
    {
        id: 3,
        category: "Amerika'da Eğitim",
        title: "Amerika Öğrenci Vizesi Almak: Adım Adım Rehber",
        views: 496,
        image: "/images/blog/blog1.jpeg",
        summary: "Amerika’da eğitim almak, dünya genelinde birçok öğrencinin hayalini süslüyor. Gelişmiş eğitim sistemi, uluslararası geçerliliğe sahip diplomaları ve kültürel çeşitliliğiyle ABD, öğrenciler için cazip bir eğitim destinasyonu. Ancak bu sürece adım atmanın ilk ve en önemli aşaması, Amerika öğrenci vizesi almaktan geçiyor. Bu yazımızda, Amerika’da eğitim almak isteyenler için öğrenci vizesi nedir, nasıl alınır, hangi belgeler gereklidir ve başvuru süreci nasıl işler gibi soruların detaylı yanıtlarını...",
        link: "#"
    }
];
// Kategori listesi örneği
const categories = [
    "Tümü",
    "Amerika Vize Başvurusu",
    "Amerika'da Eğitim"
];
function BlogPage() {
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Tümü");
    const [postCount, setPostCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const filteredPosts = selectedCategory === "Tümü" ? blogPosts : blogPosts.filter((post)=>post.category === selectedCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto pt-24 px-2",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: postCount,
                        onChange: (e)=>setPostCount(Number(e.target.value)),
                        className: "px-4 py-2 bg-indigo-500 text-white rounded-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 5,
                                children: "5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 10,
                                children: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 20,
                                children: "20"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedCategory,
                        onChange: (e)=>setSelectedCategory(e.target.value),
                        className: "px-4 py-2 bg-indigo-500 text-white rounded-md",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: cat,
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            filteredPosts.slice(0, postCount).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-sm p-5 mb-6 flex flex-col sm:flex-row gap-4 border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-indigo-700 text-sm mb-2 block",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: post.image,
                                    alt: post.title,
                                    width: 160,
                                    height: 110,
                                    className: "rounded-md object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center flex-1 pl-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: post.link,
                                            className: "text-blue-700 font-semibold text-lg sm:text-xl hover:underline",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 text-sm",
                                            children: [
                                                post.views,
                                                " kez okundu."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base",
                                    children: post.summary
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, post.id, true, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(BlogPage, "X0b2ee5mOFM36Q/OvYL1v8mvSFE=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_blog_page_tsx_66dc0233._.js.map