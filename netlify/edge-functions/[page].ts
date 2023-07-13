import { Context } from "https://edge.netlify.com";

const urls = {
  AU: "https://au.whogivesacrap.org/pages/happytp",
  US: "https://us.whogivesacrap.org/pages/happytp",
  UK: "https://uk.whogivesacrap.org/pages/happytp",
  EU: "https://eu.whogivesacrap.org/pages/happytp",
};

const defaultUrl = "https://au.whogivesacrap.org/pages/happytp";

function getUrl(countryCode: string): string {
  return urls[countryCode as keyof typeof urls] ?? defaultUrl;
}
export default (_request: Request, { geo }: Context) => {
  console.log(geo);
  let url = defaultUrl;
  if (geo.country && geo.country.code) {
    url = getUrl(geo.country.code);
  }
  return Response.redirect(url);
};

export const config = { path: "/" };
