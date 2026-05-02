#!/bin/bash
# 启动游戏开发服务器
# 打开 http://localhost:8765/src/ui/index.html
cd "$(dirname "$0")"
echo "🃏 扑克牌对战 - 开发服务器"
echo "→ http://localhost:8765/src/ui/index.html"
echo "按 Ctrl+C 停止"
python3 -m http.server 8765
