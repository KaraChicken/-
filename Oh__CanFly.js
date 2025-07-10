// ==UserScript==
// @name         你懂得
// @namespace    http://tampermonkey.net/
// @version      bata
// @description  你懂得OWO
// @author       DORO廚
// @match        https://www.ofiii.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 初始嘗試隱藏已有的元素
    hideAds();

    // 設定 MutationObserver 來監聽 DOM 變化
    const observer = new MutationObserver(() => {
        hideAds();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    function hideAds() {
        const ads = document.querySelectorAll('.nonlinear_image_container.ad_impression');
        ads.forEach(ad => {
            ad.style.display = 'none';
        });
    }
})();
