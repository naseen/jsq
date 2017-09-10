    
// Create a client instance
client = new Paho.MQTT.Client("m20.cloudmqtt.com", Number(15809), "fbo");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect},{password:"pass"},{userName:"user"});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("World");
  message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}


// called when the client connects
function sendTurnOn() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Send ON");
  client.subscribe("World");
  message = new Paho.MQTT.Message("ON");
  message.destinationName = "testLight";
  client.send(message);
}
