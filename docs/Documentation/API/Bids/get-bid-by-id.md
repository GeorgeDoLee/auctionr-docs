---
sidebar_position: 3
---

# Get Bid by ID

Retrieves a bid by its unique identifier.

- **URI**: `/api/Bids/{id}`
- **Method**: `GET`
- **Authentication**: Required (JWT)
- **Permission Required**: `Bids.Read` (default value: `"AuctionR:Bids:Read"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Route Parameters

| Field | Type | Required | Description        |
|-------|------|----------|--------------------|
| `id`  | int  | Yes      | ID of the bid to retrieve |

## Sample Request

```http
GET /api/Bids/987 HTTP/1.1
Authorization: Bearer {your_jwt_token}
```

---

## Response

**Status Code:** `200 OK`

### Response Body Example

```json
{
  "success": true,
  "message": "Bid retrieved successfully.",
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