---
sidebar_position: 1
---

# Create Auction

Creates a new auction with the specified details.

- **URI**: `/api/Auctions`
- **Method**: `POST`
- **Authentication**: Required (JWT)
- **Permission Required**: `Auctions.Create` (default value: `"AuctionR:Auctions:Create"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Request Body

Content-Type: `application/json`

| Field                 | Type      | Required | Description                                        |
|----------------------|-----------|----------|----------------------------------------------------|
| `productId`          | `int`     | Yes      | Identifier of the product being auctioned         |
| `ownerId`            | `int`     | Yes      | Identifier  of the auction creator                         |
| `title`              | `string`  | No       | Title of the auction                              |
| `description`        | `string`  | No       | Detailed description of the auction item          |
| `startingPrice`      | `decimal` | Yes      | Initial price of the auction                      |
| `minimumBidIncrement`| `decimal` | Yes      | Minimum allowed increment between bids            |
| `currency`           | `string`  | Yes      | ISO currency code (e.g., `"USD"`, `"EUR"`)        |
| `startTime`          | `string`  | Yes      | Auction start time (ISO 8601 format)              |
| `endTime`            | `string`  | Yes      | Auction end time (ISO 8601 format)                |

## Sample Request

```http
POST /api/Auctions HTTP/1.1
Authorization: Bearer {your_jwt_token}
Content-Type: application/json

{
  "productId": 123,
  "ownerId": 456,
  "title": "Vintage Guitar Auction",
  "description": "A well-preserved vintage guitar from the 1960s.",
  "startingPrice": 1500.00,
  "minimumBidIncrement": 100.00,
  "currency": "USD",
  "startTime": "2025-06-10T14:00:00Z",
  "endTime": "2025-06-12T14:00:00Z"
}
```

## Response

**Status Code:** `201 Created`  
**Location Header:** `/api/Auctions/{id}` — URI of the newly created auction

### Response Body Example

```json
{
  "success": true,
  "message": "Auction Created successfully.",
  "data": {
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
    "status": "Pending"
  }
}
```

## Possible Error Responses

| Status Code | Meaning               | When it Happens                                      |
|-------------|-----------------------|------------------------------------------------------|
| 400         | Bad Request           | Input validation fails (e.g., missing/invalid fields)|
| 401         | Unauthorized          | JWT is missing or invalid                            |
| 403         | Forbidden             | Caller does not have permission to create auctions   |
| 429         | Too Many Requests     | Rate limiting exceeded                               |
| 500         | Internal Server Error | Unexpected server-side error                         |
