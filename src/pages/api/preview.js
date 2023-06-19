import fetch from "node-fetch";

export default async function preview(req, res) {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}baby/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    { headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" } }
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return alert(error);
    });

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { location: `/baby/${content.id}` });
  res.end("Preview mode enabled");
}
