---
sidebar_position: 8
---

# Postpone Auction

Postpones an auction by updating its start and end times.

- **URI**: `/api/Auctions/{id}/postpone`
- **Method**: `POST`
- **Authentication**: Required (JWT)
- **Permission Required**: `Auctions.Update` (default value: `"AuctionR:Auctions:Update"`)

> 🔐 Permission values are configurable via the [`Permissions`](../../Configuration/permissions.md) section in `appsettings.json`.

---

## Route Parameters

| Field | Type  | Required | Description                    |
|-------|-------|----------|--------------------------------|
| `id`  | `int` | Yes      | ID of the auction to postpone  |

---

## Request Body

Content-Type: `application/json`

| Field      | Type     | Required | Description                     |
|------------|----------|----------|---------------------------------|
| `auctionId`| `int`    | Yes      | ID of the auction being postponed (should match route id) |
| `userId`   | `int`    | Yes      | ID of the user requesting postponement (typically the owner) |
| `startTime`| `string` | Yes      | New auction start time (ISO 8601 format) |
| `endTime`  | `string` | Yes      | New auction end time (ISO 8601 format)   |

---

## Sample Request

```http
POST /api/Auctions/789/postpone HTTP/1.1
Authorization: Bearer {your_jwt_token}
Content-Type: application/json

{
  "auctionId": 789,
  "userId": 456,
  "startTime": "2025-06-10T14:00:00Z",
  "endTime": "2025-06-12T14:00:00Z"
}
```

## Response

**Status Code:** `200 OK`  

### Response Body Example

```json
{
  "success": true,
  "message": "Auction postponed successfully.",
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

