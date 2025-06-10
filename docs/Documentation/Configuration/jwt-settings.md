---
sidebar_position: 2
---

# JWT Settings

The `Jwt` section in `appsettings.json` defines settings for issuing and validating JSON Web Tokens (JWT) used to secure the AuctionR API. Proper configuration ensures tokens are issued by a trusted authority, intended for the correct audience, signed with a strong key, and validated without unnecessary time tolerances.

### Default Configuration

```json
"Jwt": {
  "Issuer": "AuctionR",
  "Audience": "AuctionRClients",
  "Key": "VeryBigPlaceholderForAuctionRJwtAuthenticationSchemaKeyThatShouldBeConfiguredByUser!",
  "ClockSkewSeconds": 0
}
```