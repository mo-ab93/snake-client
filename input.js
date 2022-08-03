const{MOVE_UP_KEY} = require('./constants')
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
      process.exit();
    }
    connection.write(MOVE_UP_KEY[key]);
  };
 

  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
}