export default async function exit(_, res) {
  res.clearPreviewData();

  res.writeHead(307, { location: "/baby" });
  res.end();
}
