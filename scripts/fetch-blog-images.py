"""One-off: downloads each blog cover from Unsplash and writes optimised, self-hosted copies to client/public/blog/.
Run again only when you add or change a cover. Ids come from client/src/data/post-images.ts."""
import re, io, os, subprocess
from PIL import Image

root = os.path.join(os.path.dirname(__file__), "..")
src = open(os.path.join(root, "client/src/data/post-images.ts")).read()
items = re.findall(r'"([a-z0-9-]+)": \{ id: "([0-9a-f-]+)"', src)
out = os.path.join(root, "client/public/blog")
os.makedirs(out, exist_ok=True)
for slug, pid in items:
    if os.path.exists(os.path.join(out, f"{slug}-1280.webp")) and os.path.exists(os.path.join(out, f"{slug}-og.jpg")):
        continue  # already downloaded
    url = f"https://images.unsplash.com/photo-{pid}?auto=format&fit=crop&q=85&w=1600&h=900"
    data = None
    for attempt in range(4):  # Unsplash occasionally times out; retry before giving up on this one
        r = subprocess.run(["curl", "-sSL", "--fail", "-m", "90", url], capture_output=True)
        if r.returncode == 0 and r.stdout:
            data = r.stdout
            break
    if data is None:
        print("FAILED", slug)
        continue
    im = Image.open(io.BytesIO(data)).convert("RGB")
    for w in (400, 800, 1280):
        im.resize((w, round(w * 9 / 16)), Image.LANCZOS).save(os.path.join(out, f"{slug}-{w}.webp"), "WEBP", quality=72, method=6)
    og = im.resize((1200, 675), Image.LANCZOS).crop((0, 22, 1200, 652))  # 1200x630
    og.save(os.path.join(out, f"{slug}-og.jpg"), "JPEG", quality=82, optimize=True)
    print("ok", slug)
