---
sidebar_position: 4
---

# Search Auctions

Searches auctions based on various optional filter criteria.

- **URI**: `/api/Auctions/search`
- **Method**: `GET`
- **Authentication**: Required (JWT)
- **Permission Required**: `Auctions.Read` (default value: `"AuctionR:Auctions:Read"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Query Parameters

| Name               | Type      | Required | Description                                          | Default     |
|--------------------|-----------|----------|------------------------------------------------------|-------------|
| `ProductId`        | `int`     | No       | Filter auctions by product ID                         | —           |
| `OwnerId`          | `int`     | No       | Filter auctions by owner ID                           | —           |
| `Title`            | `string`  | No       | Filter auctions by title (partial match)             | —           |
| `Description`      | `string`  | No       | Filter auctions by description (partial match)       | —           |
| `MaxStartingPrice` | `deciaml`  | No       | Filter auctions with starting price less than or equal| —           |
| `Currency`         | `string`  | No       | Filter auctions by currency code (e.g., `"USD"`)     | —           |
| `MinStartTime`     | `string` (ISO 8601) | No | Filter auctions starting at or after this time       | —           |
| `MaxEndTime`       | `string` (ISO 8601) | No | Filter auctions ending at or before this time         | —           |
| `MaxCurrentBidAmount` | `decimal` | No      | Filter auctions with current highest bid less than or equal | —       |
| `Status` | `int` | No | Filter auctions by status:<br />1 = Pending<br />2 = Active<br />3 = Ended<br />4 = Cancelled |
| `PageNumber`       | `int`     | No       | Page number for pagination                            | `1`         |
| `PageSize`         | `int`     | No       | Number of items per page                              | `10`        |

---

## Sample Request

```http
GET /api/Auctions/search?Title=Guitar&Status=2&PageNumber=1&PageSize=5 HTTP/1.1
Authorization: Bearer {your_jwt_token}
```

## Response

**Status Code:** `200 OK`

### Response Body Example

```json
{
  "success": true,
  "message": "Auctions retrieved successfully.",
  "data": [
    {
      "id": 789,
      "productId": 123,
      "ownerId": 456,
      "title": "Vintage Guitar Auction",
      "description": "A well-preserved vintage guitar from the 1960s.",
      "startingPrice": 1500.0,
      "minimumBidIncrement": 100.0,
      "currency": "USD",
      "startTime": "2025-06-10T14:00:00Z",
      "endTime": "2025-06-12T14:00:00Z",
      "status": "Active"
    }
    // ... more auctions
  ]
}
```

## Possible Error Responses

| Status Code | Meaning               | When it Happens                                      |
|-------------|-----------------------|------------------------------------------------------|
| 400         | Bad Request           | Input validation fails (e.g., missing/invalid fields)|
| 401         | Unauthorized          | JWT is missing or invalid                            |
| 403         | Forbidden             | Caller does not have permission to read auctions     |
| 429         | Too Many Requests     | Rate limiting exceeded                               |
| 500         | Internal Server Error | Unexpected server-side error                         |
