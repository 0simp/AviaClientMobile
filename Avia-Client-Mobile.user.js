// ==UserScript==
// @name        Avia Client Mobile
// @namespace   userscript.builder
// @version     1.6.3
// @description Avia Client Mobile by 0simp. Based on Avia Client 1.7 by AvaLilac
// @match       https://stoat.chat/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function(){
'@preserve - Built on 2026-06-27T11:24:36.707Z';
window.__USERSCRIPT_VERSION__ = "1.6.3";

/* --- 3TapRely.js --- */
if(window.__US_BUILDER_3TAPRELY_JS__){return;}window.__US_BUILDER_3TAPRELY_JS__=true;

(function () {
  if (window.__3_TAP_REPLY__) return;
  window.__3_TAP_REPLY__ = true;

  function threeTapReply() {
    const messages = document.querySelectorAll('div[class=\'group pos_relative d_flex flex-d_column p_2px_0 bg_transparent bdr_var(--borderRadius-md) min-h_1em trs_background-color_var(--transitions-fast) [&_a:hover]:td_underline [&:hover_.Toolbar]:d_flex mt_var(--message-group-spacing)! [&:hover]:bg_var(--md-sys-color-surface-container) c_var(--md-sys-color-on-surface)\']')
    const messages2 = document.querySelectorAll('div[class=\'group pos_relative d_flex flex-d_column p_2px_0 bg_transparent bdr_var(--borderRadius-md) min-h_1em trs_background-color_var(--transitions-fast) [&_a:hover]:td_underline [&:hover_.Toolbar]:d_flex mt_0 [&:hover]:bg_var(--md-sys-color-surface-container) c_var(--md-sys-color-on-surface)\']')
    messages.forEach(message=>{
        let clicks = 0
        message.addEventListener('click',()=>{
            clicks = clicks+1
            if(clicks==3){
                message.children[0].children[0].click()
                clicks = 0
            }
            setTimeout(() => {
                clicks=0
            }, 1000);
        });
    });

    messages2.forEach(message=>{
        let clicks = 0
        message.addEventListener('click',()=>{
            clicks = clicks+1
            if(clicks==3){
                message.children[0].children[0].click()
                clicks = 0
            }
            setTimeout(() => {
                clicks=0
            }, 1000);
        });
    });
  }

  const observer = new MutationObserver(() => {
      threeTapReply();
  });

  function init() {
    threeTapReply();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- AttachmentContextMenuFix.js --- */
if(window.__US_BUILDER_ATTACHMENTCONTEXTMENUFIX_JS__){return;}window.__US_BUILDER_ATTACHMENTCONTEXTMENUFIX_JS__=true;

(function () {
  if (window.__ATTACHMENT_CONTEXT_MENU_FIX__) return;
  window.__ATTACHMENT_CONTEXT_MENU_FIX__ = true;

  function attachmentContextMenuFix() {
    const time = 250
    const videos = document.querySelectorAll('video')
    const images = document.querySelectorAll('img[class=\'cursor_pointer\']')
    const other = document.querySelectorAll(`pre[class='d_flex ov_auto scr-bar-w_thin flex-d_column']`)
    if(videos){
        videos.forEach(video=>{
            let timer;
            let long = false;

            function start() {
                timer = setTimeout(() => {
                long = true
                }, time);
            }

            function stop() {
                clearTimeout(timer);
                long = false
            }

            if(!video.dataset.patched){
                video.addEventListener('touchstart', function(e){
                    start()
                });

                video.addEventListener('touchend', function(e){
                    if(long){
                        const rect = video.getBoundingClientRect();

                        const contextMenuX = rect.left + rect.width / 2;
                        const contextMenuY = rect.top + rect.height / 2;

                        const contextMenuEvent = new MouseEvent('contextmenu', {
                            bubbles: true,
                            cancelable: true,
                            clientX: contextMenuX,
                            clientY: contextMenuY
                        });
                        video.dispatchEvent(contextMenuEvent);
                    }
                    stop()
                });

                video.addEventListener('touchcancel',stop);
                video.addEventListener('touchmove',stop);
                video.dataset.patched=true
            }
        })
    }

    if(images){
        images.forEach(image=>{
            let timer;
            let long = false;

            function start() {
                timer = setTimeout(() => {
                long = true
                }, time);
            }

            function stop() {
                clearTimeout(timer);
                long = false
            }

            if(!image.dataset.patched){
                image.addEventListener('touchstart', function(e){
                    start()
                });

                image.addEventListener('touchend', function(e){
                    if(long){
                        const rect = image.getBoundingClientRect();

                        const contextMenuX = rect.left + rect.width / 2;
                        const contextMenuY = rect.top + rect.height / 2;

                        const contextMenuEvent = new MouseEvent('contextmenu', {
                            bubbles: true,
                            cancelable: true,
                            clientX: contextMenuX,
                            clientY: contextMenuY
                        });
                        image.dispatchEvent(contextMenuEvent);
                    }
                    stop()
                });

                image.addEventListener('touchcancel',stop);
                image.addEventListener('touchmove',stop);
                image.dataset.patched=true
            }
        })
    }

    if(other){
        other.forEach(thing=>{
            let timer;
            let long = false;

            function start() {
                timer = setTimeout(() => {
                long = true
                }, time);
            }

            function stop() {
                clearTimeout(timer);
                long = false
            }

            if(!thing.dataset.patched){
                thing.addEventListener('touchstart', function(e){
                    start()
                });

                thing.addEventListener('touchend', function(e){
                    if(long){
                        const rect = thing.getBoundingClientRect();

                        const contextMenuX = rect.left + rect.width / 2;
                        const contextMenuY = rect.top + rect.height / 2;

                        const contextMenuEvent = new MouseEvent('contextmenu', {
                            bubbles: true,
                            cancelable: true,
                            clientX: contextMenuX,
                            clientY: contextMenuY
                        });

                        setTimeout(() => {
                            thing.dispatchEvent(contextMenuEvent);
                        }, 100);
                    }
                    stop()
                });

                thing.addEventListener('touchcancel',stop);
                thing.addEventListener('touchmove',stop);
                thing.dataset.patched=true
            }
        })
    }
  }

  const observer = new MutationObserver(() => {
    attachmentContextMenuFix();
  });

  function init() {
    attachmentContextMenuFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- aviaclientcategory.user.js --- */
if(window.__US_BUILDER_AVIACLIENTCATEGORY_USER_JS__){return;}window.__US_BUILDER_AVIACLIENTCATEGORY_USER_JS__=true;

// ==UserScript==
// @name         Avia Client Settings Category
// @description  Adds avia client settings category.
// @author       AvaLilac
// @version      1.4
// @match        *://*.stoat.chat/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function(){
if(window.__AVIA_CATEGORY_SETTINGS__) return;
window.__AVIA_CATEGORY_SETTINGS__ = true;

function inject(){

  if(document.getElementById('avia-cloned-settings')) return;

  const spans = [...document.querySelectorAll('span')];
  const target = spans.find(s => s.textContent.trim() === "User Settings");
  if(!target) return;

  const container = target.closest('.d_flex.flex-d_column');
  if(!container) return;

  const clone = container.cloneNode(true);
  clone.id = "avia-cloned-settings";

  const header = clone.querySelector('span');
  if(header) header.textContent = "AVIA CLIENT SETTINGS";

  const list = clone.querySelector('.d_flex.flex-d_column.gap_var\\(--gap-s\\)');
  if(list) list.innerHTML = "";

  container.parentNode.insertBefore(clone, container.nextSibling);
}

new MutationObserver(() => {
  inject();
}).observe(document.body, { childList: true, subtree: true });

inject();

})();


/* --- aviafavsystem.user.js --- */
if(window.__US_BUILDER_AVIAFAVSYSTEM_USER_JS__){return;}window.__US_BUILDER_AVIAFAVSYSTEM_USER_JS__=true;

// ==UserScript==
// @name         Avia Client favourite system
// @description  Adds favourite system
// @author       AvaLilac
// @version      1.4
// @match        *://*.stoat.chat/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {

if (window.__AVIA_FAVORITES_LOADED__) return;
window.__AVIA_FAVORITES_LOADED__ = true;

const STORAGE_KEY = "avia_favorites";

const getFavorites = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const setFavorites = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

function extractYouTubeID(url) {
    const reg = /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&?/]+)/;
    const match = url.match(reg);
    return match ? match[1] : null;
}

function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0;";
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try { document.execCommand("copy"); } catch {}
    document.body.removeChild(ta);
}

function updateBadge() {
    const badge = document.getElementById("avia-favorites-badge");
    if (!badge) return;
    const count = getFavorites().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
}

function showToast(card, msg) {
    const old = card.querySelector(".fav-toast");
    if (old) old.remove();
    const toast = document.createElement("div");
    toast.className = "fav-toast";
    toast.textContent = msg || "Copied!";
    Object.assign(toast.style, {
        position: "absolute",
        bottom: "6px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.85)",
        padding: "3px 8px",
        borderRadius: "6px",
        fontSize: "10px",
        color: "#fff",
        opacity: "0",
        transition: "opacity 0.15s",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        zIndex: "3"
    });
    card.appendChild(toast);
    requestAnimationFrame(() => toast.style.opacity = "1");
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 150);
    }, 1500);
}

