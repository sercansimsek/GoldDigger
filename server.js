import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";

const __dirname = import.meta.dirname;

const PORT = 8000;

const server = http.createServer(async (req, res) => {
	serveStatic(req, res, __dirname);
});

server.listen(PORT, () => console.log(`Server online on PORT ${PORT}`));
