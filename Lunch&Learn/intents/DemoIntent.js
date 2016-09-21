module.exports = {
    execute: function (intent, session, response) {

        var text = "Hello everyone. My name is Alexa and this is Jason. Today we will be teaching you the basics of Alexa  development. When you leave here today, you will have enough information to get started on your own projects. We will be going over the general structure of an Alexa application, custom and built in intents, and slot and slot types. So with out further adieu, he is some cool stuff I made after a few hours of tinkering with the wonderful, beautiful, Amazon me"

        response.tell(text);
    }
};