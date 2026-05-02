// ═══════════════════════════════════════════════════════════════════
// bot.js - Bot factory
// ═══════════════════════════════════════════════════════════════════

import { chooseCard as easyChoose } from './easyBot.js';
import { chooseCard as normalChoose } from './normalBot.js';

const BOT_STRATEGIES = {
  easy: easyChoose,
  normal: normalChoose,
};

/**
 * Factory: get a bot move for the given strategy.
 *
 * @param {'easy'|'normal'} strategyName
 * @param {object} state - Full game state
 * @param {'p1'|'p2'} playerId - Which player this bot controls
 * @param {object|null} leadCard - Card that was led, or null if bot is leading
 * @returns {{ type: 'hand'|'face', index: number }|null}
 */
function getBotMove(strategyName, state, playerId, leadCard) {
  const fn = BOT_STRATEGIES[strategyName];
  if (!fn) {
    console.warn(`Unknown strategy "${strategyName}", falling back to "easy"`);
    return BOT_STRATEGIES.easy(state, playerId, leadCard);
  }
  return fn(state, playerId, leadCard);
}

export { getBotMove, BOT_STRATEGIES };
