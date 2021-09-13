let body = document.getElementsByTagName("body")[0]
let loadedEvent = new Event('js_scripts_loaded')

function AppendScriptTags() {
    // load the stylesheet
    let css = document.createElement("link")
    css.href = "https://cdn.jsdelivr.net/gh/BEN00262/whatsapp-embed-icon/lib/index.css"
    css.rel = "stylesheet"
    document.getElementsByTagName("head")[0].appendChild(css)

    // very inefficiently implemented :(
    css.addEventListener('load', function () {
        let zoezi_script_tag = document.currentScript

        let first_tag = document.createElement('script')
        first_tag.src = "https://unpkg.com/@popperjs/core@2"
        body.insertBefore(first_tag, zoezi_script_tag)

        first_tag.addEventListener('load', function() {
            let second_tag = document.createElement('script')
            second_tag.src = "https://unpkg.com/tippy.js@6";
            body.insertBefore(second_tag, zoezi_script_tag);

            second_tag.addEventListener('load', function() {
                document.dispatchEvent(loadedEvent)
            })
        })
    })
}

function DisplaySocialMediaIcon({contact, call_to_action, position = "right" }) {
    AppendScriptTags();

    document.addEventListener("js_scripts_loaded", function() {
        let img = document.createElement('img')
        img.src = "https://cdn.jsdelivr.net/gh/BEN00262/whatsapp-embed-icon/icons/wa.svg"
        img.alt = "whatsapp icon"
        img.className = "zoezi-whatsapp-social-media-icon"
        img.id = "social-media-icon-id"

        if (position && ["right", "left"].includes(position)) {
            img.style[position] = "23px";
        }

        img.addEventListener('click', function() {
            window.open(`https://wa.me/${contact}`, "_blank")
        })

    
        body.appendChild(img)

        tippy('#social-media-icon-id', {
            content: call_to_action,
            placement: "left",
            theme: 'light',
        });
    })
}