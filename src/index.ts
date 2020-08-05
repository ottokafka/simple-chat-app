import { Server } from "./server";

const server = new Server();

server.listen(port => {
  console.log(`Server is listening on http://34.71.166.221:${port}`);
});
