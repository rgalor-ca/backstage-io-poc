import { createReadStream, existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { createServer } from 'node:http';

const port = Number(process.env.PORT || 5173);
const root = process.cwd();
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);
  const pathname = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
  const file = join(root, pathname === '/' ? 'index.html' : pathname);
  const target = existsSync(file) ? file : join(root, 'index.html');

  res.writeHead(200, { 'Content-Type': types[extname(target)] || 'application/octet-stream' });
  createReadStream(target).pipe(res);
}).listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
