---
sidebar_position: 1
---

# Connection Strings

The `ConnectionStrings` section in `appsettings.json` specifies how the AuctionR microservice connects to its database. Adjusting these values is essential when deploying to different environments (development, staging, production) or when using containers (Docker, Kubernetes).

### Default Configuration
```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=auctionrDB;Trusted_Connection=True;TrustServerCertificate=True"
}
```