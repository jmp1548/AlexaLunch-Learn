var employees = require('../employees');
module.exports = {
    execute: function (intent, session, response) {
        
        var employee = intent.slots.Name,
            employeeName;
        
        if (employee.value){
            employeeName = employee.value.toLowerCase();
        }

        var employee = employees[employeeName],
            speechOutput,
            repromptOutput;
        
        if (employee) {
            speechOutput = employeeName + " is a" + employee;
            repromptOutput = "Are there any other employees you would like to ask me about?";
            response.ask(speechOutput);
            
        } else {            
            speechOutput = "I'm sorry, I do not know anyone by the name " + employeeName + ". What else can I help with?";
            repromptOutput = "Is there anything else I can help you with?",
            response.ask(speechOutput, repromptOutput);
        }
    }
        
};

