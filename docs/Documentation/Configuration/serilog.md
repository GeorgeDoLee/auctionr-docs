---
sidebar_position: 6
---

# Serilog

Serilog is used for structured logging in the AuctionR microservice. It provides rich, flexible logging with support for multiple outputs (sinks), including console and rolling log files.

The logging configuration is controlled via the `Serilog` section in `appsettings.json`.

## Default Configuration

```json
"Serilog": {
  "MinimumLevel": {
    "Override": {
      "Microsoft": "Warning",
      "Microsoft.EntityFrameworkCore": "Information"
    }
  },
  "WriteTo": [
    {
      "Name": "Console",
      "Args": {
        "outputTemplate": "[{Timestamp:dd-MM HH:mm:ss} {Level:u3}] |{SourceContext}| {NewLine}{Message:lj}{NewLine}{Exception}"
      }
    },
    {
      "Name": "File",
      "Args": {
        "path": "Logs/AuctionR-.log",
        "rollingInterval": "Day",
        "rollOnFileSizeLimit": true,
        "retainedFileCountLimit": 90,
        "formatter": "Serilog.Formatting.Compact.CompactJsonFormatter, Serilog.Formatting.Compact"
      }
    }
  ]
}
```

## Official Documentation

For full customization and more sink options, visit the official [Serilog documentation](https://serilog.net)🔗
