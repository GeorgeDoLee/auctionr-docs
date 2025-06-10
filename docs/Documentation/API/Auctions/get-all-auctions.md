---
sidebar_position: 2
---

# Get Auctions

Retrieves a paginated list of auctions.

- **URI**: `/api/Auctions`
- **Method**: `GET`
- **Authentication**: Required (JWT)
- **Permission Required**: `Auctions.Read` (default value: `"AuctionR:Auctions:Read"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Query Parameters

| Name         | Type     | Required | Description                             | Default Value |
|--------------|----------|----------|-------------------------------------|---------------|
| `PageNumber` | `int`    | No       | Page number to retrieve (1-based)    | 1             |
| `PageSize`   | `int`    | No       | Number of auctions per page           | 10            |

---

## Sample Request

```http
GET /api/Auctions?PageNumber=1&PageSize=10 HTTP/1.1
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
      "status": "Pending"
    }
    // ... more auctions
  ]
}
```

## Possible Error Responses

| Status Code | Meaning               | When it Happens                                      |
|-------------|-----------------------|------------------------------------------------------|
| 401         | Unauthorized          | JWT is missing or invalid                            |
| 403         | Forbidden             | Caller does not have permission to read auctions     |
| 429         | Too Many Requests     | Rate limiting exceeded                               |
| 500         | Internal Server Error | Unexpected server-side error                         |