function flashDupe(url) {
    const card = document.querySelector(`[data-fav-url="${CSS.escape(url)}"]`);
    if (!card) return;
    card.style.outline = "2px solid rgba(255,80,80,0.9)";
    setTimeout(() => { card.style.outline = ""; }, 700);
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function buildCard(item, onRemove) {
    const card = document.createElement("div");
    card.dataset.favUrl = item.url;
    Object.assign(card.style, {
        position: "relative",
        width: "90px",
        height: "90px",
        borderRadius: "12px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        flexShrink: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 0.2s, transform 0.15s"
    });

    const removeBtn = document.createElement("div");
    removeBtn.textContent = "✕";
    Object.assign(removeBtn.style, {
        position: "absolute",
        top: "4px",
        right: "5px",
        fontSize: "10px",
        cursor: "pointer",
        background: "rgba(0,0,0,0.7)",
        color: "#fff",
        padding: "1px 4px",
        borderRadius: "4px",
        zIndex: "2",
        opacity: "0",
        transition: "opacity 0.15s"
    });
    removeBtn.onclick = e => {
        e.stopPropagation();
        onRemove(item.url);
    };
    card.appendChild(removeBtn);

    card.addEventListener("mouseenter", () => {
        card.style.borderColor = "rgba(255,255,255,0.25)";
        card.style.transform = "scale(1.04)";
        removeBtn.style.opacity = "1";
    });
    card.addEventListener("mouseleave", () => {
        card.style.borderColor = "rgba(255,255,255,0.08)";
        card.style.transform = "scale(1)";
        removeBtn.style.opacity = "0";
    });

    const ytID = extractYouTubeID(item.url);
    if (ytID) {
        const img = new Image();
        img.draggable = false;
        img.src = `https://img.youtube.com/vi/${ytID}/hqdefault.jpg`;
        Object.assign(img.style, { width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" });
        img.onerror = () => fallback();
        card.appendChild(img);
    } else {
        const ext = item.url.split(".").pop().split("?")[0].toLowerCase();
        const isVideo = ["mp4", "webm", "mov", "gifv"].includes(ext);

        if (isVideo) {
            const video = document.createElement("video");
            video.src = item.url.replace(".gifv", ".mp4");
            video.autoplay = true; video.loop = true;
            video.muted = true; video.playsInline = true;
            video.draggable = false;
            Object.assign(video.style, { width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" });
            video.onerror = () => fallback();
            card.appendChild(video);
        } else {
            const img = new Image();
            img.draggable = false;
            img.src = item.url;
            Object.assign(img.style, { width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" });
            img.onerror = () => fallback();
            card.appendChild(img);
        }
    }

    function fallback() {
        [...card.children].forEach(c => { if (c !== removeBtn) c.remove(); });
        const inner = document.createElement("div");
        Object.assign(inner.style, {
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: "4px", padding: "6px",
            width: "100%", height: "100%", boxSizing: "border-box", pointerEvents: "none"
        });
        const icon = document.createElement("span");
        icon.className = "material-symbols-outlined";
        icon.textContent = "link";
        icon.style.cssText = "font-size:20px;opacity:0.35;color:#fff;display:block;";
        inner.appendChild(icon);
        const label = document.createElement("div");
        if (item.title) {
            label.textContent = item.title;
        } else {
            try { label.textContent = new URL(item.url).hostname.replace("www.", ""); } catch { label.textContent = "link"; }
        }
        Object.assign(label.style, {
            fontSize: "9px", color: "#fff", opacity: "0.55",
            textAlign: "center", wordBreak: "break-word", overflow: "hidden",
            maxHeight: "36px", lineHeight: "1.3", padding: "0 4px"
        });
        inner.appendChild(label);
        card.appendChild(inner);
    }

    if (item.title) {
        const titleOverlay = document.createElement("div");
        titleOverlay.textContent = item.title;
        Object.assign(titleOverlay.style, {
            position: "absolute",
            bottom: "0",
            width: "100%",
            background: "rgba(0,0,0,0.6)",
            fontSize: "11px",
            padding: "4px",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            zIndex: "1",
            pointerEvents: "none"
        });
        card.appendChild(titleOverlay);
    }

    card.addEventListener("click", () => {
        const done = () => showToast(card, "Copied!");
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(item.url).then(done).catch(() => { fallbackCopy(item.url); done(); });
        } else {
            fallbackCopy(item.url); done();
        }
    });

    return card;
}

function toggleFavoritesPanel() {

    let panel = document.getElementById("avia-favorites-panel");
    if (panel) {
        const isHidden = panel.style.display === "none";
        panel.style.display = isHidden ? "flex" : "none";
        if (isHidden) renderGrid();
        return;
    }

    panel = document.createElement("div");
    panel.id = "avia-favorites-panel";

    if(window.outerWidth<512){
        Object.assign(panel.style, {
            position: "fixed",
            bottom: "12px",
            right: "0px",
            width: `${window.outerWidth-52}px`,
            height: `${window.outerWidth-72}px`,
            background: "#1e1e1e",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: "0 12px 35px rgba(0,0,0,0.45)",
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)"
        });
    }else{
        Object.assign(panel.style, {
            position: "fixed",
            bottom: "12px",
            right: "0px",
            width: "460px",
            height: "400px",
            background: "#1e1e1e",
            color: "#fff",
            borderRadius: "20px",
            boxShadow: "0 12px 35px rgba(0,0,0,0.45)",
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)"
        });
    }

    const header = document.createElement("div");
    Object.assign(header.style, {
        padding: "13px 16px",
        fontWeight: "600",
        fontSize: "14px",
        background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        cursor: "move",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexShrink: "0"
    });

    const headerIcon = document.createElement("span");
    headerIcon.className = "material-symbols-outlined";
    headerIcon.textContent = "star";
    headerIcon.style.cssText = "font-size:18px;opacity:0.7;display:block;font-variation-settings:'FILL' 1,'wght' 400,'GRAD' 0;";
    header.appendChild(headerIcon);

    const headerTitle = document.createElement("span");
    headerTitle.textContent = "Favorites";
    header.appendChild(headerTitle);

    const close = document.createElement("div");
    close.textContent = "✕";
    Object.assign(close.style, {
        marginLeft: "auto", cursor: "pointer", opacity: "0.5",
        fontSize: "13px", lineHeight: "1"
    });
    close.onmouseenter = () => close.style.opacity = "1";
    close.onmouseleave = () => close.style.opacity = "0.5";
    close.onclick = () => panel.style.display = "none";
    header.appendChild(close);

    const inputRow = document.createElement("div");
    Object.assign(inputRow.style, {
        display: "flex",
        gap: "8px",
        padding: "14px 18px"
    });

    const urlInput = document.createElement("input");
    urlInput.placeholder = "Paste link...";
    if(window.outerWidth<512){
        Object.assign(urlInput.style, {
            flex: "1", padding: "7px 10px", borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "var(--md-sys-color-on-surface, #fff)",
            fontSize: "12px", outline: "none", minWidth: "0",
            width:`${((window.outerWidth-72)/10)+30}px`
        });
    }else{
        Object.assign(urlInput.style, {
            flex: "1", padding: "7px 10px", borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "var(--md-sys-color-on-surface, #fff)",
            fontSize: "12px", outline: "none", minWidth: "0"
        });
    }

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Opt title";
    if(window.outerWidth<512){
        Object.assign(titleInput.style, {
            flexShrink: "0", padding: "7px 10px",
            borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "var(--md-sys-color-on-surface, #fff)",
            fontSize: "12px", outline: "none",
            width:`${((window.outerWidth-72)/10)+40}px`
        });
    }else{
        Object.assign(titleInput.style, {
            width: "110px", flexShrink: "0", padding: "7px 10px",
            borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "var(--md-sys-color-on-surface, #fff)",
            fontSize: "12px", outline: "none"
        });
    }

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    Object.assign(addBtn.style, {
        padding: "7px 14px", borderRadius: "8px", border: "none",
        background: "var(--md-sys-color-primary, rgba(255,255,255,0.15))",
        color: "var(--md-sys-color-on-primary, #fff)",
        fontSize: "12px", fontWeight: "600", cursor: "pointer",
        flexShrink: "0", transition: "opacity 0.15s"
    });

    inputRow.appendChild(urlInput);
    inputRow.appendChild(titleInput);
    inputRow.appendChild(addBtn);

    const gridWrapper = document.createElement("div");
    Object.assign(gridWrapper.style, {
        flex: "1", minHeight: "0", overflowY: "auto",
        padding: "14px", boxSizing: "border-box"
    });

    const grid = document.createElement("div");
    grid.id = "avia-favorites-grid";
    Object.assign(grid.style, {
        display: "flex", flexWrap: "wrap", gap: "10px", alignContent: "start"
    });

    gridWrapper.appendChild(grid);
    panel.appendChild(header);
    panel.appendChild(inputRow);
    panel.appendChild(gridWrapper);
    document.body.appendChild(panel);

    /*let isDragging = false, offsetX, offsetY;

    header.addEventListener("touchstart", e => {
        isDragging = true;
        const touch = e.touches[0]
        offsetX = touch.clientX - panel.offsetLeft;
        offsetY = touch.clientY - panel.offsetTop;
    },false);

    document.addEventListener("touchend", () => isDragging = false);
    document.addEventListener("touchcancel", () => isDragging = false);

    document.addEventListener("touchmove", e => {
        if (!isDragging) return;
        const touch = e.touches[0]
        panel.style.left = (touch.clientX - offsetX) + "px";
        panel.style.top = (touch.clientY - offsetY) + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
    },false);*/

    function tryAdd() {
        const url = urlInput.value.trim();
        const title = titleInput.value.trim();
        if (!url) return;
         const favs = getFavorites();
        if (favs.some(f => f.url === url)) { flashDupe(url); return; }
        favs.push({ url, title, addedAt: Date.now() });
        setFavorites(favs);
        urlInput.value = ""; titleInput.value = "";
        updateBadge(); renderGrid();
    
    
    }

    addBtn.onclick = tryAdd;
    urlInput.addEventListener("keydown", e => { if (e.key === "Enter") tryAdd(); });
    titleInput.addEventListener("keydown", e => { if (e.key === "Enter") tryAdd(); });

    renderGrid();

}

function renderGrid() {
    const grid = document.getElementById("avia-favorites-grid");
    if (!grid) return;
    grid.innerHTML = "";
    const favorites = getFavorites();

    if(favorites.length==0){
        const empty = document.createElement("div");
        Object.assign(empty.style, {
            width: "100%", padding: "24px 0", textAlign: "center",
            opacity: "0.35", fontSize: "13px",
            color: "var(--md-sys-color-on-surface, #fff)"
        });
        const emptyIcon = document.createElement("span");
        emptyIcon.className = "material-symbols-outlined";
        emptyIcon.textContent = "star_border";
        emptyIcon.style.cssText = "display:block;font-size:32px;margin-bottom:6px;";
        empty.appendChild(emptyIcon);
        const emptyText = document.createElement("div");
        emptyText.textContent = "No favorites yet";
        empty.appendChild(emptyText);
        grid.appendChild(empty);
        return;
        }

    const onRemove = (url) => {
        setFavorites(getFavorites().filter(f => f.url !== url));
        updateBadge();
        renderGrid();
    };

    favorites.forEach(item => grid.insertBefore(buildCard(item, onRemove), grid.firstChild));

}

function injectButton() {

    if (document.getElementById("avia-favorites-btn")) return;

    const gifSpan = [...document.querySelectorAll("span.material-symbols-outlined")]
        .find(s => s.textContent.trim() === "gif");

    if (!gifSpan) return;

    const wrapper = gifSpan.closest("div.flex-sh_0");
    if (!wrapper) return;

    const clone = wrapper.cloneNode(true);
    clone.id = "avia-favorites-btn";
    clone.querySelector("span.material-symbols-outlined").textContent = "star";
    clone.querySelector("button").onclick = toggleFavoritesPanel;

    const badge = document.createElement("div");
    badge.id = "avia-favorites-badge";
    Object.assign(badge.style, {
        position: "absolute",
        top: "2px",
        right: "2px",
        background: "var(--md-sys-color-primary, #6750a4)",
        color: "var(--md-sys-color-on-primary, #fff)",
        borderRadius: "99px",
        fontSize: "9px",
        fontWeight: "700",
        minWidth: "14px",
        height: "14px",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 3px",
        pointerEvents: "none",
        zIndex: "1"
    });

    clone.querySelector("button").appendChild(badge);

    wrapper.parentElement.insertBefore(clone, wrapper.nextSibling);
    updateBadge()
}

function uninjectButton(){
    const button = document.getElementById('avia-favorites-btn')
    if(button){
        button.parentElement.removeChild(button)
    }
}

new MutationObserver(()=>{
    const gifSpan = [...document.querySelectorAll("span.material-symbols-outlined")]
    .find(s => s.textContent.trim() === "gif");
    if(!gifSpan){
        uninjectButton()
        return;
    }
    injectButton()
})
.observe(document.body, { childList: true, subtree: true });

injectButton();

})();


/* --- aviaserverbutton.js --- */
if(window.__US_BUILDER_AVIASERVERBUTTON_JS__){return;}window.__US_BUILDER_AVIASERVERBUTTON_JS__=true;

(function(){

  if (window.__AVIA_SERVER_BUTTON__) return;
  window.__AVIA_SERVER_BUTTON__ = true;

  const AVIA_INVITE = "https://stt.gg/0MPSAx8x";

  function apply(){
    const homebuttons = document.getElementsByClassName('gap_8px p_8px d_flex bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface-variant) bg_var(--md-sys-color-surface-variant)')
      .item(0)
      if(!homebuttons) return;
      const button = homebuttons.children[0].children[1]
      const title = button.querySelector("div.flex-g_1 > div");
      if(!title.textContent.includes('ACM Server')){
        const server = document.querySelector(`a[href*='/server/01KKQHXPKHSFBJNA2DY4XMP0DB']`)
        if(server){
          title.textContent='Go to the ACM Server'
        }else{
          title.textContent='Join the ACM Server'
        }
        button.addEventListener('click',(e)=>{
          e.preventDefault();
          e.stopPropagation()
          if(server){
            server.click()
          }else{
            window.open(AVIA_INVITE,'_blank')
          }
        },true)
      }
  }

  const observer = new MutationObserver(apply);
  observer.observe(document.body,{childList:true,subtree:true});

  apply();
})();


/* --- badges.js --- */
if(window.__US_BUILDER_BADGES_JS__){return;}window.__US_BUILDER_BADGES_JS__=true;

(function () {
    if (window.__AVIA_PROFILE_BADGESV2__) return;
    window.__AVIA_PROFILE_BADGESV2__ = true;

    const BADGE_URL = "https://raw.githubusercontent.com/AvaLilac/AviaClientBadges/refs/heads/main/userbadgesbackend.js";

    let badgeData = null, loadingPromise = null;

    function loadBadges() {
        if (badgeData) return Promise.resolve();
        if (loadingPromise) return loadingPromise;

        loadingPromise = fetch(BADGE_URL + "?t=" + Date.now())
            .then(r => r.text())
            .then(code => {
                new Function(code)();
                badgeData = window.AVIA_USER_BADGES || [];
            })
            .catch(() => { badgeData = []; });

        return loadingPromise;
    }

    function getUsername(root) {
        const tag = root.querySelector("span.fw_200");
        if (!tag) return null;
        const span = tag.parentElement;
        return span ? span.textContent.trim() : null;
    }

    function getUserBadges(username) {
        if (!badgeData) return [];
        const clean = username.trim().toLowerCase();
        return badgeData.filter(b =>
            b.users.some(u => u.toLowerCase() === clean)
        );
    }

    function findCardByTitle(root, title) {
        return [...root.querySelectorAll("div.pos_relative")]
            .find(c => {
                const heading = c.querySelector("span.fw_550");
                return heading && heading.textContent.trim() === title;
            });
    }

    function makeBadgeSpan(b) {
        const wrapper = document.createElement("span");
        wrapper.setAttribute("aria-label", b.name);
        wrapper.style.cssText = "display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:20px;line-height:1;cursor:default;position:relative;";
        wrapper.textContent = b.icon;

        let tip = null;

        wrapper.addEventListener("mouseenter", () => {
            tip = document.createElement("div");
            tip.style.cssText = "position:fixed;z-index:99999;pointer-events:none;white-space:nowrap;";

            const inner = document.createElement("div");
            inner.className = "c_white bg_black p_var(--gap-md) bdr_var(--borderRadius-md) lh_0.875rem fs_0.6875rem ls_0.03125rem fw_500";
            inner.style.cssText = "";

            const color = b.color || "";
            if (color.includes("gradient")) {
                const textSpan = document.createElement("span");
                textSpan.textContent = b.name;
                textSpan.style.cssText = `background:${color};-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;`;
                inner.appendChild(textSpan);
            } else {
                inner.textContent = b.name;
                inner.style.color = color || "white";
            }

            tip.appendChild(inner);
            document.body.appendChild(tip);

            requestAnimationFrame(() => {
                const badgeRect = wrapper.getBoundingClientRect();
                const tipRect = tip.getBoundingClientRect();
                const x = badgeRect.left + badgeRect.width / 2 - tipRect.width / 2;
                const y = badgeRect.top - tipRect.height - 5;
                tip.style.left = Math.max(4, x) + "px";
                tip.style.top = Math.max(4, y) + "px";
            });
        });

        wrapper.addEventListener("mouseleave", () => {
            if (tip) { tip.remove(); tip = null; }
        });

        return wrapper;
    }

    function injectBadges(root, username) {
        if (root.querySelector("[data-avia-badge-injected='true']")) return;

        const badges = getUserBadges(username);
        if (!badges.length) return;

        const nativeBadgesCard = findCardByTitle(root, "Badges");
        if (nativeBadgesCard) {
            const grid = nativeBadgesCard.querySelector("div.d_flex.flex-wrap_wrap");
            if (!grid) return;
            badges.forEach(b => grid.appendChild(makeBadgeSpan(b)));
            nativeBadgesCard.dataset.aviaBadgeInjected = "true";
            return;
        }

        const joinedCard = findCardByTitle(root, "Joined");
        if (!joinedCard) return;

        const card = joinedCard.cloneNode(false);
        card.removeAttribute("data-avia-badge-injected");
        card.dataset.aviaBadgeInjected = "true";
        card.style.cssText = "overflow:hidden;";
        if (!card.classList.contains("asp_1/1")) card.classList.add("asp_1/1");

        const titleSpan = joinedCard.querySelector("span.fw_550");
        const title = titleSpan ? titleSpan.cloneNode(false) : document.createElement("span");
        title.textContent = "Badges";
        card.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "gap_var(--gap-md) d_flex flex-wrap_wrap [&_img,_&_svg]:w_24px [&_img,_&_svg]:h_24px [&_img,_&_svg]:asp_1/1";
        grid.style.overflow = "hidden";
        badges.forEach(b => grid.appendChild(makeBadgeSpan(b)));
        card.appendChild(grid);

        joinedCard.insertAdjacentElement("afterend", card);
    }

    async function processProfile(root) {
        await loadBadges();

        const username = getUsername(root);
        if (!username) return;

        if (findCardByTitle(root, "Badges")) {
            injectBadges(root, username);
            return;
        }

        const obs = new MutationObserver(() => {
            if (!findCardByTitle(root, "Joined")) return;
            if (!findCardByTitle(root, "Bio")) return;
            obs.disconnect();
            injectBadges(root, username);
        });

        obs.observe(root, { childList: true, subtree: true });

        if (findCardByTitle(root, "Joined") && findCardByTitle(root, "Bio")) {
            obs.disconnect();
            injectBadges(root, username);
        }

        setTimeout(() => obs.disconnect(), 10000);
    }

    const observer = new MutationObserver(muts => {
        for (const m of muts) {
            for (const n of m.addedNodes) {
                if (!(n instanceof HTMLElement)) continue;

                if (n.matches?.("div.will-change_transform")) processProfile(n);
                if (n.matches?.("div.p_24px.min-w_280px.max-w_560px")) processProfile(n);

                const small    = n.querySelector?.("div.will-change_transform");
                const expanded = n.querySelector?.("div.p_24px.min-w_280px.max-w_560px");
                if (small)    processProfile(small);
                if (expanded) processProfile(expanded);
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();



/* --- BetterScrolling.js --- */
if(window.__US_BUILDER_BETTERSCROLLING_JS__){return;}window.__US_BUILDER_BETTERSCROLLING_JS__=true;

(function () {
  if (window.__BETTER_SCROLLING__) return;
  window.__BETTER_SCROLLING__ = true;

  function betterScrolling() {
    const channellist = document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll').item(1)
    if(!channellist) return;
    const clone = channellist.lastChild.lastChild.cloneNode(true)
    clone.style.opacity=0
    clone.id='betterscrolling'

    setTimeout(() => {
        if(document.baseURI.includes('/server')){
            for(const child of clone.lastChild.children){
                child.remove()
            }


            for(const child of clone.lastChild.children){
                child.remove()
            }
        }else{
            for(const child of clone.children){
                for(const child2 of child.children){
                    child2.remove()
                }
            }
        }
    }, 100);

    if(!document.getElementById('betterscrolling')){
        channellist.lastChild.appendChild(clone)
    }

    const serverlist = document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll').item(0)
    if(!serverlist) return;
    const target = serverlist.parentElement

    const clone2 = target.lastChild.cloneNode(true)
    clone2.style.opacity=0
    clone2.id='betterscrollingserverlist'

    if(!document.getElementById('betterscrollingserverlist')){
      target.appendChild(clone2)
    }
  }

  const observer = new MutationObserver(() => {
    betterScrolling();
  });

  function init() {
    betterScrolling();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- ButtonFix.js --- */
if(window.__US_BUILDER_BUTTONFIX_JS__){return;}window.__US_BUILDER_BUTTONFIX_JS__=true;

(function () {
    if (window.__BUTTON_FIX__) return;
    window.__BUTTON_FIX__ = true;

    function uninjectButton(button){
        if(button){
            button.parentElement.removeChild(button)
        }
    }
    
    const observer = new MutationObserver(()=>{
        let balls = [];
        document.querySelectorAll('div[class=\'flex-sh_0 d_flex ai_end jc_center w_42px\']').forEach(element=>{
        if(element.id?.includes('avia')){
            balls.push(element)
        }
        })
        
        const gifSpan = [...document.querySelectorAll("span.material-symbols-outlined")]
        .find(s => s.textContent.trim() === "gif");

        if(!gifSpan){
            balls.forEach(element=>{
                uninjectButton(element)
            })
        }
    });
    observer.observe(document.documentElement, {childList: true, subtree: true })
})();


/* --- ChannelContextMenuFix.js --- */
if(window.__US_BUILDER_CHANNELCONTEXTMENUFIX_JS__){return;}window.__US_BUILDER_CHANNELCONTEXTMENUFIX_JS__=true;

(function () {
  if (window.__CHANNEL_CONTEXT_MENU_FIX__) return;
  window.__CHANNEL_CONTEXT_MENU_FIX__ = true;

  function channelContextMenuFix() {
    const balls = new Event('contextmenu',{
        bubbles:true,
        button:2
    });

    const time = 250

    let channelList = document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll').item(1)
    if(!channelList) return;
    channelList = channelList.children[0]
    if(channelList.querySelector('a[href=\'/app\']')){
      for(const child of channelList.lastChild.previousSibling.children){
        let timer;
        let long = false;

        function start() {
          timer = setTimeout(() => {
            long = true
          }, time);
        }

        function stop() {
            clearTimeout(timer);
            long = false
        }

        if(!child.dataset.patched){
          child.addEventListener('touchstart', function(e){
                start()
          });
          child.addEventListener('touchend', function(e){
            if(long){
                const rect = child.getBoundingClientRect();

                const contextMenuX = rect.left + rect.width / 2;
                const contextMenuY = rect.top + rect.height / 2;

                const contextMenuEvent = new MouseEvent('contextmenu', {
                    bubbles: true,
                    cancelable: true,
                    clientX: contextMenuX,
                    clientY: contextMenuY
                });
                setTimeout(() => {
                  child.firstChild.firstChild.dispatchEvent(contextMenuEvent)
                }, 100);
            }
            stop()
          });
          child.addEventListener('touchcancel',stop);
          child.addEventListener('touchmove',stop);
          child.dataset.patched=true
        }
      }
    }else{
      const categories = document.getElementsByClassName('d_flex ai_center gap_var(--gap-sm) p_0_var(--gap-sm) pl_calc(var(--gap-lg)_+_5px) pt_10px cursor_pointer us_none trs_var(--transitions-fast)_all --color_var(--md-sys-color-on-surface) c_var(--color) fill_var(--color) lh_0.875rem fs_13px ls_0.03125rem fw_500 [&:hover]:--color_var(--md-sys-color-on-surface-variant) [&_svg]:trs_var(--transitions-fast)_transform [&_svg]:trf_rotateZ(90deg)')
      if(categories.item(0)){
        for(const category of categories){
          let timer;
          let long = false;

          function start() {
            timer = setTimeout(() => {
              long = true
            }, time);
          }

          function stop() {
              clearTimeout(timer);
              long = false
          }
          if(!category.dataset.patched){
            category.addEventListener('touchstart',function (e){
              start()
            });

            category.addEventListener('touchend',function(e){
              if(long){
                const rect = category.getBoundingClientRect();
                const contextMenuX = rect.left + rect.width / 2;
                const contextMenuY = rect.top + rect.height / 2;
                const contextMenuEvent = new MouseEvent('contextmenu', {
                    bubbles: true,
                    cancelable: true,
                    clientX: contextMenuX,
                    clientY: contextMenuY
                });
                setTimeout(() => {
                  category.dispatchEvent(contextMenuEvent)
                }, 100);
              }
              stop()
            });

            category.addEventListener('touchcancel',stop)
            category.addEventListener('touchmove',stop)
            category.dataset.patched=true
          }
        }
      }

      for(const child of channelList.children){
        let timer;
        let long = false;

        function start() {
          timer = setTimeout(() => {
            long = true
          }, time);
        }

        function stop() {
            clearTimeout(timer);
            long = false
        }

        if(!child.dataset.patched){
          child.addEventListener('touchstart', function(e){
                start()
          });
          child.addEventListener('touchend', function(e){
          if(long){
              setTimeout(() => {
                child.dispatchEvent(balls)
              }, 100);
          }
          stop()
          });
          child.addEventListener('touchcancel',stop);
          child.addEventListener('touchmove',stop);
          child.dataset.patched=true
        }

        if(child.children[1]?.clientHeight!=0){
            let cum;
            if(child.firstChild.getAttribute('role')){
                cum = child.firstChild
            }else{
                cum = child.children[1]
            }

            for(const child2 of cum.children){
                let timer;
                let long = false;

                function start() {
                  timer = setTimeout(() => {
                    long = true
                  }, time);
                }

                function stop() {
                    clearTimeout(timer);
                    long = false
                }

                if(!child2.dataset.patched){
                  child2.firstChild.firstChild.addEventListener('touchstart', function(e){
                        start()
                  });
                  child2.firstChild.firstChild.addEventListener('touchend', function(e){
                  if(long){
                      setTimeout(() => {
                        child2.firstChild.firstChild.firstChild.dispatchEvent(balls)
                      }, 100);
                  }
                  stop()
                  });
                  child2.firstChild.firstChild.addEventListener('touchcancel',stop);
                  child2.firstChild.firstChild.addEventListener('touchmove',stop);
                  child2.dataset.patched=true
                }
            }
        }
      }
    }
  }

  const observer = new MutationObserver(() => {
    channelContextMenuFix();
  });

  function init() {
    channelContextMenuFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- ChunkyMembers.js --- */
if(window.__US_BUILDER_CHUNKYMEMBERS_JS__){return;}window.__US_BUILDER_CHUNKYMEMBERS_JS__=true;

(function () {
  if (window.__CHUNKY_MEMBERS__) return;
  window.__CHUNKY_MEMBERS__ = true;

  function chunkyMembers() {
    const memberlist = document.getElementsByClassName('will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg)').item(0)
    if(!memberlist) return;
    if(!memberlist.style.width||Number(memberlist.style.width.replace('px',''))<memberlist.previousSibling.clientWidth){
      memberlist.style.width = `${memberlist.clientWidth+memberlist.previousSibling.clientWidth}px`
    }
  }

  const observer = new MutationObserver(() => {
    chunkyMembers();
  });

  function init() {
    chunkyMembers();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- clientBackup.js --- */
if(window.__US_BUILDER_CLIENTBACKUP_JS__){return;}window.__US_BUILDER_CLIENTBACKUP_JS__=true;

(function () {
  if (window.__clientBackup) return;
  window.__clientBackup = true;

  const TARGET_TEXT = "Plugins v2 Placeholder";
  const CLONE_KEY   = "data-lsbackup-cloned";

  function exportLS() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "localstorage-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importLS(file, onDone) {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target.result);
        let count = 0;
        for (const [key, value] of Object.entries(data)) {
          localStorage.setItem(key, value);
          count++;
        }
        onDone(null, count);
      } catch (err) {
        onDone(err);
      }
    };
    reader.readAsText(file);
  }

  function buildPanel() {
    const panel = document.createElement("div");
    panel.style.cssText = `
      display: none;
      flex-direction: column;
      gap: 8px;
      padding: 10px 12px;
      border-radius: 8px;
      background: var(--md-sys-color-surface-container-highest);
      border: 1px solid var(--md-sys-color-outline-variant);
      font-size: 12px;
      color: var(--md-sys-color-on-surface);
    `;

    const btnStyle = `
      padding: 5px 12px;
      border-radius: 4px;
      border: none;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
    `;

    const status = document.createElement("span");
    status.style.cssText = "font-size: 11px; opacity: 0.7; min-height: 14px;";

    const exportBtn = document.createElement("button");
    exportBtn.textContent = "⬇ Export localStorage";
    exportBtn.style.cssText = btnStyle + `
      background: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
    `;
    exportBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      exportLS();
      status.textContent = `✓ Exported ${localStorage.length} keys`;
    });

    const fileInput = document.createElement("input");
    fileInput.type   = "file";
    fileInput.accept = ".json";
    fileInput.style.cssText = "display: none;";
    fileInput.addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      importLS(file, (err, count) => {
        if (err) {
          status.textContent = "✗ Invalid JSON file";
        } else {
          status.textContent = `✓ Imported ${count} keys`;
        }
        fileInput.value = "";
      });
    });

    const importBtn = document.createElement("button");
    importBtn.textContent = "⬆ Import localStorage";
    importBtn.style.cssText = btnStyle + `
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      border: 1px solid var(--md-sys-color-outline-variant);
    `;
    importBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      fileInput.click();
    });

    panel.appendChild(exportBtn);
    panel.appendChild(importBtn);
    panel.appendChild(fileInput);
    panel.appendChild(status);
    return panel;
  }

  function tryInject() {
    document.querySelectorAll("a.pos_relative").forEach(btn => {
      if (
        btn.hasAttribute(CLONE_KEY) ||
        btn.hasAttribute("data-lsbackup-entry") ||
        !btn.innerText.includes(TARGET_TEXT)
      ) return;

      btn.setAttribute(CLONE_KEY, "true");

      const clone = btn.cloneNode(true);
      clone.removeAttribute(CLONE_KEY);
      clone.setAttribute("data-lsbackup-entry", "true");

      const title = clone.querySelector("div.d_flex.flex-g_1.flex-d_column > div");
      if (title) title.textContent = "AviaClient Backup";

      const desc = clone.querySelector("div.d_flex.flex-g_1.flex-d_column > span");
      if (desc) desc.textContent = "Backup or Restore all client data";

      const iconBtn = document.createElement("div");
      iconBtn.title = "LocalStorage Backup";
      iconBtn.style.cssText = "cursor: pointer; z-index: 10; flex-shrink: 0;";
      iconBtn.innerHTML = `
        <div class="fill_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-dim) w_36px h_36px d_flex flex-sh_0 ai_center jc_center bdr_var(--borderRadius-full)">
          <span aria-hidden="true" class="material-symbols-outlined fs_inherit fw_undefined!" style="display: block; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0;">database</span>
        </div>
      `;

      const existingIcon = clone.querySelector("div.fill_var\\(--md-sys-color-on-surface\\)");
      if (existingIcon) {
        existingIcon.replaceWith(iconBtn);
      } else {
        clone.prepend(iconBtn);
      }

      clone.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        panel.style.display = panel.style.display === "flex" ? "none" : "flex";
      });

      const wrapper = document.createElement("div");
      wrapper.style.cssText = "display: flex; flex-direction: column;";

      const panel = buildPanel();

      wrapper.appendChild(clone);
      wrapper.appendChild(panel);

      btn.parentNode.insertBefore(wrapper, btn.nextSibling);
    });
  }

  tryInject();

  const observer = new MutationObserver(() => tryInject());
  observer.observe(document.body, { childList: true, subtree: true });
})();



/* --- CollapseChannelName.js --- */
if(window.__US_BUILDER_COLLAPSECHANNELNAME_JS__){return;}window.__US_BUILDER_COLLAPSECHANNELNAME_JS__=true;

(function () {
  if (window.__COLLAPSE_CHANNEL_NAME__) return;
  window.__COLLAPSE_CHANNEL_NAME__ = true;
  let baseuris = []
  let username = '';

  function collapseChannelName() {
    const bar = document.getElementsByClassName('gap_10px flex_0_auto d_flex flex-sh_0 p_0_16px ai_center fw_600 us_none ov_hidden h_48px bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bg-s_cover! bg-p_center! [&_svg]:flex-sh_0 m_var(--gap-md)_var(--gap-md)_var(--gap-md)_0').item(0)
    if(bar){
        const button = document.createElement('button')
        button.id='collpasechannelname'
        button.className='lh_1.25rem fs_0.875rem ls_0.015625rem fw_500 pos_relative asp_1/1 flex-sh_0 d_flex ai_center jc_center ff_inherit cursor_pointer bd_none trs_var(--transitions-fast)_all c_var(--colour) fill_var(--colour) --colour_var(--md-sys-color-on-surface-variant) bdr_var(--borderRadius-full) h_40px px_8px'

        const ripple = document.createElement('md-ripple')
        ripple.ariaHidden=true

        const span = document.createElement('span')
        span.className='material-symbols-outlined'
        span.style='display: block; font-variation-settings: &quot;FILL&quot; 0, &quot;wght&quot; 400, &quot;GRAD&quot; 0; font-size: 24px;'
        span.textContent='arrow_back_ios'

        button.appendChild(ripple)
        button.appendChild(span)

        button.onclick = function(){
          for(const child of button.parentElement.children){
              if(child.id=='collpasechannelname') break;
              if(!child.style.display){
                  child.style.display='none'
                  button.querySelector('span').textContent='arrow_forward_ios'
              }else{
                  child.style.removeProperty('display')
                  button.querySelector('span').textContent='arrow_back_ios'
              }
          }
          if(!bar.querySelectorAll('svg')[1].previousSibling.tagName){
            if(bar.querySelectorAll('svg')[1].previousSibling.textContent){
              username = bar.querySelectorAll('svg')[1].previousSibling.textContent
              bar.querySelectorAll('svg')[1].previousSibling.textContent=''
            }else{
              bar.querySelectorAll('svg')[1].previousSibling.textContent=username
            }
          }
        }

        if(!document.getElementById('collpasechannelname')){
          if(bar.querySelector(`[aria-label='Click to show full description']`)){
            bar.insertBefore(button,bar.querySelector(`[aria-label='Click to show full description']`).nextSibling)
          }else{
              if(bar.children[1]){
                bar.insertBefore(button,bar.children[1].nextSibling)
              }
          }
        }
    }
  }

  const observer = new MutationObserver(() => {
    if(baseuris[baseuris.length-1]!=document.baseURI){
      const bar = document.getElementsByClassName('gap_10px flex_0_auto d_flex flex-sh_0 p_0_16px ai_center fw_600 us_none ov_hidden h_48px bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bg-s_cover! bg-p_center! [&_svg]:flex-sh_0 m_var(--gap-md)_var(--gap-md)_var(--gap-md)_0').item(0)
      for(const child of bar.children){
        if(child.style?.display){
          child.style.removeProperty('display')
        }
      }
      if(document.getElementById('collpasechannelname')){
        document.getElementById('collpasechannelname').remove()
      }
    }
    baseuris.push(document.baseURI)
    collapseChannelName();
  });

  function init() {
    collapseChannelName();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- CollapseSettingsSidebar.js --- */
if(window.__US_BUILDER_COLLAPSESETTINGSSIDEBAR_JS__){return;}window.__US_BUILDER_COLLAPSESETTINGSSIDEBAR_JS__=true;

let fuckyou = [];
(function () {
  if (window.__COLLAPSE_SETTINGS_SIDEBAR__) return;
  window.__COLLAPSE_SETTINGS_SIDEBAR__ = true;

  function apply() {
    if(document.getElementsByClassName('d_flex flex_1_0_218px pl_8px jc_flex-end').item(0)){
        if(fuckyou.length>1){
            fuckyou = [];
        }
        const thing = document.getElementsByClassName('d_flex flex_1_0_218px pl_8px jc_flex-end').item(0).children[0].children[0].children[0]
        const collapsebutton = document.createElement('div')
        collapsebutton.className = 'd_flex cursor_pointer ai_center'
        collapsebutton.ariaLabel = 'Collapse'
        collapsebutton.innerHTML = `
            <svg stroke-width="0" color="currentColor" fill="currentColor" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
        `
        collapsebutton.addEventListener('click',()=>{
            document.getElementsByClassName('d_flex flex_1_0_218px pl_8px jc_flex-end').item(0).style.display ='none'
        });

        if(!document.querySelector('div[aria-label=\'Collapse\']')&&window.outerWidth<window.outerHeight){
          thing.insertBefore(collapsebutton,thing.children[0])
        }
  
        document.querySelectorAll(`a[class='pos_relative min-w_0 d_flex ai_center p_6px_8px bdr_8px fw_500 me_12px fs_15px us_none trs_background-color_0.1s_ease-in-out c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bg_unset [&_svg]:flex-sh_0']`).forEach(e=>{
          if(e.children[1].children[0]?.children[0]?.getAttribute('d')=='m17 8-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5z'
          ||e.children[1].children[0]?.children[0]?.getAttribute('d')=='M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3M16 5v3H6V5zm0 5v1c0 2.76-2.24 5-5 5s-5-2.24-5-5v-1m12.5-2H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8M4 19h16v2H4z'
          ||e.children[1].children[0]?.children[0]?.getAttribute('d')=='M15 9H9v6h6zm-2 4h-2v-2h2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2zm-4 6H7V7h10z'
          ||e.textContent.includes('Avia')){
              return;
          }
          const oldClick = e.$$click
          e.$$click = async function(){
            await oldClick()
            const collapsebutton = document.querySelector('div[aria-label=\'Collapse\']')
            if(collapsebutton){
              collapsebutton.click()
            }
          }
      })
    }
  }

  const observer = new MutationObserver(() => {
    apply();
  });

  function init() {
    apply();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- __COLLAPSE_SETTINGS_SIDEBAR_FULLSCREEN__.js --- */
if(window.__US_BUILDER_COLLAPSE_SETTINGS_SIDEBAR_FULLSCREEN_JS__){return;}window.__US_BUILDER_COLLAPSE_SETTINGS_SIDEBAR_FULLSCREEN_JS__=true;

(function(){
if(window.__COLLAPSE_SETTINGS_SIDEBAR_FULLSCREEN__) return;
window.__COLLAPSE_SETTINGS_SIDEBAR_FULLSCREEN__ = true;

function getPanel(){
  return document.getElementsByClassName('d_flex flex_1_0_218px pl_8px jc_flex-end').item(0);
}

function getContentPanel(){
  return document.getElementsByClassName('will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden min-w_0 flex_1_1_800px').item(0);
}

function getSettingsRoot(){
  // the flex row that contains both the sidebar panel and content panel
  const panel = getPanel();
  if(!panel) return null;
  return panel.parentElement;
}

function ensureReopenBtn(){
  if(document.getElementById('avia-settings-reopen-btn')) return;

  const btn = document.createElement('div');
  btn.id = 'avia-settings-reopen-btn';
  Object.assign(btn.style, {
    position: 'fixed',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '999999',
    background: 'var(--md-sys-color-surface-container-high, #2a2a2a)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '0 0 8px 8px',
    padding: '4px 16px 6px',
    cursor: 'pointer',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    color: 'var(--md-sys-color-on-surface, #fff)',
    fontSize: '12px',
    fontWeight: '500',
  });

  // down chevron + label
  btn.innerHTML = `
    <svg stroke-width="0" fill="currentColor" viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
    </svg>
    <span>Settings</span>
  `;

  btn.addEventListener('click', () => {
    const panel = getPanel();
    if(!panel) return;

    // restore sidebar
    panel.style.display = '';
    Object.assign(panel.style, {
      position: '',
      top: '',
      left: '',
      width: '',
      height: '',
      zIndex: '',
    });

    // hide content again
    const content = getContentPanel();
    if(content) content.style.display = 'none';

    btn.style.display = 'none';
  });

  document.body.appendChild(btn);
}

function applyFullscreenSidebar(){
  const panel = getPanel();
  //ignore on tablets/ipads
  if(!panel || panel.__avia_fullscreen_applied__||window.outerHeight<window.outerWidth) return;
  panel.__avia_fullscreen_applied__ = true;

  // make the sidebar fill the screen, centered
  Object.assign(panel.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    zIndex: '99997',
    display: 'flex',
    justifyContent: 'center',
    background: 'var(--md-sys-color-surface, #1e1e1e)',
    overflowY: 'auto',
  });

  const content = getContentPanel();
  if(content) content.style.display = 'none';
}

function resetFullscreenSidebar(){
  const panel = getPanel();
  if(!panel) return;
  panel.__avia_fullscreen_applied__ = false;
  Object.assign(panel.style, {
    position: '',
    top: '',
    left: '',
    width: '',
    height: '',
    zIndex: '',
    display: '',
    justifyContent: '',
    background: '',
    overflowY: '',
  });
}

function syncReopenBtn(){
  const btn = document.getElementById('avia-settings-reopen-btn');
  if(!btn) return;
  const panel = getPanel();
  // if not in settings at all, hide the btn
  if(!panel){
    btn.style.display = 'none';
    return;
  }

  if(panel.style.display !== 'none'){
    btn.style.display = 'none';
  }
}

function hijack(){
  const panel = getPanel();
  if(!panel) return;

  applyFullscreenSidebar();

  const collapseBtn = panel.querySelector('[aria-label="Collapse"]');
  if(!collapseBtn || collapseBtn.__avia_fs_hijacked__) return;
  collapseBtn.__avia_fs_hijacked__ = true;

  collapseBtn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();

    // hide sidebar
    panel.style.display = 'none';

    // show content panel
    const content = getContentPanel();
    if(content){
      content.style.display = '';
      // center it nicely
      Object.assign(content.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '99996',
        overflowY: 'auto',
      });
    }

    const reopenBtn = document.getElementById('avia-settings-reopen-btn');
    if(reopenBtn) reopenBtn.style.display = 'flex';
  }, true);
}

ensureReopenBtn();

let lastInSettings = false;

new MutationObserver(() => {
  ensureReopenBtn();

  const inSettings = !!getPanel();

  if(inSettings && !lastInSettings){
    // just entered settings — reset any stale state
    const content = getContentPanel();
    if(content){
      Object.assign(content.style, {
        position: '',
        top: '',
        left: '',
        width: '',
        height: '',
        zIndex: '',
        overflowY: '',
      });
    }
  }

  if(!inSettings && lastInSettings){
    // just left settings
    const btn = document.getElementById('avia-settings-reopen-btn');
    if(btn) btn.style.display = 'none';
  }

  lastInSettings = inSettings;

  hijack();
  syncReopenBtn();

}).observe(document.body, { childList: true, subtree: true });

hijack();

})();


/* --- CustomTitle.js --- */
if(window.__US_BUILDER_CUSTOMTITLE_JS__){return;}window.__US_BUILDER_CUSTOMTITLE_JS__=true;

(function () {
  if (window.__CUSTOM_TITLE__) return;
  window.__CUSTOM_TITLE__ = true;

  function customTitle() {
    const icon = document.querySelector('link[rel=\'shortcut icon\']')
    if(!icon) return;
    icon.href='https://cdn.stoatusercontent.com/icons/vnGRb1M_UiP4-oj1qfqQODDCsyYOWa3f92ib3ac-K_/original'

    if(document.title!='Stoat (Avia Client Mobile 1.6.3)'){
        document.title='Stoat (Avia Client Mobile 1.6.3)'
    }
  }

  const observer = new MutationObserver(() => {
    customTitle();
  });

  function init() {
    customTitle();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- EmojiFix.js --- */
if(window.__US_BUILDER_EMOJIFIX_JS__){return;}window.__US_BUILDER_EMOJIFIX_JS__=true;

(function () {
  if (window.__EMOJI_FIX__) return;
  window.__EMOJI_FIX__ = true;

  function emojiFix() {
    for(const element of document.getElementsByClassName('fill_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-dim) w_36px h_36px d_flex flex-sh_0 ai_center jc_center bdr_var(--borderRadius-md)')){
        element.replaceChild(element.firstChild.firstChild.firstChild.firstChild.firstChild,element.firstChild)
    }
  }

  const observer = new MutationObserver(() => {
    emojiFix();
  });

  function init() {
    emojiFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- FixColourPicker.js --- */
if(window.__US_BUILDER_FIXCOLOURPICKER_JS__){return;}window.__US_BUILDER_FIXCOLOURPICKER_JS__=true;

(function () {
  if (window.__FIX_COLOUR_PICKER__) return;
  window.__FIX_COLOUR_PICKER__ = true;

  const defaultthemesettings = {
    'blur':true,
    'interfaceFont':'Inter',
    'm3Accent':'#5470ec',
    'm3Contrast':0,
    'm3Variant':'tonal_spot',
    'messageGroupSpacing':12,
    'messageSize':14,
    'mode':'system',
    'monospaceFont':'Fira Code',
    'present':'you'
  }

  function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }

  async function getThemeSettings(){
    const db = await new Promise((resolve, reject) => {
    const r = indexedDB.open('localforage');
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });

    const tx = db.transaction('keyvaluepairs', 'readwrite');
    const promise = await new Promise((resolve, reject) => {
    const r = tx.objectStore('keyvaluepairs').get('theme')
        r.onsuccess = ()=>resolve(r.result)
    });
    return promise;
    }

    async function updateThemeSettings(data){
        const db = await new Promise((resolve, reject) => {
        const r = indexedDB.open('localforage');
        r.onsuccess = () => resolve(r.result);
        r.onerror = () => reject(r.error);
        });

        const tx = db.transaction('keyvaluepairs', 'readwrite');
        const promise = await new Promise((resolve, reject) => {
        const r = tx.objectStore('keyvaluepairs').put(data,'theme')
            r.onsuccess = ()=>resolve(r.result)
            r.onerror = ()=>reject(r.error)
        });
    }

    async function fixColourInput(){
        const colourinput = document.querySelector(`input[type='color']`)
        if(colourinput&&!document.getElementById('aviacolourpicker')){
            const parent = colourinput.parentElement.parentElement
            if(parent.firstChild.tagName=='DIV'){
                const row = document.createElement('div')
                row.className='d_flex flex-d_column flex-g_initial m_0 ai_initial jc_initial gap_var(--gap-lg)'

                const input = document.createElement('input')
                input.type='color'
                input.id='aviacolourpicker'
                input.value=colourinput.value
                input.$$input = colourinput.$$input

                row.appendChild(input)

                for(const child of colourinput.nextSibling.children){
                    for(const child2 of child.children){
                        child2.addEventListener('click',async ()=>{
                            const numbers = child2.style.backgroundColor.replace('rgb','').replace('(','').replace(')','').split(', ')
                            const r = Number(numbers[0])
                            const g = Number(numbers[1])
                            const b = Number(numbers[2])
                            input.value = await rgbToHex(r,g,b)
                        });
                    }
                }

                colourinput.previousSibling.remove()
                parent.parentElement.insertBefore(row,parent.parentElement.children[1])
            }

            if(parent.firstChild.tagName=='SPAN'){
                const row = document.createElement('div')
                row.className='d_flex flex-d_row flex-g_initial flex-wrap_initial gap_var(--gap-md) ai_center jc_center'

                const themesettings = await getThemeSettings()??defaultthemesettings
                const input = document.createElement('input')
                input.type='color'
                input.id='aviacolourpicker'
                input.value=themesettings['m3Accent']
                input.onchange = async function(){
                    const themesettings = await getThemeSettings()??defaultthemesettings
                    themesettings['m3Accent']=input.value
                    updateThemeSettings(themesettings)
                }

                row.appendChild(input)

                for(const child of [...parent.children[2].children].filter(child=>child.tagName=='BUTTON')){
                    child.addEventListener('click',async ()=>{
                        const numbers = child.style.backgroundColor.replace('rgb','').replace('(','').replace(')','').split(', ')
                        const r = Number(numbers[0])
                        const g = Number(numbers[1])
                        const b = Number(numbers[2])
                        input.value = await rgbToHex(r,g,b)
                    })
                }

                parent.insertBefore(row,parent.children[2])
                parent.children[3].removeChild(parent.children[3].firstChild)
            }
        }
    }

    const observer = new MutationObserver(() => {
        fixColourInput();
    });

    function init() {
        fixColourInput();
        observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        });
    }

    if (document.body) {
        init();
    } else {
        requestAnimationFrame(init);
    }
})();


/* --- FullscreenSidebar.js --- */
if(window.__US_BUILDER_FULLSCREENSIDEBAR_JS__){return;}window.__US_BUILDER_FULLSCREENSIDEBAR_JS__=true;

(function () {
  if (window.__FULL_SCREEN_SIDEBAR__) return;
  window.__FULL_SCREEN_SIDEBAR__ = true;

  function getSidebar() {
    const wrap = document.getElementsByClassName(
      'd_flex h_100% min-w_0 c_var(--md-sys-color-outline) bg_var(--md-sys-color-surface-container-high)'
    ).item(0);
    return wrap && wrap.firstChild && wrap.firstChild.children[1]
      ? wrap.firstChild
      : null;
  }

  function undo(){
    const sidebar = getSidebar()
    if(!sidebar||sidebar.style.display=='none'||sidebar.style.width!='100vw') return;
    sidebar.style= 'display: flex; flex-shrink: 0;'

    const channels = document.querySelectorAll(`a[href*='/channel'][role='listitem']`)
    channels.forEach(channel=>{
        const clone = channel.cloneNode(true)
        channel.parentElement.replaceChild(clone,channel)
        delete clone.dataset.fuck
    })

    const homebutton = document.querySelectorAll(`a[href='/app']`).item(1)
    if(homebutton){
      const clone = homebutton.cloneNode(true)
      homebutton.parentElement.replaceChild(clone,homebutton)
      delete clone.dataset.patched
    }

    const friends = document.querySelector(`a[href='/friends']`)
    if(friends){
      const savednotesclone = friends.nextSibling.nextSibling.cloneNode(true)
      friends.parentElement.replaceChild(savednotesclone,friends.nextSibling.nextSibling)
      delete savednotesclone.dataset.patched

      const friendsclone = friends.cloneNode(true)
      friends.parentElement.replaceChild(friendsclone,friends)
      delete friendsclone.dataset.patched
    }
  }

  function fullScreenSidebar() {
    const sidebar = getSidebar()
    if(!sidebar||window.outerHeight<window.outerWidth) return;

    Object.assign(sidebar.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '99997',
        justifyContent: 'center',
        background: 'var(--md-sys-color-surface, #1e1e1e)',
        overflowY: 'auto',
    } );

    const discoverbutton = document.querySelector(`a[href*='/discover']`)
    if(discoverbutton){
      discoverbutton.href='https://stt.gg/discover'
      discoverbutton.target='_blank'
    }

    const stoatserversbutton = document.getElementById('stoatservers-sidebar-btn')
    if(stoatserversbutton&&!stoatserversbutton.dataset.patched){
      const clone = stoatserversbutton.firstChild.cloneNode(true)
      stoatserversbutton.replaceChild(clone,stoatserversbutton.firstChild)
      stoatserversbutton.onclick = function(e){
        window.open('https://stoatservers.com')
      }
      stoatserversbutton.dataset.patched=true
    }

    const channels = document.querySelectorAll(`a[href*='/channel'][role='listitem']`)
    channels.forEach(channel=>{
      if(!channel.dataset.fuck){
        channel.addEventListener('click',()=>{
            const sidebar = getSidebar()
            sidebar.style.display='none'
          });
          channel.dataset.fuck=true
      }
    })

    const homebutton = document.querySelectorAll(`a[href='/app']`).item(1)
    if(homebutton&&!homebutton.dataset.patched){
      homebutton.firstChild.addEventListener('click',()=>{
        const sidebar = getSidebar()
        sidebar.style.display='none'
      });
      homebutton.dataset.patched=true
    }

    const friends = document.querySelector(`a[href='/friends']`)
    if(friends&&!friends.dataset.patched){
      friends.firstChild.addEventListener('click',()=>{
        const sidebar = getSidebar()
        sidebar.style.display='none'
      });

      friends.nextSibling.nextSibling.firstChild.addEventListener('click',()=>{
        const sidebar = getSidebar()
        sidebar.style.display='none'
      });
      friends.nextSibling.nextSibling.dataset.patched=true
    }
  }

  const observer = new MutationObserver(() => {
    fullScreenSidebar();
    if(window.outerHeight<window.outerWidth){
      undo()
    }
  });

  function init() {
    fullScreenSidebar();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- GifAutoPlayfix.js --- */
if(window.__US_BUILDER_GIFAUTOPLAYFIX_JS__){return;}window.__US_BUILDER_GIFAUTOPLAYFIX_JS__=true;

(function () {
    if (window.__GIF_AUTOPLAY_FIX__) return;
    window.__GIF_AUTOPLAY_FIX__ = true;

    function fixGifAutoPlay(){
        document.querySelectorAll('video').forEach(video=>{
            if(video.className=='w_200px h_120px cursor_pointer obj-f_cover'||video.className=='cursor_pointer'){
                video.setAttribute('playsinline','true')
            }
        });
    }
    
    const observer = new MutationObserver(()=>{
        fixGifAutoPlay()
    });
    observer.observe(document.documentElement, {childList: true, subtree: true })
})();


/* --- HideChatButtonsOnFocus.js --- */
if(window.__US_BUILDER_HIDECHATBUTTONSONFOCUS_JS__){return;}window.__US_BUILDER_HIDECHATBUTTONSONFOCUS_JS__=true;

(function () {
  if (window.__HIDE_CHAT_BUTTONS_ON_FOCUS__) return;
  window.__HIDE_CHAT_BUTTONS_ON_FOCUS__ = true;

  function hideChatButtonsOnFocus() {
    const chatbar = document.getElementsByClassName('cm-content cm-lineWrapping').item(0)
    if(!chatbar) return;
    if(!chatbar.dataset.patched){
        chatbar.addEventListener('focus',()=>{
            for(const button of chatbar.parentElement.parentElement.parentElement.parentElement.querySelectorAll(`div[class='flex-sh_0 d_flex ai_end jc_center w_42px']`)){
                button.style.display='none'
            }
        })

        chatbar.addEventListener('blur',()=>{
            for(const button of chatbar.parentElement.parentElement.parentElement.parentElement.querySelectorAll(`div[class='flex-sh_0 d_flex ai_end jc_center w_42px']`)){
                if(button.textContent!='gif'){
                  button.style.removeProperty('display')
                }
            }
        })
        chatbar.dataset.patched=true
    }
  }

  const observer = new MutationObserver(() => {
    hideChatButtonsOnFocus();
  });

  function init() {
    hideChatButtonsOnFocus();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- HideServerList.js --- */
if(window.__US_BUILDER_HIDESERVERLIST_JS__){return;}window.__US_BUILDER_HIDESERVERLIST_JS__=true;

(function () {
  if (window.__HIDE_SERVER_LIST__) return;
  window.__HIDE_SERVER_LIST__ = true;

  function hideServerList() {
        const button = document.querySelector('div[aria-label=\'Toggle main sidebar\']')
        if(button){
          const sidebar = document.getElementsByClassName('d_flex h_100% min-w_0 c_var(--md-sys-color-outline) bg_var(--md-sys-color-surface-container-high)')
          .item(0).firstChild
          if(sidebar.children[1]){
            button.$$click = function(){
              if(sidebar.style.display=='none'){
                sidebar.style.display='flex'
              }else{
                sidebar.style.display='none'
              }
            }
          }
        }
  }

  const observer = new MutationObserver(() => {
      hideServerList();
  });

  function init() {
    hideServerList();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- HideUnsentMessages.js --- */
if(window.__US_BUILDER_HIDEUNSENTMESSAGES_JS__){return;}window.__US_BUILDER_HIDEUNSENTMESSAGES_JS__=true;

(function () {
    if (window.__HIDE_UNSENT_MESSAGES__) return;
    window.__HIDE_UNSENT_MESSAGES__ = true;
    const targetNode = document.documentElement;
    const config = { childList: true, subtree: true };

    function setIcon(button, type) {
        const oldSvg = button.querySelector('svg');
        if (oldSvg) oldSvg.remove();

        const icons = {
            monitor: "M3 4h18v12H3V4zm2 2v8h14V6H5zm3 12h8v2H8v-2z",
            upload: "M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h4.66V9h3.84L12 2z",
            refresh: "M17.65 6.35A7.95 7.95 0 0012 4V1L7 6l5 5V7a5 5 0 11-5 5H5a7 7 0 107.75-6.65z",
            code: "M8.7 16.3L4.4 12l4.3-4.3 1.4 1.4L7.2 12l2.9 2.9-1.4 1.4zm6.6 0l-1.4-1.4L16.8 12l-2.9-2.9 1.4-1.4L19.6 12l-4.3 4.3z",
            delete: "M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"
        };

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "currentColor");
        svg.style.marginRight = "8px";
        if(type=='delete'){
            svg.setAttribute('fill','var(--md-sys-color-error)')
        }

        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", icons[type]);
        svg.appendChild(path);

        button.insertBefore(svg, button.firstChild);
    }

    function hideUnsentMessages(){
        const unsentmessages = document.getElementsByClassName('group pos_relative d_flex flex-d_column p_2px_0 bg_transparent bdr_var(--borderRadius-md) min-h_1em trs_background-color_var(--transitions-fast) [&_a:hover]:td_underline [&:hover_.Toolbar]:d_flex mt_var(--message-group-spacing)! [&:hover]:bg_var(--md-sys-color-surface-container) c_var(--md-sys-color-error)')
        if(unsentmessages.item(0)){
            for(const message of unsentmessages){
                if(localStorage.getItem('hideunsentmessages')=='true'){
                    message.style.display='none'
                }
            }
        }
    }
    const observer1 = new MutationObserver(hideUnsentMessages);
    observer1.observe(targetNode, config)
    hideUnsentMessages()

    function injectSettingsButton(){
        const themes = document.getElementById('avia-themes-btn')
        if(themes&&!document.getElementById('hideunsentmessages')){
            const settingsbutton = document.createElement('a')
            settingsbutton.className='pos_relative min-w_0 d_flex ai_center p_6px_8px bdr_8px fw_500 me_12px fs_15px us_none trs_background-color_0.1s_ease-in-out c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bg_unset [&_svg]:flex-sh_0'
            settingsbutton.id='hideunsentmessages'
            if(localStorage.getItem('hideunsentmessages')=='true'){
                settingsbutton.innerHTML=`
                <md-ripple aria-hidden="true"></md-ripple><div class="d_flex ai_center gap_8px flex-g_1 min-w_0 pe_8px"><div class="min-w_0 d_flex flex-d_column"><div class="ov_hidden white-space_nowrap tov_ellipsis [&amp;_*]:ov_hidden [&amp;_*]:white-space_nowrap [&amp;_*]:tov_ellipsis"><span style="color: var(--md-sys-color-error);">(Avia) Show Unsent Messages</span></div></div></div>
                `
            }else{
                settingsbutton.innerHTML=`
                <md-ripple aria-hidden="true"></md-ripple><div class="d_flex ai_center gap_8px flex-g_1 min-w_0 pe_8px"><div class="min-w_0 d_flex flex-d_column"><div class="ov_hidden white-space_nowrap tov_ellipsis [&amp;_*]:ov_hidden [&amp;_*]:white-space_nowrap [&amp;_*]:tov_ellipsis"><span style="color: var(--md-sys-color-error);">(Avia) Hide Unsent Messages</span></div></div></div>
                `
            }
            setIcon(settingsbutton,'delete')

            settingsbutton.onclick=()=>{
                if(!localStorage.getItem('hideunsentmessages')){
                    localStorage.setItem('hideunsentmessages','true')
                    settingsbutton.innerHTML=`
                    <md-ripple aria-hidden="true"></md-ripple><div class="d_flex ai_center gap_8px flex-g_1 min-w_0 pe_8px"><div class="min-w_0 d_flex flex-d_column"><div class="ov_hidden white-space_nowrap tov_ellipsis [&amp;_*]:ov_hidden [&amp;_*]:white-space_nowrap [&amp;_*]:tov_ellipsis"><span style="color: var(--md-sys-color-error);">(Avia) Show Unsent Messages</span></div></div></div>
                    `
                    setIcon(settingsbutton,'delete')
                }else{
                    if(localStorage.getItem('hideunsentmessages')=='false'){
                        localStorage.setItem('hideunsentmessages','true')
                        settingsbutton.innerHTML=`
                        <md-ripple aria-hidden="true"></md-ripple><div class="d_flex ai_center gap_8px flex-g_1 min-w_0 pe_8px"><div class="min-w_0 d_flex flex-d_column"><div class="ov_hidden white-space_nowrap tov_ellipsis [&amp;_*]:ov_hidden [&amp;_*]:white-space_nowrap [&amp;_*]:tov_ellipsis"><span style="color: var(--md-sys-color-error);">(Avia) Show Unsent Messages</span></div></div></div>
                        `
                        setIcon(settingsbutton,'delete')
                    }else{
                        localStorage.setItem('hideunsentmessages','false')
                        settingsbutton.innerHTML=`
                        <md-ripple aria-hidden="true"></md-ripple><div class="d_flex ai_center gap_8px flex-g_1 min-w_0 pe_8px"><div class="min-w_0 d_flex flex-d_column"><div class="ov_hidden white-space_nowrap tov_ellipsis [&amp;_*]:ov_hidden [&amp;_*]:white-space_nowrap [&amp;_*]:tov_ellipsis"><span style="color: var(--md-sys-color-error);">(Avia) Hide Unsent Messages</span></div></div></div>
                        `
                        setIcon(settingsbutton,'delete')
                    }
                }
            };
            themes.parentElement.appendChild(settingsbutton)
        }
    }
    const observer2 = new MutationObserver(injectSettingsButton)
    observer2.observe(targetNode,config)
})();


/* --- inject.user.js --- */
if(window.__US_BUILDER_INJECT_USER_JS__){return;}window.__US_BUILDER_INJECT_USER_JS__=true;

// ==UserScript==
// @name         Avia Client optimised for mobile by 0simp
// @description  Adds custom font support and a QuickCSS editor to enhance Stoat Chat's interface and styling.
// @author       AvaLilac
// @version      1.4
// @match        *://*.stoat.chat/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {

    if (window.__AVIA_WEB_LOADED__) return;
    window.__AVIA_WEB_LOADED__ = true;

    const LINKTREE_URL = "https://linktr.ee/GermanAvaLilac";
    const STOAT_SERVER_URL = "https://stt.gg/GvBhcejB";

    function preloadMonaco() {
        return new Promise(resolve => {
            if (window.monaco) return resolve();
            const loader = document.createElement("script");
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs" } });
                require(["vs/editor/editor.main"], () => resolve());
            };
            document.head.appendChild(loader);
        });
    }

    async function toggleQuickCSSPanel() {
        await preloadMonaco()

        let panel = document.getElementById('avia-quickcss-panel');
        if (panel) {
            panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
            return;
        }

        panel = document.createElement('div');
        panel.id = 'avia-quickcss-panel';
        panel.style.position = 'fixed';
        panel.style.bottom = '12px';
        panel.style.right = '0px';
        if(window.outerWidth<486){
            panel.style.width = `${window.outerWidth-66}px`;
            panel.style.height = `${window.outerWidth-130}px`;
        }else{
            panel.style.width = '420px';
            panel.style.height = '340px';
        }
        panel.style.background = 'var(--md-sys-color-surface, #1e1e1e)';
        panel.style.color = 'var(--md-sys-color-on-surface, #fff)';
        panel.style.borderRadius = '16px';
        panel.style.boxShadow = '0 8px 28px rgba(0,0,0,0.35)';
        panel.style.zIndex = '999999';
        panel.style.display = 'flex';
        panel.style.flexDirection = 'column';
        panel.style.overflow = 'hidden';
        panel.style.border = '1px solid rgba(255,255,255,0.08)';
        panel.style.backdropFilter = 'blur(12px)';

        const header = document.createElement('div');
        header.textContent = 'QuickCSS';
        header.style.padding = '14px 16px';
        header.style.fontWeight = '600';
        header.style.fontSize = '14px';
        header.style.letterSpacing = '0.3px';
        header.style.background = 'var(--md-sys-color-surface-container, rgba(255,255,255,0.04))';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
        header.style.cursor = 'move';

        const closeBtn = document.createElement('div');
        closeBtn.textContent = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '12px';
        closeBtn.style.right = '16px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.opacity = '0.7';
        closeBtn.onmouseenter = () => closeBtn.style.opacity = '1';
        closeBtn.onmouseleave = () => closeBtn.style.opacity = '0.7';
        closeBtn.onclick = () => panel.style.display = 'none';

        const editorContainer=document.createElement("div");
        editorContainer.style.flex="1";

        const clearBtn = document.createElement('div');
        clearBtn.textContent = 'Clear';
        Object.assign(clearBtn.style,{
            position:'absolute',
            top:'12px',
            right:'86px',
            cursor:'pointer',
            color:'#fff'
        });

        const pasteBtn = document.createElement('div');
        pasteBtn.textContent = 'Paste';
        Object.assign(pasteBtn.style,{
            position:'absolute',
            top:'12px',
            right:'36px',
            cursor:'pointer',
            color:'#fff'
        });

        const editor=monaco.editor.create(editorContainer,{
            value:localStorage.getItem("avia_quickcss")||"",
            language:"css",
            theme:"vs-dark",
            automaticLayout:true,
            minimap:{enabled:false},
            fontSize:13,
            scrollBeyondLastLine:false,
            wordWrap:"on"
        });

        pasteBtn.addEventListener('click',async ()=>{
            navigator.clipboard.readText().then(text=>{
                const model = editor.getModel();
                const value = model.getValue()
                model.setValue(value+`\n${text}`)
            })
        });

        clearBtn.addEventListener('click',async ()=>{
            const model = editor.getModel();
            model.setValue('')
        });

        panel.appendChild(header);
        panel.appendChild(clearBtn);
        panel.appendChild(pasteBtn);
        panel.appendChild(closeBtn);
        panel.appendChild(editorContainer);
        document.body.appendChild(panel);

        editor.onDidChangeModelContent(()=>{
            const value=editor.getValue();
            localStorage.setItem("avia_quickcss",value);
            let styleTag=document.getElementById("avia-quickcss-style");
            if(!styleTag){
                styleTag=document.createElement("style");
                styleTag.id="avia-quickcss-style";
                document.head.appendChild(styleTag);
            }
            styleTag.textContent=value;
        });

        let isDragging = false, offsetX, offsetY;
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - panel.offsetLeft;
            offsetY = e.clientY - panel.offsetTop;
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.style.userSelect = '';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            panel.style.left = (e.clientX - offsetX) + 'px';
            panel.style.top = (e.clientY - offsetY) + 'px';
            panel.style.right = 'auto';
            panel.style.bottom = 'auto';
        });
    }

    function setIcon(button, type) {
        const oldSvg = button.querySelector('svg');
        if (oldSvg) oldSvg.remove();

        const icons = {
            monitor: "M3 4h18v12H3V4zm2 2v8h14V6H5zm3 12h8v2H8v-2z",
            upload: "M5 20h14v-2H5v2zm7-18L5.33 9h3.84v4h4.66V9h3.84L12 2z",
            refresh: "M17.65 6.35A7.95 7.95 0 0012 4V1L7 6l5 5V7a5 5 0 11-5 5H5a7 7 0 107.75-6.65z",
            code: "M8.7 16.3L4.4 12l4.3-4.3 1.4 1.4L7.2 12l2.9 2.9-1.4 1.4zm6.6 0l-1.4-1.4L16.8 12l-2.9-2.9 1.4-1.4L19.6 12l-4.3 4.3z"
        };

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "currentColor");
        svg.style.marginRight = "8px";

        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", icons[type]);
        svg.appendChild(path);

        button.insertBefore(svg, button.firstChild);
    }

    function applyFont(src, name) {
        const fontName = "CustomFont" + Date.now();
        let styleTag = document.getElementById('custom-font-style');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'custom-font-style';
            document.head.appendChild(styleTag);
        }
        const ext = (name || src).split('.').pop().split('?')[0].toLowerCase();
        const formatMap = {
            ttf: 'truetype',
            otf: 'opentype',
            woff: 'woff',
            woff2: 'woff2',
            eot: 'embedded-opentype'
        };
        const format = formatMap[ext] || '';
        styleTag.textContent = `
            @font-face {
                font-family: '${fontName}';
                src: url('${src}')${format ? " format('" + format + "')" : ""};
                font-weight: normal;
                font-style: normal;
            }
            body, body *:not(.material-symbols-outlined) {
                font-family: '${fontName}', sans-serif !important;
            }
        `;
        if (name) localStorage.setItem('avia_custom_font_name', name);
    }

    function removeFont() {
        localStorage.removeItem('avia_custom_font_url');
        localStorage.removeItem('avia_custom_font_data');
        localStorage.removeItem('avia_custom_font_name');
        const styleTag = document.getElementById('custom-font-style');
        if (styleTag) styleTag.remove();
    }

    (function applySavedFont() {
        const data = localStorage.getItem('avia_custom_font_data');
        const url = localStorage.getItem('avia_custom_font_url');
        const name = localStorage.getItem('avia_custom_font_name') || '';
        if (data) applyFont(data, name);
        else if (url) applyFont(url, name);
    })();

    function showFontLoaderModal() {
        if (document.getElementById('avia-font-modal-scrim')) return;

        const styleEl = document.createElement('style');
        styleEl.id = 'avia-font-modal-styles';
        styleEl.textContent = `
            @keyframes avia-scrim-in { from { opacity: 0; } to { opacity: 1; } }
            @keyframes avia-modal-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
            #avia-font-modal-inner { animation: avia-modal-in 0.15s forwards; }
            .avia-tab-btn { transition: background 0.15s, color 0.15s; font-family: inherit; }
            .avia-tab-btn:hover { opacity: 0.8; }
            .avia-tab-btn.avia-tab-active {
                background: var(--md-sys-color-primary, rgba(103,80,164,0.9)) !important;
                color: #fff !important;
            }
            .avia-modal-action-btn {
                height: 40px;
                border-radius: 999px;
                border: none;
                padding: 0 16px;
                font-size: 0.875rem;
                font-weight: 500;
                letter-spacing: 0.015625rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: opacity 0.15s;
                font-family: inherit;
            }
            .avia-modal-action-btn:hover { opacity: 0.8; }
            .avia-modal-action-btn:disabled { cursor: not-allowed; opacity: 0.38; }
            .avia-font-input {
                width: 100%;
                box-sizing: border-box;
                padding: 14px 16px;
                border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.12);
                background: rgba(255,255,255,0.06);
                color: var(--md-sys-color-on-surface, #fff);
                font-size: 0.875rem;
                outline: none;
                font-family: inherit;
                transition: border-color 0.15s;
            }
            .avia-font-input:focus { border-color: var(--md-sys-color-primary, rgba(103,80,164,0.9)); }
            .avia-font-input::placeholder { color: rgba(255,255,255,0.4); }
            .avia-file-drop {
                width: 100%;
                box-sizing: border-box;
                border: 2px dashed rgba(255,255,255,0.15);
                border-radius: 12px;
                padding: 28px 16px;
                text-align: center;
                cursor: pointer;
                transition: border-color 0.15s, background 0.15s;
                color: rgba(255,255,255,0.5);
                font-size: 0.875rem;
            }
            .avia-file-drop:hover, .avia-file-drop.avia-drag-over {
                border-color: var(--md-sys-color-primary, rgba(103,80,164,0.9));
                background: rgba(103,80,164,0.08);
            }
        `;
        document.head.appendChild(styleEl);

        const scrim = document.createElement('div');
        scrim.id = 'avia-font-modal-scrim';
        Object.assign(scrim.style, {
            position: 'fixed',
            top: '0', left: '0', right: '0', bottom: '0',
            zIndex: '999999',
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(0,0,0,0.6)',
            padding: '80px',
            overflowY: 'auto',
            animation: 'avia-scrim-in 0.1s forwards',
            boxSizing: 'border-box'
        });

        scrim.addEventListener('click', e => {
            if (e.target === scrim) {
                scrim.remove();
                styleEl.remove();
            }
        });

        const modal = document.createElement('div');
        modal.id = 'avia-font-modal-inner';
        Object.assign(modal.style, {
            padding: '24px',
            minWidth: '340px',
            maxWidth: '480px',
            width: '100%',
            borderRadius: '28px',
            display: 'flex',
            flexDirection: 'column',
            color: 'var(--md-sys-color-on-surface, #fff)',
            background: 'var(--md-sys-color-surface-container-high, #2b2b2f)',
            boxSizing: 'border-box'
        });

        const title = document.createElement('span');
        title.textContent = 'Font Loader';
        Object.assign(title.style, {
            lineHeight: '2rem',
            fontSize: '1.5rem',
            letterSpacing: '0',
            fontWeight: '400',
            marginBottom: '6px'
        });
        modal.appendChild(title);

        const activeFontEl = document.createElement('div');
        activeFontEl.id = 'avia-font-active-label';
        Object.assign(activeFontEl.style, {
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '18px',
            minHeight: '16px'
        });
        const savedName = localStorage.getItem('avia_custom_font_name') || '';
        activeFontEl.textContent = savedName ? 'Active: ' + savedName : 'No custom font active';
        modal.appendChild(activeFontEl);

        const tabRow = document.createElement('div');
        Object.assign(tabRow.style, { display: 'flex', gap: '8px', marginBottom: '18px' });

        const tabUrl = document.createElement('button');
        tabUrl.textContent = 'URL';
        tabUrl.className = 'avia-tab-btn avia-tab-active';
        Object.assign(tabUrl.style, {
            flex: '1', padding: '8px', borderRadius: '8px', border: 'none',
            background: 'var(--md-sys-color-primary, rgba(103,80,164,0.9))',
            color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer'
        });

        const tabFile = document.createElement('button');
        tabFile.textContent = 'Local File';
        tabFile.className = 'avia-tab-btn';
        Object.assign(tabFile.style, {
            flex: '1', padding: '8px', borderRadius: '8px', border: 'none',
            background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)',
            fontSize: '13px', fontWeight: '600', cursor: 'pointer'
        });

        tabRow.appendChild(tabUrl);
        tabRow.appendChild(tabFile);
        modal.appendChild(tabRow);

        const body = document.createElement('div');
        Object.assign(body.style, { marginBottom: '20px' });
        modal.appendChild(body);

        const urlInput = document.createElement('input');
        urlInput.className = 'avia-font-input';
        urlInput.type = 'text';
        urlInput.placeholder = 'https://example.com/font.ttf';
        const savedUrl = localStorage.getItem('avia_custom_font_url') || '';
        if (savedUrl) urlInput.value = savedUrl;

        const fileDropZone = document.createElement('div');
        fileDropZone.className = 'avia-file-drop';

        const fileDropText = document.createElement('div');
        fileDropText.style.marginBottom = '6px';
        fileDropText.textContent = 'Drop a font file here or click to browse';

        const fileDropSub = document.createElement('div');
        Object.assign(fileDropSub.style, { fontSize: '11px', opacity: '0.5' });
        fileDropSub.textContent = '.ttf · .otf · .woff · .woff2';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.ttf,.otf,.woff,.woff2';
        fileInput.style.display = 'none';

        fileDropZone.appendChild(fileDropText);
        fileDropZone.appendChild(fileDropSub);
        fileDropZone.appendChild(fileInput);

        fileDropZone.addEventListener('click', () => fileInput.click());
        fileDropZone.addEventListener('dragover', e => { e.preventDefault(); fileDropZone.classList.add('avia-drag-over'); });
        fileDropZone.addEventListener('dragleave', () => fileDropZone.classList.remove('avia-drag-over'));
        fileDropZone.addEventListener('drop', e => {
            e.preventDefault();
            fileDropZone.classList.remove('avia-drag-over');
            const f = e.dataTransfer.files[0];
            if (f) handleFileSelected(f);
        });
        fileInput.addEventListener('change', () => {
            if (fileInput.files[0]) handleFileSelected(fileInput.files[0]);
        });

        let selectedFile = null;
        let currentTab = 'url';

        function handleFileSelected(f) {
            selectedFile = f;
            fileDropText.textContent = f.name;
            fileDropSub.textContent = (f.size / 1024).toFixed(1) + ' KB';
            fileDropZone.style.borderColor = 'var(--md-sys-color-primary, rgba(103,80,164,0.9))';
            fileDropZone.style.background = 'rgba(103,80,164,0.08)';
            applyBtn.disabled = false;
        }

        function renderTab() {
            body.innerHTML = '';
            selectedFile = null;
            if (currentTab === 'url') {
                tabUrl.classList.add('avia-tab-active');
                tabUrl.style.background = 'var(--md-sys-color-primary, rgba(103,80,164,0.9))';
                tabUrl.style.color = '#fff';
                tabFile.classList.remove('avia-tab-active');
                tabFile.style.background = 'rgba(255,255,255,0.06)';
                tabFile.style.color = 'rgba(255,255,255,0.7)';
                applyBtn.disabled = false;
                body.appendChild(urlInput);
            } else {
                tabFile.classList.add('avia-tab-active');
                tabFile.style.background = 'var(--md-sys-color-primary, rgba(103,80,164,0.9))';
                tabFile.style.color = '#fff';
                tabUrl.classList.remove('avia-tab-active');
                tabUrl.style.background = 'rgba(255,255,255,0.06)';
                tabUrl.style.color = 'rgba(255,255,255,0.7)';
                applyBtn.disabled = true;
                body.appendChild(fileDropZone);
            }
        }

        tabUrl.addEventListener('click', () => { currentTab = 'url'; renderTab(); });
        tabFile.addEventListener('click', () => { currentTab = 'file'; renderTab(); });

        const btnRow = document.createElement('div');
        Object.assign(btnRow.style, {
            display: 'flex', justifyContent: 'flex-end',
            gap: '8px', marginTop: '4px', flexWrap: 'wrap', alignItems: 'center'
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Font';
        removeBtn.className = 'avia-modal-action-btn';
        Object.assign(removeBtn.style, {
            color: 'var(--md-sys-color-error, #f2b8b8)',
            background: 'transparent',
            marginRight: 'auto'
        });
        removeBtn.addEventListener('click', () => {
            removeFont();
            activeFontEl.textContent = 'No custom font active';
            fileDropText.textContent = 'Drop a font file here or click to browse';
            fileDropSub.textContent = '.ttf · .otf · .woff · .woff2';
            fileDropZone.style.borderColor = '';
            fileDropZone.style.background = '';
            urlInput.value = '';
            selectedFile = null;
        });

        const closeModalBtn = document.createElement('button');
        closeModalBtn.textContent = 'Close';
        closeModalBtn.className = 'avia-modal-action-btn';
        Object.assign(closeModalBtn.style, {
            color: 'var(--md-sys-color-primary, #cfbcff)',
            background: 'transparent'
        });
        closeModalBtn.addEventListener('click', () => { scrim.remove(); styleEl.remove(); });

        const applyBtn = document.createElement('button');
        applyBtn.textContent = 'Apply';
        applyBtn.className = 'avia-modal-action-btn';
        Object.assign(applyBtn.style, {
            background: 'var(--md-sys-color-primary, rgba(103,80,164,0.9))',
            color: '#fff'
        });

        applyBtn.addEventListener('click', () => {
            if (currentTab === 'url') {
                const url = urlInput.value.trim();
                if (!url) return;
                localStorage.removeItem('avia_custom_font_data');
                localStorage.removeItem('avia_custom_font_name');
                localStorage.setItem('avia_custom_font_url', url);
                const name = url.split('/').pop().split('?')[0];
                applyFont(url, name);
                activeFontEl.textContent = 'Active: ' + name;
            } else {
                if (!selectedFile) return;
                const reader = new FileReader();
                reader.onload = () => {
                    const dataUrl = reader.result;
                    localStorage.removeItem('avia_custom_font_url');
                    localStorage.setItem('avia_custom_font_data', dataUrl);
                    applyFont(dataUrl, selectedFile.name);
                    activeFontEl.textContent = 'Active: ' + selectedFile.name;
                };
                reader.readAsDataURL(selectedFile);
            }
        });

        btnRow.appendChild(removeBtn);
        btnRow.appendChild(closeModalBtn);
        btnRow.appendChild(applyBtn);
        modal.appendChild(btnRow);

        scrim.appendChild(modal);
        document.body.appendChild(scrim);

        renderTab();
    }

    function injectButtons() {
        for(const el of document.getElementsByClassName('d_flex flex-d_column flex-g_initial m_0 ai_initial jc_initial')){
            if(el.firstChild?.firstChild?.textContent.includes('Version')){
                const element = document.createElement('span')
                if(!document.querySelector('span[data-avia-patched]')){
                    el.appendChild(element)
                    element.outerHTML = `
                    <span class="lh_1rem fs_0.75rem ls_0.03125rem fw_500" data-avia-patched="true">
                                Avia Client Mobile 1.6.3<br>
                                <span style="font-size:10px;opacity:0.7;">
                                    Based on Avia Client 1.7.1
                                </span>
                            </span>
                    `
                }
            }
        }
        
        const appearanceBtn = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === 'Appearance');
        if (!appearanceBtn) return;

        const aviaHeader = [...document.querySelectorAll('span')]
            .find(s => s.textContent.trim() === "AVIA CLIENT SETTINGS");
        if (!aviaHeader) return;

        const aviaContainer = aviaHeader.closest('.d_flex.flex-d_column');
        if (!aviaContainer) return;

        const targetParent = aviaContainer.querySelector('.d_flex.flex-d_column.gap_var\\(--gap-s\\)');
        if (!targetParent) return;

        if (!document.getElementById('stoat-fake-linktree')) {
            const linktreeBtn = appearanceBtn.cloneNode(true);
            linktreeBtn.id = 'stoat-fake-linktree';
            const textNode = Array.from(linktreeBtn.querySelectorAll('div')).find(d => d.children.length === 0 && d.textContent.trim() === 'Appearance');
            if (textNode) textNode.textContent = "(Avia) Ava's Linktree";
            setIcon(linktreeBtn, "monitor");
            linktreeBtn.addEventListener('click', () => window.open(LINKTREE_URL, "_blank"));
            targetParent.appendChild(linktreeBtn);

            const stoatBtn = appearanceBtn.cloneNode(true);
            stoatBtn.id = 'stoat-fake-stoatserver';
            const stoatTextNode = Array.from(stoatBtn.querySelectorAll('div')).find(d => d.children.length === 0 && d.textContent.trim() === 'Appearance');
            if (stoatTextNode) stoatTextNode.textContent = "(Avia) Stoat Server";
            setIcon(stoatBtn, "monitor");
            stoatBtn.addEventListener('click', () => window.open(STOAT_SERVER_URL, "_blank"));
            targetParent.appendChild(stoatBtn);
        }

        if (!document.getElementById('stoat-fake-loadfont')) {
            const newBtn = appearanceBtn.cloneNode(true);
            newBtn.id = 'stoat-fake-loadfont';
            const textNode = Array.from(newBtn.querySelectorAll('div')).find(d => d.children.length === 0);
            if (textNode) textNode.textContent = "(Avia) Font Loader";
            setIcon(newBtn, "upload");
            newBtn.addEventListener('click', showFontLoaderModal);
            targetParent.appendChild(newBtn);
        }

        if (!document.getElementById('stoat-fake-quickcss')) {
            const quickCssBtn = appearanceBtn.cloneNode(true);
            quickCssBtn.id = 'stoat-fake-quickcss';
            const quickCssTextNode = Array.from(quickCssBtn.querySelectorAll('div')).find(d => d.children.length === 0);
            if (quickCssTextNode) quickCssTextNode.textContent = "(Avia) QuickCSS";
            setIcon(quickCssBtn, "code");
            quickCssBtn.addEventListener('click', toggleQuickCSSPanel);
            targetParent.appendChild(quickCssBtn);
        }
    }

    function applyQuickCSS(css) {
        let styleTag = document.getElementById('avia-quickcss-style');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'avia-quickcss-style';
            document.head.appendChild(styleTag);
        }
        styleTag.textContent = css;
    }

    (function applySavedQuickCSS() {
        const savedCSS = localStorage.getItem('avia_quickcss');
        if (savedCSS) applyQuickCSS(savedCSS);
    })();

    function waitForBody(callback) {
        if (document.body) callback();
        else new MutationObserver((obs) => {
            if (document.body) {
                obs.disconnect();
                callback();
            }
        }).observe(document.documentElement, { childList: true });
    }

    function registerWithAviaMenu() {
        if (window.AviaMenu) {
            window.AviaMenu.register({ id: "avia_fontloader", name: "Font Loader", icon: "upload", onClick: showFontLoaderModal });
            window.AviaMenu.register({ id: "avia_quickcss", name: "QuickCSS", icon: "code", onClick: toggleQuickCSSPanel });
        } else {
            const interval = setInterval(() => {
                if (window.AviaMenu) {
                    clearInterval(interval);
                    window.AviaMenu.register({ id: "avia_fontloader", name: "Font Loader", icon: "upload", onClick: showFontLoaderModal });
                    window.AviaMenu.register({ id: "avia_quickcss", name: "QuickCSS", icon: "code", onClick: toggleQuickCSSPanel });
                }
            }, 100);
        }
    }

    waitForBody(() => {
        const observer = new MutationObserver(() => injectButtons());
        observer.observe(document.body, { childList: true, subtree: true });
        injectButtons();
    });

    preloadMonaco();
    registerWithAviaMenu();
})();


/* --- LocalPlugins.js --- */
if(window.__US_BUILDER_LOCALPLUGINS_JS__){return;}window.__US_BUILDER_LOCALPLUGINS_JS__=true;

(function () {

    if (window.__LOCAL_PLUGINS__) return;
    window.__LOCAL_PLUGINS__ = true;

    const STORAGE_KEY = "avia_local_plugins";

    const runningLocalPlugins = {};
    const localPluginErrors = {};

    const getLocalPlugins = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const setLocalPlugins = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    function preloadMonaco() {
        return new Promise(resolve => {
            if (window.monaco) return resolve();
            const loader = document.createElement("script");
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs" } });
                require(["vs/editor/editor.main"], () => resolve());
            };
            document.head.appendChild(loader);
        });
    }

    function runLocalPlugin(plugin) {
        stopLocalPlugin(plugin);
        try {
            const script = document.createElement("script");
            script.textContent = plugin.code || "";
            script.dataset.localPluginId = plugin.id;
            document.body.appendChild(script);
            runningLocalPlugins[plugin.id] = script;
            delete localPluginErrors[plugin.id];
        } catch (e) {
            localPluginErrors[plugin.id] = true;
        }
        renderLocalPanel();
    }

    function stopLocalPlugin(plugin) {
        const script = runningLocalPlugins[plugin.id];
        if (!script) return;
        script.remove();
        delete runningLocalPlugins[plugin.id];
        delete localPluginErrors[plugin.id];
        renderLocalPanel();
    }

    async function openEditorPanel(plugin, onSave) {
        await preloadMonaco();

        const existing = document.getElementById("avia-local-editor-panel");
        if (existing) existing.remove();

        const panel = document.createElement("div");
        panel.id = "avia-local-editor-panel";
        if(window.outerWidth<612){
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                left: "24px",
                width: `${window.outerWidth-52}px`,
                height: `${window.outerWidth-72}px`,
                background: "var(--md-sys-color-surface, #1e1e1e)",
                borderRadius: "16px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                zIndex: "9999999",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)"
            });
        }else{
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                left: "24px",
                width: "560px",
                height: "520px",
                background: "var(--md-sys-color-surface, #1e1e1e)",
                borderRadius: "16px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                zIndex: "9999999",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)"
            });
        }

        const header = document.createElement("div");
        header.textContent = `Editing: ${plugin.name}`;
        Object.assign(header.style, {
            padding: "14px 16px",
            fontWeight: "600",
            fontSize: "14px",
            background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            cursor: "move",
            color: "#fff",
            flex: "0 0 auto"
        });

        const closeBtn = document.createElement("div");
        closeBtn.textContent = "✕";
        Object.assign(closeBtn.style, {
            position: "absolute",
            top: "12px",
            right: "16px",
            cursor: "pointer",
            opacity: "0.7",
            color: "#fff",
            zIndex: "1"
        });
        closeBtn.onmouseenter = () => closeBtn.style.opacity = "1";
        closeBtn.onmouseleave = () => closeBtn.style.opacity = "0.7";
        closeBtn.onclick = () => panel.remove();

        const toolbar = document.createElement("div");
        Object.assign(toolbar.style, {
            padding: "8px 16px",
            display: "flex",
            gap: "8px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flex: "0 0 auto"
        });

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "💾 Save";
        styleEditorBtn(saveBtn, "#2d6a4f");

        const saveRunBtn = document.createElement("button");
        saveRunBtn.textContent = "▶ Save & Run";
        styleEditorBtn(saveRunBtn, "#1b4332");

        toolbar.appendChild(saveBtn);
        toolbar.appendChild(saveRunBtn);

        const editorContainer = document.createElement("div");
        editorContainer.style.flex = "1";

        panel.appendChild(header);
        panel.appendChild(closeBtn);
        panel.appendChild(toolbar);
        panel.appendChild(editorContainer);
        document.body.appendChild(panel);

        const editor = monaco.editor.create(editorContainer, {
            value: plugin.code || "",
            language: "javascript",
            theme: "vs-dark",
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 13,
            scrollBeyondLastLine: false,
            wordWrap: "on"
        });

        saveBtn.onclick = () => {
            onSave(editor.getValue(), false);
            saveBtn.textContent = "✓ Saved";
            setTimeout(() => saveBtn.textContent = "💾 Save", 1200);
        };

        saveRunBtn.onclick = () => {
            onSave(editor.getValue(), true);
            saveRunBtn.textContent = "✓ Ran!";
            setTimeout(() => saveRunBtn.textContent = "▶ Save & Run", 1200);
        };

        enableEditorDrag(panel, header);
    }

    function styleEditorBtn(btn, bg) {
        Object.assign(btn.style, {
            padding: "5px 14px",
            borderRadius: "8px",
            border: "none",
            background: bg || "rgba(255,255,255,0.1)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "500"
        });
        btn.onmouseenter = () => btn.style.opacity = "0.8";
        btn.onmouseleave = () => btn.style.opacity = "1";
    }

    function enableEditorDrag(panel, handle) {
        let isDragging = false, offsetX, offsetY;
        handle.addEventListener("mousedown", e => {
            isDragging = true;
            offsetX = e.clientX - panel.offsetLeft;
            offsetY = e.clientY - panel.offsetTop;
            document.body.style.userSelect = "none";
        });
        document.addEventListener("mouseup", () => {
            isDragging = false;
            document.body.style.userSelect = "";
        });
        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            panel.style.left = (e.clientX - offsetX) + "px";
            panel.style.top = (e.clientY - offsetY) + "px";
            panel.style.right = "auto";
            panel.style.bottom = "auto";
        });
    }

    function toggleLocalPanel() {
        let panel = document.getElementById("avia-local-plugins-panel");
        if (panel) {
            if (panel.style.display === "none") {
                panel.style.display = "flex";
                renderLocalPanel();
            } else {
                panel.style.display = "none";
            }
            return;
        }

        panel = document.createElement("div");
        panel.id = "avia-local-plugins-panel";
        panel.id = "avia-local-plugins-panel";
        if(window.outerWidth<508){
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                right: "24px", 
                width: `${window.outerWidth-52}px`,
                height: `${window.outerWidth-72}px`,
                background: "var(--md-sys-color-surface, #1e1e1e)",
                color: "var(--md-sys-color-on-surface, #fff)",
                borderRadius: "16px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                zIndex: "999999",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)"
            });
        }else{
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                right: "560px", 
                width: "520px",
                height: "460px",
                background: "var(--md-sys-color-surface, #1e1e1e)",
                color: "var(--md-sys-color-on-surface, #fff)",
                borderRadius: "16px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                zIndex: "999999",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)"
            });
        }

        const header = document.createElement("div");
        Object.assign(header.style, {
            padding: "14px 16px",
            fontWeight: "600",
            fontSize: "14px",
            background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            cursor: "move",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: "0 0 auto"
        });

        const headerTitle = document.createElement("span");
        headerTitle.textContent = "Local Plugins";

        const closeBtn = document.createElement("div");
        closeBtn.textContent = "✕";
        Object.assign(closeBtn.style, {
            cursor: "pointer",
            opacity: "0.7",
            fontSize: "15px",
            lineHeight: "1",
            padding: "2px 4px"
        });
        closeBtn.onmouseenter = () => closeBtn.style.opacity = "1";
        closeBtn.onmouseleave = () => closeBtn.style.opacity = "0.7";
        closeBtn.onclick = () => panel.style.display = "none";

        header.appendChild(headerTitle);
        header.appendChild(closeBtn);

        const controlsBar = document.createElement("div");
        Object.assign(controlsBar.style, {
            padding: "12px 16px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flex: "0 0 auto"
        });

        const nameInput = document.createElement("input");
        nameInput.placeholder = "Plugin name";
        styleLocalInput(nameInput);
        nameInput.style.flex = "1";

        const addBtn = document.createElement("button");
        addBtn.textContent = "+ New";
        styleLocalBtn(addBtn);
        addBtn.onclick = () => {
            const name = nameInput.value.trim();
            if (!name) return;
            const plugins = getLocalPlugins();
            const newPlugin = {
                id: "local_" + Date.now(),
                name,
                code: "",
                enabled: false
            };
            plugins.push(newPlugin);
            setLocalPlugins(plugins);
            nameInput.value = "";
            renderLocalPanel(searchInput.value.toLowerCase());
        };

        const importBtn = document.createElement("button");
        importBtn.textContent = "Import";
        styleLocalBtn(importBtn, "#2d6a4f");
        importBtn.onmouseenter = () => importBtn.style.opacity = "0.75";
        importBtn.onmouseleave = () => importBtn.style.opacity = "1";

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".js,text/javascript";
        fileInput.multiple = true;
        fileInput.style.display = "none";

        importBtn.onclick = () => fileInput.click();

        fileInput.onchange = async () => {
            const files = [...fileInput.files];
            if (!files.length) return;
            const plugins = getLocalPlugins();
            for (const file of files) {
                const text = await file.text();
                const name = file.name.replace(/\.js$/i, "");
                plugins.push({
                    id: "local_" + Date.now() + "_" + Math.random(),
                    name,
                    code: text,
                    enabled: false
                });
            }
            setLocalPlugins(plugins);
            fileInput.value = "";
            renderLocalPanel(searchInput.value.toLowerCase());
        };

        controlsBar.appendChild(nameInput);
        controlsBar.appendChild(addBtn);
        controlsBar.appendChild(importBtn);
        controlsBar.appendChild(fileInput);

        const searchBar = document.createElement("div");
        Object.assign(searchBar.style, {
            padding: "10px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flex: "0 0 auto"
        });

        const searchInput = document.createElement("input");
        searchInput.placeholder = "Search plugins…";
        styleLocalInput(searchInput);
        searchInput.style.width = "100%";
        searchInput.oninput = () => renderLocalPanel(searchInput.value.toLowerCase());
        searchBar.appendChild(searchInput);

        const content = document.createElement("div");
        content.id = "avia-local-plugins-content";
        Object.assign(content.style, {
            flex: "1",
            overflowY: "auto",
            padding: "12px 16px 16px",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        });

        if (!document.getElementById("avia-local-scrollbar-hide")) {
            const s = document.createElement("style");
            s.id = "avia-local-scrollbar-hide";
            s.textContent = "#avia-local-plugins-content::-webkit-scrollbar{display:none}";
            document.head.appendChild(s);
        }

        panel.appendChild(header);
        panel.appendChild(controlsBar);
        panel.appendChild(searchBar);
        panel.appendChild(content);

        const dropOverlay = document.createElement("div");
        dropOverlay.textContent = "Import JS files";
        Object.assign(dropOverlay.style, {
            position: "absolute",
            inset: "0",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            opacity: "0",
            pointerEvents: "none",
            transition: "opacity 0.15s ease",
            borderRadius: "16px"
        });
        panel.appendChild(dropOverlay);

        document.body.appendChild(panel);

        let dragDepth = 0;

        panel.addEventListener("dragenter", e => {
            e.preventDefault();
            e.stopPropagation();
            dragDepth++;
            dropOverlay.style.opacity = "1";
            panel.style.border = "1px dashed rgba(255,255,255,0.4)";
        });

        panel.addEventListener("dragover", e => {
            e.preventDefault();
            e.stopPropagation();
        });

        panel.addEventListener("dragleave", e => {
            e.preventDefault();
            e.stopPropagation();
            dragDepth--;
            if (dragDepth <= 0) {
                dropOverlay.style.opacity = "0";
                panel.style.border = "1px solid rgba(255,255,255,0.08)";
                dragDepth = 0;
            }
        });

        panel.addEventListener("drop", async e => {
            e.preventDefault();
            e.stopPropagation();
            dropOverlay.style.opacity = "0";
            panel.style.border = "1px solid rgba(255,255,255,0.08)";
            dragDepth = 0;
            const files = [...e.dataTransfer.files].filter(f => f.name.endsWith(".js"));
            if (!files.length) return;
            const plugins = getLocalPlugins();
            for (const file of files) {
                const text = await file.text();
                const name = file.name.replace(/\.js$/i, "");
                plugins.push({
                    id: "local_" + Date.now() + "_" + Math.random(),
                    name,
                    code: text,
                    enabled: false
                });
            }
            setLocalPlugins(plugins);
            renderLocalPanel(searchInput.value.toLowerCase());
        });

        let isDragging = false, offsetX, offsetY;
        header.addEventListener("mousedown", e => {
            isDragging = true;
            offsetX = e.clientX - panel.offsetLeft;
            offsetY = e.clientY - panel.offsetTop;
            document.body.style.userSelect = "none";
        });
        document.addEventListener("mouseup", () => {
            isDragging = false;
            document.body.style.userSelect = "";
        });
        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            panel.style.left = (e.clientX - offsetX) + "px";
            panel.style.top = (e.clientY - offsetY) + "px";
            panel.style.right = "auto";
            panel.style.bottom = "auto";
        });

        renderLocalPanel();
    }

    function renderLocalPanel(filter = "") {
        const content = document.getElementById("avia-local-plugins-content");
        if (!content) return;
        content.innerHTML = "";

        const plugins = getLocalPlugins();
        const runSnap = { ...runningLocalPlugins };
        const errSnap = { ...localPluginErrors };

        const filtered = filter
            ? plugins.filter(p => p.name.toLowerCase().includes(filter))
            : plugins;

        const visible = [...filtered].reverse();

        if (visible.length === 0) {
            const empty = document.createElement("div");
            empty.textContent = plugins.length === 0
                ? "No local plugins yet. Add one above."
                : "No plugins match your search.";
            Object.assign(empty.style, { opacity: "0.4", fontSize: "13px", textAlign: "center", padding: "24px 0" });
            content.appendChild(empty);
            return;
        }

        const sectionLabel = document.createElement("div");
        sectionLabel.textContent = `Local Plugins: ${visible.length}`;
        Object.assign(sectionLabel.style, {
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: "10px"
        });
        content.appendChild(sectionLabel);

        const grid = document.createElement("div");
        Object.assign(grid.style, {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "10px"
        });

        visible.forEach((plugin) => {
            const realIndex = plugins.indexOf(plugin);
            const isRunning = !!runSnap[plugin.id];
            const hasError = !!errSnap[plugin.id];

            const card = document.createElement("div");
            Object.assign(card.style, {
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${hasError ? "rgba(255,77,77,0.3)" : isRunning ? "rgba(77,255,136,0.25)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "10px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
            });
            card.onmouseenter = () => {
                if (!hasError && !isRunning) card.style.borderColor = "rgba(255,255,255,0.13)";
            };
            card.onmouseleave = () => {
                card.style.borderColor = hasError ? "rgba(255,77,77,0.3)" : isRunning ? "rgba(77,255,136,0.25)" : "rgba(255,255,255,0.06)";
            };

            const topRow = document.createElement("div");
            Object.assign(topRow.style, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px"
            });

            const nameWrap = document.createElement("div");
            Object.assign(nameWrap.style, { display: "flex", alignItems: "center", gap: "7px", minWidth: "0", flex: "1" });

            const dot = document.createElement("div");
            Object.assign(dot.style, {
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                flexShrink: "0",
                background: hasError ? "#ff4d4d" : isRunning ? "#4dff88" : "#555",
                boxShadow: hasError ? "0 0 5px #ff4d4d" : isRunning ? "0 0 5px #4dff88" : "none"
            });

            const nameEl = document.createElement("div");
            nameEl.textContent = plugin.name;
            Object.assign(nameEl.style, {
                fontSize: "13px",
                fontWeight: "600",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            });

            nameWrap.appendChild(dot);
            nameWrap.appendChild(nameEl);

            const switchWrap = document.createElement("div");
            Object.assign(switchWrap.style, {
                position: "relative",
                width: "36px",
                height: "20px",
                flexShrink: "0",
                cursor: "pointer"
            });

            const track = document.createElement("div");
            Object.assign(track.style, {
                position: "absolute",
                inset: "0",
                borderRadius: "10px",
                background: plugin.enabled ? "rgba(100,160,255,0.6)" : "rgba(255,255,255,0.15)",
                transition: "background 0.2s"
            });

            const thumb = document.createElement("div");
            Object.assign(thumb.style, {
                position: "absolute",
                top: "3px",
                left: plugin.enabled ? "19px" : "3px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "#fff",
                transition: "left 0.2s",
                pointerEvents: "none"
            });

            switchWrap.appendChild(track);
            switchWrap.appendChild(thumb);

            switchWrap.onclick = () => {
                const all = getLocalPlugins();
                const target = all.find(p => p.id === plugin.id);
                if (!target) return;
                target.enabled = !target.enabled;
                plugin.enabled = target.enabled;
                setLocalPlugins(all);
                if (target.enabled) runLocalPlugin(plugin);
                else stopLocalPlugin(plugin);
                renderLocalPanel(filter);
            };

            topRow.appendChild(nameWrap);
            topRow.appendChild(switchWrap);

            const footer = document.createElement("div");
            Object.assign(footer.style, { display: "flex", gap: "6px", marginTop: "auto", paddingTop: "2px" });

            const editBtn = document.createElement("button");
            editBtn.textContent = "✏ Edit";
            styleLocalBtn(editBtn, "rgba(100,140,255,0.2)");
            editBtn.style.flex = "1";
            editBtn.onclick = () => {
                openEditorPanel(plugin, (newCode, andRun) => {
                    const all = getLocalPlugins();
                    const target = all.find(p => p.id === plugin.id);
                    if (target) {
                        target.code = newCode;
                        plugin.code = newCode;
                        setLocalPlugins(all);
                    }
                    if (andRun) {
                        plugin.enabled = true;
                        if (target) target.enabled = true;
                        setLocalPlugins(getLocalPlugins().map(p => p.id === plugin.id ? { ...p, code: newCode, enabled: true } : p));
                        runLocalPlugin(plugin);
                    }
                    renderLocalPanel(filter);
                });
            };

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "✕";
            styleLocalBtn(removeBtn, "rgba(255,80,80,0.15)");
            removeBtn.onclick = () => {
                stopLocalPlugin(plugin);
                const editorPanel = document.getElementById("avia-local-editor-panel");
                if (editorPanel) editorPanel.remove();
                const all = getLocalPlugins();
                all.splice(all.findIndex(p => p.id === plugin.id), 1);
                setLocalPlugins(all);
                renderLocalPanel(filter);
            };

            footer.appendChild(editBtn);
            footer.appendChild(removeBtn);

            card.appendChild(topRow);
            card.appendChild(footer);
            grid.appendChild(card);
        });

        content.appendChild(grid);
    }

    function styleLocalInput(input) {
        Object.assign(input.style, {
            padding: "6px 8px",
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            fontSize: "13px"
        });
    }

    function styleLocalBtn(btn, bg) {
        Object.assign(btn.style, {
            padding: "5px 12px",
            borderRadius: "8px",
            border: "none",
            background: bg || "rgba(255,255,255,0.08)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "12px",
            whiteSpace: "nowrap"
        });
        btn.onmouseenter = () => btn.style.opacity = "0.75";
        btn.onmouseleave = () => btn.style.opacity = "1";
    }

    function injectLocalButton() {
        if (document.getElementById("avia-local-plugins-btn")) return;
        const appearanceBtn = [...document.querySelectorAll("a")]
            .find(a => a.textContent.trim() === "Appearance");
        if (!appearanceBtn) return;

        const aviaPluginsBtn = document.getElementById("stoat-fake-plugins");
        if (!aviaPluginsBtn) return;

        const localBtn = appearanceBtn.cloneNode(true);
        localBtn.id = "avia-local-plugins-btn";

        const textNode = [...localBtn.querySelectorAll("div")]
            .find(d => d.children.length === 0 && d.textContent.trim() === "Appearance");
        if (textNode) textNode.textContent = "(Avia) Local Plugins";

        const oldSvg = localBtn.querySelector("svg");
        if (oldSvg) oldSvg.remove();
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "currentColor");
        svg.style.marginRight = "8px";
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M20.5 11H19V7a2 2 0 00-2-2h-4V3.5a2.5 2.5 0 00-5 0V5H4a2 2 0 00-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 002 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 002-2v-4h1.5a2.5 2.5 0 000-5z");
        svg.appendChild(path);
        localBtn.insertBefore(svg, localBtn.firstChild);

        localBtn.addEventListener("click", toggleLocalPanel);
        aviaPluginsBtn.parentElement.insertBefore(localBtn, aviaPluginsBtn.nextSibling);
    }


    function registerWithAviaMenu() {
        if (window.AviaMenu) {
            window.AviaMenu.register({ id: "avia_plugins_local", name: "Local Plugins", icon: "extension", onClick: toggleLocalPanel });
        } else {
            const interval = setInterval(() => {
                if (window.AviaMenu) {
                    clearInterval(interval);
                    window.AviaMenu.register({ id: "avia_plugins_local", name: "Local Plugins", icon: "extension", onClick: toggleLocalPanel });
                }
            }, 100);
        }
    }
    function waitForBody(callback) {
        if (document.body) callback();
        else new MutationObserver((obs) => {
            if (document.body) { obs.disconnect(); callback(); }
        }).observe(document.documentElement, { childList: true });
    }

    waitForBody(() => {
        const observer = new MutationObserver(() => injectLocalButton());
        observer.observe(document.body, { childList: true, subtree: true });
        injectLocalButton();
    });

    getLocalPlugins().forEach(plugin => {
        if (plugin.enabled) runLocalPlugin(plugin);
    });

    preloadMonaco();

    registerWithAviaMenu();

})();


