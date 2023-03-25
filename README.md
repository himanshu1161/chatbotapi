# Chatbot API
This is a simple chatbot API built with JavaScript and Express.js. The API accepts user messages as input, processes them using a predefined set of rules, and returns appropriate responses.

## Installation
Clone the repository using git clone https://github.com/himanshu1161/chatbotapi.git
Navigate to the project directory using cd chatbotapi
Install the required dependencies using npm install
## Usage
### Start the API server using npm start
### Send a POST request to the /chatbot endpoint with a JSON payload containing the user message:

{
  "message": "What is your name"
}

### The API will process the message and return an appropriate response:

{
  "message": "My name is Chatbot."
}

## API Collection (ThunderClient):
thunder-collection_Chatbot api.json in the source code.
