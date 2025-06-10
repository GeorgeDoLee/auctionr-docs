---
sidebar_position: 5
---

# Rate Limiting

The `RateLimiting` section in `appsettings.json` controls how many API requests a client can make within a defined time window. This helps prevent abuse, improves security, and ensures fair usage across clients.

## Default Configuration

```json
"RateLimiting": {
  "PermitLimit": 5,
  "WindowSeconds": 1
}
```