/* --- LoginWithToken.js --- */
if(window.__US_BUILDER_LOGINWITHTOKEN_JS__){return;}window.__US_BUILDER_LOGINWITHTOKEN_JS__=true;

(function () {
  if (window.__LOGIN_WITH_TOKEN__) return;
  window.__LOGIN_WITH_TOKEN__ = true;

  async function loginWithToken(token) {
    const res = await fetch('https://stoat.chat/api/users/@me', {
      headers: { 'x-session-token': token }
    });
    if (!res.ok) throw new Error('Invalid token');
    const user = await res.json();

    const db = await new Promise((resolve, reject) => {
      const r = indexedDB.open('localforage');
      r.onsuccess = () => resolve(r.result);
      r.onerror = () => reject(r.error);
    });

    const tx = db.transaction('keyvaluepairs', 'readwrite');
    await new Promise((resolve, reject) => {
      const r = tx.objectStore('keyvaluepairs').put({
        session: {
          _id: user._id,
          token: token,
          userId: user._id,
          valid: true
        }
      }, 'auth');
      r.onsuccess = () => resolve();
      r.onerror = () => reject(r.error);
    });

    location.reload();
  }

  function openTokenDialog() {
    const backdrop = document.createElement('div');
    backdrop.className = 'top_0 left_0 right_0 bottom_0 pos_fixed z_100 max-h_100% d_grid us_none place-items_center pointer-events_all anim-n_scrimFadeIn anim-dur_0.1s anim-fm_forwards trs_var(--transitions-medium)_all p_80px ov-y_auto';
    backdrop.style.cssText = '--background: rgba(0, 0, 0, 0.6);';

    backdrop.innerHTML = `
      <div style="opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));">
        <div class="p_24px min-w_280px max-w_560px bdr_28px d_flex flex-d_column c_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-container-high)">
          <span class="lh_2rem fs_1.5rem ls_0 fw_400 mbe_16px">Login With Token</span>
          <div class="c_var(--md-sys-color-on-surface-variant) lh_1.25rem fs_0.875rem ls_0.015625rem fw_400">
            <div class="d_flex flex-d_column flex-g_initial m_0 ai_initial jc_initial gap_var(--gap-md)">
              <mdui-text-field id="lwt-token-input" variant="filled" type="password" name="token" required label="Session Token"></mdui-text-field>
            </div>
          </div>
          <div class="gap_8px d_flex jc_end mbs_24px">
            <button id="lwt-close-btn" type="button" class="lh_1.25rem fs_0.875rem ls_0.015625rem fw_400 pos_relative px_16px flex-sh_0 d_flex ai_center jc_center ff_inherit cursor_pointer bd_none trs_var(--transitions-medium)_all c_var(--color) fill_var(--color) h_40px bdr_var(--borderRadius-full) --color_var(--md-sys-color-primary)">
              <md-ripple aria-hidden="true"></md-ripple>Close
            </button>
            <button id="lwt-login-btn" type="button" class="lh_1.25rem fs_0.875rem ls_0.015625rem fw_400 pos_relative px_16px flex-sh_0 d_flex ai_center jc_center ff_inherit cursor_pointer bd_none trs_var(--transitions-medium)_all c_var(--color) fill_var(--color) h_40px bdr_var(--borderRadius-full) --color_var(--md-sys-color-on-primary) bg_var(--md-sys-color-primary)">
              <md-ripple aria-hidden="true"></md-ripple>Login
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeBtn = backdrop.querySelector('#lwt-close-btn');
    const loginBtn = backdrop.querySelector('#lwt-login-btn');
    const tokenInput = backdrop.querySelector('#lwt-token-input');

    function close() { backdrop.remove(); }

    function setLoading(loading) {
      loginBtn.disabled = loading;
      loginBtn.style.cursor = loading ? 'not-allowed' : 'pointer';
      const ripple = loginBtn.querySelector('md-ripple');
      loginBtn.textContent = loading ? 'Logging in…' : 'Login';
      if (ripple) loginBtn.prepend(ripple);
    }

    function setError(msg) {
      loginBtn.disabled = false;
      loginBtn.style.cursor = 'pointer';
      const ripple = loginBtn.querySelector('md-ripple');
      loginBtn.textContent = msg;
      if (ripple) loginBtn.prepend(ripple);
      setTimeout(() => {
        loginBtn.textContent = 'Login';
        if (ripple) loginBtn.prepend(ripple);
      }, 2000);
    }

    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    closeBtn.addEventListener('click', close);

    loginBtn.addEventListener('click', async () => {
      const token = tokenInput.value?.trim();
      if (!token) {
        setError('Enter a token!');
        return;
      }
      setLoading(true);
      try {
        await loginWithToken(token);
      } catch (err) {
        setError('Invalid token!');
      }
    });
  }

  function injectLoginButton() {
    const signUpBtn = [...document.querySelectorAll('button')]
      .find(b => b.textContent.trim() === 'Sign Up');
    if (!signUpBtn) return;

    const parent = signUpBtn.parentElement;
    if (parent.querySelector('[data-lwt-btn]')) return;

    const clone = signUpBtn.cloneNode(false);
    clone.dataset.lwtBtn = 'true';
    clone.textContent = 'Login With Token';

    const ripple = document.createElement('md-ripple');
    ripple.setAttribute('aria-hidden', 'true');
    clone.prepend(ripple);

    clone.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openTokenDialog();
    });

    signUpBtn.insertAdjacentElement('afterend', clone);
  }

  let debounceTimer = null;
  new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(injectLoginButton, 150);
  }).observe(document.body, { childList: true, subtree: true });

  injectLoginButton();
})();



/* --- MakeAviaPanelsDraggable.js --- */
if(window.__US_BUILDER_MAKEAVIAPANELSDRAGGABLE_JS__){return;}window.__US_BUILDER_MAKEAVIAPANELSDRAGGABLE_JS__=true;

(function () {
  if (window.__MAKE_AVIA_PANELS_DRAGGABLE__) return;
  window.__MAKE_AVIA_PANELS_DRAGGABLE__ = true;

  function makeAviaPanelsDraggable() {
    const aviaPanels = [...document.querySelectorAll('[style*="z-index: 999999"],[style*=\'z-index: 999998\']')].filter(e=>e.id!='avia-settings-reopen-btn'&&e.style?.display!='none')
    for(const panel of aviaPanels){
        if(!panel.dataset.patched){
            const header = panel.querySelector(`div[style]`)
            if(!header) return;
            let isDragging = false, offsetX, offsetY;

            header.addEventListener("touchstart", e => {
                isDragging = true;
                const touch = e.touches[0]
                offsetX = touch.clientX - panel.offsetLeft;
                offsetY = touch.clientY - panel.offsetTop;
            },false);

            panel.addEventListener("touchend", () => isDragging = false);
            panel.addEventListener("touchcancel", () => isDragging = false);

            panel.addEventListener("touchmove", e => {
                if (!isDragging) return;
                e.preventDefault()
                const touch = e.touches[0]
                panel.style.left = (touch.clientX - offsetX) + "px";
                panel.style.top = (touch.clientY - offsetY) + "px";
                panel.style.right = "auto";
                panel.style.bottom = "auto";
            },false);
            panel.dataset.patched=true
        }
    }
  }

  const observer = new MutationObserver(() => {
    makeAviaPanelsDraggable();
  });

  function init() {
    makeAviaPanelsDraggable();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- MemberListContextMenuFix.js --- */
if(window.__US_BUILDER_MEMBERLISTCONTEXTMENUFIX_JS__){return;}window.__US_BUILDER_MEMBERLISTCONTEXTMENUFIX_JS__=true;

(function () {
  if (window.__MEMBER_LIST_CONTEXT_MENU_FIX__) return;
  window.__MEMBER_LIST_CONTEXT_MENU_FIX__ = true;

  function memberListContextMenuFix() {
    const balls = new Event('contextmenu',{
        bubbles:true,
        button:2
    });

    const time = 250

    const memberlist = document.getElementsByClassName('will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg)').item(0)
    if(!memberlist) return;

    for(const member of memberlist.getElementsByClassName('flex-sh_0 fw_500 fs_15px us_none cursor_pointer pos_relative d_flex ai_center m_0_var(--gap-md) p_0_var(--gap-md) bdr_var(--borderRadius-xl) c_var(--color) fill_var(--color) [&_>_svg]:as_center [&:hover_.hover-hide,_&:not(:hover)_.hover-show]:d_none h_42px gap_var(--gap-md) --color_var(--md-sys-color-on-surface) bg_transparent')){
        let timer;
        let long = false;

        function start() {
            timer = setTimeout(() => {
                long = true
            }, time);
        }

        function stop() {
            clearTimeout(timer);
            long = false
        }

        if(!member.dataset.patched){
            member.addEventListener('touchstart',function(e){
                start()
            });

            member.addEventListener('touchend',function(e){
                if(long){
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    e.stopPropagation()
                    setTimeout(() => {
                        member.dispatchEvent(balls)
                    }, 100);
                }
                stop()
            })

            member.addEventListener('touchcancel',stop);
            member.addEventListener('touchmove',stop);

            member.dataset.patched=true
        }
    }

    for(const offlinemember of memberlist.getElementsByClassName('flex-sh_0 fw_500 fs_15px us_none cursor_pointer pos_relative d_flex ai_center m_0_var(--gap-md) p_0_var(--gap-md) bdr_var(--borderRadius-xl) c_var(--color) fill_var(--color) [&_>_svg]:as_center [&:hover_.hover-hide,_&:not(:hover)_.hover-show]:d_none h_42px gap_var(--gap-md) --color_var(--md-sys-color-outline-variant) bg_transparent [&_img]:op_0.3')){
        let timer;
        let long = false;

        function start() {
            timer = setTimeout(() => {
                long = true
            }, time);
        }

        function stop() {
            clearTimeout(timer);
            long = false
        }

        if(!offlinemember.dataset.patched){
            offlinemember.addEventListener('touchstart',function(e){
                start()
            });

            offlinemember.addEventListener('touchend',function(e){
                if(long){
                    e.preventDefault()
                    e.stopImmediatePropagation()
                    e.stopPropagation()
                    setTimeout(() => {
                        offlinemember.dispatchEvent(balls)
                    }, 100);
                }
                stop()
            })

            offlinemember.addEventListener('touchcancel',stop);
            offlinemember.addEventListener('touchmove',stop);

            offlinemember.dataset.patched=true
        }
    }
  }

  const observer = new MutationObserver(() => {
    memberListContextMenuFix();
  });

  function init() {
    memberListContextMenuFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- menu.js --- */
if(window.__US_BUILDER_MENU_JS__){return;}window.__US_BUILDER_MENU_JS__=true;

(function () {
    if (window.__AVIA_MENU__) return;
    window.__AVIA_MENU__ = true;

    const ITEM_HEIGHT = 32;
    const MAX_VISIBLE = 12;
    const PIN_STORAGE_KEY = "avia_menu_pins";

    const registeredItems = [];
    let menuEl = null;
    let menuOpen = false;

    function getPins() {
        try { return JSON.parse(localStorage.getItem(PIN_STORAGE_KEY) || "[]"); }
        catch { return []; }
    }

    function savePins(arr) {
        localStorage.setItem(PIN_STORAGE_KEY, JSON.stringify(arr));
    }

    function pinItem(id) {
        const pins = getPins().filter(p => p !== id);
        pins.unshift(id);
        savePins(pins);
    }

    function unpinItem(id) {
        savePins(getPins().filter(p => p !== id));
    }

    function isPinned(id) {
        return getPins().includes(id);
    }

    function getSortedItems() {
        const pins = getPins();
        const pinned = [];
        for (const id of pins) {
            const found = registeredItems.find(i => i.id === id);
            if (found) pinned.push(found);
        }
        const unpinned = registeredItems.filter(i => !isPinned(i.id));
        return [...pinned, ...unpinned];
    }

    window.AviaMenu = {
        register: function (item) {
            if (!item || typeof item !== "object") {
                console.error("[AviaMenu] Registration failed: item must be an object, got", typeof item);
                return;
            }
            if (typeof item.id !== "string" || !item.id.trim()) {
                console.error("[AviaMenu] Registration failed: item.id must be a non-empty string, got", item.id);
                return;
            }
            if (!item.name || typeof item.name !== "string") {
                console.error("[AviaMenu] Registration failed for id '%s': item.name must be a non-empty string, got", item.id, item.name);
                return;
            }
            if (typeof item.onClick !== "function") {
                console.error("[AviaMenu] Registration failed for id '%s': item.onClick must be a function, got", item.id, typeof item.onClick);
                return;
            }
            if (registeredItems.find(i => i.id === item.id.trim())) {
                console.error("[AviaMenu] Registration failed: an item with id '%s' is already registered", item.id.trim());
                return;
            }
            registeredItems.push({
                id: item.id.trim(),
                name: item.name,
                onClick: item.onClick,
                icon: typeof item.icon === "string" && item.icon.trim() ? item.icon.trim() : null
            });
            if (menuEl) rebuildMenu();
        }
    };

    function closeMenu() {
        if (menuEl) {
            menuEl.remove();
            menuEl = null;
        }
        menuOpen = false;
    }

    function rebuildMenu() {
        if (!menuEl) return;
        const list = menuEl.querySelector("#avia-menu-list");
        if (!list) return;
        list.innerHTML = "";

        if (registeredItems.length === 0) {
            const empty = document.createElement("div");
            empty.textContent = "No buttons registered";
            Object.assign(empty.style, {
                padding: "12px 16px",
                fontSize: "13px",
                opacity: "0.4",
                color: "var(--md-sys-color-on-surface, #fff)",
                userSelect: "none"
            });
            list.appendChild(empty);
            list.style.maxHeight = "";
            list.style.overflowY = "hidden";
            list.style.scrollbarWidth = "none";
            return;
        }

        const sorted = getSortedItems();

        for (const item of sorted) {
            const pinned = isPinned(item.id);

            const btn = document.createElement("div");
            Object.assign(btn.style, {
                padding: "0 12px",
                height: ITEM_HEIGHT + "px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "13px",
                fontWeight: "500",
                color: "var(--md-sys-color-on-surface, #fff)",
                cursor: "pointer",
                borderRadius: "10px",
                transition: "background 0.12s",
                userSelect: "none",
                flexShrink: "0",
                position: "relative"
            });

            if (item.icon) {
                const iconEl = document.createElement("span");
                iconEl.className = "material-symbols-outlined";
                iconEl.textContent = item.icon;
                iconEl.style.cssText = "font-size:20px;display:block;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0;flex-shrink:0;opacity:0.85;";
                btn.appendChild(iconEl);
            }

            const label = document.createElement("span");
            label.textContent = item.name;
            label.style.flex = "1";
            btn.appendChild(label);

            const pinBtn = document.createElement("span");
            pinBtn.className = "material-symbols-outlined";
            pinBtn.textContent = "push_pin";
            Object.assign(pinBtn.style, {
                fontSize: "14px",
                display: "block",
                fontVariationSettings: pinned ? "'FILL' 1,'wght' 400,'GRAD' 0" : "'FILL' 0,'wght' 400,'GRAD' 0",
                color: pinned ? "var(--md-sys-color-primary, #cfbcff)" : "rgba(255,255,255,0.3)",
                flexShrink: "0",
                transition: "color 0.12s, font-variation-settings 0.12s",
                cursor: "pointer"
            });

            pinBtn.addEventListener("mouseenter", (e) => {
                e.stopPropagation();
                pinBtn.style.color = pinned ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.7)";
            });
            pinBtn.addEventListener("mouseleave", (e) => {
                e.stopPropagation();
                pinBtn.style.color = pinned ? "var(--md-sys-color-primary, #cfbcff)" : "rgba(255,255,255,0.3)";
            });
            pinBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (isPinned(item.id)) {
                    unpinItem(item.id);
                } else {
                    pinItem(item.id);
                }
                rebuildMenu();
            });

            btn.appendChild(pinBtn);

            btn.addEventListener("mouseenter", () => {
                btn.style.background = "rgba(255,255,255,0.07)";
            });
            btn.addEventListener("mouseleave", () => {
                btn.style.background = "transparent";
            });
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                closeMenu();
                try { item.onClick(); } catch (err) { console.error("[AviaMenu]", err); }
            });

            list.appendChild(btn);
        }

        const total = getSortedItems().length;
        list.style.maxHeight = (MAX_VISIBLE * ITEM_HEIGHT) + "px";
        list.style.overflowY = total > MAX_VISIBLE ? "auto" : "hidden";
        list.style.scrollbarWidth = "none";
    }

    function openMenu(anchorEl) {
        if (menuOpen) { closeMenu(); return; }

        menuEl = document.createElement("div");
        Object.assign(menuEl.style, {
            position: "fixed",
            zIndex: "9999999",
            background: "var(--md-sys-color-surface, #1e1e1e)",
            borderRadius: "16px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
            minWidth: "200px",
            display: "flex",
            flexDirection: "column"
        });

        const list = document.createElement("div");
        list.id = "avia-menu-list";
        Object.assign(list.style, {
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            boxSizing: "border-box"
        });

        menuEl.appendChild(list);
        document.body.appendChild(menuEl);

        rebuildMenu();

        const rect = anchorEl.getBoundingClientRect();
        const menuRect = menuEl.getBoundingClientRect();
        let top = rect.bottom + 6;
        let left = rect.left;

        if (left + menuRect.width > window.innerWidth - 8) {
            left = window.innerWidth - menuRect.width - 8;
        }
        if (top + menuRect.height > window.innerHeight - 8) {
            top = rect.top - menuRect.height - 6;
        }

        menuEl.style.top = top + "px";
        menuEl.style.left = left + "px";

        menuOpen = true;

        setTimeout(() => {
            document.addEventListener("click", onOutsideClick, { once: true });
        }, 0);
    }

    function onOutsideClick(e) {
        if (menuEl && !menuEl.contains(e.target)) {
            closeMenu();
        }
    }

    function injectToolbarButton() {
        if (document.getElementById("avia-menu-toolbar-btn")) return;

        const pinBtn = document.querySelector('button[aria-label="View pinned messages"]');
        if (!pinBtn) return;

        const btn = pinBtn.cloneNode(false);
        btn.id = "avia-menu-toolbar-btn";
        btn.setAttribute("aria-label", "Avia Menu");

        const ripple = document.createElement("md-ripple");
        ripple.setAttribute("aria-hidden", "true");
        btn.appendChild(ripple);

        const icon = document.createElement("span");
        icon.className = "material-symbols-outlined";
        icon.style.cssText = "display:block;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0;font-size:24px;";
        icon.textContent = "apps";
        btn.appendChild(icon);

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            openMenu(btn);
        });

        pinBtn.insertAdjacentElement("afterend", btn);
    }

    const observer = new MutationObserver(() => {
        injectToolbarButton();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    injectToolbarButton();
})();


/* --- MoveChannelSettingsButton.js --- */
if(window.__US_BUILDER_MOVECHANNELSETTINGSBUTTON_JS__){return;}window.__US_BUILDER_MOVECHANNELSETTINGSBUTTON_JS__=true;

(function () {
    if (window.__MOVE_CHANNEL_SETTINGS_BUTTON__) return;
    window.__MOVE_CHANNEL_SETTINGS_BUTTON__ = true;

    function moveChannelSettingsButton(){
        const settingsbutton = document.querySelector(`[aria-label='Channel Settings']`)
        if(settingsbutton){
            settingsbutton.style.display='none'
            const channelinfo = [...document.getElementsByClassName('p_24px min-w_280px max-w_560px bdr_28px d_flex flex-d_column c_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-container-high)')]
            .find(e=>e.textContent.includes('#')&&!e.querySelector('img'))

            if(channelinfo&&!channelinfo.dataset.patched){
                const clone = channelinfo.lastChild.firstChild.cloneNode(true)
                clone.textContent='Settings'
                clone.onclick = function(){
                    clone.nextSibling.click()
                    setTimeout(() => {
                        settingsbutton.click()
                    }, 100);
                }

                channelinfo.lastChild.insertBefore(clone,channelinfo.lastChild.firstChild)
                channelinfo.dataset.patched=true
            }
        }
    }
    
    const observer = new MutationObserver(()=>{
        moveChannelSettingsButton()
    });
    observer.observe(document.documentElement, {childList: true, subtree: true })
})();


/* --- NoAnnoyingTooltips.js --- */
if(window.__US_BUILDER_NOANNOYINGTOOLTIPS_JS__){return;}window.__US_BUILDER_NOANNOYINGTOOLTIPS_JS__=true;

(function () {
  'use strict';

  if (window.__NO_ANNOYING_TOOLTIPS__) return;
  window.__NO_ANNOYING_TOOLTIPS__ = true;

  const TARGET_CLASS = 'c_white bg_black p_var(--gap-md) bdr_var(--borderRadius-md) lh_0.875rem fs_0.6875rem ls_0.03125rem fw_500';

  function removeTooltip() {
    document.querySelectorAll('div.c_white.bg_black').forEach(el => {
      if (el.className === TARGET_CLASS && el.textContent){
        if(!el.firstChild?.firstChild?.outerHTML?.includes('emoji-size')&&!el.style?.color&&!el.firstChild?.style?.color //make emoji and avia badge tooltips show
        &&el.parentElement?.parentElement?.parentElement?.firstChild?.firstChild?.firstChild?.className!=='will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll c_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-container-high) bx-sh_0_0_3px_var(--md-sys-color-shadow) w_340px h_400px bdr_var(--borderRadius-xl)' //make default badge tooltips show (in small user popup)
        &&el.parentElement?.parentElement?.parentElement?.parentElement?.lastChild?.firstChild?.firstChild?.firstChild.className!=='p_24px min-w_280px max-w_560px bdr_28px d_flex flex-d_column c_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-container-high)' //make default badge tooltips show (in big user popup)
        ||el.parentElement?.parentElement?.firstChild?.firstChild?.firstChild?.firstChild?.lastChild.tagName=='TIME'){ //make sent at tooltips not show when small user popup is open
          el.remove()
        }
      }
    });
  }

  removeTooltip();

  const observer = new MutationObserver(() => removeTooltip());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();


/* --- OffScreenAttachmentsFix.js --- */
if(window.__US_BUILDER_OFFSCREENATTACHMENTSFIX_JS__){return;}window.__US_BUILDER_OFFSCREENATTACHMENTSFIX_JS__=true;

(function () {
  if (window.__OFF_SCREEN_ATTACHMENTS_FIX__) return;
  window.__OFF_SCREEN_ATTACHMENTS_FIX__ = true;

  function offScreenAttachmentsFix() {
    const elements = document.querySelectorAll('div[class="d_flex flex-d_column flex-g_initial m_0 ai_initial jc_initial p_var(--gap-md) bdr_var(--borderRadius-md) c_var(--md-sys-color-inverse-on-surface) bg_var(--md-sys-color-inverse-surface) gap_var(--gap-md)"]')
    elements.forEach(element=>{
        if(element.children[0].children[1].children[0].textContent.includes(' ')||element.children[0].children[1].children[0].textContent.includes('_')){
            element.children[0].children[1].children[0].textContent = element.children[0].children[1].children[0].textContent.replaceAll(' ','-').replaceAll('_','-')
        }
    });
  }

  const observer = new MutationObserver(() => {
    offScreenAttachmentsFix();
  });

  function init() {
    offScreenAttachmentsFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- pluginsupport.user.js --- */
if(window.__US_BUILDER_PLUGINSUPPORT_USER_JS__){return;}window.__US_BUILDER_PLUGINSUPPORT_USER_JS__=true;

// ==UserScript==
// @name         Avia Client plugin support
// @description  Adds plugin support
// @author       AvaLilac
// @version      1.4
// @match        *://*.stoat.chat/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {

    if (window.__AVIA_PLUGINS_LOADED__) return;
    window.__AVIA_PLUGINS_LOADED__ = true;

    const STORAGE_KEY = "avia_plugins";

    const runningPlugins = {};
    const pluginErrors = {};
    const injectionQueue = [];

    const getPlugins = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const setPlugins = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    function normalizePluginUrl(url) {
        try {
            const u = new URL(url);
            if (u.hostname === "github.com") {
                const m = u.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
                if (m) return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}/${m[4]}`;
                return url;
            }
            if (u.hostname === "raw.githubusercontent.com") return url;
            if (u.hostname === "raw.codeberg.page") return url;
            if (u.hostname === "codeberg.org") {
                const parts = u.pathname.split("/").filter(Boolean);
                if (parts.length >= 5 && (parts[2] === "raw" || parts[2] === "src")) {
                    const user = parts[0], repo = parts[1];
                    const branchName = ["branch","commit","tag"].includes(parts[3]) ? parts[4] : parts[3];
                    const fileStart = ["branch","commit","tag"].includes(parts[3]) ? 5 : 4;
                    const filePath = parts.slice(fileStart).join("/");
                    return `https://raw.codeberg.page/${user}/${repo}/@${branchName}/${filePath}`;
                }
                if (parts.length >= 4 && parts[2] === "raw") {
                    return `https://raw.codeberg.page/${parts[0]}/${parts[1]}/@${parts[3]}/${parts.slice(4).join("/")}`;
                }
            }
        } catch (_) {}
        return url;
    }

    async function processQueue() {
        if (processQueue.running) return;
        processQueue.running = true;
        while (injectionQueue.length) {
            const { plugin, force } = injectionQueue.shift();
            await loadPluginInternal(plugin, force);
        }
        processQueue.running = false;
    }

    function queuePlugin(plugin, force = false) {
        injectionQueue.push({ plugin, force });
        processQueue();
    }

    async function loadPluginInternal(plugin, force = false) {
        if (runningPlugins[plugin.url] && !force) return;
        if (force) stopPlugin(plugin);
        try {
            const fetchUrl = normalizePluginUrl(plugin.url);
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error("Fetch failed");
            const code = await res.text();
            delete pluginErrors[plugin.url];
            const script = document.createElement("script");
            script.textContent = code;
            script.dataset.pluginUrl = plugin.url;
            document.body.appendChild(script);
            runningPlugins[plugin.url] = script;
        } catch {
            pluginErrors[plugin.url] = true;
        }
        renderPanel();
    }

    function stopPlugin(plugin) {
        const script = runningPlugins[plugin.url];
        if (!script) return;
        script.remove();
        delete runningPlugins[plugin.url];
        delete pluginErrors[plugin.url];
        renderPanel();
    }

    function preloadMonaco() {
        return new Promise(resolve => {
            if (window.monaco) return resolve();
            const loader = document.createElement("script");
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs" } });
                require(["vs/editor/editor.main"], () => resolve());
            };
            document.head.appendChild(loader);
        });
    }

    async function openViewerPanel(plugin) {
        await preloadMonaco();

        const existing = document.getElementById("avia-plugin-viewer-panel");
        if (existing) existing.remove();

        const panel = document.createElement("div");
        panel.id = "avia-plugin-viewer-panel";
        if(window.outerWidth<766){
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                left: "24px",
                width: `${window.outerWidth-66}px`,
                height: `${window.outerWidth-130}px`,
                background: "var(--md-sys-color-surface, #1e1e1e)",
                borderRadius: "16px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
                zIndex: "9999999",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                color: "#fff"
            });
        }else{
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                left: "24px",
                width: "700px",
                height: "480px",
                background: "var(--md-sys-color-surface, #1e1e1e)",
                borderRadius: "16px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.45)",
                zIndex: "9999999",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                color: "#fff"
            });
        }

        const header = document.createElement("div");
        Object.assign(header.style, {
            padding: "14px 16px",
            fontWeight: "600",
            fontSize: "14px",
            background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            cursor: "move",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flex: "0 0 auto"
        });

        const titleText = document.createElement("span");
        titleText.textContent = `Viewing: ${plugin.name}`;
        titleText.style.flex = "1";

        const readOnlyBadge = document.createElement("span");
        readOnlyBadge.textContent = "READ ONLY";
        Object.assign(readOnlyBadge.style, {
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "0.08em",
            padding: "2px 8px",
            borderRadius: "20px",
            background: "rgba(255,180,0,0.15)",
            color: "#ffb400",
            border: "1px solid rgba(255,180,0,0.3)"
        });

        const closeBtn = document.createElement("div");
        closeBtn.textContent = "✕";
        Object.assign(closeBtn.style, {
            cursor: "pointer",
            opacity: "0.6",
            fontSize: "15px",
            lineHeight: "1",
            padding: "2px 4px"
        });
        closeBtn.onmouseenter = () => closeBtn.style.opacity = "1";
        closeBtn.onmouseleave = () => closeBtn.style.opacity = "0.6";
        closeBtn.onclick = () => panel.remove();

        header.appendChild(titleText);
        header.appendChild(readOnlyBadge);
        header.appendChild(closeBtn);

        const urlBar = document.createElement("div");
        Object.assign(urlBar.style, {
            padding: "8px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "monospace",
            background: "rgba(0,0,0,0.15)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: "0 0 auto"
        });
        urlBar.textContent = plugin.url;
        urlBar.title = plugin.url;

        const editorContainer = document.createElement("div");
        editorContainer.style.flex = "1";
        editorContainer.style.overflow = "hidden";

        const loadingMsg = document.createElement("div");
        Object.assign(loadingMsg.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            opacity: "0.4",
            fontSize: "13px"
        });
        loadingMsg.textContent = "Fetching source…";
        editorContainer.appendChild(loadingMsg);

        panel.appendChild(header);
        panel.appendChild(urlBar);
        panel.appendChild(editorContainer);
        document.body.appendChild(panel);

        enableDragOn(panel, header);

        let code;
        try {
            const fetchUrl = normalizePluginUrl(plugin.url);
            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            code = await res.text();
        } catch (err) {
            loadingMsg.textContent = `Failed to fetch source: ${err.message}`;
            loadingMsg.style.color = "#ff4d4d";
            loadingMsg.style.opacity = "1";
            return;
        }

        editorContainer.removeChild(loadingMsg);

        monaco.editor.create(editorContainer, {
            value: code,
            language: "javascript",
            theme: "vs-dark",
            readOnly: true,
            automaticLayout: true,
            minimap: { enabled: true },
            fontSize: 13,
            scrollBeyondLastLine: false,
            wordWrap: "off",
            domReadOnly: true,
            renderValidationDecorations: "off",
            renderLineHighlight: "none",
            cursorStyle: "block",
            cursorBlinking: "solid"
        });
    }

    function togglePluginsPanel() {
        let panel = document.getElementById('avia-plugins-panel');
        if (panel) {
            if (panel.style.display === 'none') {
                panel.style.display = 'flex';
                renderPanel();
            } else {
                panel.style.display = 'none';
            }
            return;
        }
        panel = document.createElement('div');
        panel.id = 'avia-plugins-panel';
        if(window.outerWidth<612){
            Object.assign(panel.style, {
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                width: `${window.outerWidth-52}px`,
                height: `${window.outerWidth-72}px`,
                background: 'var(--md-sys-color-surface, #1e1e1e)',
                color: 'var(--md-sys-color-on-surface, #fff)',
                borderRadius: '16px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
                zIndex: '999999',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)'
            });
        }else{
            Object.assign(panel.style, {
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                width: '560px',
                height: '520px',
                background: 'var(--md-sys-color-surface, #1e1e1e)',
                color: 'var(--md-sys-color-on-surface, #fff)',
                borderRadius: '16px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
                zIndex: '999999',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)'
            });
        }

        const header = document.createElement('div');
        Object.assign(header.style, {
            padding: '14px 16px',
            fontWeight: '600',
            fontSize: '14px',
            background: 'var(--md-sys-color-surface-container, rgba(255,255,255,0.04))',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            cursor: 'move',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: '0 0 auto'
        });

        const headerTitle = document.createElement('span');
        headerTitle.textContent = 'Plugins';

        const closeBtn = document.createElement('div');
        closeBtn.textContent = '✕';
        Object.assign(closeBtn.style, {
            position: 'absolute',
            top: '12px',
            right: '16px',
            cursor: 'pointer',
            opacity: '0.7'
        });
        closeBtn.onclick = () => panel.style.display = 'none';

        header.appendChild(headerTitle)
        header.appendChild(closeBtn)

        const controlsBar = document.createElement('div');
        Object.assign(controlsBar.style, {
            padding: '12px 16px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            flex: '0 0 auto'
        });

        const nameInput = document.createElement('input');
        nameInput.placeholder = 'Name';
        styleInput(nameInput);
        nameInput.style.width = '80px';

        const urlInput = document.createElement('input');
        urlInput.placeholder = 'Plugin URL';
        styleInput(urlInput);
        urlInput.style.flex = '1';
        if(window.outerWidth<572){
            urlInput.style.width=`${((window.outerWidth-72)/10)+50}px`
        }

        const addBtn = document.createElement('button');
        addBtn.textContent = '+ Add';
        styleBtn(addBtn);
        addBtn.onclick = () => {
            const name = nameInput.value.trim();
            const url = urlInput.value.trim();
            if (!name || !url) return;
            const plugins = getPlugins();
            plugins.push({ name, url, enabled: false });
            setPlugins(plugins);
            nameInput.value = '';
            urlInput.value = '';
            renderPanel();
        };

        const refreshAll = document.createElement('button');
        refreshAll.textContent = 'Refresh';
        styleBtn(refreshAll);
        refreshAll.onclick = () => {
            const plugins = getPlugins();
            plugins.forEach(p => {
                if (p.enabled) queuePlugin(p, true);
            });
        };

        controlsBar.appendChild(nameInput);
        controlsBar.appendChild(urlInput);
        controlsBar.appendChild(addBtn);
        controlsBar.appendChild(refreshAll);

        const searchBar = document.createElement('div');
        Object.assign(searchBar.style, {
            padding: '10px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            flex: '0 0 auto'
        });

        const searchInput = document.createElement('input');
        searchInput.placeholder = 'Search plugins…';
        styleInput(searchInput);
        searchInput.style.width = '100%';
        searchInput.oninput = () => renderPanel(searchInput.value.toLowerCase());
        searchBar.appendChild(searchInput);

        const content = document.createElement('div');
        content.id = 'avia-plugins-content';
        Object.assign(content.style, {
            flex: '1',
            overflowY: 'auto',
            padding: '12px 16px 16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        });

        if (!document.getElementById('avia-scrollbar-hide')) {
            const s = document.createElement('style');
            s.id = 'avia-scrollbar-hide';
            s.textContent = '#avia-plugins-content::-webkit-scrollbar{display:none}';
            document.head.appendChild(s);
        }

        panel.appendChild(header);
        panel.appendChild(controlsBar);
        panel.appendChild(searchBar)
        panel.appendChild(content);
        document.body.appendChild(panel);
        enableDragOn(panel, header);
        renderPanel();
    }

    function renderPanel(filter='') {
        const content = document.getElementById('avia-plugins-content');
        if (!content) return;
        content.innerHTML = '';
        const plugins = getPlugins();
        const runningSnapshot = { ...runningPlugins };
        const errorSnapshot = { ...pluginErrors };

        const filtered = filter
            ? plugins.filter(p => p.name.toLowerCase().includes(filter))
            : plugins;

        const visible = [...filtered].reverse();

        if (visible.length === 0) {
            const empty = document.createElement('div');
            empty.textContent = plugins.length === 0
                ? 'No plugins yet. Add one above.'
                : 'No plugins match your search.';
            Object.assign(empty.style, { opacity: '0.4', fontSize: '13px', textAlign: 'center', padding: '24px 0' });
            content.appendChild(empty);
            return;
        }

        const sectionLabel = document.createElement('div');
        sectionLabel.textContent = `User Plugins: ${visible.length}`;
        Object.assign(sectionLabel.style, {
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '10px'
        });
        content.appendChild(sectionLabel);

        const grid = document.createElement('div');
        Object.assign(grid.style, {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '10px'
        });

        visible.forEach((plugin, index) => {
            const realIndex = plugins.indexOf(plugin);
            const isRunning = !!runningSnapshot[plugin.url];
            const hasError = !!errorSnapshot[plugin.url];

            const card = document.createElement('div');
            Object.assign(card.style, {
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${hasError ? 'rgba(255,77,77,0.3)' : isRunning ? 'rgba(77,255,136,0.25)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '10px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            });
            card.onmouseenter = () => {
                if (!hasError && !isRunning) card.style.borderColor = 'rgba(255,255,255,0.13)';
            };
            card.onmouseleave = () => {
                card.style.borderColor = hasError ? 'rgba(255,77,77,0.3)' : isRunning ? 'rgba(77,255,136,0.25)' : 'rgba(255,255,255,0.06)';
            };

            const topRow = document.createElement('div');
            Object.assign(topRow.style, {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px'
            });

            const nameWrap = document.createElement('div');
            Object.assign(nameWrap.style, { display: 'flex', alignItems: 'center', gap: '7px', minWidth: '0', flex: '1' });

            const dot = document.createElement('div');
            Object.assign(dot.style, {
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                flexShrink: '0',
                background: hasError ? '#ff4d4d' : isRunning ? '#4dff88' : '#555',
                boxShadow: hasError ? '0 0 5px #ff4d4d' : isRunning ? '0 0 5px #4dff88' : 'none'
            });

            const nameEl = document.createElement('div');
            nameEl.textContent = plugin.name;
            Object.assign(nameEl.style, {
                fontSize: '13px',
                fontWeight: '600',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            });

            nameWrap.appendChild(dot);
            nameWrap.appendChild(nameEl);

            const switchWrap = document.createElement('div');
            Object.assign(switchWrap.style, {
                position: 'relative',
                width: '36px',
                height: '20px',
                flexShrink: '0',
                cursor: 'pointer'
            });

            const track = document.createElement('div');
            Object.assign(track.style, {
                position: 'absolute',
                inset: '0',
                borderRadius: '10px',
                background: plugin.enabled ? 'rgba(100,160,255,0.6)' : 'rgba(255,255,255,0.15)',
                transition: 'background 0.2s'
            });

            const thumb = document.createElement('div');
            Object.assign(thumb.style, {
                position: 'absolute',
                top: '3px',
                left: plugin.enabled ? '19px' : '3px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#fff',
                transition: 'left 0.2s',
                pointerEvents: 'none'
            });

            switchWrap.appendChild(track);
            switchWrap.appendChild(thumb);

            switchWrap.onclick = () => {
                plugin.enabled = !plugin.enabled;
                setPlugins(plugins);
                if (plugin.enabled) queuePlugin(plugin);
                else stopPlugin(plugin);
                renderPanel(filter);
            };

            topRow.appendChild(nameWrap);
            topRow.appendChild(switchWrap);

            const footer = document.createElement('div');
            Object.assign(footer.style, { display: 'flex', gap: '6px', marginTop: 'auto', paddingTop: '2px' });

            const viewBtn = document.createElement('button');
            viewBtn.textContent = 'View';
            styleBtn(viewBtn, 'rgba(100,160,255,0.15)');
            viewBtn.style.flex = '1';
            viewBtn.onclick = () => openViewerPanel(plugin);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = '✕';
            styleBtn(removeBtn, 'rgba(255,80,80,0.15)');
            removeBtn.onclick = () => {
                stopPlugin(plugin);
                plugins.splice(realIndex, 1);
                setPlugins(plugins);
                renderPanel(filter);
            };

            footer.appendChild(viewBtn);
            footer.appendChild(removeBtn);

            card.appendChild(topRow);
            card.appendChild(footer);
            grid.appendChild(card);
        });
        content.appendChild(grid);
    }

    function styleInput(input) {
        Object.assign(input.style, {
            padding: '6px 8px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            color: '#fff',
            fontSize: '13px'
        });
    }

    function styleBtn(btn, bg) {
        Object.assign(btn.style, {
            padding: '5px 12px',
            borderRadius: '8px',
            border: 'none',
            background: bg || 'rgba(255,255,255,0.08)',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '12px',
            whiteSpace: 'nowrap'
        });
        btn.onmouseenter = () => btn.style.opacity = '0.75';
        btn.onmouseleave = () => btn.style.opacity = '1';
    }

    function enableDragOn(panel, header) {
        let isDragging = false, offsetX, offsetY;
        header.addEventListener('mousedown', e => {
            isDragging = true;
            offsetX = e.clientX - panel.offsetLeft;
            offsetY = e.clientY - panel.offsetTop;
            document.body.style.userSelect = 'none';
        });
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.style.userSelect = '';
        });
        document.addEventListener('mousemove', e => {
            if (!isDragging) return;
            panel.style.left = (e.clientX - offsetX) + 'px';
            panel.style.top = (e.clientY - offsetY) + 'px';
            panel.style.right = 'auto';
            panel.style.bottom = 'auto';
        });
    }

    function injectButtons() {
        if (document.getElementById('stoat-fake-plugins')) return;
        const appearanceBtn = [...document.querySelectorAll('a')]
            .find(a => a.textContent.trim() === 'Appearance');
        if (!appearanceBtn) return;
        const referenceNode = document.getElementById('stoat-fake-quickcss');
        if (!referenceNode) return;
        const pluginsBtn = appearanceBtn.cloneNode(true);
        pluginsBtn.id = 'stoat-fake-plugins';
        const textNode = [...pluginsBtn.querySelectorAll('div')]
            .find(d => d.children.length === 0 && d.textContent.trim() === 'Appearance');
        if (textNode) textNode.textContent = "(Avia) Plugins";
        const svgNS = "http://www.w3.org/2000/svg";
        const oldSvg = pluginsBtn.querySelector('svg');
        if (oldSvg) oldSvg.remove();
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "currentColor");
        svg.style.marginRight = "8px";
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M20.5 11H19V7a2 2 0 00-2-2h-4V3.5a2.5 2.5 0 00-5 0V5H4a2 2 0 00-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7S5 16.2 3.5 16.2H2V20a2 2 0 002 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7V22H17a2 2 0 002-2v-4h1.5a2.5 2.5 0 000-5z");
        svg.appendChild(path);
        pluginsBtn.insertBefore(svg, pluginsBtn.firstChild);
        pluginsBtn.addEventListener('click', togglePluginsPanel);
        referenceNode.parentElement.insertBefore(pluginsBtn, referenceNode.nextSibling);
    }

    function waitForBody(callback) {
        if (document.body) callback();
        else new MutationObserver((obs) => {
            if (document.body) { obs.disconnect(); callback(); }
        }).observe(document.documentElement, { childList: true });
    }

    function registerWithAviaMenu() {
        if (window.AviaMenu) {
            window.AviaMenu.register({ id: "avia_plugins_online", name: "Plugins", icon: "extension", onClick: togglePluginsPanel });
        } else {
            const interval = setInterval(() => {
                if (window.AviaMenu) {
                    clearInterval(interval);
                    window.AviaMenu.register({ id: "avia_plugins_online", name: "Plugins", icon: "extension", onClick: togglePluginsPanel });
                }
            }, 100);
        }
    }

    waitForBody(() => {
        const observer = new MutationObserver(() => injectButtons());
        observer.observe(document.body, { childList: true, subtree: true });
        injectButtons();
        preloadMonaco();
    });

    getPlugins().forEach(plugin => {
        if (plugin.enabled) queuePlugin(plugin);
    });

    registerWithAviaMenu()

})();


