# Final activation steps

The website and secure backend scaffold are committed. Live Easypaisa transactions cannot be safely activated until Easypaisa issues merchant credentials and the production Integration Guide for the merchant account.

1. Complete Easypaisa Merchant/Online Payment onboarding.
2. Obtain the merchant Integration Guide and production credentials.
3. Deploy `easypaisa-worker/src/index.js` to Cloudflare Workers.
4. Add the credentials as Cloudflare Worker secrets (never GitHub/frontend).
5. Replace the placeholder Worker URL in `index.html` with the deployed Worker URL.
6. Implement the exact request/signature/redirect fields from the issued Easypaisa guide.
7. Run Easypaisa's live test/verification before enabling live fulfilment.

The official Easypaisa documentation states that the website generates an Order ID, Easypay verifies it against merchant-issued credentials, and a successful payment results in a Transaction ID. It also requires merchant verification of payment before fulfilment.
