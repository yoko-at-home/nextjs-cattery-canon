/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-default-export */
export default async function exit(_, res) {
  res.clearPreviewData();

  res.writeHead(307, { Location: "/baby" });
  res.end();
}