/* --- RemoveGifButton.js --- */
if(window.__US_BUILDER_REMOVEGIFBUTTON_JS__){return;}window.__US_BUILDER_REMOVEGIFBUTTON_JS__=true;

(function () {
  if (window.__REMOVE_GIF_BUTTON__) return;
  window.__REMOVE_GIF_BUTTON__ = true;

  function removeGifButton() {
    const favouritesbutton = document.getElementById('avia-favorites-btn')
    if(!favouritesbutton) return;
    const buttons = favouritesbutton.parentElement

    if(buttons.firstChild.textContent=='gif'){
        buttons.firstChild.style.display='none'
    }
    const chatbar = document.getElementsByClassName('cm-content cm-lineWrapping').item(0)
    if(document.activeElement==chatbar) return;

    for(const button of buttons.children){
        if(button.textContent!='gif'&&button.style.display=='none'){
            button.style.removeProperty('display')
        }
    }
  }

  const observer = new MutationObserver(() => {
    removeGifButton();
  });

  function init() {
    removeGifButton();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- ReplaceSearchbar.js --- */
if(window.__US_BUILDER_REPLACESEARCHBAR_JS__){return;}window.__US_BUILDER_REPLACESEARCHBAR_JS__=true;

(function () {
    if (window.__AVIA_SEARCH__) return;
    window.__AVIA_SEARCH__ = true;

    function injectHideStyle() {
        if (document.getElementById("avia-search-hide")) return;
        const style = document.createElement("style");
        style.id = "avia-search-hide";
        style.textContent = `input[placeholder="Search messages..."] { display: none !important; }`;
        document.head.appendChild(style);
    }

    function removeHideStyle() {
        document.getElementById("avia-search-hide")?.remove();
    }

    injectHideStyle();

    function findSearchInput() {
        return document.querySelector('input[placeholder="Search messages..."]');
    }

    function findPinButton() {
        return document.querySelector('button[aria-label="View pinned messages"]');
    }

    function findInjectedBtn() {
        return document.querySelector("[data-avia-search-btn]");
    }

    function injectSearchButton() {
        if (findInjectedBtn()) return;

        const searchInput = findSearchInput();
        const pinBtn = findPinButton();
        if (!searchInput || !pinBtn) return;

        const btn = pinBtn.cloneNode(false);
        btn.setAttribute("data-avia-search-btn", "true");
        btn.setAttribute("aria-label", "Search messages");

        const ripple = document.createElement("md-ripple");
        ripple.setAttribute("aria-hidden", "true");
        btn.appendChild(ripple);

        const icon = document.createElement("span");
        icon.className = "material-symbols-outlined";
        icon.style.cssText = "display:block;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0;font-size:24px;";
        icon.textContent = "search";
        btn.appendChild(icon);

        let isOpen = false;

        btn.addEventListener("click", () => {
            isOpen = !isOpen;

            if (isOpen) {
                removeHideStyle();
                icon.style.fontVariationSettings = "'FILL' 1,'wght' 400,'GRAD' 0";
                requestAnimationFrame(() => findSearchInput()?.focus());
            } else {
                injectHideStyle();
                icon.style.fontVariationSettings = "'FILL' 0,'wght' 400,'GRAD' 0";
                const input = findSearchInput();
                if (input) {
                    input.value = "";
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                }
            }
        });

        searchInput.insertAdjacentElement("beforebegin", btn);
    }

    const observer = new MutationObserver(() => {
        if (!findInjectedBtn()) {
            injectHideStyle();
            injectSearchButton();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    injectSearchButton();
})();


/* --- repofrontend.js --- */
if(window.__US_BUILDER_REPOFRONTEND_JS__){return;}window.__US_BUILDER_REPOFRONTEND_JS__=true;

(function () {

if (window.__AVIA_OFFICIAL_REPO_LOADED__) return;
window.__AVIA_OFFICIAL_REPO_LOADED__ = true;

const STORAGE_KEY = "avia_plugins";
const OFFICIAL_REPO_URL = "https://raw.githubusercontent.com/0simp/MobilePluginRepo/refs/heads/main/pluginrepobackend.js";
const THEMES_REGISTRY_URL = "https://raw.githubusercontent.com/0simp/MobilePluginRepo/refs/heads/main/themebackend/themerepobackend.js";

const getPlugins = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const setPlugins = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

let repoContent;
let currentRepoData = [];
let currentThemeData = [];
let searchInput;
let activeTab = "plugins"; // "plugins" | "themes"

document.getElementById("avia-official-repo-btn")?.remove();

 function injectStyles() {
    if (document.getElementById("avia-repo-styles")) return;
    const style = document.createElement("style");
    style.id = "avia-repo-styles";
    style.textContent = `
        #avia-official-repo-window * { box-sizing: border-box; }

        #avia-repo-content::-webkit-scrollbar { width: 4px; }
        #avia-repo-content::-webkit-scrollbar-track { background: transparent; }
        #avia-repo-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 4px; }

        .avia-repo-plugin-card {
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 10px 12px;
            border-radius: 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.06);
            margin-bottom: 8px;
        }

        .avia-repo-card-top {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .avia-repo-meta { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 0; }
        .avia-repo-name { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.92); word-break: break-word; }
        .avia-repo-author-row { display: flex; align-items: center; gap: 6px; }
        .avia-repo-author-badge {
            font-size: 10px;
            font-weight: 500;
            color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 4px;
            padding: 1px 6px;
            white-space: nowrap;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .avia-repo-desc { font-size: 11px; color: #fff; word-break: break-word; white-space: normal; line-height: 1.5; }

        .avia-repo-install-btn {
            padding: 5px 13px;
            border-radius: 7px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.07);
            color: rgba(255,255,255,0.85);
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            flex-shrink: 0;
            transition: background 0.15s, opacity 0.15s;
            font-family: inherit;
            white-space: nowrap;
        }
        .avia-repo-install-btn:hover:not(:disabled) { background: rgba(255,255,255,0.13); }
        .avia-repo-install-btn:disabled { opacity: 0.4; cursor: default; }

        .avia-repo-theme-card {
            border-radius: 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.06);
            overflow: hidden;
            margin-bottom: 8px;
            transition: background 0.15s, border-color 0.15s;
        }
        .avia-repo-theme-card:hover {
            background: rgba(255,255,255,0.06);
            order-color: rgba(255,255,255,0.10);
        }
        .avia-repo-theme-preview {
            width: 100%;
            display: block;
            object-fit: cover;
        }
        .avia-repo-theme-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 9px 12px;
            gap: 8px;
        }
        .avia-repo-theme-name { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.92); }
        .avia-repo-theme-author { font-size: 11px; color: rgba(255,255,255,0.4); margin-top: 2px; }

        .avia-repo-tab {
            padding: 8px 14px;
            border: none;
            background: transparent;
            color: rgba(255,255,255,0.4);
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            font-family: inherit;
            position: relative;
            transition: color 0.15s;
            border-bottom: 2px solid transparent;
            margin-bottom: -1px;
        }
        .avia-repo-tab:hover { color: rgba(255,255,255,0.75); }
        .avia-repo-tab.active {
            color: rgba(255,255,255,0.95);
            border-bottom-color: rgba(255,255,255,0.55);
        }

        .avia-repo-search {
            width: 100%;
            padding: 7px 10px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.1);
            outline: none;
            background: rgba(255,255,255,0.05);
            color: #fff;
            font-size: 12px;
            font-family: inherit;
            transition: border-color 0.15s, background 0.15s;
        }
        .avia-repo-search::placeholder { color: rgba(255,255,255,0.3); }
        .avia-repo-search:focus {
            border-color: rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.07);
        }

        .avia-repo-count {
            font-size: 10px;
            font-weight: 500;
            color: rgba(255,255,255,0.35);
            background: rgba(255,255,255,0.06);
            border-radius: 4px;
            padding: 1px 6px;
            margin-left: 4px;
            vertical-align: middle;
        }

        .avia-repo-btn-group { display: flex; flex-direction: row; gap: 6px; flex-shrink: 0; align-items: flex-start; }

        .avia-repo-empty {
            opacity: 0.35;
            text-align: center;
            margin-top: 40px;
            font-size: 13px;
            color: rgba(255,255,255,0.8);
        }
    `;
    document.head.appendChild(style);
}



function triggerManagerRefresh() {
    const panel = document.getElementById("avia-plugins-panel");
    if (!panel) return;
    const refreshBtn = Array.from(panel.querySelectorAll("button"))
        .find(b => b.textContent.trim() === "Refresh");
    if (refreshBtn) refreshBtn.click();
}

function updateInstallStates() {
    if (!repoContent) return;
    const installed = getPlugins().map(p => p.url);
    repoContent.querySelectorAll("[data-link]").forEach(row => {
        const link = row.getAttribute("data-link");
        const btn = row.querySelector("button.install-btn");
        if (!btn) return;
        if (installed.includes(link)) {
            btn.textContent = "Installed";
            btn.disabled = true;
        } else {
            btn.textContent = "Install";
            btn.disabled = false;
        }
    });
}

const LOCAL_STORAGE_KEY = "avia_local_plugins";
const getLocalPlugins = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
const setLocalPlugins = (data) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));

function isInstalledLocally(name) {
    return getLocalPlugins().some(p => p.name === name);
}   

function rawUrlFromLink(link) {
    try {
        const u = new URL(link);

        if (u.hostname === "github.com") {
            const m = u.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
            if (m) {
                return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}/${m[4]}`;
            }
            return link;
        }

        if (u.hostname === "raw.githubusercontent.com") return link;

        if (u.hostname === "raw.codeberg.page") return link;

        if (u.hostname === "codeberg.org") {

            if (u.pathname.startsWith("/api/v1/repos/")) return link;

            const parts = u.pathname.split("/").filter(Boolean);

            if (parts.length >= 5 && (parts[2] === "raw" || parts[2] === "src")) {
                const user       = parts[0];
                const repo       = parts[1];
                const branchName = parts[3] === "branch" || parts[3] === "commit" || parts[3] === "tag"
                    ? parts[4]
                    : parts[3];
                const fileStart  = parts[3] === "branch" || parts[3] === "commit" || parts[3] === "tag"
                    ? 5
                    : 4;
                const filePath   = parts.slice(fileStart).join("/");

                return `https://codeberg.org/api/v1/repos/${user}/${repo}/raw/${filePath}?ref=${branchName}`;
            }

            if (parts.length >= 4 && parts[2] === "raw") {
                const user       = parts[0];
                const repo       = parts[1];
                const branchName = parts[3];
                const filePath   = parts.slice(4).join("/");

                return `https://codeberg.org/api/v1/repos/${user}/${repo}/raw/${filePath}?ref=${branchName}`;
            }

            if (parts.length >= 5 && parts[2] === "src" && parts[3] === "branch") {
                const user     = parts[0];
                const repo     = parts[1];
                const branch   = parts[4];
                const filePath = parts.slice(5).join("/");
                return `https://codeberg.org/api/v1/repos/${user}/${repo}/raw/${filePath}?ref=${branch}`;
            }
        }
    } catch (_) {}
    return link;
}

async function installToLocal(plugin, btn) {
    btn.disabled = true;
    btn.textContent = "Fetching…";

    const rawUrl = rawUrlFromLink(plugin.link);

    try {
        const res = await fetch(rawUrl);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const code = await res.text();

        const locals = getLocalPlugins();
        if (locals.some(p => p.name === plugin.name)) {
            btn.textContent = "In Local";
            return;
        }

        locals.push({
            id: "local_" + Date.now() + "_" + Math.random().toString(36).slice(2),
            name: plugin.name,
            code,
            enabled: false
        });
        setLocalPlugins(locals);

        window.dispatchEvent(new Event("avia-local-plugin-list-changed"));

        btn.textContent = "In Local";
    } catch (e) {
        btn.disabled = false;
        btn.textContent = "Local ✕";
        setTimeout(() => {
            btn.textContent = "Install to local";
            btn.disabled = false;
        }, 2000);
    }
}

function updateInstallStates() {
    if (!repoContent) return;
    const installed = getPlugins().map(p => p.url);
    repoContent.querySelectorAll("[data-link]").forEach(card => {
        const link = card.getAttribute("data-link");
        const name = card.getAttribute("data-name");
        const btn = card.querySelector("button.install-btn");
        const localBtn = card.querySelector("button.local-install-btn");
        if (btn) {
            if (installed.includes(link)) {
                btn.textContent = "Installed";
                btn.disabled = true;
            } else {
                btn.textContent = "Install";
                btn.disabled = false;
            }
        }
        if (localBtn) {
            if (isInstalledLocally(name)) {
                localBtn.textContent = "In Local";
                localBtn.disabled = true;
            } else {
                localBtn.textContent = "Install to local";
                localBtn.disabled = false;
            }
        }
    });
}

function renderRepo(data, filter = "") {
    if (!repoContent) return;

    currentRepoData = data.plugins;
    repoContent.innerHTML = "";

    const filtered = currentRepoData.filter(p =>
        (p.name + " " + (p.author || "") + " " + (p.description || ""))
            .toLowerCase()
            .includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        repoContent.innerHTML = `<div style="opacity:0.5;text-align:center;margin-top:30px;">No plugins found.</div>`;
        return;
    }

    filtered.forEach(repoPlugin => {
        const card = document.createElement("div");
        card.className = "avia-repo-plugin-card";
        card.setAttribute("data-link", repoPlugin.link);
        card.setAttribute("data-name", repoPlugin.name);

        const topRow = document.createElement("div");
        topRow.style.cssText = "display:flex;align-items:flex-start;gap:10px;";

        const nameMeta = document.createElement("div");
        nameMeta.style.cssText = "display:flex;flex-direction:column;gap:4px;flex:1;min-width:0;";

        const name = document.createElement("div");
        name.className = "avia-repo-name";
        name.textContent = repoPlugin.name;

        const authorRow = document.createElement("div");
        authorRow.className = "avia-repo-author-row";

        const authorBadge = document.createElement("span");
        authorBadge.className = "avia-repo-author-badge";
        authorBadge.textContent = repoPlugin.author || "Unknown";
        authorRow.appendChild(authorBadge);

        nameMeta.appendChild(name);
        nameMeta.appendChild(authorRow);

        const btnGroup = document.createElement("div");
        btnGroup.className = "avia-repo-btn-group";

        const localBtn = document.createElement("button");
        localBtn.className = "avia-repo-install-btn local-install-btn";
        localBtn.textContent = "Install to local";
        localBtn.onclick = () => installToLocal(repoPlugin, localBtn);

        const installBtn = document.createElement("button");
        installBtn.className = "avia-repo-install-btn install-btn";
        installBtn.onclick = () => {
            const plugins = getPlugins();
            if (!plugins.some(p => p.url === repoPlugin.link)) {
                plugins.push({ name: repoPlugin.name, url: repoPlugin.link, enabled: false });
                setPlugins(plugins);
                window.dispatchEvent(new Event("avia-plugin-list-changed"));
                triggerManagerRefresh();
                renderRepo({ plugins: currentRepoData }, searchInput.value);
            }
        };

        btnGroup.appendChild(localBtn);
        btnGroup.appendChild(installBtn);

        topRow.appendChild(nameMeta);
        topRow.appendChild(btnGroup);
        card.appendChild(topRow);

        if (repoPlugin.description) {
            const desc = document.createElement("div");
            desc.className = "avia-repo-desc";
            desc.textContent = repoPlugin.description;
            card.appendChild(desc);
        }

        repoContent.appendChild(card);
    });

    updateInstallStates();
}

function refetchPlugins() {
    if (!repoContent) return;
    repoContent.innerHTML = "Loading...";

    function electronFetch() {
        try {
            const https = require("https");
            https.get(OFFICIAL_REPO_URL, res => {
                let data = "";
                res.on("data", chunk => data += chunk);
                res.on("end", () => renderRepo(JSON.parse(data)));
            }).on("error", () => {
                repoContent.innerHTML = "Failed to fetch repo.";
            });
        } catch {
            repoContent.innerHTML = "Failed to fetch repo.";
        }
    }

    try {
        fetch(OFFICIAL_REPO_URL)
            .then(res => res.json())
            .then(data => renderRepo(data))
            .catch(() => electronFetch());
    } catch {
        electronFetch();
    }
}

const THEMES_STORAGE_KEY = "avia_themes";
const getStoredThemes = () => JSON.parse(localStorage.getItem(THEMES_STORAGE_KEY) || "[]");
const setStoredThemes = (data) => localStorage.setItem(THEMES_STORAGE_KEY, JSON.stringify(data));

function installThemeCSS(theme, btn) {
    btn.disabled = true;
    btn.textContent = "Installing…";

    fetch(theme.download)
        .then(r => r.text())
        .then(rawCSS => {
            const css = buildThemeCSS(theme, rawCSS);
            const themes = getStoredThemes();

            const alreadyInstalled = themes.some(t => {
                const match = t.css.match(/@name\s+(.+)/);
                return match && match[1].trim() === theme.name;
            });

            if (alreadyInstalled) {
                btn.textContent = "Installed";

                return;
            }

            themes.push({ id: crypto.randomUUID(), css, enabled: true });
            setStoredThemes(themes);

            document.querySelectorAll(".avia-theme-style").forEach(e => e.remove());
            getStoredThemes().forEach(t => {
                if (!t.enabled) return;
                const style = document.createElement("style");
                style.className = "avia-theme-style";
                style.textContent = t.css;
                document.head.appendChild(style);
            });

            if (typeof window.__avia_refresh_themes_panel === "function") {
                window.__avia_refresh_themes_panel();
            }

            btn.textContent = "Installed";

        })
        .catch(() => {
            btn.textContent = "Install CSS";
            btn.disabled = false;
            alert("Failed to fetch theme CSS.");
        });
}

function renderThemes(filter = "") {
    if (!repoContent) return;
    repoContent.innerHTML = "";

    const filtered = currentThemeData.filter(t =>
        (t.name + " " + (t.author || ""))
            .toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        repoContent.innerHTML = `<div class="avia-repo-empty">No themes found.</div>`;
        return;
    }

    filtered.forEach(theme => {
        const card = document.createElement("div");
        card.className = "avia-repo-theme-card";

        if (theme.preview) {
            const img = document.createElement("img");
            img.src = theme.preview;
            img.alt = theme.name;
            img.className = "avia-repo-theme-preview";
            img.onerror = () => img.style.display = "none";
            card.appendChild(img);
        }

        const info = document.createElement("div");
        info.className = "avia-repo-theme-info";

        const metaDiv = document.createElement("div");
        metaDiv.style.minWidth = "0";
        metaDiv.style.flex = "1";

        const nameDv = document.createElement("div");
        nameDv.className = "avia-repo-theme-name";
        nameDv.textContent = theme.name;

        const authorDv = document.createElement("div");
        authorDv.className = "avia-repo-theme-author";
        authorDv.textContent = theme.author || "Unknown";

        metaDiv.appendChild(nameDv);
        metaDiv.appendChild(authorDv);

        const alreadyInstalled = getStoredThemes().some(t => {
            const match = t.css.match(/@name\s+(.+)/);
            return match && match[1].trim() === theme.name;
        });

        const dlBtn = document.createElement("button");
        dlBtn.className = "avia-repo-install-btn";
        dlBtn.textContent = alreadyInstalled ? "Installed" : "Install CSS";
        dlBtn.disabled = alreadyInstalled;
        dlBtn.onclick = () => installThemeCSS(theme, dlBtn);

        info.appendChild(metaDiv);
        info.appendChild(dlBtn);
        card.appendChild(info);
        repoContent.appendChild(card);
    });
}

function refetchThemes() {
    if (!repoContent) return;
    repoContent.innerHTML = "Loading themes...";
    currentThemeData = [];

    fetch(THEMES_REGISTRY_URL)
        .then(r => r.json())
        .then(async registry => {
            const sources = registry.sources || [];
            const results = await Promise.allSettled(
                sources.map(s => fetch(s.url).then(r => r.json()))
            );
            results.forEach(r => {
                if (r.status === "fulfilled") {
                    currentThemeData.push(...(r.value.themes || []));
                }
            });
            renderThemes(searchInput.value);
        })
        .catch(() => {
            if (repoContent) repoContent.innerHTML = "Failed to fetch themes.";
        });
}

function switchTab(tab, tabPluginsBtn, tabThemesBtn) {
    activeTab = tab;
    const isPlugins = tab === "plugins";

    tabPluginsBtn.style.background = isPlugins ? "rgba(255,255,255,0.12)" : "transparent";
    tabPluginsBtn.style.color = isPlugins ? "#fff" : "rgba(255,255,255,0.45)";
    tabThemesBtn.style.background = !isPlugins ? "rgba(255,255,255,0.12)" : "transparent";
    tabThemesBtn.style.color = !isPlugins ? "#fff" : "rgba(255,255,255,0.45)";

    searchInput.placeholder = isPlugins
        ? "Search plugins, authors, or descriptions"
        : "Search themes or authors";
    searchInput.value = "";

    if (isPlugins) {
        if (currentRepoData.length > 0) renderRepo({ plugins: currentRepoData });
        else refetchPlugins();
    } else {
        if (currentThemeData.length > 0) renderThemes();
        else refetchThemes();
    }
}

function openWindow() {
    let panel = document.getElementById("avia-official-repo-window");
    if (panel) {
        panel.style.display = panel.style.display === "none" ? "flex" : "none";
        return;
    }

    injectStyles()

    panel = document.createElement("div");
    panel.id = "avia-official-repo-window";
    if(window.outerWidth<486){
        const width = window.outerWidth-66
        Object.assign(panel.style, {
            position: "fixed",
            bottom: "24px",
            right: "40px",
            width: `${width}px`,
            height: `${width+100}px`,
            background: "var(--md-sys-color-surface, #1e1e1e)",
            color: "var(--md-sys-color-on-surface, #fff)",
            borderRadius: "16px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
            zIndex: "999999",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)"
        });
    }else{
        Object.assign(panel.style, {
            position: "fixed",
            bottom: "24px",
            right: "40px",
            width: "420px",
            height: "520px",
            background: "var(--md-sys-color-surface, #1e1e1e)",
            color: "var(--md-sys-color-on-surface, #fff)",
            borderRadius: "16px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
            zIndex: "999999",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)"
        });
    }

    const header = document.createElement("div");
   Object.assign(header.style, {
        padding: "13px 16px",
        fontWeight: "600",
        fontSize: "14px",
        background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        cursor: "move",
        position: "relative",
        textAlign: "center",
        userSelect: "none",
        flexShrink: "0"
    });
    header.textContent = "Plugins & Themes Repo";

    const close = document.createElement("div");
    close.textContent = "✕";
    Object.assign(close.style, {
        position: "absolute",
        right: "14px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        opacity: "0.5",
        fontSize: "13px",
        lineHeight: "1"
    });
    close.onmouseenter = () => close.style.opacity = "1";
    close.onmouseleave = () => close.style.opacity = "0.5";
    close.onclick = () => panel.style.display = "none";
    header.appendChild(close);

    let isDragging = false, offsetX = 0, offsetY = 0;
    header.addEventListener("mousedown", (e) => {
        isDragging = true;
        const rect = panel.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        panel.style.bottom = "auto";
        panel.style.right = "auto";
        panel.style.left = rect.left + "px";
        panel.style.top = rect.top + "px";
        document.body.style.userSelect = "none";
    });
    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        panel.style.left = e.clientX - offsetX + "px";
        panel.style.top = e.clientY - offsetY + "px";
    });
    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "";
    });

    const tabBar = document.createElement("div");
    Object.assign(tabBar.style, {
        display: "flex",
        padding: "0 12px",
        background: "rgba(255,255,255,0.02)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        flexShrink: "0"
    });

    const tabPluginsBtn = document.createElement("button");
    tabPluginsBtn.className = "avia-repo-tab";
    tabPluginsBtn.textContent = "Plugins";

    const tabThemesBtn = document.createElement("button");
    tabThemesBtn.className = "avia-repo-tab";
    tabThemesBtn.textContent = "Themes";

    tabPluginsBtn.onclick = () => switchTab("plugins", tabPluginsBtn, tabThemesBtn);
    tabThemesBtn.onclick = () => switchTab("themes", tabPluginsBtn, tabThemesBtn);

    tabBar.appendChild(tabPluginsBtn);
    tabBar.appendChild(tabThemesBtn);

    const searchWrap = document.createElement("div");
    Object.assign(searchWrap.style, {
        padding: "10px 12px",
        flexShrink: "0",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
    });

    searchInput = document.createElement("input");
    searchInput.className = "avia-repo-search";
    searchInput.placeholder = "Search plugins or authors…";
    searchInput.addEventListener("input", () => {
        if (activeTab === "plugins") renderRepo({ plugins: currentRepoData }, searchInput.value);
        else renderThemes(searchInput.value);
    });

    searchWrap.appendChild(searchInput);

    repoContent = document.createElement("div");
    repoContent.id = "avia-repo-content";
    Object.assign(repoContent.style, {
        flex: "1",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "10px 12px 12px"
    });

    panel.appendChild(header);
    panel.appendChild(tabBar);
    panel.appendChild(searchWrap);
    panel.appendChild(repoContent);
    document.body.appendChild(panel);

    switchTab("plugins", tabPluginsBtn, tabThemesBtn);
    refetchPlugins();
}

