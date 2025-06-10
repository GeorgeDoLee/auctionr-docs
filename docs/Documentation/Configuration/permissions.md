---
sidebar_position: 3
---

# Permissions

The `Permissions` section in `appsettings.json` defines the mapping of permission names used throughout the system to their corresponding string values. While the permission **names** (like `Auctions.Read`, `Bids.Create`, `Auctions.Update`) are fixed by the system, the **values** (e.g., `"AuctionR:Bids:Read"`) are fully configurable and can be customized to fit your access control conventions.

### Default Configuration

```json
"Permissions": {
  "Auctions": {
    "Read": "AuctionR:Auctions:Read",
    "Create": "AuctionR:Auctions:Create",
    "Update": "AuctionR:Auctions:Update"
  },
  "Bids": {
    "Read": "AuctionR:Bids:Read",
    "Create": "AuctionR:Bids:Create"
  }
}
```
