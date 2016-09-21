/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

'use strict';

var AlexaSkill = require('./AlexaSkill');

var APP_ID = undefined; //optional replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';


var Sapient = function() {
  AlexaSkill.call(this, APP_ID);
};

Sapient.prototype = Object.create(AlexaSkill.prototype);
Sapient.prototype.constructor = Sapient;

Sapient.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = "Welcome to the Sapient Lunch and Learn. How can I help you?";
    var repromptText = "For instructions on what you can say, please say help me.";
    response.ask(speechText, repromptText);
};

Sapient.prototype.intentHandlers = {
    DemoIntent: function (intent, session, response) {
        var IntentHandler = require("./intents/DemoIntent");
        IntentHandler.execute(intent, session, response);
    },
    EmployeeIntent: function (intent, session, response) {
        var IntentHandler = require("./intents/EmployeeIntent");
        IntentHandler.execute(intent, session, response);
    },
    EmployeeInfoIntent: function (intent, session, response) {
        var IntentHandler = require("./intents/EmployeeInfoIntent");
        IntentHandler.execute(intent, session, response);
    },
    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechOutput = "You can say things like who works in the dev cage or search for an employee by saying ask me about insert name here";
        var repromptOutput = "What can I help you with?";
        
        response.ask(speechOutput, repromptOutput);
    }
};

exports.handler = function (event, context) {
    var sapient = new Sapient();
    sapient.execute(event, context);
};