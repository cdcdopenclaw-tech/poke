# 玩家2 策略 — 普通 (normal)

> 策略实现：`src/ai/normalBot.js` → `chooseCard(state, playerId, leadCard)`

## 改进点总览

| # | 改进 | 说明 |
|---|------|------|
| a | **牌记忆** | 完整追踪所有已出牌 |
| b | **桌面牌优先** | 同值时优先出桌面明牌 |
| c | **策略性弃牌** | 赢不了时出同花色最小牌，保留大牌 |
| d | **残局激进** | 最后5轮积极出分牌 |
| e | **计牌** | 追踪已出分数牌（5/10/K） |
| f | **花色空缺检测** | 检测对方某花色已空 |

## 辅助函数

| 函数 | 位置 | 作用 |
|------|------|------|
| `preferTableOverHand` | 内联于 normalBot | 同 rank+suit 时优先桌面明牌 |
| `detectVoidSuits` | 内联于 normalBot | 统计已出牌，找出可能已空的非天龙花色 |
| `countScoreCardsPlayed` | 内联于 normalBot | 追踪 5/10/K 已出数量 |
| `getLegalMoves` | `src/game/rules.js` | 合法走法（含同花色约束） |
| `canSecondCardWin` | `src/game/rules.js` | 判读响应牌能否赢 |

## 跟牌策略

### ① 对方出分牌，能赢必压
### ② 自己的分牌能赢
### ③ 赢不了 → 策略性弃牌（同花色最小非分→同花色最小→全局最小）

## 先手策略

### ④ 天龙人花色分牌（最安全）
### ⑤ 残局进攻（最后5轮）
### ⑥ 花色空缺检测
### ⑦ 只剩分数牌
### ⑧ 默认：最小非分数牌

详细策略逻辑见 `src/ai/normalBot.js` 注释。
