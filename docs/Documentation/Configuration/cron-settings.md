---
sidebar_position: 4
---

# Cron Settings

The `CronSettings` section in `appsettings.json` defines how frequently the system checks for auctions that need to be started or ended. This is based on standard [cron expressions](https://en.wikipedia.org/wiki/Cron), allowing fine-grained control over scheduling behavior.

## Default Configuration

```json
"CronSettings": {
  "StartAuctions": "* * * * *",
  "EndAuctions": "* * * * *"
}
