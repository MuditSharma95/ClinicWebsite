# Aruna Skin Clinic — SEO and Google setup

## Implemented
- English/Hindi homepage titles and descriptions.
- Canonical URLs and hreflang alternates for English and Hindi.
- Open Graph and Twitter metadata.
- MedicalClinic JSON-LD with clinic details and Dr. Sachin Goyal.
- Dynamic `/sitemap.xml` covering both languages and treatment pages.
- `/robots.txt` referencing the sitemap.
- Environment configuration for production site URL and Search Console verification.

## Production setup
1. Purchase/configure the domain and point DNS to the deployment host.
2. Set `NEXT_PUBLIC_SITE_URL` to the exact production origin, including `https://`.
3. Add the site to Google Search Console. Prefer Domain verification using the DNS TXT record. Alternatively use URL-prefix verification and set `GOOGLE_SITE_VERIFICATION`.
4. Deploy, then open `/sitemap.xml` and `/robots.txt` on the live domain.
5. Submit the sitemap in Search Console.
6. Add the website URL to the verified Google Business Profile.
7. Keep clinic name, address, phone and opening hours consistent across the website and Business Profile.

## Verify before launch
- Address and hours in schema were transcribed from the supplied clinic banner.
- The map URL in the project is a search URL, not a confirmed exact pin.
- Do not add ratings, review counts, experience years, awards or treatment outcomes unless genuine and verifiable.
- Structured data does not guarantee Google rich results or rankings.
