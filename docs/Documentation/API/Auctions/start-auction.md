---
sidebar_position: 5
---

# Start Auction

Starts an auction manually.

- **URI**: `/api/Auctions/{id}/start`
- **Method**: `POST`
- **Authentication**: Required (JWT)
- **Permission Required**: `Auctions.Update` (default value: `"AuctionR:Auctions:Update"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Route Parameters

| Field | Type   | Required | Description                     |
|-------|--------|----------|---------------------------------|
| `id`  | `int`  | Yes      | ID of the auction to start      |

---

## Sample Request

```http
POST /api/Auctions/789/start HTTP/1.1
Authorization: Bearer {your_jwt_token}
```

---

## Response

**Status Code:** `200 OK`  

### Response Body Example

```json
{
  "success": true,
  "message": "Auction started successfully.",
  "data": null
}
```

---

## Possible Error Responses

| Status Code | Meaning               | When it Happens                                      |
|-------------|-----------------------|------------------------------------------------------|
| 400         | Bad Request           | Input validation fails (e.g., missing/invalid fields)|
| 401         | Unauthorized          | JWT is missing or invalid                            |
| 403         | Forbidden             | Caller does not have permission to update auctions or caller's ID doesn't match the auction's owner ID |
| 429         | Too Many Requests     | Rate limiting exceeded                               |
| 500         | Internal Server Error | Unexpected server-side error                         |
