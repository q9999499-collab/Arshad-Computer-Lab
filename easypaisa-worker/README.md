# Easypaisa Cloudflare Worker integration

This worker is the secure backend layer for the Arshad Computer Lab Easypaisa checkout.

## Required Cloudflare secrets

Set these as Worker secrets after Easypaisa merchant onboarding provides the exact credentials and endpoint values:

- `EASYPAISA_STORE_ID`
- `EASYPAISA_HASH_KEY`
- `EASYPAISA_API_URL`
- `EASYPAISA_RETURN_URL`

Do not put secrets in GitHub Pages or frontend JavaScript.

## Important

The public Easypaisa documentation confirms that merchant integrations use a merchant-issued credential setup and Order ID/Transaction ID flow. The exact production endpoint and signing fields must match the integration guide issued for the merchant account; this repository deliberately does not invent credentials or production signing rules.
