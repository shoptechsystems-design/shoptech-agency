import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Hashed build files are immutable; everything else is revalidated.
  app.use(
    "/assets",
    express.static(path.join(staticPath, "assets"), { immutable: true, maxAge: "1y" })
  );
  app.use(express.static(staticPath, { maxAge: "1h" }));

  // Every real page is prerendered, so anything else is a genuine 404 (not a soft-404).
  app.use((_req, res) => {
    res.status(404).sendFile(path.join(staticPath, "404.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
