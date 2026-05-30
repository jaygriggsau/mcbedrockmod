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

## Building the .mcaddon

Run the build script to package the behavior pack into an importable
`.mcaddon` file:

```bash
./build.sh
```

This produces `ExplodingZombies.mcaddon`.

## Installing

1. Build (or download) `ExplodingZombies.mcaddon`.
2. Double-click the file (or open it on a device with Minecraft installed).
   Minecraft will import it automatically.
3. Create or edit a world and enable the **Exploding Zombies** behavior pack
   under *Behavior Packs*.
4. Make sure the **Beta APIs** experimental toggle is enabled if your game
   version requires it for the Script API.

> The source lives in `behavior_pack/`. To install manually instead, copy that
> folder into your Minecraft `behavior_packs` directory, e.g. on Windows:
> `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs`

## Configuration

Open `scripts/main.js` to tweak behavior:

- `EXPLOSION_RADIUS` — the power/radius of the explosion (default `3`).
- `EXPLODING_ENTITIES` — the set of entity type IDs that explode.
- The `createExplosion` options control `breaksBlocks` and `causesFire`.
