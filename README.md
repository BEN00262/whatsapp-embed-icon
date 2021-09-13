#### <u>SIMPLE EMBEDDABLE WHATSAPP ICON</u>
used on the browser only

![](images/result.png)

##### Usage
> copy the code below and change only the relevant info ( contact, call_to_action, position )

```html
    <script>
        (function (){
            let script = document.createElement('script')
            script.type = "text/javascript";
            script.src = "https://github.com/BEN00262/whatsapp-embed-icon/lib/index.js";

            script.addEventListener('load', function () {
                DisplaySocialMediaIcon({
                    contact:  "phone number without the leading +",
                    call_to_action: "Welcom, how can we help you? ", // replace with your message
                    position: "right" // "right | left"
                })
            })

            document.currentScript.parentNode.insertBefore(script, document.currentScript)
        })();
    </script>
```