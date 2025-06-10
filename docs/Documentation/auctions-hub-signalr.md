---
sidebar_position: 6
---

# AuctionsHub (SignalR)

- **URI**: `/hubs/auctions`

Provides real-time updates for auction-related events such as bids, status changes, and lifecycle transitions.

> ℹ️ Clients connect using SignalR-compatible libraries (e.g., JavaScript, .NET, Blazor).

---

## Related Documentation

- **JavaScript Client**: [SignalR JavaScript Client](https://learn.microsoft.com/en-us/aspnet/core/signalr/javascript-client)
- **Blazor Client**: [SignalR with Blazor](https://learn.microsoft.com/en-us/aspnet/core/blazor/signalr)
- **ASP.NET Core Server**: [SignalR Server](https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction)

---

## Hub Methods (Client → Server)

These methods are invoked by clients to manage auction subscriptions:

### JoinAuction

Adds the client to group auction-\{auctionId\} to receive real-time updates for that auction.

**Client Example (JavaScript):**

```js
await connection.invoke("JoinAuction", 123);
```

---

### LeaveAuction

Removes the client from group auction-\{auctionId\} to stop receiving updates for that auction.

**Client Example (JavaScript):**

```js
await connection.invoke("LeaveAuction", 123);
```

---

## Hub Events (Server → Client)

Below are the events the server emits to connected clients:

### BidPlaced

Notifies when a new bid is placed on an auction.

```json
{
  "id": 987,
  "auctionId": 123,
  "bidderId": 456,
  "amount": 1700.0,
  "timestamp": "2025-06-10T15:00:00Z"
}
```
---

### AuctionPostponed

Triggered when an auction is postponed (start/end time changed).

```json
{
  "auctionId": 123,
  "newStartTime": "2025-06-12T10:00:00Z",
  "newEndTime": "2025-06-14T10:00:00Z"
}
```

---

### AuctionStarted
Triggered when an auction starts.

```json
{
  "auctionId": 123,
  "startTime": "2025-06-12T10:00:00Z"
}
```
---

### AuctionEnded
Triggered when an auction ends.

```json
{
  "auctionId": 123,
  "endTime": "2025-06-14T10:00:00Z"
}
```

### AuctionCancelled
Broadcasts cancellation of an auction.

```json
{
  "auctionId": 123
}

```