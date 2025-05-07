var connection;

/**
 * Create a new websocket on specified ip and port
 */
function connect() {
  const ip = document.getElementById("ip").value;
  const port = document.getElementById("port").value;
  const url = "ws://" + ip + ":" + port;

  connection = new WebSocket(url, ["arduino"]);

  connection.onopen = socketOnOpen;
  connection.onclose = socketOnClose;
  connection.onerror = socketOnError;
  connection.onmessage = socketOnMessage;

  console.log("Create new websocket with url: " + url);
}

/**
 * Websocket event handlers
 */
function socketOnOpen() {
  console.log("Websocket is open");
}

function socketOnClose() {
  console.log("Websocket is closed");
  connection = null;
}

function socketOnError(e) {
  console.log("Websocket error: ", e);
}

function socketOnMessage(e) {
  console.log("Websocket message: ", e.data);
}

/**
 * Send a test message to the server
 */
function sendTestMessage() {
  if (!connection) return;

  const testMessage = document.getElementById("test-message").value
  connection.send(testMessage);
}