function injectSettingsButton() {
    if (document.getElementById("avia-official-repo-btn-settings")) return;

    const appearanceBtn = [...document.querySelectorAll("a")]
        .find(a => a.textContent.trim() === "Appearance");
    const referenceNode = document.getElementById("stoat-fake-quickcss");
    if (!appearanceBtn || !referenceNode) return;

    const clone = appearanceBtn.cloneNode(true);
    clone.id = "avia-official-repo-btn-settings";

    const label = [...clone.querySelectorAll("div")].find(d => d.children.length === 0);
    if (label) label.textContent = "(Avia)  Plugins/Themes Repo";

    const iconSpan = clone.querySelector("span.material-symbols-outlined");
    if (iconSpan) {
        iconSpan.textContent = "extension";
        iconSpan.style.fontVariationSettings = "'FILL' 0,'wght' 400,'GRAD' 0";
    }

    clone.onclick = openWindow;
    referenceNode.parentElement.insertBefore(clone, referenceNode.nextSibling);
}

function registerWithAviaMenu() {
    if (window.AviaMenu) {
        window.AviaMenu.register({ id: "avia_official_repo", name: "Plugins & Themes Repo", icon: "palette", onClick: openWindow });
    } else {
        const interval = setInterval(() => {
            if (window.AviaMenu) {
                clearInterval(interval);
                window.AviaMenu.register({ id: "avia_official_repo", name: "Plugins & Themes Repo", icon: "palette", onClick: openWindow });
            }
        }, 100);
    }
}

