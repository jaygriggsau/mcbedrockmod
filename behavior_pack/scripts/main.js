import { world } from "@minecraft/server";

// Radius/power of the explosion produced when a zombie dies.
const EXPLOSION_RADIUS = 3;

// Entity type IDs that should explode on death.
const EXPLODING_ENTITIES = new Set([
  "minecraft:zombie",
  "minecraft:zombie_villager",
  "minecraft:husk",
  "minecraft:drowned",
]);

world.afterEvents.entityDie.subscribe((event) => {
  const entity = event.deadEntity;

  if (!EXPLODING_ENTITIES.has(entity.typeId)) {
    return;
  }

  // The entity is already dead, so capture its last known location/dimension.
  const { dimension, location } = entity;

  dimension.createExplosion(location, EXPLOSION_RADIUS, {
    breaksBlocks: true,
    causesFire: false,
  });
});
