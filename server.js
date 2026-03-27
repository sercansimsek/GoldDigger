import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";

const __dirname = import.meta.dirname;
const pathToResource = path.join(__dirname, "public", "index.html");

const PORT = 8000;

const server = http.createServer(async (req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");

	const content = await fs.readFile(pathToResource, "utf-8");
	res.end(content);
});

server.listen(PORT, () => console.log(`Server online on PORT ${PORT}`));