window.addEventListener("avia-plugin-list-changed", () => {
    if (document.getElementById("avia-official-repo-window")) {
        updateInstallStates();
    }
});

new MutationObserver(() => injectSettingsButton())
    .observe(document.body, { childList: true, subtree: true });

injectSettingsButton();
registerWithAviaMenu()

})();


/* --- ServerContextMenuFix.js --- */
if(window.__US_BUILDER_SERVERCONTEXTMENUFIX_JS__){return;}window.__US_BUILDER_SERVERCONTEXTMENUFIX_JS__=true;

(function () {
  if (window.__SERVER_CONTEXT_MENU_FIX__) return;
  window.__SERVER_CONTEXT_MENU_FIX__ = true;

  function serverContextMenuFix() {
    if(!document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll flex-g_1').item(0)) return;
    const time = 250
    let servers;
    for(const child of document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll flex-g_1').item(0).children){
      if(child.getAttribute('role')=='list'){
        servers = child;
      }
    }

    for(const server of servers.children){
      let timer;
      let long = false;

      function start() {
          timer = setTimeout(() => {
          long = true
          }, time);
      }

      function stop() {
          clearTimeout(timer);
          long = false
      }

      if(!server.dataset.patched){
        server.addEventListener('touchstart',()=>{
          start()
        })

        server.addEventListener('touchend',()=>{
          if(long){
            const balls = new Event('contextmenu',{
              bubbles:true,
              button:2
            })
            setTimeout(() => {
              server.children[0].children[0].dispatchEvent(balls)
            }, 100);
          }
          stop()
        });

        server.addEventListener('touchcancel',()=>{
            stop()
        })

        server.dataset.patched=true
      }
    }
  }

  const observer = new MutationObserver(() => {
    serverContextMenuFix();
  });

  function init() {
    serverContextMenuFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- ServerListScrollLock.js --- */
if(window.__US_BUILDER_SERVERLISTSCROLLLOCK_JS__){return;}window.__US_BUILDER_SERVERLISTSCROLLLOCK_JS__=true;

(function () {
  'use strict';

  let scrollLockEnabled = false;
  let overlay = null;
  let channellistoverlay = null;

  function createOverlay() {
    const serverList = document.querySelector('[aria-disabled][role="list"]');
    const channelList = document.querySelectorAll('[aria-disabled][role="list"]').item(1)
    const homebutton = document.querySelector(`a[href='/app']`)
    if (!serverList) return;

    const parent = serverList.parentElement;
    const rect   = serverList.getBoundingClientRect();

    overlay = document.createElement('div');
    overlay.id = 'revolt-scroll-lock-overlay';

    Object.assign(overlay.style, {
      position:       'absolute',
      top:            serverList.offsetTop + 'px',
      left:           serverList.offsetLeft + 'px',
      width:          serverList.offsetWidth + 'px',
      height:         serverList.offsetHeight + 'px',
      zIndex:         '9999',
      background:     'transparent',
      touchAction:    'pan-y',
      pointerEvents:  'all',
      cursor:         'default',
    });

    overlay.addEventListener('touchmove', (e) => {
      const scrollable = serverList.closest('.will-change_transform') || serverList.parentElement;
      if (scrollable) {
        scrollable.scrollTop += e.touches[0]?.clientY
          ? 0
          : 0; 
      }
    }, { passive: true });

    overlay.addEventListener('pointerdown', (e) => e.stopPropagation());
    overlay.addEventListener('mousedown',   (e) => e.stopPropagation());

    const computedPos = getComputedStyle(parent).position;
    if (computedPos === 'static') parent.style.position = 'relative';

    parent.appendChild(overlay);

    if(channelList){
      const channelListParent = channelList.parentElement
      channellistoverlay = document.createElement('div')
      channellistoverlay.id = 'revolt-scroll-lock-overlay2';

      Object.assign(channellistoverlay.style, {
        position:       'absolute',
        top:            channelList.offsetTop + 'px',
        left:           channelList.offsetLeft + 'px',
        width:          channelList.offsetWidth + 'px',
        height:         channelList.offsetHeight + 'px',
        zIndex:         '9999',
        background:     'transparent',
        touchAction:    'pan-y',
        pointerEvents:  'all',
        cursor:         'default',
      });

      channellistoverlay.addEventListener('touchmove', (e) => {
      const scrollable = channelList.closest('.will-change_transform') || channelList.parentElement;
      if (scrollable) {
        scrollable.scrollTop += e.touches[0]?.clientY
          ? 0
          : 0; 
      }
    }, { passive: true });

      channellistoverlay.addEventListener('pointerdown', (e) => e.stopPropagation());
      channellistoverlay.addEventListener('mousedown',   (e) => e.stopPropagation());

      const computedPos = getComputedStyle(parent).position;
      if (computedPos === 'static') parent.style.position = 'relative';

      channelListParent.appendChild(channellistoverlay);
    }

    if(homebutton){
      homebutton.removeAttribute('href')
    }
  }

  function removeOverlay() {
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
    if(channellistoverlay){
      channellistoverlay.remove();
      channellistoverlay = null;
    }

    const homebutton = document.querySelector(`a[aria-label*='pending']`)
    if(homebutton){
      homebutton.setAttribute('href','/app')
    }
  }

  function updateButtonIcon(button) {
    button.textContent = scrollLockEnabled ? '✓' : 'x';

    Object.assign(button.style, {
      color: scrollLockEnabled
        ? 'var(--md-sys-color-primary, #80cbc4)'
        : '',
        position:'inherit',
    });
  }

  function toggle(button) {
    scrollLockEnabled = !scrollLockEnabled;

    if (scrollLockEnabled) {
      createOverlay();
    } else {
      removeOverlay();
    }

    updateButtonIcon(button);
  }

  function inject() {
    const sidebar = document.getElementsByClassName('d_flex flex-d_column fill_var(--md-sys-color-on-surface)').item(0)
    if(!sidebar) return;
    const sidebarclone = sidebar.cloneNode()
    Object.assign(sidebarclone.style,{
      width:`${sidebar.clientWidth/2}px`
    })
    const button = sidebar.firstChild.firstChild
    const clone = button.cloneNode()
    Object.assign(clone.style,{
      width:`${button.clientWidth/2}px`,
      position:'fixed',
      left:`${sidebar.clientWidth*0.75}px`
    })
    button.dataset.scrollLockPatched = 'true';
    clone.removeAttribute('href')
    clone.style.cursor = 'pointer'
    clone.textContent= '✓'
    clone.id='serverlistscrolllock'
    clone.setAttribute('aria-label', 'Toggle server list scroll lock');
    updateButtonIcon(clone)

    clone.addEventListener('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      toggle(clone);
    });

    if(!document.getElementById('serverlistscrolllock')){
      sidebarclone.appendChild(clone)
      sidebar.parentElement.insertBefore(sidebarclone,sidebar.nextSibling)
    }

    window.addEventListener('resize', () => {
      if (scrollLockEnabled) {
        removeOverlay();
        createOverlay();
      }
    });
  }

  const observer = new MutationObserver(() => {
    const target = document.getElementsByClassName('d_flex flex-d_column fill_var(--md-sys-color-on-surface)').item(0).firstChild.firstChild
    if (target && !target.dataset.scrollLockPatched) {
      inject();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Also try immediately in case page already loaded
  inject();

})();


/* --- ShiftNewLine.js --- */
if(window.__US_BUILDER_SHIFTNEWLINE_JS__){return;}window.__US_BUILDER_SHIFTNEWLINE_JS__=true;

(function () {

  function hookEditor(editor) {
    if (editor.__shiftNewLineHooked) return;
    editor.__shiftNewLineHooked = true;

    editor.addEventListener("keydown", (e) => {

      if (e.key !== "Enter") return;

      if(e.shiftKey){
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        let text = ''
        const firstLine = document.getElementsByClassName('cm-line').item(0)
        for(const child of firstLine.parentElement.children){
          text = text+`${child.children[0].textContent}\n`
        }
        editor.textContent = text
      }

    }, true);

  }

  const observer = new MutationObserver(() => {
    const editor = document.querySelector(".cm-content[contenteditable='true']");
    if (editor) hookEditor(editor);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})();


/* --- ShrinkAviaPanels.js --- */
if(window.__US_BUILDER_SHRINKAVIAPANELS_JS__){return;}window.__US_BUILDER_SHRINKAVIAPANELS_JS__=true;

(function () {
    if (window.__SHRINK_AVIA_PANELS__) return;
    window.__SHRINK_AVIA_PANELS__ = true;

    function shrinkAviaPanels(){
        const aviaPanels = document.querySelectorAll('[style*="z-index: 999999"],[style*=\'z-index: 999998\']')
        const ids = ['avia-local-plugins-panel','avia-plugins-panel','avia-themes-panel','avia-official-repo-window','avia-local-editor-panel','avia-monaco-panel','avia-theme-editor','avia-quickcss-panel','avia-settings-reopen-btn']
        aviaPanels.forEach(panel=>{
            if(panel.id=='avia-settings-reopen-btn'||ids.includes(panel.id)) return;
            panel.style.right='0px'
            panel.style.bottom='12px'
            for(const child of panel.children){
                if(child.children){
                    for(const child2 of child.children){
                        if(child2.nextSibling?.placeholder?.toLowerCase().includes('url')&&!child.nextSibling?.style?.width&&panel.id!='avia-masq-panel'){
                            child2.style.width='90px'
                            child2.nextSibling.style.width=`${((window.outerWidth-72)/10)+30}px`
                        }
                    }
                }
            }

            const width = Number(panel.style.width.replaceAll('px',''))
            if(window.outerWidth<width+52&&!ids.includes(panel.id)){
                panel.style.width=`${window.outerWidth-52}px`
                panel.style.height=`${window.outerWidth-72}px`

            }
        })
    }
    
    const observer = new MutationObserver(()=>{
        shrinkAviaPanels()
    });
    observer.observe(document.documentElement, {childList: true, subtree: true })
})();


/* --- ShrinkEmojis.js --- */
if(window.__US_BUILDER_SHRINKEMOJIS_JS__){return;}window.__US_BUILDER_SHRINKEMOJIS_JS__=true;

(function () {
  if (window.__SHRINK_EMOJIS__) return;
  window.__SHRINK_EMOJIS__ = true;

  function apply() {
    const list = document.querySelectorAll('img[alt]')
    list.forEach(item=>{
      if(item.parentElement.parentElement.className!='fs_12px ov_hidden word-wrap_break-word'&&item.parentElement.parentElement.className&&item.parentElement.className.includes('--emoji-size-large')||(item.parentElement.className==='d_inline-block'&&item.parentElement.parentElement.className.includes('--emoji-size-large'))){
        item.style.setProperty('height','40px')
        item.style.setProperty('width','40px')
      }
    })
  }

  const observer = new MutationObserver(() => {
    apply();
  });

  function init() {
    apply();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- ShrinkGifPanel.js --- */
if(window.__US_BUILDER_SHRINKGIFPANEL_JS__){return;}window.__US_BUILDER_SHRINKGIFPANEL_JS__=true;

(function () {

  if (window.__SHRINK_GIF_PANEL__) return;
  window.__SHRINK_GIF_PANEL__ = true;

  function shrinkGifPanel() {
    if(document.getElementsByClassName('w_400px h_400px').item(0)){
        if(document.getElementsByClassName('w_400px h_400px').item(0).children[0].className=='w_100% h_100% us_none d_flex flex-d_column gap_var(--gap-md) ai_stretch ov_hidden p_var(--gap-md)_0 bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bx-sh_0_0_3px_var(--md-sys-color-shadow) bg_var(--md-sys-color-surface-container)'){
            const gifPanel = document.getElementsByClassName('w_400px h_400px').item(0)
            gifPanel.style.setProperty('position','fixed')
            gifPanel.style.removeProperty('left')
            gifPanel.style.removeProperty('top')
            gifPanel.style.setProperty('right','0px')
            gifPanel.style.setProperty('bottom','12px')

            if(window.outerWidth<466&&gifPanel.children[0].children[1].children[1].children[1]){
                gifPanel.style.setProperty('width',`${window.outerWidth-66}px`)
                gifPanel.style.setProperty('height',`${window.outerWidth-66}px`)
            }

            const searchbar = document.querySelector(`[placeholder='Search for GIFs...'],[placeholder='Search for emojis...']`)
            if(searchbar&&!searchbar.dataset.patched){
                searchbar.setAttribute('contenteditable',true)
                searchbar.addEventListener('click',()=>{
                    if(!searchbar.focused){
                        searchbar.focus()
                    }else{
                        searchbar.blur()
                    }
                });
                searchbar.dataset.patched=true
            }
        }
    }
  }

  shrinkGifPanel();

  const observer = new MutationObserver(() => shrinkGifPanel());
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();


/* --- ShrinkHomeButtons.js --- */
if(window.__US_BUILDER_SHRINKHOMEBUTTONS_JS__){return;}window.__US_BUILDER_SHRINKHOMEBUTTONS_JS__=true;

(function () {
  if (window.__SHRINK_HOME_BUTTONS__) return;
  window.__SHRINK_HOME_BUTTONS__ = true;

  function shrinkHomeButtons() {
    const homebuttons = document.getElementsByClassName('gap_8px p_8px d_flex bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface-variant) bg_var(--md-sys-color-surface-variant)')
    .item(0)
    if(!homebuttons||window.outerWidth>homebuttons.clientWidth) return;
    homebuttons.style.setProperty('width',`${window.outerWidth-100}px`)
    homebuttons.style.setProperty(`position`,'fixed')
    homebuttons.style.setProperty(`right`,`100px`)

    for(const child of homebuttons.children){
        for(const child2 of child.children){
            for(const child3 of child2.lastChild.children){
                child3.style.setProperty(`font-size`,`10px`)
            }
        }
    }
  }

  const observer = new MutationObserver(() => {
    shrinkHomeButtons();
  });

  function init() {
    shrinkHomeButtons();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- swipe-sidebar.js --- */
if(window.__US_BUILDER_SWIPE_SIDEBAR_JS__){return;}window.__US_BUILDER_SWIPE_SIDEBAR_JS__=true;

(function () {
  if (window.__SWIPE_SIDEBAR__) return;
  window.__SWIPE_SIDEBAR__ = true;

  const SWIPE_THRESHOLD = 80;   // minimum px to count as a swipe
  const EDGE_ZONE = 20;         // px from left edge to trigger open swipe

  let touchStartX = null;
  let touchStartY = null;
  let startSelection = null;
  let endSelection = null;

  function getSidebar() {
    const wrap = document.getElementsByClassName(
      'd_flex h_100% min-w_0 c_var(--md-sys-color-outline) bg_var(--md-sys-color-surface-container-high)'
    ).item(0);
    return wrap && wrap.firstChild && wrap.firstChild.children[1]
      ? wrap.firstChild
      : null;
  }

  function showSidebar(sidebar) {
    sidebar.style.display = 'flex';
  }

  function hideSidebar(sidebar) {
    sidebar.style.display = 'none';
  }

  function onTouchStart(e) {
    startSelection = document.getSelection().toString()
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }

  function onTouchEnd(e) {
    endSelection = document.getSelection().toString()
    if (touchStartX === null) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    if (Math.abs(dy) > Math.abs(dx)) {
      touchStartX = null;
      touchStartY = null;
      return;
    }

    const sidebar = getSidebar();
    const popout = document.getElementsByClassName('p_24px min-w_280px max-w_560px bdr_28px d_flex flex-d_column c_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-container-high)').item(0)
    const smallpopout = document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll c_var(--md-sys-color-on-surface) bg_var(--md-sys-color-surface-container-high) bx-sh_0_0_3px_var(--md-sys-color-shadow) w_340px h_400px bdr_var(--borderRadius-xl)').item(0)
    const aviaPanels = [...document.querySelectorAll('[style*="z-index: 999999"],[style*=\'z-index: 999998\']')].filter(e=>e.id!='avia-settings-reopen-btn'&&e.style?.display!='none')
    if (!sidebar) return;
    if(popout||smallpopout) return;
    if(startSelection!=endSelection) return;
    if (document.getElementById("avia-userscript-update-modal")) return;
    if(aviaPanels.length>0) return;
    
    if(e.target.tagName=='CODE') return;
    if(e.target.tagName=='IMG') return;
    if(e.target.className=='flex-sh_0 fw_500 fs_15px us_none cursor_pointer pos_relative d_flex ai_center m_0_var(--gap-md) p_0_var(--gap-md) bdr_var(--borderRadius-xl) c_var(--color) fill_var(--color) [&_>_svg]:as_center [&:hover_.hover-hide,_&:not(:hover)_.hover-show]:d_none h_42px gap_var(--gap-md) --color_var(--md-sys-color-on-surface) bg_transparent') return;
    if(e.target.className=='ov_hidden white-space_nowrap tov_ellipsis [&_*]:ov_hidden [&_*]:white-space_nowrap [&_*]:tov_ellipsis') return;

    if (dx > SWIPE_THRESHOLD) {

      if (touchStartX <= EDGE_ZONE || sidebar.style.display === 'none') {
        if(document.getElementsByClassName('will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg)').item(0)){
          const button = document.querySelector(`button[aria-label='View members']`)
          if(button){
            button.click()
          }
        }else{
          showSidebar(sidebar);
        }
      }
    } else if (dx < -SWIPE_THRESHOLD) {

      if(document.getElementsByClassName('will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg)').item(0)) return;
      if(sidebar.style.display!='none'){
        hideSidebar(sidebar);
      }else{
        const button = document.querySelector(`button[aria-label='View members']`)
        if(button){
          button.click()
        }
      } 
    }

    touchStartX = null;
    touchStartY = null;
  }

  document.addEventListener('touchstart', onTouchStart, { passive: true });
  document.addEventListener('touchend', onTouchEnd, { passive: true });
})();



/* --- themes.js --- */
if(window.__US_BUILDER_THEMES_JS__){return;}window.__US_BUILDER_THEMES_JS__=true;

(function () {

    if (window.__AVIA_THEMES__) return;
    window.__AVIA_THEMES__ = true;

    const STORAGE_KEY = "avia_themes";
    let editingThemeId = null;
    let monacoEditorInstance = null;

    const TEMPLATE = `/*
@name Whatever name here
@author Whatever Author Here
@version 1.0
@description Whatever description here
*/

`;

    const getThemes = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const setThemes = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    function preloadMonaco() {
        return new Promise(resolve => {
            if (window.monaco) return resolve();
            const loader = document.createElement("script");
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs" } });
                require(["vs/editor/editor.main"], () => resolve());
            };
            document.head.appendChild(loader);
        });
    }

    function parseMeta(css) {
        const name = css.match(/@name\s+(.+)/)?.[1] || "Unknown Theme";
        const author = css.match(/@author\s+(.+)/)?.[1] || "Unknown";
        const version = css.match(/@version\s+(.+)/)?.[1] || "1.0";
        const rawDescription = css.match(/@description\s+(.+)/)?.[1] || "No Description Available";
        const description = rawDescription.trim() === "*/" ? "No Description Available" : rawDescription;
        return { name, author, version, description };
    }

    function sanitizeFilename(name) {
        return name
            .replace(/[<>:"/\\|?*\x00-\x1f]/g, "")
            .replace(/\s+/g, "_")
            .replace(/\.+$/, "")
            .trim() || "theme";
    }

    function downloadTheme(theme) {
        const name = parseMeta(theme.css).name;
        const filename = sanitizeFilename(name) + ".css";
        const blob = new Blob([theme.css], { type: "text/css" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    function applyThemes() {
        document.querySelectorAll(".avia-theme-style").forEach(e => e.remove());
        getThemes().forEach(theme => {
            if (!theme.enabled) return;

            const importRegex = /@import\s+url\(["']?([^"')]+)["']?\)\s*;/g;
            let match;
            while ((match = importRegex.exec(theme.css)) !== null) {
                const url = match[1];
                fetch(url)
                    .then(r => r.text())
                    .then(css => {
                        const style = document.createElement("style");
                        style.className = "avia-theme-style";
                        style.textContent = css;
                        document.head.appendChild(style);
                    })
                    .catch(() => {});
            }

            const stripped = theme.css.replace(/@import\s+url\(["']?[^"')]+["']?\)\s*;/g, "").trim();
            if (stripped) {
                const style = document.createElement("style");
                style.className = "avia-theme-style";
                style.textContent = stripped;
                document.head.appendChild(style);
            }
        });
    }

    function styleBtn(btn, bg) {
        Object.assign(btn.style, {
            padding: "5px 12px",
            borderRadius: "8px",
            border: "none",
            background: bg || "rgba(255,255,255,0.08)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "12px",
            whiteSpace: "nowrap",
            fontWeight: "500"
        });
        btn.onmouseenter = () => btn.style.opacity = "0.75";
        btn.onmouseleave = () => btn.style.opacity = "1";
    }

    function makeDraggable(panel, handle) {
        let dragging = false, offsetX, offsetY;
        handle.addEventListener("mousedown", e => {
            dragging = true;
            offsetX = e.clientX - panel.offsetLeft;
            offsetY = e.clientY - panel.offsetTop;
            document.body.style.userSelect = "none";
        });
        document.addEventListener("mouseup", () => { dragging = false; document.body.style.userSelect = ""; });
        document.addEventListener("mousemove", e => {
            if (!dragging) return;
            panel.style.left = (e.clientX - offsetX) + "px";
            panel.style.top = (e.clientY - offsetY) + "px";
            panel.style.right = "auto";
            panel.style.bottom = "auto";
        });
    }

    async function openThemeEditor(themeId) {
        await preloadMonaco();

        editingThemeId = themeId;
        const themes = getThemes();
        const theme = themes.find(t => t.id === themeId);
        if (!theme) return;

        const meta = parseMeta(theme.css);
        let panel = document.getElementById("avia-theme-editor");

        if (panel) {
            panel.style.display = "flex";
            panel.querySelector("#avia-theme-editor-title").textContent = "Theme Editor — " + meta.name;
            if (monacoEditorInstance) {
                monacoEditorInstance._aviaThemeId = themeId;
                const model = monacoEditorInstance.getModel();
                if (model) model.setValue(theme.css || "");
            }
            return;
        }

        panel=document.createElement("div");
        panel.id="avia-theme-editor";
        if(window.outerWidth<472){
            Object.assign(panel.style,{
                position:"fixed",
                bottom:"12px",
                right:"0px",
                width:`${window.outerWidth-52}px`,
                height:`${window.outerWidth-72}px`,
                background:"var(--md-sys-color-surface,#1e1e1e)",
                color:"var(--md-sys-color-on-surface,#fff)",
                borderRadius:"16px",
                boxShadow:"0 8px 28px rgba(0,0,0,0.35)",
                zIndex:999999,
                display:"flex",
                flexDirection:"column",
                overflow:"hidden",
                border:"1px solid rgba(255,255,255,0.08)"
            });
        }else{
            Object.assign(panel.style,{
                position:"fixed",
                bottom:"24px",
                right:"24px",
                width:"420px",
                height:"340px",
                background:"var(--md-sys-color-surface,#1e1e1e)",
                color:"var(--md-sys-color-on-surface,#fff)",
                borderRadius:"16px",
                boxShadow:"0 8px 28px rgba(0,0,0,0.35)",
                zIndex:999999,
                display:"flex",
                flexDirection:"column",
                overflow:"hidden",
                border:"1px solid rgba(255,255,255,0.08)"
            });
        }

        const header = document.createElement("div");
        header.id = "avia-theme-editor-title";
        header.textContent = "Theme Editor — " + meta.name;
        Object.assign(header.style, {
            padding: "14px 16px",
            fontWeight: "600",
            fontSize: "14px",
            background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            cursor: "move",
            color: "#fff",
            flex: "0 0 auto"
        });
        makeDraggable(panel, header);

        const close = document.createElement("div");
        close.textContent = "✕";
        Object.assign(close.style, {
            position: "absolute",
            right: "16px",
            top: "12px",
            cursor: "pointer",
            opacity: "0.6",
            fontSize: "15px",
            lineHeight: "1",
            padding: "2px 4px",
            color: "#fff"
        });
        close.onmouseenter = () => close.style.opacity = "1";
        close.onmouseleave = () => close.style.opacity = "0.6";
        close.onclick = () => panel.style.display = "none";

        const editorContainer = document.createElement("div");
        editorContainer.style.flex = "1";

        const clearBtn = document.createElement('div');
        clearBtn.textContent = 'Clear';
        Object.assign(clearBtn.style,{
            position:'absolute',
            top:'12px',
            right:'86px',
            cursor:'pointer',
            color:'#fff'
        });

        const pasteBtn = document.createElement('div');
        pasteBtn.textContent = 'Paste';
        Object.assign(pasteBtn.style,{
            position:'absolute',
            top:'12px',
            right:'36px',
            cursor:'pointer',
            color:'#fff'
        });

        pasteBtn.addEventListener('click',async ()=>{
            navigator.clipboard.readText().then(text=>{
                const model = monacoEditorInstance.getModel();
                const value = model.getValue()
                model.setValue(value+`\n${text}`)
            })
        });

        clearBtn.addEventListener('click',async ()=>{
            const model = monacoEditorInstance.getModel();
            model.setValue('')
        });

        panel.appendChild(header);
        panel.appendChild(clearBtn)
        panel.appendChild(pasteBtn)
        panel.appendChild(close);
        panel.appendChild(editorContainer);
        document.body.appendChild(panel);

        monacoEditorInstance = monaco.editor.create(editorContainer, {
            value: theme.css || "",
            language: "css",
            theme: "vs-dark",
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 13,
            scrollBeyondLastLine: false,
            wordWrap: "on"
        });

        monacoEditorInstance._aviaThemeId = themeId;

        monacoEditorInstance.onDidChangeModelContent(() => {
            const id = monacoEditorInstance._aviaThemeId;
            if (!id) return;
            const value = monacoEditorInstance.getValue();
            const all = getThemes();
            const target = all.find(t => t.id === id);
            if (!target) return;
            target.css = value;
            setThemes(all);
            applyThemes();
            header.textContent = "Theme Editor — " + parseMeta(value).name;
            if (typeof window.__avia_refresh_themes_panel === "function") {
                window.__avia_refresh_themes_panel();
            }
        });
    }

    function toggleThemesPanel() {
        let panel = document.getElementById("avia-themes-panel");
        if (panel) {
            if (panel.style.display === "none") {
                panel.style.display = "flex";
                if (typeof window.__avia_refresh_themes_panel === "function") {
                    window.__avia_refresh_themes_panel();
                }
            } else {
                panel.style.display = "none";
            }
            return;
        }

        panel = document.createElement("div");
        panel.id = "avia-themes-panel";
        Object.assign(panel.style, {
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "500px",
            height: "460px",
            background: "var(--md-sys-color-surface, #1e1e1e)",
            color: "var(--md-sys-color-on-surface, #fff)",
            borderRadius: "16px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
            zIndex: "999999",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)"
        });

        const header = document.createElement("div");
        header.textContent = "Themes";
        Object.assign(header.style, {
            padding: "14px 16px",
            fontWeight: "600",
            fontSize: "14px",
            background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            cursor: "move"
        });
        makeDraggable(panel, header);

        const close = document.createElement("div");
        close.textContent = "✕";
        Object.assign(close.style, {
            position: "absolute",
            right: "16px",
            top: "12px",
            cursor: "pointer",
            opacity: "0.6",
            fontSize: "15px",
            lineHeight: "1",
            padding: "2px 4px"
        });
        close.onmouseenter = () => close.style.opacity = "1";
        close.onmouseleave = () => close.style.opacity = "0.6";
        close.onclick = () => panel.style.display = "none";

        const btnRow = document.createElement("div");
        Object.assign(btnRow.style, {
            display: "flex",
            gap: "8px",
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flex: "0 0 auto"
        });

        const importBtn = document.createElement("button");
        importBtn.textContent = "Import Theme";
        styleBtn(importBtn);
        importBtn.style.flex = "1";
        importBtn.style.padding = "8px 12px";

        const newBtn = document.createElement("button");
        newBtn.textContent = "+ New";
        styleBtn(newBtn);
        newBtn.style.flex = "1";
        newBtn.style.padding = "8px 12px";

        btnRow.appendChild(importBtn);
        btnRow.appendChild(newBtn);

        const list = document.createElement("div");
        Object.assign(list.style, {
            flex: "1",
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
        });

        const dropOverlay = document.createElement("div");
        dropOverlay.textContent = "Drop .css or .txt files here";
        Object.assign(dropOverlay.style, {
            position: "absolute",
            inset: "0",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            opacity: "0",
            pointerEvents: "none",
            transition: "opacity 0.15s ease",
            borderRadius: "16px"
        });

        panel.appendChild(header);
        panel.appendChild(close);
        panel.appendChild(btnRow);
        panel.appendChild(list);
        panel.appendChild(dropOverlay);
        document.body.appendChild(panel);

        let dragDepth = 0;

        panel.addEventListener("dragenter", e => {
            e.preventDefault();
            e.stopPropagation();
            dragDepth++;
            dropOverlay.style.opacity = "1";
            panel.style.border = "1px dashed rgba(255,255,255,0.4)";
        });

        panel.addEventListener("dragover", e => {
            e.preventDefault();
            e.stopPropagation();
        });

        panel.addEventListener("dragleave", e => {
            e.preventDefault();
            e.stopPropagation();
            dragDepth--;
            if (dragDepth <= 0) {
                dropOverlay.style.opacity = "0";
                panel.style.border = "1px solid rgba(255,255,255,0.08)";
                dragDepth = 0;
            }
        });

        panel.addEventListener("drop", async e => {
            e.preventDefault();
            e.stopPropagation();
            dropOverlay.style.opacity = "0";
            panel.style.border = "1px solid rgba(255,255,255,0.08)";
            dragDepth = 0;
            const files = [...e.dataTransfer.files].filter(f => f.name.endsWith(".css") || f.name.endsWith(".txt"));
            if (!files.length) return;
            const themes = getThemes();
            for (const file of files) {
                const css = await file.text();
                themes.push({ id: crypto.randomUUID(), css, enabled: true });
            }
            setThemes(themes);
            applyThemes();
            render();
        });

        function render() {
            list.innerHTML = "";
            const themes = getThemes();

            if (themes.length === 0) {
                const empty = document.createElement("div");
                empty.textContent = "No themes yet. Import or create one above.";
                Object.assign(empty.style, { opacity: "0.4", fontSize: "13px" });
                list.appendChild(empty);
                return;
            }

            themes.forEach(theme => {
                const meta = parseMeta(theme.css);

                const card = document.createElement("div");
                Object.assign(card.style, {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)"
                });

                const left = document.createElement("div");
                Object.assign(left.style, { display: "flex", alignItems: "center", gap: "10px" });

                const dot = document.createElement("div");
                Object.assign(dot.style, {
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    flexShrink: "0",
                    background: theme.enabled ? "#4dff88" : "#777",
                    boxShadow: theme.enabled ? "0 0 6px #4dff88" : "none"
                });

                const info = document.createElement("div");
                info.innerHTML = `<div style="font-weight:600;font-size:13px">${meta.name}</div><div style="font-size:11px;opacity:.5">${meta.author} • v${meta.version}</div><div style="font-size:11px;opacity:.4">${meta.description}</div>`;

                left.appendChild(dot);
                left.appendChild(info);

                const controls = document.createElement("div");
                Object.assign(controls.style, { display: "flex", gap: "6px" });

                const toggle = document.createElement("button");
                toggle.textContent = theme.enabled ? "Disable" : "Enable";
                styleBtn(toggle);
                toggle.onclick = () => {
                    theme.enabled = !theme.enabled;
                    setThemes(themes);
                    applyThemes();
                    render();
                };

                const edit = document.createElement("button");
                edit.textContent = "Edit";
                styleBtn(edit, "rgba(100,160,255,0.15)");
                edit.onclick = () => openThemeEditor(theme.id);

                const dlBtn = document.createElement("button");
                dlBtn.textContent = "Export";
                styleBtn(dlBtn, "rgba(80,200,120,0.15)");
                dlBtn.title = "Download theme as .css";
                dlBtn.onclick = e => {
                    e.stopPropagation();
                    downloadTheme(theme);
                };

                const del = document.createElement("button");
                del.textContent = "✕";
                styleBtn(del, "rgba(255,80,80,0.15)");
                del.onclick = () => {
                    const updated = themes.filter(t => t.id !== theme.id);
                    setThemes(updated);
                    applyThemes();
                    render();
                };

                controls.appendChild(toggle);
                controls.appendChild(edit);
                controls.appendChild(dlBtn);
                controls.appendChild(del);
                card.appendChild(left);
                card.appendChild(controls);
                list.appendChild(card);
            });
        }

        window.__avia_refresh_themes_panel = render;

        importBtn.onclick = () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".css,.txt";
            input.multiple = true;
            input.onchange = async () => {
                const files = [...input.files];
                if (!files.length) return;
                const themes = getThemes();
                for (const file of files) {
                    const css = await file.text();
                    themes.push({ id: crypto.randomUUID(), css, enabled: true });
                }
                setThemes(themes);
                applyThemes();
                render();
            };
            input.click();
        };

        newBtn.onclick = () => {
            const themes = getThemes();
            themes.push({ id: crypto.randomUUID(), css: TEMPLATE, enabled: true });
            setThemes(themes);
            applyThemes();
            render();
        };

        render();
    }

    function injectButton() {
        if (document.getElementById("avia-themes-btn")) return;
        const appearanceBtn = [...document.querySelectorAll("a")].find(a => a.textContent.trim() === "Appearance");
        const quickCSS = document.getElementById("stoat-fake-quickcss");
        if (!appearanceBtn || !quickCSS) return;
        const clone = appearanceBtn.cloneNode(true);
        clone.id = "avia-themes-btn";
        const text = [...clone.querySelectorAll("div")].find(d => d.children.length === 0);
        if (text) text.textContent = "(Avia) Themes";
        clone.onclick = toggleThemesPanel;
        quickCSS.parentElement.insertBefore(clone, quickCSS.nextSibling);
    }

    function registerWithAviaMenu() {
        if (window.AviaMenu) {
            window.AviaMenu.register({ id: "avia_themes", name: "Themes", icon: "palette", onClick: toggleThemesPanel });
        } else {
            const interval = setInterval(() => {
                if (window.AviaMenu) {
                    clearInterval(interval);
                    window.AviaMenu.register({ id: "avia_themes", name: "Themes", icon: "palette", onClick: toggleThemesPanel });
                }
            }, 100);
        }
    }

    new MutationObserver(injectButton).observe(document.body, { childList: true, subtree: true });
    injectButton();
    applyThemes();
    preloadMonaco();
    registerWithAviaMenu();

})();


/* --- UnsentMessageContextMenuFix.js --- */
if(window.__US_BUILDER_UNSENTMESSAGECONTEXTMENUFIX_JS__){return;}window.__US_BUILDER_UNSENTMESSAGECONTEXTMENUFIX_JS__=true;

(function () {
  if (window.__UNSENT_MESSAGE_CONTEXT_MENU_FIX__) return;
  window.__UNSENT_MESSAGE_CONTEXT_MENU_FIX__ = true;

  function unsentMessageContextMenuFix() {
    const messages = document.querySelectorAll(`[class='group pos_relative d_flex flex-d_column p_2px_0 bg_transparent bdr_var(--borderRadius-md) min-h_1em trs_background-color_var(--transitions-fast) [&_a:hover]:td_underline [&:hover_.Toolbar]:d_flex mt_var(--message-group-spacing)! [&:hover]:bg_var(--md-sys-color-surface-container) c_var(--md-sys-color-error)']`)
    for(const message of messages){
        const bar = document.createElement('div')
        bar.className='top_-18px right_16px pos_absolute ai_center d_none ov_hidden bdr_var(--borderRadius-xs) bx-sh_0_0_3px_var(--md-sys-color-shadow) fill_var(--md-sys-color-on-secondary-container) bg_var(--md-sys-color-secondary-container) Toolbar'
        const dots = document.createElement('div')
        dots.className='cursor_pointer pos_relative p_var(--gap-sm)'
        const ripple = document.createElement('md-ripple')
        ripple.ariaHidden = true
        const svg = document.createElement('svg')
        dots.appendChild(ripple)
        dots.appendChild(svg)
        svg.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path></svg>`
        bar.appendChild(dots)

        bar.onclick = function(){
            const rect = message.getBoundingClientRect();

            const contextMenuX = rect.left + rect.width / 2;
            const contextMenuY = rect.top + rect.height / 2;

            const contextMenuEvent = new MouseEvent('contextmenu', {
                bubbles: true,
                cancelable: true,
                clientX: contextMenuX,
                clientY: contextMenuY
            });
            setTimeout(() => {
                message.dispatchEvent(contextMenuEvent);
            }, 100);
        }

        if(!message.dataset.patched){
            message.appendChild(bar)
            message.dataset.patched=true
        }
    }
  }

  const observer = new MutationObserver(() => {
    unsentMessageContextMenuFix();
  });

  function init() {
    unsentMessageContextMenuFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- UpdateChecker.js --- */
if(window.__US_BUILDER_UPDATECHECKER_JS__){return;}window.__US_BUILDER_UPDATECHECKER_JS__=true;

(function() {
    if (window.__AVIA_USERSCRIPT_UPDATE_CHECKER__) return;
    window.__AVIA_USERSCRIPT_UPDATE_CHECKER__ = true;

    const SCRIPT_URL = "https://api.github.com/repos/0simp/AviaClientMobile/contents/Avia-Client-Mobile.user.js";
    const RELEASES_URL = "https://github.com/0simp/AviaClientMobile/raw/refs/heads/main/Avia-Client-Mobile.user.js";
    const STORAGE_KEY = "avia_userscript_update_checker_enabled";

    function isEnabled() {
        return localStorage.getItem(STORAGE_KEY) !== "false";
    }

    function setEnabled(val) {
        localStorage.setItem(STORAGE_KEY, val ? "true" : "false");
    }

        function getInstalledVersion() {
        try {
            return window.__USERSCRIPT_VERSION__ || null;
        } catch (_) {
            return null;
        }
    }

        async function fetchLatestVersion() {
        const res = await fetch(SCRIPT_URL, {
            headers: { "Accept": "application/vnd.github.v3.raw" }
        });
        const text = await res.text();
        const match = text.match(/@version\s+([^\s]+)/);
        return match ? match[1].trim() : null;
    }

    function showUpdateModal(installedVersion, latestVersion) {
        if (document.getElementById("avia-userscript-update-modal")) return;

        const backdrop = document.createElement("div");
        backdrop.id = "avia-userscript-update-modal";
        backdrop.className = "top_0 left_0 right_0 bottom_0 pos_fixed z_100 max-h_100% d_grid us_none place-items_center pointer-events_all anim-n_scrimFadeIn anim-dur_0.1s anim-fm_forwards trs_var(--transitions-medium)_all p_80px ov-y_auto";
        backdrop.style.cssText = "--background: rgba(0, 0, 0, 0.6); background: rgba(0, 0, 0, 0.6);";

        const motionWrap = document.createElement("div");
        motionWrap.style.cssText = "opacity: 1; --motion-translateY: 0px; transform: translateY(var(--motion-translateY));";

        const card = document.createElement("div");
        card.style.cssText = "min-width: 320px; max-width: 480px; padding: 24px; border-radius: 28px; display: flex; flex-direction: column; color: var(--md-sys-color-on-surface); background: var(--md-sys-color-surface-container-high);";

        const title = document.createElement("span");
        title.textContent = "Avia Client Mobile Update Available";
        title.style.cssText = "line-height: 2rem; font-size: 1.5rem; letter-spacing: 0; font-weight: 400; margin-bottom: 16px;";

        const body = document.createElement("div");
        body.style.cssText = "color: var(--md-sys-color-on-surface-variant); line-height: 1.25rem; font-size: 0.875rem; letter-spacing: 0.015625rem; font-weight: 400; display: flex; flex-direction: column; gap: 12px;";

        const currentRow = document.createElement("div");
        currentRow.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
        const currentLabel = document.createElement("span");
        currentLabel.textContent = "Your installed version";
        currentLabel.style.cssText = "font-size: 11px; opacity: 0.5; letter-spacing: 0.03em;";
        const currentVersionEl = document.createElement("span");
        currentVersionEl.textContent = installedVersion || "Unknown";
        currentVersionEl.style.cssText = "font-size: 14px; font-weight: 500; color: var(--md-sys-color-on-surface);";
        currentRow.appendChild(currentLabel);
        currentRow.appendChild(currentVersionEl);

        const latestRow = document.createElement("div");
        latestRow.style.cssText = "display: flex; flex-direction: column; gap: 2px;";
        const latestLabel = document.createElement("span");
        latestLabel.textContent = "Latest version";
        latestLabel.style.cssText = "font-size: 11px; opacity: 0.5; letter-spacing: 0.03em;";
        const latestVersionEl = document.createElement("span");
        latestVersionEl.textContent = latestVersion;
        latestVersionEl.style.cssText = "font-size: 14px; font-weight: 600; color: var(--md-sys-color-primary);";
        latestRow.appendChild(latestLabel);
        latestRow.appendChild(latestVersionEl);

        const message = document.createElement("span");
        message.textContent = `You are currently on version ${installedVersion || "Unknown"}. The latest version of Avia Client Mobile is ${latestVersion}.`;

        body.appendChild(currentRow);
        body.appendChild(latestRow);
        body.appendChild(message);

        const btnRow = document.createElement("div");
        btnRow.style.cssText = "gap: 8px; display: flex; justify-content: flex-end; margin-top: 24px;";

        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.style.cssText = "line-height: 1.25rem; font-size: 0.875rem; font-weight: 400; position: relative; padding: 0 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: inherit; cursor: pointer; border: none; transition: var(--transitions-medium) all; color: var(--md-sys-color-primary); height: 40px; border-radius: var(--borderRadius-full); background: none;";
        closeBtn.innerHTML = "<md-ripple aria-hidden='true'></md-ripple>Close";
        closeBtn.onclick = () => backdrop.remove();

        const updateBtn = document.createElement("button");
        updateBtn.type = "button";
        updateBtn.style.cssText = "line-height: 1.25rem; font-size: 0.875rem; font-weight: 400; position: relative; padding: 0 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: inherit; cursor: pointer; border: none; transition: var(--transitions-medium) all; color: var(--md-sys-color-on-primary); height: 40px; border-radius: var(--borderRadius-full); background: var(--md-sys-color-primary);";
        updateBtn.innerHTML = "<md-ripple aria-hidden='true'></md-ripple>Update Now";
        updateBtn.onclick = () => window.open(RELEASES_URL, "_blank");

        btnRow.appendChild(closeBtn);
        btnRow.appendChild(updateBtn);

        card.appendChild(title);
        card.appendChild(body);
        card.appendChild(btnRow);
        motionWrap.appendChild(card);
        backdrop.appendChild(motionWrap);
        document.body.appendChild(backdrop);
    }

    async function check() {
        if (!isEnabled()) return;
        const installedVersion = getInstalledVersion();
        const latestVersion = await fetchLatestVersion().catch(() => null);
        if (!latestVersion) return;
        if (installedVersion === latestVersion) return;
        showUpdateModal(installedVersion, latestVersion);
    }

    function applyToggleStyle(entry) {
        const desc = entry.querySelector("span.lh_1rem");
        const checkbox = entry.querySelector("mdui-checkbox");
        if (isEnabled()) {
            if (desc) desc.textContent = "Get notified when a new Avia Client Mobile version is available";
            if (checkbox) checkbox.setAttribute("checked", "");
        } else {
            if (desc) desc.textContent = "Get notified when a new Avia Client Mobile version is available";
            if (checkbox) checkbox.removeAttribute("checked");
        }
    }

    function tryInject() {
        if (document.querySelector("[data-userscript-update-entry]")) return;

        const target = [...document.querySelectorAll("a.pos_relative")]
            .find(a => a.innerText.includes("Plugins v2 Placeholder"));
        if (!target) return;

        const entry = target.cloneNode(true);
        entry.setAttribute("data-userscript-update-entry", "true");

        const iconWrap = entry.querySelector("div.w_36px.h_36px");
        if (iconWrap) {
            iconWrap.innerHTML = "";
            const icon = document.createElement("span");
            icon.className = "material-symbols-outlined";
            icon.style.cssText = "display:block;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0;font-size:20px;";
            icon.textContent = "system_update_alt";
            iconWrap.appendChild(icon);
        }

        const titleEl = entry.querySelector("div.d_flex.flex-g_1.flex-d_column > div");
        if (titleEl) titleEl.textContent = "Avia Client Mobile Update Checker";

        const descEl = entry.querySelector("span.lh_1rem");
        if (descEl) descEl.setAttribute("data-userscript-desc", "true");

        applyToggleStyle(entry);

        entry.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            setEnabled(!isEnabled());
            applyToggleStyle(entry);
        });

        target.parentNode.insertBefore(entry, target.nextSibling);
    }

    check();

    const observer = new MutationObserver(() => tryInject());
    observer.observe(document.body, { childList: true, subtree: true });
    tryInject();
})();


/* --- VideoThumbnailFix.js --- */
if(window.__US_BUILDER_VIDEOTHUMBNAILFIX_JS__){return;}window.__US_BUILDER_VIDEOTHUMBNAILFIX_JS__=true;

(function () {
  if (window.__VIDEO_THUMBNAIL_FIX__) return;
  window.__VIDEO_THUMBNAIL_FIX__ = true;

  function videoThumbnailFix() {
    document.querySelectorAll('video').forEach(element=>{
      element.addEventListener('play',()=>{
        element.dataset.played=true
      });
      if(!element.dataset.played&&!element.src.includes('#t=0.1')){
        element.src=element.src+`#t=0.1`
      }
    })
  }

  const observer = new MutationObserver(() => {
    videoThumbnailFix();
  });

  function init() {
    videoThumbnailFix();
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  if (document.body) {
    init();
  } else {
    requestAnimationFrame(init);
  }
})();


/* --- whatsnew.js --- */
if(window.__US_BUILDER_WHATSNEW_JS__){return;}window.__US_BUILDER_WHATSNEW_JS__=true;

(function () {

    if (window.__WHATS_NEW___) return;
    window.__WHATS_NEW__ = true;

    const version = window.__USERSCRIPT_VERSION__.replaceAll('.', '-');
    const BACKEND_URL = "https://raw.githubusercontent.com/0simp/AviaClientMobileWhatsnew/refs/heads/main/backend" + version + ".json";

    function injectStyles() {
        if (document.getElementById("avia-whatsnew-styles")) return;
        const style = document.createElement("style");
        style.id = "avia-whatsnew-styles";
        style.textContent = `
            #avia-whatsnew-scrim {
                position: fixed;
                inset: 0;
                z-index: 999999;
                background: rgba(0,0,0,0.6);
                display: grid;
                place-items: center;
                padding: 80px;
                overflow-y: auto;
                animation: aviaScrimIn 0.1s forwards;
            }
            @keyframes aviaScrimIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            #avia-whatsnew-modal {
                opacity: 1;
                padding: 24px;
                min-width: 280px;
                max-width: 560px;
                width: 100%;
                border-radius: 28px;
                display: flex;
                flex-direction: column;
                color: var(--md-sys-color-on-surface, #fff);
                background: var(--md-sys-color-surface-container-high, #2a2a2a);
                box-sizing: border-box;
            }
            #avia-whatsnew-modal * { box-sizing: border-box; }
            .avia-wn-title {
                line-height: 2rem;
                font-size: 1.5rem;
                letter-spacing: 0;
                font-weight: 400;
                margin-bottom: 16px;
            }
            .avia-wn-body {
                color: var(--md-sys-color-on-surface-variant, rgba(255,255,255,0.7));
                line-height: 1.25rem;
                font-size: 0.875rem;
                letter-spacing: 0.015625rem;
                font-weight: 400;
            }
            .avia-wn-body > * + * { margin-top: 0; }
            .avia-wn-date {
                display: block;
                margin-bottom: 12px;
                font-size: 0.875rem;
                color: var(--md-sys-color-on-surface-variant, rgba(255,255,255,0.5));
            }
            .avia-wn-h1 {
                font-size: 2em;
                font-weight: 600;
                margin: 0 0 4px 0;
                color: var(--md-sys-color-on-surface, #fff);
            }
            .avia-wn-h2 {
                font-size: 1.6em;
                font-weight: 600;
                margin: 0 0 4px 0;
                color: var(--md-sys-color-on-surface, #fff);
            }
            .avia-wn-h3 {
                font-size: 1.4em;
                font-weight: 600;
                margin: 0 0 4px 0;
                color: var(--md-sys-color-on-surface, #fff);
            }
            .avia-wn-p {
                margin: 0;
                line-height: 1.6;
            }
            .avia-wn-spacer { display: block; height: 0.75em; }
            .avia-wn-img {
                max-width: 100%;
                height: auto;
                border-radius: 12px;
                display: block;
            }
            .avia-wn-ul {
                padding-left: 1.5em;
                margin: 0;
                list-style-position: outside;
            }
            .avia-wn-ul li {
                list-style-type: disc;
                margin-bottom: 4px;
                line-height: 1.5;
            }
            .avia-wn-ol {
                padding-left: 1.5em;
                margin: 0;
                list-style-position: outside;
            }
            .avia-wn-ol li {
                list-style-type: decimal;
                margin-bottom: 4px;
                line-height: 1.5;
            }
            .avia-wn-hr {
                border: none;
                border-top: 1px solid rgba(255,255,255,0.1);
                margin: 4px 0;
            }
            .avia-wn-code {
                font-family: var(--fonts-monospace, monospace);
                font-size: 0.85em;
                background: #0d1117;
                color: #c9d1d9;
                padding: 1px 4px;
                border-radius: 4px;
            }
            .avia-wn-blockquote {
                border-left: 3px solid rgba(255,255,255,0.2);
                margin: 0;
                padding: 4px 12px;
                color: rgba(255,255,255,0.5);
                font-style: italic;
            }
            .avia-wn-bold { font-weight: bold; }
            .avia-wn-footer {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                margin-top: 24px;
            }
            .avia-wn-close-btn {
                line-height: 1.25rem;
                font-size: 0.875rem;
                letter-spacing: 0.015625rem;
                font-weight: 400;
                position: relative;
                padding: 0 16px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: inherit;
                cursor: pointer;
                border: none;
                transition: opacity 0.15s;
                color: var(--md-sys-color-primary, #90caf9);
                background: transparent;
                height: 40px;
                border-radius: 9999px;
            }
            .avia-wn-close-btn:hover { opacity: 0.75; }
        `;
        document.head.appendChild(style);
    }

    function renderBlock(block) {
        switch (block.type) {
            case "image": {
                const img = document.createElement("img");
                img.src = block.src;
                img.alt = block.alt || "";
                img.className = "avia-wn-img";
                img.loading = "lazy";
                return img;
            }
            case "spacer": {
                const s = document.createElement("span");
                s.className = "avia-wn-spacer";
                return s;
            }
            case "h1": {
                const el = document.createElement("h1");
                el.className = "avia-wn-h1";
                el.textContent = block.text || "";
                return el;
            }
            case "h2": {
                const el = document.createElement("h2");
                el.className = "avia-wn-h2";
                el.textContent = block.text || "";
                return el;
            }
            case "h3": {
                const el = document.createElement("h3");
                el.className = "avia-wn-h3";
                el.textContent = block.text || "";
                return el;
            }
            case "paragraph": {
                const el = document.createElement("p");
                el.className = "avia-wn-p";
                el.innerHTML = renderInline(block.text || "");
                return el;
            }
            case "ul": {
                const ul = document.createElement("ul");
                ul.className = "avia-wn-ul";
                (block.items || []).forEach(item => {
                    const li = document.createElement("li");
                    li.innerHTML = renderInline(item);
                    ul.appendChild(li);
                });
                return ul;
            }
            case "ol": {
                const ol = document.createElement("ol");
                ol.className = "avia-wn-ol";
                (block.items || []).forEach(item => {
                    const li = document.createElement("li");
                    li.innerHTML = renderInline(item);
                    ol.appendChild(li);
                });
                return ol;
            }
            case "hr": {
                const hr = document.createElement("hr");
                hr.className = "avia-wn-hr";
                return hr;
            }
            case "blockquote": {
                const bq = document.createElement("blockquote");
                bq.className = "avia-wn-blockquote";
                bq.innerHTML = renderInline(block.text || "");
                return bq;
            }
            default:
                return null;
        }
    }

    function renderInline(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\*\*(.+?)\*\*/g, '<strong class="avia-wn-bold">$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/`(.+?)`/g, '<code class="avia-wn-code">$1</code>')
            .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" style="color:inherit;text-decoration:underline;opacity:0.8;">$1</a>');
    }

    function openModal(entry) {
        if (document.getElementById("avia-whatsnew-scrim")) return;

        injectStyles();

        const scrim = document.createElement("div");
        scrim.id = "avia-whatsnew-scrim";
        scrim.onclick = (e) => { if (e.target === scrim) scrim.remove(); };

        const modal = document.createElement("div");
        modal.id = "avia-whatsnew-modal";

        const titleEl = document.createElement("span");
        titleEl.className = "avia-wn-title";
        titleEl.textContent = "What's new";
        modal.appendChild(titleEl);

        const body = document.createElement("div");
        body.className = "avia-wn-body";

        const inner = document.createElement("div");
        inner.style.cssText = "display:flex;flex-direction:column;gap:0;";

        if (entry.date) {
            const dateEl = document.createElement("span");
            dateEl.className = "avia-wn-date";
            dateEl.textContent = entry.date;
            inner.appendChild(dateEl);
        }

        (entry.content || []).forEach(block => {
            const el = renderBlock(block);
            if (el) inner.appendChild(el);
        });

        body.appendChild(inner);
        modal.appendChild(body);

        const footer = document.createElement("div");
        footer.className = "avia-wn-footer";

        const closeBtn = document.createElement("button");
        closeBtn.className = "avia-wn-close-btn";
        closeBtn.textContent = "Close";
        closeBtn.onclick = () => scrim.remove();

        footer.appendChild(closeBtn);
        modal.appendChild(footer);
        scrim.appendChild(modal);
        document.body.appendChild(scrim);
    }

    async function fetchAndOpen() {
        try {
            const res = await fetch(BACKEND_URL);
            const data = await res.json();
            const entries = data.entries || [];
            const latest = entries[0];
            if (latest) openModal(latest);
        } catch (e) {
            injectStyles();
            const scrim = document.createElement("div");
            scrim.id = "avia-whatsnew-scrim";
            scrim.onclick = (e) => { if (e.target === scrim) scrim.remove(); };
            const modal = document.createElement("div");
            modal.id = "avia-whatsnew-modal";
            modal.innerHTML = `<div style="opacity:0.5;text-align:center;padding:24px 0;font-size:13px;">Failed to load What's New.</div>`;
            const footer = document.createElement("div");
            footer.className = "avia-wn-footer";
            const closeBtn = document.createElement("button");
            closeBtn.className = "avia-wn-close-btn";
            closeBtn.textContent = "Close";
            closeBtn.onclick = () => scrim.remove();
            footer.appendChild(closeBtn);
            modal.appendChild(footer);
            scrim.appendChild(modal);
            document.body.appendChild(scrim);
        }
    }

    function injectButton() {
        if (document.getElementById("avia-whatsnew-btn")) return;

        const appearanceBtn = [...document.querySelectorAll("a")]
            .find(a => a.textContent.trim() === "Appearance");
        const referenceNode = document.getElementById("stoat-fake-quickcss");
        if (!appearanceBtn || !referenceNode) return;

        const btn = appearanceBtn.cloneNode(true);
        btn.id = "avia-whatsnew-btn";

        const label = [...btn.querySelectorAll("div")].find(d => d.children.length === 0);
        if (label) label.textContent = "(Avia) What's New";

        const iconSpan = btn.querySelector("span.material-symbols-outlined");
        if (iconSpan) iconSpan.remove();

        const oldSvg = btn.querySelector("svg");
        if (oldSvg) oldSvg.remove();

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("width", "20");
        svg.setAttribute("height", "20");
        svg.setAttribute("fill", "currentColor");
        svg.style.cssText = "margin-right:8px;flex-shrink:0;";

        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", "M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34");
        svg.appendChild(path);

        const firstChild = btn.firstChild;
        btn.insertBefore(svg, firstChild);

        btn.onclick = (e) => {
            e.preventDefault();
            fetchAndOpen();
        };

        referenceNode.parentElement.insertBefore(btn, referenceNode.nextSibling);
    }

    injectStyles();

    new MutationObserver(() => injectButton())
        .observe(document.body, { childList: true, subtree: true });

    injectButton();

})();


/* --- Embedded Themes --- */
const __BUILDER_THEMES__ = [
  {id:"CSS_CSS",name:"css.css",css:"/*Fixs Attachment files with text showing inside to only show half way*/\n.d_grid[style*=\"width: 420px\"]:has(pre code) {\n  width: 100% !important;\n  max-width: 100% !important;\n  height: auto !important;\n}\n\n/* Fix bio overflow, showing the full bio */\n#floating div.will-change_transform > div > div.ov_hidden:last-child {\n    aspect-ratio: unset;\n}\n\n/* Makes scrolling server and channel lists without accidentally reordering them possible */\n.scr-bar-w_none {\n    scrollbar-width: thin;\n    overflow-x:hidden;\n}\n\n/* Align Voice Call button to top right */\n[class=\"top_var(--gap-md) p_var(--gap-md) w_100% pos_absolute z_2 us_none d_flex ai_center flex-d_column\"] {\n    align-items: end;\n}\n\n/*Make Voice Call button smaller*/\n.pointer-events_all.max-w_100\\%.trs_var\\(--transitions-fast\\)_all.trs-tmf_ease-in-out.bdr_var\\(--borderRadius-lg\\).bg_var\\(--md-sys-color-secondary-container\\).w_360px.h_120px {\n\n  width: 240px !important;   /* was 360px */ /*Now 240*/\n  height: 80px !important;   /* was 120px */ /*Now 80*/\n\n  border-radius: 12px;\n}\n\n.pointer-events_all.max-w_100\\%.trs_var\\(--transitions-fast\\)_all.trs-tmf_ease-in-out.bdr_var\\(--borderRadius-lg\\).bg_var\\(--md-sys-color-secondary-container\\).w_360px.h_120px span {\n  \n  font-size: 0.85rem !important;\n  line-height: 1.1 !important;\n}\n\n.pointer-events_all.max-w_100\\%.trs_var\\(--transitions-fast\\)_all.trs-tmf_ease-in-out.bdr_var\\(--borderRadius-lg\\).bg_var\\(--md-sys-color-secondary-container\\).w_360px.h_120px .material-symbols-outlined {\n  \n  font-size: 18px !important;\n}\n/*Normal Version*/\n\n/* Shrink placeholder text */\n.cm-placeholder {\n    font-size: 10px !important;\n}\n\n/*Shrink text in chat bar */\n[class='cm-line']{\n    font-size : 10px;\n}\n\n/*Fixes join button on invites going off the screen */\n[class='lh_1.25rem fs_0.875rem ls_0.015625rem fw_500 pos_relative px_var(--padding-inline) flex-sh_0 d_flex ai_center jc_center ff_inherit cursor_not-allowed bd_none trs_var(--transitions-medium)_all c_var(--color) fill_var(--color) h_40px --padding-inline_16px bdr_48px bg_color-mix(in_srgb,_10%_var(--md-sys-color-on-surface),_transparent) --color_color-mix(in_srgb,_38%_var(--md-sys-color-on-surface),_transparent)'][type=button]{\n    position:relative;\n    left:-15%;\n    font-size:6.3px;\n}\n\n/*Shrink search bar placeholder text*/\n[class='h_40px w_240px px_16px bdr_var(--borderRadius-full) bg_var(--md-sys-color-surface-container-high)']{\n    font-size:10px;\n}\n\n/*Shrink channel names*/\n[class='white-space_nowrap [&_*]:white-space_nowrap lh_1.5rem fs_1rem ls_0.009375rem fw_550']{\n    font-size:10px;\n}\n[class='gap_10px flex_0_auto d_flex flex-sh_0 p_0_16px ai_center fw_600 us_none ov_hidden h_48px bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bg-s_cover! bg-p_center! [&_svg]:flex-sh_0 m_var(--gap-md)_var(--gap-md)_var(--gap-md)_0']{\n    font-size:10px;\n}\n\nimg[class='cursor_pointer']{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\na[href]{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\nvideo{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\npre[class='d_flex ov_auto scr-bar-w_thin flex-d_column']{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    user-select: none;\n}\n\n/* Remove Rounded Edges*/\nmain.bdr_var\\(--borderRadius-xl\\) {\n    border-radius: 0 !important;\n    margin: 0 !important;\n}\n\n/*Make The Status Card Not Clip When User Has Long Status*/\ndiv.asp_1\\/1:has(> span.us_text) {\n    aspect-ratio: auto !important;\n    height: fit-content !important;\n    overflow: visible !important;\n}\n\n[class='will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg)']{\n    overflow-y :auto;\n}\n[class='will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg) ov-y_scroll! ov-x_hidden!']{\n    overflow-y :auto;\n}\n",enabled:true},
];
;(function(){
  try{
    __BUILDER_THEMES__.forEach(t=>{
      const s=document.createElement('style');s.id='us-theme-'+t.id;s.textContent=t.css;
      if(t.enabled)document.head.appendChild(s);
    });
  }catch(e){}
})();

})();
