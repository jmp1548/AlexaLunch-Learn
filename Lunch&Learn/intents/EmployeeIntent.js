var employees = require('../employees');
module.exports = {
    execute: function (intent, session, response) {
        
        var speechOutput = "",
            repromptOutput;
        
        Object.keys(employees).forEach(function(keys) {
            speechOutput += keys + ", ";
        });
        
        repromptOutput = "Is there anything else I can help you with?";
        
        response.ask(speechOutput, repromptOutput);
    
    }
};
