#!/usr/bin/env bash
#
# Packages the behavior pack into a distributable .mcaddon file.
# A .mcaddon is simply a zip archive containing one folder per pack,
# each with its own manifest.json.
set -euo pipefail

cd "$(dirname "$0")"

OUTPUT="ExplodingZombies.mcaddon"

rm -f "$OUTPUT"
zip -r -X "$OUTPUT" behavior_pack -x '*.DS_Store'

echo "Built $OUTPUT"
