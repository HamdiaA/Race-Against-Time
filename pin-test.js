//CODE WAS TAKEN FROM :
// https://www.youtube.com/watch?v=wWh8hwgeAMw&t=113s&ab_channel=dcode 

//PASS IN container,login input, max number for pin, redirection page 
class PinLogin {
    constructor ({el, loginEndpoint, redirectTo, maxNumbers = Infinity}) {
        this.el = {
            main: el, //container for pin login 
            numPad: el.querySelector(".pin-login__numpad"), //pin numpad
            textDisplay: el.querySelector(".pin-login__text") //text display
        };

        //INSTANCE VARIABLES
        this.loginEndpoint = loginEndpoint;
        this.redirectTo = redirectTo;
        this.maxNumbers = maxNumbers;
        this.value = ""; //current value sent to login PHP script, change as users input their numbers
        
        //DEFINE PRIVATE METHOD
        this._generatePad();
    }

    //GENERATES KEYS FOR KEYPAD
    _generatePad() {
        //LAYOUT TO KEYS
        const padLayout = [
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9",
            "del", "0", "="
        ];
    
        //FOR each key figure out if we need line break
        padLayout.forEach(key => {
            const insertBreak = key.search(/[369]/) !== -1; 
            //if this key is 3,6,9 then return -1 if cant be found
            const keyEl = document.createElement("div"); //element for the key

            keyEl.classList.add("pin-login__key");
            keyEl.textContent = key;
            //when click pass in the key
            keyEl.addEventListener("click", () => { this._handleKeyPress(key) });
            //add key to numpad
            this.el.numPad.appendChild(keyEl);

            //if insert line break append it
            if (insertBreak) {
                this.el.numPad.appendChild(document.createElement("br"));
            }
        });
    }
    ////take in the key
    _handleKeyPress(key) {
        switch (key) {
            case "del": //if its delete button
            //remove last character from current value from the pin login (backspace)
                this.value = this.value.substring(0, this.value.length - 1);
                break;
            case "=": //if press = 
                //handle login
                this._attemptLogin();
                break;
            //actual number
            default:
                //if we havent reached max pin numbers and its a number key
                if (this.value.length < this.maxNumbers && !isNaN(key)) {
                    this.value += key; //add the number
                }
                break;
        }
        //update the text box with the correct amount of dots in the input box
        this._updateValueText();
    }

    _updateValueText() {
        //Hides value from being seen (if use inspect element)
        this.el.textDisplay.value = "_".repeat(this.value.length);
        //remove the red error validation, when cahgne actual pin code after response comes back
        this.el.textDisplay.classList.remove("pin-login__text--error");
    }

    //FIRE request to PHP file
    _attemptLogin() {
        //if theres value inside
        if (this.value.length > 0) {
            //Request 
            fetch(this.loginEndpoint, {
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                //body needs to match up with the content type
                body: `pincode=${this.value}`
                //when responses come back, grab it
            }).then(response => {
                //if login successful
                if (response.status === 200) {
                    window.location.href = this.redirectTo; //redirect to file
                //if unsuccesful
                //display animation and red background
                } else {
                    this.el.textDisplay.classList.add("pin-login__text--error"); 
                }
            })
        }
    }
}

