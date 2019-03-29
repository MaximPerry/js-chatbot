Bots.push({
    "name": "frank2",
    "precatch": function(text) {
        return text;
    },
    "actions": [
        {
            "catch": ["^hello^"],
            "response": "^hello^"
        },
        {
            "catch": ["*hellow*"],
            "response": [ 
                {
                    "text": "I think it is written like 'hello'?",
                    "actions": [
                        {
                            "catch": ["^yes^"],
                            "response": "No biggie! Howdy to you ;-)"
                        }
                    ]
                }
            ]
        },
        {
            "catch": ["^how are you^"],
            //"response": [] "I'm not exactly the kind to have feelings. But thanks for asking :-D! How about you?"
        }, {
            "catch": ["^I'm good^"],
            "response": "My name is Frank II. What's yours?"
        }, 
        {
            "catch": ["*do the dishes*"],
            "response": "You wish."
        }
    ],
    "postcatch": function(text) {
        return text;
    },
    
    "functions": {},
    "synonyms": [
        ["hello", "hi", "yo", "morning", "good morning", "good afternoon", "good evening", "*hey*"],
        ["how are you", "how do you do"],
        ["I'm good", "good", "I'm okay", "okay", "I'm alright", "alright", "*fine*", "*great*"],
        ["yes", "*yes*", "*indeed*", "*in fact*"]
    ],
    "variables": {}
});