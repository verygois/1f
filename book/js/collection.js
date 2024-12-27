'use strict'

const directory = "https://d2w9rnfcy7mm78.cloudfront.net/";

const boxAll = [
    "27258799/original_2332f0de1274a9c4d490d7c8204b6d6e.jpg"
];

const oneAll = [
    "27258767/original_8670629e8b09a8c39f39ebbd9a48e8c5.jpg",
    "27258761/original_5591947faa1b4ecd590611118c1fe955.jpg",
    "27258759/original_a66e3f44a2c867fd4915dded14129c96.jpg",
    "27258757/original_9bcf8e6a5ae0efb64761dec6c342d296.jpg",
    "27258758/original_a28d3f0c1d82589ec653473afc0f75f1.jpg",
    "27258762/original_7e177f8bc0039e781e5786aa2dfedd0a.jpg",
    "27258760/original_66f023d3b95e453a5495ab64607629dd.jpg"
];

const twoAll = [
    "27258763/original_12d17851d550a2cb873b9816c37f58b1.jpg",
    "27258768/original_8094a7e3ce6eb87866a49cdbc1f8aea6.jpg",
    "27258770/original_2f81e2f4fa0e625a76682bb809a18e47.jpg",
    "27258775/original_1e3d883f32be0491f7a4f79708ea085a.jpg",
    "27258771/original_a656a0c792414f1e146ac7c4f9589191.jpg",
    "27258766/original_80686db5136fe23ffe1560e9800bf0ca.jpg",
    "27258778/original_d84e5dc00fcddce5b4ea1e5203e51536.jpg",
    "27258773/original_6ca07c125157bc6d40f1774faca065e8.jpg"
];

const threeAll = [
    "27258772/original_440243861704d525990f0b2df1202b41.jpg",
    "27258776/original_143e929e2100189d8313b6f444ac9769.jpg",
    "27258777/original_c3cadce470cc31d92c8fa8c02e32245c.jpg",
    "27258774/original_9a9bad7ef585f94b5db32d0e9af46c5b.jpg",
    "27258779/original_c48e01eb88a4e664bf0cd7bcadc5d2cf.jpg",
    "27258764/original_0e17b920e486b1a13ed3e00ea8e941c3.jpg"
];

const fourAll = [
    "27258781/original_694c23d56d5ee6c6b3a6ccff1f95bf76.jpg",
    "27258782/original_261ee4cb403236bdfa81f27f196977c9.jpg",
    "27258783/original_a78c8f16532d5a10201551e7e8240b92.jpg",
    "27258785/original_8b66de373c3e18c2b277f733e9841545.jpg",
    "27258784/original_aa592e79791c6198bf217d6aff3756df.jpg",
    "27258862/original_a69b1ea75c218469e17d346d3213af54.png"
];

const fiveAll = [
    "27258790/original_b377d9d140ece9a673a746a862b134b3.jpg",
    "27258794/original_4831c510d709f35f6a7e14b4196ee9d6.jpg",
    "27258786/original_0331f4a6454fa500f6b4e695cee494c0.jpg",
    "27258780/original_e54c747effab7be53d1091e7afbeb8a3.jpg",
    "27258787/original_41cb575dbb8af0d3959b623e593034b1.jpg",
    "27258810/original_c357635d71fcc6930da72d3e33a7ebbe.jpg"
];

const pehuAll = [
    "27258791/original_97d7c1820950cf091e8ada69b77c390f.jpg",
    "27258792/original_d5648b70b3a18812520d883a87b08b35.jpg",
    "27258795/original_28b906d92bcb2d4b53eb68fe921720b6.jpg",
    "27258769/original_178eb47b07e1924c9dd808c06a94f52c.jpg",
    "27258796/original_427b5386325808a7dc14dc323cbc08a8.jpg",
    "27258789/original_ce42668bce73899d34d105c263c9d993.jpg",
    "27258800/original_16c216691a7ebda5dd79e3775d72e728.jpg",
    "27258797/original_88ad86780ce2ae982daa5bda2c8be47c.jpg",
    "27258798/original_02169d4007fdb290b4434a313055bdb4.jpg"
];

function imgArr(query, arr) {
    arr.forEach((arrEach) => {
        const crearIMG = document.createElement("img");
        crearIMG.src = directory + arrEach;
        document.querySelector(query).appendChild(crearIMG);
    }, false);
};

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === 'interactive') {
        imgArr("#about aside", boxAll);
        imgArr("#one aside", oneAll);
        imgArr("#two aside", twoAll);
        imgArr("#three aside", threeAll);
        imgArr("#four aside", fourAll);
        imgArr("#five aside", fiveAll);
        imgArr("#pehu aside", pehuAll);
    } else if (event.target.readyState === 'complete') {
        const scrollElementAll = document.querySelectorAll('article aside');
        scrollElementAll.forEach((scrollElement) => {
            scrollElement.addEventListener('wheel', (e) => {
                if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
                const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
                if (
                    (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
                    (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
                ) return;
                e.preventDefault();
                scrollElement.scrollLeft += e.deltaY;
            });
        });
    };
}, false);