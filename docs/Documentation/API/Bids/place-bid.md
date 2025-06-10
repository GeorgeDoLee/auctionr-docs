---
sidebar_position: 1
---

# Place Bid

Places a new bid on a specified auction.

- **URI**: `/api/Bids`
- **Method**: `POST`
- **Authentication**: Required (JWT)
- **Permission Required**: `Bids.Create` (default value: `"AuctionR:Bids:Create"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Request Body

Content-Type: `application/json`

| Field      | Type     | Required | Description                         |
|------------|----------|----------|-----------------------------------|
| `auctionId`| `int`    | Yes      | Identifier of the auction to bid on |
| `bidderId` | `int`    | Yes      | Identifier of the user placing bid |
| `amount`   | `decimal`| Yes      | Bid amount                        |


## Sample Request

```http
POST /api/Bids HTTP/1.1
Authorization: Bearer {your_jwt_token}
Content-Type: application/json

{
  "auctionId": 123,
  "bidderId": 456,
  "amount": 1700.00
}
```
---

## Response

**Status Code:** `201 Created`  
**Location Header:** `/api/Bids/{id}` — URI of the newly created bid

### Response Body Example

```json
{
  "success": true,
  "message": "Bid placed successfully.",
  "data": {
    "id": 987,
    "auctionId": 123,
    "bidderId": 456,
    "amount": 1700.0,
    "timestamp": "2025-06-10T15:00:00Z"
  }
}
```

---

## Possible Error Responses

| Status Code | Meaning               | When it Happens                                      |
|-------------|-----------------------|------------------------------------------------------|
| 400         | Bad Request           | Input validation fails (e.g., missing/invalid fields)|
| 401         | Unauthorized          | JWT is missing or invalid                            |
| 403         | Forbidden             | Caller does not have permission to create bids       |
| 429         | Too Many Requests     | Rate limiting exceeded                               |
| 500         | Internal Server Error | Unexpected server-side error                         |