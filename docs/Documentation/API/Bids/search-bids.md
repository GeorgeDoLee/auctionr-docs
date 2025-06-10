---
sidebar_position: 4
---

# Search Bids

Retrieves a paginated list of bids filtered by optional query parameters.

- **URI:** `/api/Bids/search`
- **Method:** `GET`
- **Authentication:** Required (JWT)
- **Permission Required:** `Bids.Read` (default value: `"AuctionR:Bids:Read"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.
---

### Query Parameters

| Name       | Type     | Required | Description                                |
|------------|----------|----------|--------------------------------------------|
| `AuctionId`| `int`    | No       | Filter bids by the auction ID               |
| `BidderId` | `int`    | No       | Filter bids by the bidder's ID               |
| `MaxAmount`| `double` | No       | Filter bids with amount less than or equal to this value |
| `MinAmount`| `double` | No       | Filter bids with amount greater than or equal to this value |
| `PageNumber` | `int`  | No       | Page number for pagination (default: `1`)  |
| `PageSize` | `int`    | No       | Number of results per page (default: `10`) |

---

### Sample Request

```http
GET /api/Bids/search?AuctionId=123&PageNumber=1&PageSize=10 HTTP/1.1
Authorization: Bearer {your_jwt_token}
```

---

### Response

**Status Code:** `200 OK`

### Response Body Example

```json
{
  "success": true,
  "message": "Bids retrieved successfully.",
  "data": [
    {
      "id": 987,
      "auctionId": 123,
      "bidderId": 456,
      "amount": 1700.0,
      "timestamp": "2025-06-10T15:00:00Z"
    }
    // ... more bids
  ]
}
```

## Possible Error Responses

| Status Code | Meaning               | When it Happens                                      |
|-------------|-----------------------|------------------------------------------------------|
| 400         | Bad Request           | Input validation fails (e.g., missing/invalid fields)|
| 401         | Unauthorized          | JWT is missing or invalid                            |
| 403         | Forbidden             | Caller does not have permission to create bids       |
| 429         | Too Many Requests     | Rate limiting exceeded                               |
| 500         | Internal Server Error | Unexpected server-side error                         |