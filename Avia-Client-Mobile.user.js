// ==UserScript==
// @name        Avia Client Mobile
// @namespace   userscript.builder
// @version     1.4
// @description Avia Client Mobile by 0simp. Based on Avia Client 1.6 by AvaLilac
// @match       https://stoat.chat/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function(){
'@preserve - Built on 2026-04-26T19:43:20.842Z';

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
    const videos = document.querySelectorAll('video')
    const images = document.querySelectorAll('img[class=\'cursor_pointer\']')
    if(videos){
        videos.forEach(video=>{
            let timer;
            let long = false;

            function start() {
                timer = setTimeout(() => {
                long = true
                }, 500);
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
                }, 500);
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

function toggleFavoritesPanel() {

    let panel = document.getElementById("avia-favorites-panel");
    if (panel) {
        panel.style.display = panel.style.display === "none" ? "flex" : "none";
        return;
    }

    panel = document.createElement("div");
    panel.id = "avia-favorites-panel";

    if(window.outerWidth<692){
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
            width: "640px",
            height: "580px",
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
    header.textContent = "Favorites";
    Object.assign(header.style, {
        padding: "18px",
        fontWeight: "600",
        fontSize: "16px",
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        cursor: "move",
        position: "relative",
        userSelect: "none"
    });

    const close = document.createElement("div");
    close.textContent = "✕";
    Object.assign(close.style, {
        position: "absolute",
        right: "18px",
        top: "16px",
        cursor: "pointer"
    });
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
    if(window.outerWidth<692){
        Object.assign(urlInput.style, {
            flex: "2",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            width:`${((window.outerWidth-72)/10)+30}px`
        });
    }else{
        Object.assign(urlInput.style, {
            flex: "2",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
        });
    }

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Opt title";
    if(window.outerWidth<692){
        Object.assign(titleInput.style, {
            flex: "1",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            width:`${((window.outerWidth-72)/10)+40}px`
        });
    }else{
        Object.assign(titleInput.style, {
            flex: "1",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
        });
    }

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    Object.assign(addBtn.style, {
        padding: "10px 16px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer"
    });

    inputRow.appendChild(urlInput);
    inputRow.appendChild(titleInput);
    inputRow.appendChild(addBtn);

    const grid = document.createElement("div");
    Object.assign(grid.style, {
        flex: "1",
        minHeight: "0",
        overflowY: "auto",
        padding: "18px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 120px)",
        gap: "14px",
        alignContent: "start"
    });

    panel.appendChild(header);
    panel.appendChild(inputRow);
    panel.appendChild(grid);
    document.body.appendChild(panel);

    let isDragging = false, offsetX, offsetY;

    header.addEventListener("mousedown", e => {
        isDragging = true;
        offsetX = e.clientX - panel.offsetLeft;
        offsetY = e.clientY - panel.offsetTop;
    });

    document.addEventListener("mouseup", () => isDragging = false);

    document.addEventListener("mousemove", e => {
        if (!isDragging) return;
        panel.style.left = (e.clientX - offsetX) + "px";
        panel.style.top = (e.clientY - offsetY) + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
    });

    function showToast(card) {
        const toast = document.createElement("div");
        toast.textContent = "Copied to clipboard";
        Object.assign(toast.style, {
            position: "absolute",
            bottom: "6px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.85)",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "11px",
            opacity: "0",
            transition: "opacity 0.2s",
            pointerEvents: "none"
        });
        card.appendChild(toast);
        requestAnimationFrame(() => toast.style.opacity = "1");
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 200);
        }, 2000);
    }

    function fallbackCopy(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        try { document.execCommand("copy"); } catch {}
        document.body.removeChild(textarea);
    }

    function render() {

        grid.innerHTML = "";
        const favorites = getFavorites();

        favorites.forEach(item => {

            const card = document.createElement("div");
            Object.assign(card.style, {
                position: "relative",
                width: "120px",
                height: "120px",
                borderRadius: "14px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.05)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            });

            const remove = document.createElement("div");
            remove.textContent = "✕";
            Object.assign(remove.style, {
                position: "absolute",
                top: "6px",
                right: "8px",
                fontSize: "12px",
                cursor: "pointer",
                background: "rgba(0,0,0,0.6)",
                padding: "2px 6px",
                borderRadius: "6px",
                zIndex: 2
            });

            remove.onclick = (e) => {
                e.stopPropagation();
                setFavorites(favorites.filter(f => f.url !== item.url));
                render();
            };

            card.appendChild(remove);

            let mediaAdded = false;

            const ytID = extractYouTubeID(item.url);
            if (ytID) {
                const img = new Image();
                img.src = `https://img.youtube.com/vi/${ytID}/hqdefault.jpg`;
                Object.assign(img.style, { width:"100%", height:"100%", objectFit:"cover" });
                card.appendChild(img);
                mediaAdded = true;
            }

            if (!mediaAdded) {
                const ext = item.url.split(".").pop().split("?")[0].toLowerCase();
                const isVideo = ["mp4","webm","mov","gifv"].includes(ext);

                if (isVideo) {
                    const video = document.createElement("video");
                    video.src = item.url.replace(".gifv",".mp4");
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    video.playsInline = true;
                    Object.assign(video.style, { width:"100%", height:"100%", objectFit:"cover" });
                    video.onerror = fallback;
                    card.appendChild(video);
                } else {
                    const img = new Image();
                    img.src = item.url;
                    Object.assign(img.style, { width:"100%", height:"100%", objectFit:"cover" });
                    img.onerror = fallback;
                    card.appendChild(img);
                }
            }

            function fallback() {
                card.innerHTML = "";
                card.appendChild(remove);
                const text = document.createElement("div");
                text.textContent = item.title || item.url;
                Object.assign(text.style, {
                    padding:"8px",
                    fontSize:"11px",
                    textAlign:"center",
                    wordBreak:"break-word"
                });
                card.appendChild(text);
            }

            if (item.title) {
                const titleOverlay = document.createElement("div");
                titleOverlay.textContent = item.title;
                Object.assign(titleOverlay.style, {
                    position:"absolute",
                    bottom:"0",
                    width:"100%",
                    background:"rgba(0,0,0,0.6)",
                    fontSize:"11px",
                    padding:"4px",
                    textAlign:"center",
                    whiteSpace:"nowrap",
                    overflow:"hidden",
                    textOverflow:"ellipsis"
                });
                card.appendChild(titleOverlay);
            }

            card.onclick = () => {
                const doToast = () => showToast(card);
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(item.url)
                        .then(doToast)
                        .catch(() => {
                            fallbackCopy(item.url);
                            doToast();
                        });
                } else {
                    fallbackCopy(item.url);
                    doToast();
                }
            };

            grid.appendChild(card);
        });
    }

    addBtn.onclick = () => {
        const url = urlInput.value.trim();
        const title = titleInput.value.trim();
        if (!url) return;
        const favorites = getFavorites();
        if (favorites.some(f => f.url === url)) return;
        favorites.push({ url, title, addedAt: Date.now() });
        setFavorites(favorites);
        urlInput.value = "";
        titleInput.value = "";
        render();
    };

    render();
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

    wrapper.parentElement.insertBefore(clone, wrapper.nextSibling);
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
      title.textContent = title.textContent.replace('Stoat Lounge','ACM Server')
      button.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation()
        window.open(AVIA_INVITE,'_blank')
      },true)
    }
}

const observer = new MutationObserver(apply);
observer.observe(document.body,{childList:true,subtree:true});

