const express = require("express");
const app = express();
const port = 3000;

const chatbotLogic = (userMessage) => {
    /*
    Purpose: It accepts a argument name userMessage that is the message sent by the user to the chatbot and check the messsage with the 
    record stored in our records, if the message  found in the record then the function returns a  response message.
    Input: userMessage , type: string.
    Output: responseMessages[index], type: string.
    */
  const responseMessages = [
    "Hello! How can I assist you?",
    "Sure, let me look that up for you.",
    "My name is Chatbot.",
    "I dont have an age, as I am a computer program.",
    "I can help answer your questions, provide information, or assist with tasks.",
    "Sure, why did the tomato turn red? Because it saw the salad dressing!",
    "That's a philosophical question with many different answers depending on who you ask. Some people believe that the meaning of life is to seek happiness, while others believe that it's to fulfill a higher purpose or to make a positive impact on the world.",
    'To reset your password, please go to the login page and click on the "forgot password" link. From there, you can enter your email address and receive instructions for resetting your password.',
  ]; //It is a array named responseMessages that containes responses that are returned by the function.
 
  const cleanedUserMessage = userMessage.toLowerCase().trim(); // cleanedUserMessage basically convert the input into lowercase and it removes the whitespaces from both sides of the string.


  const requestMessages = [
    "hello",
    "help",
    "what is your name?",
    "how old are you?",
    "what can you do?",
    "can you tell me a joke?",
    "what is the meaning of life?",
    "How do I reset my password?",
  ]; // It is array named requestMessages that contains messages that can be sent by the user.

  const index = requestMessages.indexOf(cleanedUserMessage); // index is used to check the index of the message sent by the user.

  if (index === -1) {
    return "Sorry I dont Know about this";// if the index === -1 that means the message sent by user doesnt exsist in our record.
  }
  return responseMessages[index];// It returns the responseMessage that matches the index.
};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Chatbot API!");
});

app.post("/chatbot", (req, res) => {
  const userMessage = req.body.message;// userMessage stores the input sent by the user.

  const chatbotMessage = chatbotLogic(userMessage); //chatbotLogic function mentioned above is called here.

  res.json({ message: chatbotMessage });// res.json sends the json response as chatbotMessage.
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
