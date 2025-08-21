# dmbsam-token-wallet
```md
# Simple Token Wallet (Email OTP, Admin Mint)


A tiny Express + SQLite wallet with passwordless email OTP. Admin can mint unlimited tokens, users request tokens, and admin can adjust balances only if allowed by the user.


## Features
- Email OTP login (6-digit, 10 mins expiry)
- Admin bootstrap by email (`ADMIN_EMAIL`)
- User balance in integer smallest units (2 decimals displayed)
- CSRF protection & cookie-session
- Helmet security headers
- Audit logs in `transfers` table


## Local Setup
1. Clone repo & install deps
```bash
npm install
cp .env.example .env
# edit .env values
npm start
```
2. Open `http://localhost:3000` and login with your email.
3. Ensure your `ADMIN_EMAIL` is set to your admin id.


## Deploy
- **GitHub**: Push this folder as a new repo, e.g., `dmbsam-token-wallet`.
- **Host**: Use Render/Railway/your VPS (Node 18+). Add env vars from `.env`.
- **Domain**: Create a subdomain like `tokens.dreamepoint.com` and add a CNAME to your host’s provided domain. Set `APP_BASE_URL=https://tokens.dreamepoint.com`.


## Security Notes
- OTP stored once-use with expiry; sessions are httpOnly; CSRF enabled.
- Use a dedicated SMTP and domain-based `FROM` address to avoid spam.
- SQLite is fine for MVP; for production, migrate to Postgres and add unique constraints and rate limits.
- Add **rate limiting** (e.g., express-rate-limit) and **IP-based OTP throttle** before real traffic.


## Roadmap
- Add user-to-user transfers
- Add rate limiter for login/verify
- Add pagination & search in admin
- Optional: move to Postgres + Prisma
- Optional: 2FA TOTP for admin
```


---


## How to Use
1. Put this project on GitHub.
2. Deploy on a Node host.
3. Point `tokens.dreamepoint.com` (or any subdomain) to the deployed app.
4. Login via email OTP, open `/admin` as the admin to review requests and send tokens.


> This is an **MVP** focused on simplicity + security basics. We can iterate to add more controls (rate limiting, audit exports, IP allowlist, etc.).