apply();

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

    let channelList = document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll').item(1)
    if(!channelList) return;
    channelList = channelList.children[0]
    if(channelList.querySelector('a[href=\'/app\']')){
      for(const child of channelList.lastChild.children){
        let timer;
        let long = false;

        function start() {
          timer = setTimeout(() => {
            long = true
          }, 500);
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
          child.dataset.patched=true
        }
      }
    }else{
      for(const child of channelList.children){
        let timer;
        let long = false;

        function start() {
          timer = setTimeout(() => {
            long = true
          }, 500);
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
                  }, 500);
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

  function fuckwank(mutationsList, observer){
    mutationsList.forEach(mutation=>{
      if(mutation.type=='childList'){
        for(let node of mutation.addedNodes){
          if(node.className=='will-change_transform scr-bar-c_var(--md-sys-color-primary)_transparent ov-y_auto ov-x_hidden ov_hidden! scr-bar-g_stable flex-sh_0 w_var(--layout-width-channel-sidebar) bdr_var(--borderRadius-lg)'){
            node.style.width = `${node.clientWidth+node.previousSibling.clientWidth}px`
          }
        }
      }
    })
  }

  const fuckyshit = new MutationObserver(fuckwank)
  fuckyshit.observe(document.documentElement,{
    childList: true,
    subtree: true,
  })
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

    if(document.title!='Stoat (Avia Client Mobile 1.4)'){
        document.title='Stoat (Avia Client Mobile 1.4)'
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

    function toggleQuickCSSPanel() {
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

        const textarea = document.createElement('textarea');
        textarea.style.flex = '1';
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.padding = '16px';
        textarea.style.background = 'transparent';
        textarea.style.color = 'inherit';
        textarea.style.fontFamily = 'monospace';
        textarea.style.fontSize = '13px';
        textarea.style.lineHeight = '1.4';
        textarea.value = localStorage.getItem('avia_quickcss') || '';

        textarea.addEventListener('input', () => {
            localStorage.setItem('avia_quickcss', textarea.value);
            applyQuickCSS(textarea.value);
        });

        panel.appendChild(header);
        panel.appendChild(closeBtn);
        panel.appendChild(textarea);
        document.body.appendChild(panel);

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

    function showFontLoaderPopup() {
        removeExistingPopup();
        const popup = document.createElement('div');
        popup.id = 'avia-font-loader-popup';
        Object.assign(popup.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
            background: '#1e1e1e',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            zIndex: 999999,
            minWidth: '320px'
        });
        popup.innerHTML = `
            <div style="margin-bottom:8px;">Paste font URL (.ttf, .woff, etc.)</div>
            <input id="avia-font-url" type="text" style="width:100%; padding:6px; margin-bottom:8px; border-radius:6px; border:none; outline:none;"/>
            <div style="display:flex; justify-content:flex-end; gap:8px;">
                <button id="avia-font-apply" style="padding:6px 12px;">Apply</button>
                <button id="avia-font-cancel" style="padding:6px 12px;">Cancel</button>
            </div>
        `;
        document.body.appendChild(popup);
        document.getElementById('avia-font-apply').onclick = () => {
            const url = document.getElementById('avia-font-url').value;
            if (!url) return;
            localStorage.setItem('avia_custom_font_url', url);
            applyFont(url);
            alert("Font Applied.");
            popup.remove();
        };
        document.getElementById('avia-font-cancel').onclick = () => popup.remove();
    }

    function showRemoveFontPopup() {
        removeExistingPopup();
        const popup = document.createElement('div');
        popup.id = 'avia-remove-font-popup';
        Object.assign(popup.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '16px',
            background: '#1e1e1e',
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
            zIndex: 999999,
            minWidth: '280px',
            textAlign: 'center'
        });
        popup.innerHTML = `
            <div style="margin-bottom:12px;">Are you sure you want to remove the custom font?</div>
            <button id="avia-font-remove" style="padding:6px 12px;">Remove Font</button>
            <button id="avia-font-cancel" style="padding:6px 12px; margin-left:6px;">Cancel</button>
        `;
        document.body.appendChild(popup);
        document.getElementById('avia-font-remove').onclick = () => {
            removeFont();
            popup.remove();
        };
        document.getElementById('avia-font-cancel').onclick = () => popup.remove();
    }

    function removeExistingPopup() {
        const existing = document.getElementById('avia-font-loader-popup') || document.getElementById('avia-remove-font-popup');
        if (existing) existing.remove();
    }

    function applyFont(url) {
        const fontName = "CustomFont" + Date.now();
        let styleTag = document.getElementById('custom-font-style');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'custom-font-style';
            document.head.appendChild(styleTag);
        }
        let ext = url.split('.').pop().toLowerCase();
        let formatMap = {
            ttf: 'truetype',
            otf: 'opentype',
            woff: 'woff',
            woff2: 'woff2',
            eot: 'embedded-opentype',
            css: 'truetype'
        };
        let format = formatMap[ext] || '';
        styleTag.textContent = `
            @font-face {
                font-family: '${fontName}';
                src: url('${url}')${format ? " format('" + format + "')" : ""};
                font-weight: normal;
                font-style: normal;
            }
            body, body *:not(.material-symbols-outlined) {
                font-family: '${fontName}', sans-serif !important;
            }
        `;
    }

    function removeFont() {
        localStorage.removeItem('avia_custom_font_url');
        const styleTag = document.getElementById('custom-font-style');
        if (styleTag) styleTag.remove();
        alert("Reverted Font To Original Settings.");
    }

    (function applySavedFont() {
        const savedUrl = localStorage.getItem('avia_custom_font_url');
        if (savedUrl) applyFont(savedUrl);
    })();

    function injectButtons() {
        for(const el of document.getElementsByClassName('d_flex flex-d_column flex-g_initial m_0 ai_initial jc_initial')){
            if(el.firstChild?.firstChild?.textContent.includes('Version')){
                const element = document.createElement('span')
                if(!document.querySelector('span[data-avia-patched]')){
                    el.appendChild(element)
                    element.outerHTML = `
                    <span class="lh_1rem fs_0.75rem ls_0.03125rem fw_500" data-avia-patched="true">
                                Avia Client Mobile 1.4<br>
                                <span style="font-size:10px;opacity:0.7;">
                                    Based on Avia Client 1.6
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
                    newBtn.addEventListener('click', showFontLoaderPopup);

                    const stoatBtn = document.getElementById('stoat-fake-stoatserver');
                    targetParent.appendChild(newBtn);

                    if (!document.getElementById('stoat-fake-removefont')) {
                        const removeBtn = appearanceBtn.cloneNode(true);
                        removeBtn.id = 'stoat-fake-removefont';
                        const removeTextNode = Array.from(removeBtn.querySelectorAll('div')).find(d => d.children.length === 0);
                        if (removeTextNode) removeTextNode.textContent = "(Avia) Remove selected font";
                        setIcon(removeBtn, "refresh");
                        removeBtn.addEventListener('click', showRemoveFontPopup);
                        targetParent.appendChild(removeBtn);
                    }
                }

                if (!document.getElementById('stoat-fake-quickcss')) {
                    const quickCssBtn = appearanceBtn.cloneNode(true);
                    quickCssBtn.id = 'stoat-fake-quickcss';
                    const quickCssTextNode = Array.from(quickCssBtn.querySelectorAll('div')).find(d => d.children.length === 0);
                    if (quickCssTextNode) quickCssTextNode.textContent = "(Avia) QuickCSS";
                    setIcon(quickCssBtn, "code");
                    quickCssBtn.addEventListener('click', toggleQuickCSSPanel);

                    const lastBtn = document.getElementById('stoat-fake-removefont') ||
                                    document.getElementById('stoat-fake-loadfont') ||
                                    document.getElementById('stoat-fake-stoatserver') ||
                                    document.getElementById('stoat-fake-linktree');
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

    waitForBody(() => {
        const observer = new MutationObserver(() => injectButtons());
        observer.observe(document.body, { childList: true, subtree: true });
        injectButtons();
    });

})();



/* --- LocalPlugins.js --- */
if(window.__US_BUILDER_LOCALPLUGINS_JS__){return;}window.__US_BUILDER_LOCALPLUGINS_JS__=true;

(function () {

    if (window.__AVIA_LOCAL_PLUGINS_LOADED__) return;
    window.__AVIA_LOCAL_PLUGINS_LOADED__ = true;

    const STORAGE_KEY = "avia_local_plugins";

    const runningLocalPlugins = {};
    const localPluginErrors = {};

    const getLocalPlugins = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const setLocalPlugins = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    function preloadMonaco() {
        return new Promise(resolve => {
            if (window.monaco) return resolve();
            const loader = document.createElement("script");
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" } });
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
        if(window.outerWidth<746){
            Object.assign(panel.style, {
                position: "fixed",
                bottom: "24px",
                left: "24px",
                width: `${window.outerWidth-66}px`,
                height: `${window.outerWidth-130}px`,
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
                width: "680px",
                height: "460px",
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
                const value = monaco.editor.getEditors()[0].getValue()
                monaco.editor.getEditors()[0].setValue(value+'\n'+text)
            })
        });

        clearBtn.addEventListener('click',async ()=>{
            monaco.editor.getEditors()[0].setValue('')
        });

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
        panel.appendChild(clearBtn)
        panel.appendChild(pasteBtn)
        panel.appendChild(closeBtn);
        panel.appendChild(toolbar);
        panel.appendChild(editorContainer);
        document.body.appendChild(panel);

        const editor = monaco.editor.create(editorContainer, {
            value: plugin.code || "// Write your plugin code here\n",
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
            panel.style.display = panel.style.display === "none" ? "flex" : "none";
            return;
        }

        panel = document.createElement("div");
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
        header.textContent = "Local Plugins";
        Object.assign(header.style, {
            padding: "14px 16px",
            fontWeight: "600",
            fontSize: "14px",
            background: "var(--md-sys-color-surface-container, rgba(255,255,255,0.04))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            cursor: "move"
        });

        const closeBtn = document.createElement("div");
        closeBtn.textContent = "✕";
        Object.assign(closeBtn.style, {
            position: "absolute",
            top: "12px",
            right: "16px",
            cursor: "pointer",
            opacity: "0.7"
        });
        closeBtn.onclick = () => panel.style.display = "none";

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
                code: "// " + name + "\n",
                enabled: false
            };
            plugins.push(newPlugin);
            setLocalPlugins(plugins);
            nameInput.value = "";
            renderLocalPanel();
        };

        const importBtn = document.createElement("button");
        importBtn.textContent = "Import";
        styleLocalBtn(importBtn, "#2d6a4f");
        importBtn.onmouseenter = () => importBtn.style.opacity = "0.75";
        importBtn.onmouseleave = () => importBtn.style.opacity = "1";

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".js";
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
            renderLocalPanel();
        };

        controlsBar.appendChild(nameInput);
        controlsBar.appendChild(addBtn);
        controlsBar.appendChild(importBtn);
        controlsBar.appendChild(fileInput);

        const content = document.createElement("div");
        content.id = "avia-local-plugins-content";
        Object.assign(content.style, {
            flex: "1",
            overflow: "auto",
            padding: "16px"
        });

        panel.appendChild(header);
        panel.appendChild(closeBtn);
        panel.appendChild(controlsBar);
        panel.appendChild(content);
        document.body.appendChild(panel);

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
            renderLocalPanel();
        });

        let isDragging = false, offsetX, offsetY;
        header.addEventListener("mousedown", e => {
            isDragging = true;
            offsetX = e.clientX - panel.offsetLeft;
            offsetY = e.clientY - panel.offsetTop;
        });
        document.addEventListener("mouseup", () => isDragging = false);
        document.addEventListener("mousemove", e => {
            if (!isDragging) return;
            panel.style.left = (e.clientX - offsetX) + "px";
            panel.style.top = (e.clientY - offsetY) + "px";
            panel.style.right = "auto";
            panel.style.bottom = "auto";
        });

        renderLocalPanel();
    }

    function renderLocalPanel() {
        const content = document.getElementById("avia-local-plugins-content");
        if (!content) return;
        content.innerHTML = "";
        const plugins = getLocalPlugins();

        if (plugins.length === 0) {
            const empty = document.createElement("div");
            empty.textContent = "No local plugins yet. Add one above.";
            empty.style.opacity = "0.4";
            empty.style.fontSize = "13px";
            content.appendChild(empty);
            return;
        }

        plugins.forEach((plugin, index) => {
            const isRunning = !!runningLocalPlugins[plugin.id];
            const hasError = !!localPluginErrors[plugin.id];

            const row = document.createElement("div");
            Object.assign(row.style, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
                padding: "10px 12px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)"
            });
            if(window.outerWidth<508){
                row.style.width = `${window.outerWidth-52}px`
            }

            const left = document.createElement("div");
            Object.assign(left.style, { display: "flex", alignItems: "center", gap: "10px" });

            const statusDot = document.createElement("div");
            Object.assign(statusDot.style, { width: "10px", height: "10px", borderRadius: "50%", flexShrink: "0" });
            if (hasError) {
                statusDot.style.background = "#ff4d4d";
                statusDot.style.boxShadow = "0 0 6px #ff4d4d";
            } else if (isRunning) {
                statusDot.style.background = "#4dff88";
                statusDot.style.boxShadow = "0 0 6px #4dff88";
            } else {
                statusDot.style.background = "#777";
            }

            const name = document.createElement("div");
            name.textContent = plugin.name;
            name.style.fontSize = "13px";

            left.appendChild(statusDot);
            left.appendChild(name);

            const controls = document.createElement("div");
            Object.assign(controls.style, { display: "flex", gap: "6px" });

            const editBtn = document.createElement("button");
            editBtn.textContent = "✏ Edit";
            styleLocalBtn(editBtn, "rgba(100,140,255,0.2)");
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
                    renderLocalPanel();
                });
            };

            const toggleBtn = document.createElement("button");
            toggleBtn.textContent = plugin.enabled ? "Disable" : "Enable";
            styleLocalBtn(toggleBtn);
            toggleBtn.onclick = () => {
                const all = getLocalPlugins();
                const target = all.find(p => p.id === plugin.id);
                if (!target) return;
                target.enabled = !target.enabled;
                plugin.enabled = target.enabled;
                setLocalPlugins(all);
                if (target.enabled) runLocalPlugin(plugin);
                else stopLocalPlugin(plugin);
                renderLocalPanel();
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
                renderLocalPanel();
            };

            controls.appendChild(editBtn);
            controls.appendChild(toggleBtn);
            controls.appendChild(removeBtn);
            row.appendChild(left);
            row.appendChild(controls);
            content.appendChild(row);
        });
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



/* --- MobileCSSPlus.js --- */
if(window.__US_BUILDER_MOBILECSSPLUS_JS__){return;}window.__US_BUILDER_MOBILECSSPLUS_JS__=true;

(function(){

    if(window.__AVIA_MONACO_CLONE_MOBILE__)return;
    window.__AVIA_MONACO_CLONE_MOBILE__=true;

    const hideStyle=document.createElement("style");
    hideStyle.id="hide-stoat-quickcss";
    hideStyle.textContent=`
    #stoat-fake-quickcss{
    display:none!important;
    visibility:hidden!important;
    pointer-events:none!important;
    }
    `;
    document.head.appendChild(hideStyle);

    function preloadMonaco(){
        return new Promise(resolve=>{
        if(window.monaco)return resolve();
        const loader=document.createElement("script");
        loader.src="https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js";
        loader.onload=function(){
        require.config({
            paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs"}
        });
        require(["vs/editor/editor.main"],()=>resolve());
        };
        document.head.appendChild(loader);
        });
    }

    function setIcon(button){
        const oldSvg=button.querySelector("svg");
        if(oldSvg)oldSvg.remove();
        const pathData="M8.7 16.3L4.4 12l4.3-4.3 1.4 1.4L7.2 12l2.9 2.9-1.4 1.4zm6.6 0l-1.4-1.4L16.8 12l-2.9-2.9 1.4-1.4L19.6 12l-4.3 4.3z";
        const svgNS="http://www.w3.org/2000/svg";
        const svg=document.createElementNS(svgNS,"svg");
        svg.setAttribute("viewBox","0 0 24 24");
        svg.setAttribute("width","20");
        svg.setAttribute("height","20");
        svg.setAttribute("fill","currentColor");
        svg.style.marginRight="8px";
        const path=document.createElementNS(svgNS,"path");
        path.setAttribute("d",pathData);
        svg.appendChild(path);
        button.insertBefore(svg,button.firstChild);
    }

    async function openMonacoPanel(){
        await preloadMonaco();
        let panel=document.getElementById("avia-monaco-panel");
        if(panel){
            panel.style.display=panel.style.display==="none"?"flex":"none";
            return;
        }
        
        panel=document.createElement("div");
        panel.id="avia-monaco-panel";
        if(window.outerWidth<716){
            Object.assign(panel.style,{
                position:"fixed",
                bottom:"12px",
                right:"0px",
                width:`${window.outerWidth-66}px`,
                height:`${window.outerWidth-130}px`,
                background:"var(--md-sys-color-surface,#1e1e1e)",
                borderRadius:"16px",
                boxShadow:"0 8px 28px rgba(0,0,0,0.35)",
                zIndex:"999999",
                display:"flex",
                flexDirection:"column",
                overflow:"hidden",
                border:"1px solid rgba(255,255,255,0.08)",
                backdropFilter:"blur(12px)"
            });
        }else{
            Object.assign(panel.style,{
                position:"fixed",
                bottom:"12px",
                right:"0px",
                width:`650px`,
                height:`420px`,
                background:"var(--md-sys-color-surface,#1e1e1e)",
                borderRadius:"16px",
                boxShadow:"0 8px 28px rgba(0,0,0,0.35)",
                zIndex:"999999",
                display:"flex",
                flexDirection:"column",
                overflow:"hidden",
                border:"1px solid rgba(255,255,255,0.08)",
                backdropFilter:"blur(12px)"
            });
        }

        const header=document.createElement("div");
        header.textContent="Monaco QuickCSS";
        Object.assign(header.style,{
            padding:"14px 16px",
            fontWeight:"600",
            fontSize:"14px",
            letterSpacing:"0.3px",
            background:"var(--md-sys-color-surface-container,rgba(255,255,255,0.04))",
            borderBottom:"1px solid rgba(255,255,255,0.08)",
            cursor:"move",
            color:"#fff"
        });

        const closeBtn=document.createElement("div");
        closeBtn.textContent="✕";
        Object.assign(closeBtn.style,{
            position:"absolute",
            top:"12px",
            right:"16px",
            cursor:"pointer",
            opacity:"0.7",
            color:"#fff"
        });

        closeBtn.onmouseenter=()=>closeBtn.style.opacity="1";
        closeBtn.onmouseleave=()=>closeBtn.style.opacity="0.7";
        closeBtn.onclick=()=>panel.style.display="none";

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
                const value = monaco.editor.getEditors()[0].getValue()
                monaco.editor.getEditors()[0].setValue(value+'\n'+text)
            })
        });

        clearBtn.addEventListener('click',async ()=>{
            monaco.editor.getEditors()[0].setValue('')
        });

        panel.appendChild(header);
        panel.appendChild(clearBtn)
        panel.appendChild(pasteBtn)
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

        let isDragging=false,offsetX,offsetY;
        header.addEventListener("mousedown",e=>{
            isDragging=true;
            offsetX=e.clientX-panel.offsetLeft;
            offsetY=e.clientY-panel.offsetTop;
            document.body.style.userSelect="none";
        });

        document.addEventListener("mouseup",()=>{
            isDragging=false;
            document.body.style.userSelect="";
        });

        document.addEventListener("mousemove",e=>{
            if(!isDragging)return;
            panel.style.left=(e.clientX-offsetX)+"px";
            panel.style.top=(e.clientY-offsetY)+"px";
            panel.style.right="auto";
            panel.style.bottom="auto";
        });
        
    }

    function injectButton(){
        const appearanceBtn=Array.from(document.querySelectorAll("a"))
        .find(a=>a.textContent.trim()==="Appearance");
        if(!appearanceBtn)return;
        if(document.getElementById("stoat-monaco-quickcss"))return;
        const removeFontBtn=document.getElementById("stoat-fake-removefont");
        if(!removeFontBtn)return;
        const monacoBtn=appearanceBtn.cloneNode(true);
        monacoBtn.id="stoat-monaco-quickcss";
        const textNode=Array.from(monacoBtn.querySelectorAll("div"))
        .find(d=>d.children.length===0);
        if(textNode)textNode.textContent="(Avia) QuickCSS";
        setIcon(monacoBtn);
        monacoBtn.addEventListener("click",openMonacoPanel);
        removeFontBtn.parentElement.insertBefore(monacoBtn,removeFontBtn.nextSibling);
    }

    function waitForBody(callback){
        if(document.body)callback();
        else new MutationObserver((obs)=>{
            if(document.body){
                obs.disconnect();
                callback();
            }
        }).observe(document.documentElement,{childList:true});
    }

    waitForBody(()=>{
        const observer=new MutationObserver(()=>injectButton());
        observer.observe(document.body,{childList:true,subtree:true});
        injectButton();
    });

    preloadMonaco();

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
            .find(e=>e.textContent.includes('#'))

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
        if(!el.firstChild?.firstChild?.outerHTML?.includes('emoji-size')){
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
                if (m) {
                    return `https://raw.githubusercontent.com/${m[1]}/${m[2]}/${m[3]}/${m[4]}`;
                }
                return url;
            }

            if (u.hostname === "raw.githubusercontent.com") return url;

            if (u.hostname === "raw.codeberg.page") return url;

            if (u.hostname === "codeberg.org") {

                if (u.pathname.startsWith("/api/v1/repos/")) return url;

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
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" } });
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
            panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
            return;
        }
        panel = document.createElement('div');
        panel.id = 'avia-plugins-panel';
        if(window.outerWidth<572){
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
                width: '520px',
                height: '460px',
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
        header.textContent = 'Plugins';
        Object.assign(header.style, {
            padding: '14px 16px',
            fontWeight: '600',
            fontSize: '14px',
            background: 'var(--md-sys-color-surface-container, rgba(255,255,255,0.04))',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            cursor: 'move'
        });

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

        const controlsBar = document.createElement('div');
        Object.assign(controlsBar.style, {
            padding: '12px 16px',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            flex: '0 0 auto'
        });

        const content = document.createElement('div');
        content.id = 'avia-plugins-content';
        Object.assign(content.style, {
            flex: '1',
            overflow: 'auto',
            padding: '16px'
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
        panel.appendChild(header);
        panel.appendChild(closeBtn);
        panel.appendChild(controlsBar);
        panel.appendChild(content);
        document.body.appendChild(panel);
        enableDragOn(panel, header);
        renderPanel();
    }

    function renderPanel() {
        const content = document.getElementById('avia-plugins-content');
        if (!content) return;
        content.innerHTML = '';
        const plugins = getPlugins();
        const runningSnapshot = { ...runningPlugins };
        const errorSnapshot = { ...pluginErrors };

        if (plugins.length === 0) {
            const empty = document.createElement('div');
            empty.textContent = 'No plugins yet. Add one above.';
            Object.assign(empty.style, { opacity: '0.4', fontSize: '13px' });
            content.appendChild(empty);
            return;
        }

        plugins.forEach((plugin, index) => {
            const isRunning = !!runningSnapshot[plugin.url];
            const hasError = !!errorSnapshot[plugin.url];

            const row = document.createElement('div');
            Object.assign(row.style, {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)'
            });
            if(window.outerWidth<572){
                row.style.width=`${window.outerWidth-52}px`
            }

            const left = document.createElement('div');
            Object.assign(left.style, { display: 'flex', alignItems: 'center', gap: '10px' });

            const statusDot = document.createElement('div');
            Object.assign(statusDot.style, {
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                flexShrink: '0'
            });
            if (hasError) {
                statusDot.style.background = '#ff4d4d';
                statusDot.style.boxShadow = '0 0 6px #ff4d4d';
            } else if (isRunning) {
                statusDot.style.background = '#4dff88';
                statusDot.style.boxShadow = '0 0 6px #4dff88';
            } else {
                statusDot.style.background = '#777';
            }

            const name = document.createElement('div');
            name.textContent = plugin.name;
            name.style.fontSize = '13px';

            left.appendChild(statusDot);
            left.appendChild(name);

            const controls = document.createElement('div');
            Object.assign(controls.style, { display: 'flex', gap: '6px' });

            const toggle = document.createElement('button');
            toggle.textContent = plugin.enabled ? 'Disable' : 'Enable';
            styleBtn(toggle);
            toggle.onclick = () => {
                plugin.enabled = !plugin.enabled;
                setPlugins(plugins);
                if (plugin.enabled) queuePlugin(plugin);
                else stopPlugin(plugin);
                renderPanel();
            };

            const viewBtn = document.createElement('button');
            viewBtn.textContent = 'View';
            styleBtn(viewBtn, 'rgba(100,160,255,0.15)');
            viewBtn.onclick = () => openViewerPanel(plugin);

            const remove = document.createElement('button');
            remove.textContent = '✕';
            styleBtn(remove, 'rgba(255,80,80,0.15)');
            remove.onclick = () => {
                stopPlugin(plugin);
                plugins.splice(index, 1);
                setPlugins(plugins);
                renderPanel();
            };

            controls.appendChild(toggle);
            controls.appendChild(viewBtn);
            controls.appendChild(remove);
            row.appendChild(left);
            row.appendChild(controls);
            content.appendChild(row);
        });
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

    waitForBody(() => {
        const observer = new MutationObserver(() => injectButtons());
        observer.observe(document.body, { childList: true, subtree: true });
        injectButtons();
        preloadMonaco();
    });

    getPlugins().forEach(plugin => {
        if (plugin.enabled) queuePlugin(plugin);
    });

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
        const row = document.createElement("div");
        row.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;width:100%;min-width:0;";
        row.setAttribute("data-link", repoPlugin.link);

        const left = document.createElement("div");
        left.style.cssText = "display:flex;flex-direction:column;flex:1;min-width:0;";

        const title = document.createElement("div");
        title.textContent = `${repoPlugin.name} — ${repoPlugin.author || "Unknown"}`;
        title.style.cssText = "font-weight:500;word-break:break-word;";

        const desc = document.createElement("div");
        desc.textContent = repoPlugin.description || "";
        desc.style.cssText = "font-size:12px;opacity:0.7;word-break:break-word;";

        left.appendChild(title);
        left.appendChild(desc);

        const installBtn = document.createElement("button");
        installBtn.className = "install-btn";
        Object.assign(installBtn.style, {
            padding: "6px 10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            flexShrink: "0"
        });

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

        row.appendChild(left);
        row.appendChild(installBtn);
        repoContent.appendChild(row);
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

function buildThemeCSS(theme, rawCSS) {

    const header = `/* @name ${theme.name}\n   @author ${theme.author || "Unknown"}\n   @version 1.0\n   @description Installed from Trusted Themes Repo\n*/\n`;
    return header + rawCSS;
}

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
            .toLowerCase()
            .includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        repoContent.innerHTML = `<div style="opacity:0.5;text-align:center;margin-top:30px;">No themes found.</div>`;
        return;
    }

    filtered.forEach(theme => {
        const card = document.createElement("div");
        card.style.cssText = "margin-bottom:14px;background:rgba(255,255,255,0.04);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.07);";

        if (theme.preview) {
            const img = document.createElement("img");
            img.src = theme.preview;
            img.alt = theme.name;
            img.style.cssText = "width:100%;display:block;background:#111;object-fit:contain;";
            img.onerror = () => img.style.display = "none";
            card.appendChild(img);
        }

        const info = document.createElement("div");
        info.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:10px 12px;gap:8px;";

        const meta = document.createElement("div");
        meta.style.cssText = "display:flex;flex-direction:column;min-width:0;flex:1;";

        const name = document.createElement("div");
        name.textContent = theme.name;
        name.style.cssText = "font-weight:500;word-break:break-word;";

        const author = document.createElement("div");
        author.textContent = `by ${theme.author || "Unknown"}`;
        author.style.cssText = "font-size:12px;opacity:0.6;";

        meta.appendChild(name);
        meta.appendChild(author);

        const alreadyInstalled = getStoredThemes().some(t => {
            const match = t.css.match(/@name\s+(.+)/);
            return match && match[1].trim() === theme.name;
        });

        const dlBtn = document.createElement("button");
        dlBtn.textContent = alreadyInstalled ? "Installed" : "Install CSS";
        dlBtn.disabled = alreadyInstalled;
        Object.assign(dlBtn.style, {
            padding: "6px 10px",
            borderRadius: "8px",
            border: "none",
            cursor: alreadyInstalled ? "default" : "pointer",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
            flexShrink: "0",
            fontSize: "12px",
            whiteSpace: "nowrap"
        });
        dlBtn.onclick = () => installThemeCSS(theme, dlBtn);

        info.appendChild(meta);
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

    panel = document.createElement("div");
    panel.id = "avia-official-repo-window";
    if(window.outerWidth<486){
        const width = window.outerWidth-66
        Object.assign(panel.style, {
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: `${width}px`,
            height: `${width+100}px`,
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
            bottom: "40px",
            right: "40px",
            width: "420px",
            height: "520px",
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
    header.textContent = "Plugins & Themes Repo";
    Object.assign(header.style, {
        padding: "18px",
        fontWeight: "600",
        fontSize: "16px",
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        cursor: "move",
        position: "relative",
        textAlign: "center",
        userSelect: "none"
    });

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

    const close = document.createElement("div");
    close.textContent = "✕";
    Object.assign(close.style, { position: "absolute", right: "18px", top: "16px", cursor: "pointer" });
    close.onclick = () => panel.style.display = "none";
    header.appendChild(close);

    const tabs = document.createElement("div");
    tabs.style.cssText = "display:flex;gap:6px;padding:10px 12px 0;background:rgba(255,255,255,0.02);border-bottom:1px solid rgba(255,255,255,0.08);";

    const tabStyle = "padding:6px 16px;border-radius:8px 8px 0 0;border:none;cursor:pointer;font-size:13px;font-weight:500;transition:background 0.15s,color 0.15s;font-family:inherit;";

    const tabPluginsBtn = document.createElement("button");
    tabPluginsBtn.textContent = "Plugins";
    tabPluginsBtn.style.cssText = tabStyle;

    const tabThemesBtn = document.createElement("button");
    tabThemesBtn.textContent = "Themes";
    tabThemesBtn.style.cssText = tabStyle;

    tabPluginsBtn.onclick = () => switchTab("plugins", tabPluginsBtn, tabThemesBtn);
    tabThemesBtn.onclick = () => switchTab("themes", tabPluginsBtn, tabThemesBtn);

    tabs.appendChild(tabPluginsBtn);
    tabs.appendChild(tabThemesBtn);

    searchInput = document.createElement("input");
    searchInput.placeholder = "Search plugins, authors, or descriptions";
    Object.assign(searchInput.style, {
        margin: "12px",
        padding: "8px",
        borderRadius: "8px",
        border: "none",
        outline: "none",
        background: "rgba(255,255,255,0.06)",
        color: "#fff"
    });
    searchInput.addEventListener("input", () => {
        if (activeTab === "plugins") renderRepo({ plugins: currentRepoData }, searchInput.value);
        else renderThemes(searchInput.value);
    });

    repoContent = document.createElement("div");
    Object.assign(repoContent.style, {
        flex: "1",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "0 12px 12px"
    });

    const container = document.createElement("div");
    Object.assign(container.style, { flex: "1", display: "flex", flexDirection: "column", overflow: "hidden" });
    container.appendChild(searchInput);
    container.appendChild(repoContent);

    panel.appendChild(header);
    panel.appendChild(tabs);
    panel.appendChild(container);
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

window.addEventListener("avia-plugin-list-changed", () => {
    if (document.getElementById("avia-official-repo-window")) {
        updateInstallStates();
    }
});

new MutationObserver(() => injectSettingsButton())
    .observe(document.body, { childList: true, subtree: true });

injectSettingsButton();

})();


/* --- SelectMenuFix.js --- */
if(window.__US_BUILDER_SELECTMENUFIX_JS__){return;}window.__US_BUILDER_SELECTMENUFIX_JS__=true;

(function () {
  if (window.__SELECT_MENU_FIX__) return;
  window.__SELECT_MENU_FIX__ = true;

  const originalFetch = window.fetch.bind(window);

  window.fetch = async function (resource, config = {}) {
      try {
          const url = resource?.toString?.() || "";
          if(config.method=="PATCH"&&url.includes('/server')&&!url.includes('/role')&&config.body&&typeof config.body=='string'){
              const selectmenus = document.querySelectorAll('select')
              selectmenus.forEach(select=>{
                const text = select.previousSibling.textContent.toLowerCase()
                if(text.includes('user')){
                  const parsed = JSON.parse(config.body)
                  if(parsed){
                    if(select.value!='none'){
                      parsed.system_messages[`${text.replaceAll(' ','_')}`]=select.value
                    }else if(parsed.system_messages[`${text.replaceAll(' ','_')}`]){
                      delete parsed.system_messages[`${text.replaceAll(' ','_')}`]
                    }
                    config = { ...config, body: JSON.stringify(parsed) };
                  }
                }
              });
            }
        } catch (e) { console.log(e); }
          return originalFetch(resource, config)
    };

  function selectMenuFix() {
    if(!document.querySelector('path[d=\'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\']')) return;
    document.querySelectorAll('mdui-select').forEach(element=>{
      console.log(element.oninput)
        const select = document.createElement('select')
        if(element.id){
          select.id=element.id
        }
        for(const child of element.children){
          const option = document.createElement('option')
          option.value=child.value
          option.textContent = child.textContent
          select.appendChild(option)
        }

       element.parentElement.replaceChild(select,element)
       select.value = element.value
    })
  }

  const observer = new MutationObserver(() => {
    selectMenuFix();
  });

  function init() {
    selectMenuFix();
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


/* --- ServerContextMenuFix.js --- */
if(window.__US_BUILDER_SERVERCONTEXTMENUFIX_JS__){return;}window.__US_BUILDER_SERVERCONTEXTMENUFIX_JS__=true;

(function () {
  if (window.__SERVER_CONTEXT_MENU_FIX__) return;
  window.__SERVER_CONTEXT_MENU_FIX__ = true;

  function serverContextMenuFix() {
    if(!document.getElementsByClassName('will-change_transform scr-bar-w_none [&::-webkit-scrollbar]:d_none ov-y_scroll flex-g_1').item(0)) return;
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
          }, 500);
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
            if(window.outerWidth<466){
                gifPanel.style.setProperty('width',`${window.outerWidth-66}px`)
                gifPanel.style.setProperty('height',`${window.outerWidth-66}px`)
                for(const child of gifPanel.children[0].children[1].children[1].children[1].children[0].children){
                    if(child?.className=='d_flex ai_center px_var(--gap-md) w_calc(40px_*_10)!'){
                        const list = child?.style?.getPropertyValue('transform').substring(9).replaceAll('(','').replaceAll(')','').replaceAll('px','').split(', ')
                        if(list[0]!=0){
                            list[0]=0
                            child?.style?.setProperty('transform',`translate(${list.map(item=>`${item}px`).join(', ')})`)
                        }
                    }
                }
            }
            const searchbar = document.querySelector(`[placeholder='Search for GIFs...'],[placeholder='Search for emojis...']`)
            if(searchbar){
                searchbar.setAttribute('contenteditable',true)
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
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }

  function onTouchEnd(e) {
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
    if (!sidebar) return;

    if (dx > SWIPE_THRESHOLD) {

      if (touchStartX <= EDGE_ZONE || sidebar.style.display === 'none') {
        showSidebar(sidebar);
      }
    } else if (dx < -SWIPE_THRESHOLD) {

      hideSidebar(sidebar);
    }

    touchStartX = null;
    touchStartY = null;
  }

  document.addEventListener('touchstart', onTouchStart, { passive: true });
  document.addEventListener('touchend', onTouchEnd, { passive: true });
})();



/* --- themes.user.js --- */
if(window.__US_BUILDER_THEMES_USER_JS__){return;}window.__US_BUILDER_THEMES_USER_JS__=true;

// ==UserScript==
// @name         Avia Client themes
// @description  Adds theme support
// @author       AvaLilac
// @version      1.4
// @match        *://*.stoat.chat/*
// @grant        none
// @inject-into  content
// ==/UserScript==

(function () {

    if (window.__AVIA_THEMES_LOADED__) return;
    window.__AVIA_THEMES_LOADED__ = true;

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
            loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js";
            loader.onload = function () {
                require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs" } });
                require(["vs/editor/editor.main"], () => resolve());
            };
            document.head.appendChild(loader);
        });
    }

    function parseMeta(css){
        const name = css.match(/@name\s+(.+)/)?.[1] || "Unknown Theme";
        const author = css.match(/@author\s+(.+)/)?.[1] || "Unknown";
        const version = css.match(/@version\s+(.+)/)?.[1] || "1.0";
        const rawDescription = css.match(/@description\s+(.+)/)?.[1] || "No Description Available";
        const description = rawDescription.trim() === "*/" ? "No Description Available" : rawDescription;
        return {name,author,version,description};
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

    function applyThemes(){
        document.querySelectorAll(".avia-theme-style").forEach(e=>e.remove());
        const themes = getThemes();
        themes.forEach(theme=>{
            if(!theme.enabled) return;
            const style=document.createElement("style");
            style.className="avia-theme-style";
            style.textContent=theme.css;
            document.head.appendChild(style);
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

    function makeDraggable(panel, handle){
        let dragging=false,offsetX,offsetY;
        handle.addEventListener("mousedown",e=>{
            dragging=true;
            offsetX=e.clientX-panel.offsetLeft;
            offsetY=e.clientY-panel.offsetTop;
            document.body.style.userSelect="none";
        });
        document.addEventListener("mouseup",()=>{dragging=false;document.body.style.userSelect="";});
        document.addEventListener("mousemove",e=>{
            if(!dragging) return;
            panel.style.left=(e.clientX-offsetX)+"px";
            panel.style.top=(e.clientY-offsetY)+"px";
            panel.style.right="auto";
            panel.style.bottom="auto";
        });
    }

    async function openThemeEditor(themeId){
        await preloadMonaco()
        editingThemeId = themeId;
        const themes = getThemes();
        const theme = themes.find(t => t.id === themeId);
        if (!theme) return;

        const meta = parseMeta(theme.css);
        let panel = document.getElementById('avia-theme-editor');
        if(panel){
            panel.style.display="flex";
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
        const header=document.createElement("div");
        header.textContent="Theme Editor";
        Object.assign(header.style,{
            padding:"14px 16px",
            fontWeight:"600",
            fontSize:"14px",
            background:"var(--md-sys-color-surface-container,rgba(255,255,255,0.04))",
            borderBottom:"1px solid rgba(255,255,255,0.08)",
            cursor:"move"
        });
        makeDraggable(panel,header);
        const close=document.createElement("div");
        close.textContent="✕";
        Object.assign(close.style,{
            position:"absolute",
            right:"16px",
            top:"12px",
            cursor:"pointer",
            opacity:"0.6",
            fontSize:"15px",
            lineHeight:"1",
            padding:"2px 4px"
        });
        close.onmouseenter=()=>close.style.opacity="1";
        close.onmouseleave=()=>close.style.opacity="0.6";
        close.onclick=()=>panel.style.display="none";
        
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

    function toggleThemesPanel(){
        let panel=document.getElementById("avia-themes-panel");
        if(panel){
            panel.style.display = panel.style.display==="none"?"flex":"none";
            return;
        }
        panel=document.createElement("div");
        panel.id="avia-themes-panel";
        if(window.outerHeight<468){
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
                bottom:"12px",
                right:"0px",
                width:"416px",
                height:"368px",
                background:"#1e1e1e",
                color:"#fff",
                borderRadius:"16px",
                boxShadow:"0 12px 35px rgba(0,0,0,0.45)",
                zIndex:999999,
                display:"flex",
                flexDirection:"column",
                overflow:"hidden",
                border:"1px solid rgba(255,255,255,0.08)"
            });
        }

        const header=document.createElement("div");
        header.textContent="Themes";
        Object.assign(header.style,{
            padding:"14px 16px",
            fontWeight:"600",
            fontSize:"14px",
            background:"var(--md-sys-color-surface-container,rgba(255,255,255,0.04))",
            borderBottom:"1px solid rgba(255,255,255,0.08)",
            cursor:"move"
        });
        makeDraggable(panel,header);

        const close=document.createElement("div");
        close.textContent="✕";
        Object.assign(close.style,{
            position:"absolute",
            right:"16px",
            top:"12px",
            cursor:"pointer",
            opacity:"0.6",
            fontSize:"15px",
            lineHeight:"1",
            padding:"2px 4px"
        });
        close.onmouseenter=()=>close.style.opacity="1";
        close.onmouseleave=()=>close.style.opacity="0.6";
        close.onclick=()=>panel.style.display="none";

        const btnRow=document.createElement("div");
        Object.assign(btnRow.style,{
            display:"flex",
            gap:"8px",
            padding:"12px 16px",
            borderBottom:"1px solid rgba(255,255,255,0.08)",
            flex:"0 0 auto"
        });

        const importBtn=document.createElement("button");
        importBtn.textContent="Import Theme";
        styleBtn(importBtn);
        importBtn.style.flex="1";
        importBtn.style.padding="8px 12px";

        const newBtn=document.createElement("button");
        newBtn.textContent="+ New";
        styleBtn(newBtn);
        newBtn.style.flex="1";
        newBtn.style.padding="8px 12px";

        btnRow.appendChild(importBtn);
        btnRow.appendChild(newBtn);

        const list=document.createElement("div");
        Object.assign(list.style,{
            flex:"1",
            overflowY:"auto",
            padding:"16px",
            display:"flex",
            flexDirection:"column",
            gap:"8px"
        });

        panel.appendChild(header);
        panel.appendChild(close);
        panel.appendChild(btnRow);
        panel.appendChild(list);
        document.body.appendChild(panel);

        function render(){
            list.innerHTML="";
            const themes=getThemes();

            if(themes.length === 0){
                const empty=document.createElement("div");
                empty.textContent="No themes yet. Import or create one above.";
                Object.assign(empty.style,{opacity:"0.4",fontSize:"13px"});
                list.appendChild(empty);
                return;
            }

            themes.forEach(theme=>{
                const meta=parseMeta(theme.css);

                const card=document.createElement("div");
                Object.assign(card.style,{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:"10px 12px",
                    borderRadius:"10px",
                    background:"rgba(255,255,255,0.04)",
                    border:"1px solid rgba(255,255,255,0.06)",
                    marginBottom:"0"
                });

                const left=document.createElement("div");
                Object.assign(left.style,{display:"flex",alignItems:"center",gap:"10px"});

                const dot=document.createElement("div");
                Object.assign(dot.style,{
                    width:"10px",
                    height:"10px",
                    borderRadius:"50%",
                    flexShrink:"0",
                    background: theme.enabled ? "#4dff88" : "#777",
                    boxShadow: theme.enabled ? "0 0 6px #4dff88" : "none"
                });

                const info=document.createElement("div");
                info.innerHTML=`<div style="font-weight:600;font-size:13px">${meta.name}</div><div style="font-size:11px;opacity:.5">${meta.author} • v${meta.version}</div><div style="font-size:11px;opacity:.4">${meta.description}</div>`;

                left.appendChild(dot);
                left.appendChild(info);

                const controls=document.createElement("div");
                Object.assign(controls.style,{display:"flex",gap:"6px"});

                const toggle=document.createElement("button");
                toggle.textContent=theme.enabled?"Disable":"Enable";
                styleBtn(toggle);
                toggle.onclick=()=>{
                    theme.enabled=!theme.enabled;
                    setThemes(themes);
                    applyThemes();
                    render();
                };

                const edit=document.createElement("button");
                edit.textContent="Edit";
                styleBtn(edit, "rgba(100,160,255,0.15)");
                edit.onclick=()=>openThemeEditor(theme.id);

                const dlBtn = document.createElement("button");
                dlBtn.textContent = "Export";
                styleBtn(dlBtn, "rgba(80,200,120,0.15)");
                dlBtn.title = "Download theme as .css";
                dlBtn.onclick = e => {
                    e.stopPropagation();
                    downloadTheme(theme);
                };

                const del=document.createElement("button");
                del.textContent="✕";
                styleBtn(del, "rgba(255,80,80,0.15)");
                del.onclick=()=>{
                    const updated=themes.filter(t=>t.id!==theme.id);
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

        importBtn.onclick=()=>{
            const input=document.createElement("input");
            input.type="file";
            input.accept=".css,.txt";
            input.onchange=async()=>{
                const file=input.files[0];
                if(!file) return;
                const css=await file.text();
                const themes=getThemes();
                themes.push({id:crypto.randomUUID(),css,enabled:true});
                setThemes(themes);
                applyThemes();
                render();
            };
            input.click();
        };

        newBtn.onclick=()=>{
            const themes=getThemes();
            themes.push({id:crypto.randomUUID(),css:TEMPLATE,enabled:true});
            setThemes(themes);
            applyThemes();
            render();
        };

        render();
    }

    function injectButton(){
        if(document.getElementById("avia-themes-btn")) return;
        const appearanceBtn=[...document.querySelectorAll("a")].find(a=>a.textContent.trim()==="Appearance");
        const quickCSS=document.getElementById("stoat-fake-quickcss");
        if(!appearanceBtn || !quickCSS) return;
        const clone=appearanceBtn.cloneNode(true);
        clone.id="avia-themes-btn";
        const text=[...clone.querySelectorAll("div")].find(d=>d.children.length===0);
        if(text) text.textContent="(Avia) Themes";
        clone.onclick=toggleThemesPanel;
        quickCSS.parentElement.insertBefore(clone, quickCSS.nextSibling);
    }

    new MutationObserver(injectButton).observe(document.body,{childList:true,subtree:true});
    injectButton();
    applyThemes();

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


/* --- Whisper.js --- */
if(window.__US_BUILDER_WHISPER_JS__){return;}window.__US_BUILDER_WHISPER_JS__=true;

(function () {
    if (window.__WHISPER__) return;
    window.__WHISPER__ = true;

    const style = document.createElement("style");
    style.id = "whisper-hide";
    style.textContent = `
        [style*="position: fixed"] div.w_360px.h_120px {
            visibility: hidden !important;
            pointer-events: none !important;
            transition: none !important;
        }
    `;

    function isDM() {
        return window.location.pathname.startsWith("/channel/");
    }

    function applyCSS() {
        if (isDM()) {
            if (!document.getElementById("whisper-hide")) {
                document.head.appendChild(style);
            }
        } else {
            document.getElementById("whisper-hide")?.remove();
        }
    }

    function findVoiceCard() {
        return [...document.querySelectorAll("div.cursor_pointer")]
            .find(el => el.classList.contains("w_360px") && el.classList.contains("h_120px"));
    }

    function findVoiceInner() {
        return findVoiceCard()?.querySelector("div.pos_relative");
    }

    function findVoiceWrapper() {
        let el = findVoiceCard()?.parentElement;
        while (el) {
            if (el.style?.position === "fixed") return el;
            el = el.parentElement;
        }
        return null;
    }

    function findActiveCall() {
        return [...document.querySelectorAll("div.pointer-events_all")]
            .find(el => el.classList.contains("h_40vh") && el.classList.contains("w_100%"));
    }

    function findPinButton() {
        return document.querySelector('button[aria-label="View pinned messages"]');
    }

    function findInjectedBtn() {
        return document.querySelector("[data-avia-voice-btn]");
    }

    function showVoiceWrapper() {
        const wrapper = findVoiceWrapper();
        if (!wrapper) return;
        wrapper.style.transition = "none";
        wrapper.style.visibility = "visible";
        wrapper.style.pointerEvents = "none";
    }

    function restoreVoiceWrapper() {
        const wrapper = findVoiceWrapper();
        if (!wrapper) return;
        wrapper.style.transition = "";
        wrapper.style.visibility = "";
        wrapper.style.pointerEvents = "";
    }

    function removeInjectedBtn() {
        findInjectedBtn()?.remove();
    }

    // Tooltip
    let whisperTooltip = null;

    function getTooltip() {
        if (!whisperTooltip) {
            whisperTooltip = document.createElement("div");
            whisperTooltip.style.cssText = "position:fixed;z-index:999;display:none;pointer-events:none;";
            const inner = document.createElement("div");
            inner.className = "c_white bg_black p_var(--gap-md) bdr_var(--borderRadius-md) lh_0.875rem fs_0.6875rem ls_0.03125rem fw_500";
            inner.textContent = "Start voice call";
            whisperTooltip.appendChild(inner);
            document.body.appendChild(whisperTooltip);
        }
        return whisperTooltip;
    }

    function showTooltip(btn) {
        const t = getTooltip();
        t.style.display = "block";
        const rect = btn.getBoundingClientRect();
        // Position below the button, centered
        requestAnimationFrame(() => {
            const tw = t.getBoundingClientRect().width;
            const x = rect.left + (rect.width / 2) - (tw / 2);
            const y = rect.bottom + 6;
            t.style.left = x + "px";
            t.style.top  = y + "px";
        });
    }

    function hideTooltip() {
        getTooltip().style.display = "none";
    }

    function onRouteChange() {
        applyCSS();
        if (!isDM()) {
            removeInjectedBtn();
            restoreVoiceWrapper();
        }
    }

    const _pushState = history.pushState.bind(history);
    const _replaceState = history.replaceState.bind(history);

    history.pushState = function (...args) {
        _pushState(...args);
        onRouteChange();
    };

    history.replaceState = function (...args) {
        _replaceState(...args);
        onRouteChange();
    };

    window.addEventListener("popstate", onRouteChange);

    function injectVoiceButton() {
        if (!isDM()) {
            removeInjectedBtn();
            restoreVoiceWrapper();
            return;
        }

        const voiceCard = findVoiceCard();
        const pinBtn    = findPinButton();

        if (!voiceCard) {
            removeInjectedBtn();
            return;
        }

        if (!pinBtn) return;
        if (findInjectedBtn()) return;

        const btn = pinBtn.cloneNode(false);
        btn.setAttribute("data-avia-voice-btn", "true");
        btn.setAttribute("aria-label", "Start voice call");

        const ripple = document.createElement("md-ripple");
        ripple.setAttribute("aria-hidden", "true");
        btn.appendChild(ripple);

        const icon = document.createElement("span");
        icon.className = "material-symbols-outlined";
        icon.style.cssText = "display:block;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0;font-size:24px;";
        icon.textContent = "call";
        btn.appendChild(icon);

        btn.addEventListener("mouseenter", () => showTooltip(btn));
        btn.addEventListener("mouseleave", hideTooltip);

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            hideTooltip();

            if (findActiveCall()) return;

            const inner = findVoiceInner();
            if (!inner) return;

            showVoiceWrapper();

            const eventOpts = { bubbles: true, cancelable: true, view: window };
            inner.dispatchEvent(new PointerEvent("pointerenter", eventOpts));
            inner.dispatchEvent(new PointerEvent("pointerdown",  { ...eventOpts, pointerId: 1, isPrimary: true }));
            inner.dispatchEvent(new PointerEvent("pointerup",    { ...eventOpts, pointerId: 1, isPrimary: true }));
            inner.dispatchEvent(new MouseEvent("click",          eventOpts));

            setTimeout(() => {
                if (findActiveCall()) {
                    restoreVoiceWrapper();
                } else {
                    applyCSS();
                }
            }, 300);
        });

        pinBtn.insertAdjacentElement("afterend", btn);
    }

    function enforceHidden() {
        if (!isDM()) {
            restoreVoiceWrapper();
            return;
        }
        if (findActiveCall()) return;
        applyCSS();
    }

    const observer = new MutationObserver(() => {
        injectVoiceButton();
        enforceHidden();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    applyCSS();
    injectVoiceButton();
    enforceHidden();
})();


/* --- Embedded Themes --- */
const __BUILDER_THEMES__ = [
  {id:"CSS_CSS",name:"css.css",css:"/*Fixs Attachment files with text showing inside to only show half way*/\n.d_grid[style*=\"width: 420px\"]:has(pre code) {\n  width: 100% !important;\n  max-width: 100% !important;\n  height: auto !important;\n}\n\n/* Fix bio overflow, showing the full bio */\n#floating div.will-change_transform > div > div.ov_hidden:last-child {\n    aspect-ratio: unset;\n}\n\n/* Makes scrolling server and channel lists without accidentally reordering them possible */\n.scr-bar-w_none {\n    scrollbar-width: thin;\n    overflow-x:hidden;\n}\n\n/* Align Voice Call button to top right */\n[class=\"top_var(--gap-md) p_var(--gap-md) w_100% pos_absolute z_2 us_none d_flex ai_center flex-d_column\"] {\n    align-items: end;\n}\n\n/*Make Voice Call button smaller*/\n.pointer-events_all.max-w_100\\%.trs_var\\(--transitions-fast\\)_all.trs-tmf_ease-in-out.bdr_var\\(--borderRadius-lg\\).bg_var\\(--md-sys-color-secondary-container\\).w_360px.h_120px {\n\n  width: 240px !important;   /* was 360px */ /*Now 240*/\n  height: 80px !important;   /* was 120px */ /*Now 80*/\n\n  border-radius: 12px;\n}\n\n.pointer-events_all.max-w_100\\%.trs_var\\(--transitions-fast\\)_all.trs-tmf_ease-in-out.bdr_var\\(--borderRadius-lg\\).bg_var\\(--md-sys-color-secondary-container\\).w_360px.h_120px span {\n  \n  font-size: 0.85rem !important;\n  line-height: 1.1 !important;\n}\n\n.pointer-events_all.max-w_100\\%.trs_var\\(--transitions-fast\\)_all.trs-tmf_ease-in-out.bdr_var\\(--borderRadius-lg\\).bg_var\\(--md-sys-color-secondary-container\\).w_360px.h_120px .material-symbols-outlined {\n  \n  font-size: 18px !important;\n}\n/*Normal Version*/\n\n/* Shrink placeholder text */\n.cm-placeholder {\n    font-size: 10px !important;\n}\n\n/*Shrink text in chat bar */\n[class='cm-line']{\n    font-size : 10px;\n}\n\n/*Fixes join button on invites going off the screen */\n[class='lh_1.25rem fs_0.875rem ls_0.015625rem fw_500 pos_relative px_var(--padding-inline) flex-sh_0 d_flex ai_center jc_center ff_inherit cursor_not-allowed bd_none trs_var(--transitions-medium)_all c_var(--color) fill_var(--color) h_40px --padding-inline_16px bdr_48px bg_color-mix(in_srgb,_10%_var(--md-sys-color-on-surface),_transparent) --color_color-mix(in_srgb,_38%_var(--md-sys-color-on-surface),_transparent)'][type=button]{\n    position:relative;\n    left:-15%;\n    font-size:6.3px;\n}\n\n/*Shrink search bar placeholder text*/\n[class='h_40px w_240px px_16px bdr_var(--borderRadius-full) bg_var(--md-sys-color-surface-container-high)']{\n    font-size:10px;\n}\n\n/*Shrink channel names*/\n[class='white-space_nowrap [&_*]:white-space_nowrap lh_1.5rem fs_1rem ls_0.009375rem fw_550']{\n    font-size:10px;\n}\n[class='gap_10px flex_0_auto d_flex flex-sh_0 p_0_16px ai_center fw_600 us_none ov_hidden h_48px bdr_var(--borderRadius-lg) c_var(--md-sys-color-on-surface) fill_var(--md-sys-color-on-surface) bg-s_cover! bg-p_center! [&_svg]:flex-sh_0 m_var(--gap-md)_var(--gap-md)_var(--gap-md)_0']{\n    font-size:10px;\n}\n\nimg[class='cursor_pointer']{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n}\n\na[href]{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n}",enabled:true},
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
