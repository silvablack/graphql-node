import server from './server';

const port = 4000;

server.listen(port, () => {
  console.log(`[SERVER] Running at http://localhost:${port}`);
});