# App Insights agent observability queries

Agent-centric query pack for PiClaw observability.

Identity model:
- actor: `chatJid`
- transaction: `turnId`
- runtime leaf: `sessionLeafId`

## 1. Busiest chat JIDs

```kusto
union withsource=table dependencies, customEvents
| where timestamp > ago(24h)
| extend chat_jid = coalesce(
    tostring(customDimensions["piclaw.chat_jid"]),
    user_AuthenticatedId,
    tostring(customDimensions["piclaw.actor.id"])
  )
| where isnotempty(chat_jid)
| summarize events = count() by chat_jid
| order by events desc
```

## 2. Slowest turns by JID

```kusto
dependencies
| where timestamp > ago(24h)
| where name == "agent.turn"
| extend chat_jid = tostring(customDimensions["piclaw.chat_jid"])
| extend turn_id = tostring(customDimensions["piclaw.turn_id"])
| extend session_leaf_id = tostring(customDimensions["piclaw.session_leaf_id"])
| extend duration_ms = todouble(duration / 1ms)
| where isnotempty(chat_jid)
| project timestamp, chat_jid, turn_id, session_leaf_id, duration_ms, success, resultCode
| order by duration_ms desc
```

## 3. Slowest tools by JID

```kusto
dependencies
| where timestamp > ago(24h)
| where name == "tool.call"
| extend chat_jid = tostring(customDimensions["piclaw.chat_jid"])
| extend turn_id = tostring(customDimensions["piclaw.turn_id"])
| extend tool_name = tostring(customDimensions["piclaw.tool.name"])
| extend duration_ms = todouble(duration / 1ms)
| where isnotempty(chat_jid)
| summarize calls = count(), p50_ms = percentile(duration_ms, 50), p95_ms = percentile(duration_ms, 95), max_ms = max(duration_ms)
  by chat_jid, tool_name
| order by p95_ms desc
```

## 4. Model latency by JID

```kusto
dependencies
| where timestamp > ago(24h)
| where name == "model.call"
| extend chat_jid = tostring(customDimensions["piclaw.chat_jid"])
| extend model = tostring(customDimensions["piclaw.model"])
| extend sequence = tostring(customDimensions["piclaw.model.sequence"])
| extend duration_ms = todouble(duration / 1ms)
| where isnotempty(chat_jid)
| summarize calls = count(), p50_ms = percentile(duration_ms, 50), p95_ms = percentile(duration_ms, 95), max_ms = max(duration_ms)
  by chat_jid, model
| order by p95_ms desc
```

## 5. Recovery hotspots

```kusto
union withsource=table dependencies, traces, exceptions
| where timestamp > ago(24h)
| extend chat_jid = tostring(customDimensions["piclaw.chat_jid"])
| extend classifier = tostring(customDimensions["piclaw.error.classifier"])
| extend attempts = todouble(customDimensions["piclaw.recovery.attempts"])
| extend item_name = coalesce(name, operation_Name, message, outerMessage)
| where item_name in ("provider.error", "log.warn", "log.error") or isnotempty(classifier)
| where isnotempty(chat_jid)
| summarize events = count(), max_attempts = max(attempts)
  by chat_jid, classifier, item_name
| order by events desc
```

## 6. Follow-up queue activity

```kusto
customEvents
| where timestamp > ago(24h)
| where name in ("agent.followup.queued", "agent.followup.consumed", "agent.followup.removed", "agent.steer.queued")
| extend chat_jid = coalesce(user_AuthenticatedId, tostring(customDimensions["piclaw.chat_jid"]))
| where isnotempty(chat_jid)
| summarize events = count() by name, chat_jid
| order by events desc
```

## 7. Turn timeline for one JID

```kusto
let target_jid = "web:default";
union withsource=table dependencies, traces, exceptions, customEvents
| where timestamp > ago(12h)
| extend chat_jid = coalesce(
    tostring(customDimensions["piclaw.chat_jid"]),
    user_AuthenticatedId,
    tostring(customDimensions["piclaw.actor.id"])
  )
| where chat_jid == target_jid
| extend item_name = coalesce(name, operation_Name, message, outerMessage)
| project timestamp, table, item_name, chat_jid,
          turn_id = tostring(customDimensions["piclaw.turn_id"]),
          session_leaf_id = tostring(customDimensions["piclaw.session_leaf_id"]),
          tool_name = tostring(customDimensions["piclaw.tool.name"]),
          model = tostring(customDimensions["piclaw.model"]),
          classifier = tostring(customDimensions["piclaw.error.classifier"]),
          success, resultCode, duration
| order by timestamp desc
```
