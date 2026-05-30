# Exploding Zombies

A Minecraft **Bedrock Edition** add-on (behavior pack) that makes zombies
explode when they die.

## What it does

When a zombie (or one of its variants) dies, an explosion is created at its
location. By default the following entities explode:

- Zombie
- Zombie Villager
- Husk
- Drowned

## How it works

The pack uses the [Script API](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/)
(`@minecraft/server`). It subscribes to the `entityDie` event and calls
`dimension.createExplosion()` at the dead entity's location.

## Installing

1. Copy this folder into your Minecraft `behavior_packs` directory:
   - **Windows:** `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs`
2. Launch Minecraft, create or edit a world, and enable the **Exploding
   Zombies** behavior pack under *Behavior Packs*.
3. Make sure the **Beta APIs** experimental toggle is enabled if your game
   version requires it for the Script API.

## Configuration

Open `scripts/main.js` to tweak behavior:

- `EXPLOSION_RADIUS` — the power/radius of the explosion (default `3`).
- `EXPLODING_ENTITIES` — the set of entity type IDs that explode.
- The `createExplosion` options control `breaksBlocks` and `causesFire`.
