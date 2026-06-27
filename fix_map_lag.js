// Global Map-Lag Fix for 1.21.1
// This prevents server hangs when opening chests in modded terrain.
LootJS.modifiers((event) => {
    // Targets ALL loot tables across the entire game
    event.addTableModifier(/.*/)
         .removeLoot("minecraft:filled_map")
         .removeLoot("minecraft:map");
});
