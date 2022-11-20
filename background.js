chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        return { redirectUrl: details.url.replace(/(?<=intr\/).+/, '') };
    },
    {
        urls: [
            "*://*.omnivox.ca/intr/Module/Profil/ExpirationMotPasse.aspx*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);