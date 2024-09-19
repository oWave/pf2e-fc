declare const ATTRIBUTE_ABBREVIATIONS: Set<"str" | "dex" | "con" | "int" | "wis" | "cha">;
declare const CREATURE_ACTOR_TYPES: readonly ["character", "npc", "familiar"];
declare const ACTOR_TYPES: readonly ["army", "character", "familiar", "hazard", "loot", "npc", "party", "vehicle"];
declare const SAVE_TYPES: readonly ["fortitude", "reflex", "will"];
declare const IMMUNITY_TYPES: Set<"arcane" | "divine" | "occult" | "primal" | "light" | "visual" | "physical" | "bludgeoning" | "piercing" | "slashing" | "bleed" | "vitality" | "void" | "acid" | "cold" | "electricity" | "fire" | "sonic" | "force" | "precision" | "adamantine" | "cold-iron" | "dawnsilver" | "duskwood" | "orichalcum" | "silver" | "energy" | "mental" | "poison" | "spirit" | "healing" | "abysium" | "djezet" | "inubrix" | "noqual" | "siccatite" | "blinded" | "clumsy" | "confused" | "controlled" | "dazzled" | "deafened" | "doomed" | "drained" | "enfeebled" | "fascinated" | "fatigued" | "fleeing" | "frightened" | "grabbed" | "immobilized" | "off-guard" | "paralyzed" | "persistent-damage" | "petrified" | "prone" | "restrained" | "sickened" | "slowed" | "stunned" | "stupefied" | "unconscious" | "wounded" | "wood" | "curse" | "custom" | "air" | "alchemical" | "area-damage" | "auditory" | "critical-hits" | "death-effects" | "detection" | "disease" | "earth" | "emotion" | "fear-effects" | "fortune-effects" | "illusion" | "inhaled" | "magic" | "metal" | "misfortune-effects" | "non-magical" | "nonlethal-attacks" | "object-immunities" | "olfactory" | "plant" | "polymorph" | "possession" | "radiation" | "salt-water" | "scrying" | "sleep" | "spell-deflection" | "swarm-attacks" | "swarm-mind" | "trip" | "unarmed-attacks" | "water" | "holy" | "unholy">;
declare const WEAKNESS_TYPES: Set<"arcane" | "divine" | "occult" | "primal" | "light" | "physical" | "bludgeoning" | "piercing" | "slashing" | "bleed" | "vitality" | "void" | "acid" | "cold" | "electricity" | "fire" | "sonic" | "force" | "precision" | "adamantine" | "cold-iron" | "dawnsilver" | "duskwood" | "orichalcum" | "silver" | "energy" | "mental" | "poison" | "spirit" | "abysium" | "djezet" | "inubrix" | "noqual" | "siccatite" | "spells" | "persistent-damage" | "wood" | "custom" | "air" | "alchemical" | "area-damage" | "critical-hits" | "earth" | "emotion" | "metal" | "non-magical" | "nonlethal-attacks" | "plant" | "radiation" | "salt-water" | "unarmed-attacks" | "water" | "holy" | "unholy" | "all-damage" | "arrow-vulnerability" | "axe-vulnerability" | "ghost-touch" | "glass" | "magical" | "salt" | "splash-damage" | "vampire-weaknesses" | "vorpal" | "vorpal-fear" | "vulnerable-to-sunlight" | "weapons" | "weapons-shedding-bright-light">;
declare const RESISTANCE_TYPES: Set<"arcane" | "divine" | "occult" | "primal" | "light" | "physical" | "bludgeoning" | "piercing" | "slashing" | "bleed" | "vitality" | "void" | "acid" | "cold" | "electricity" | "fire" | "sonic" | "force" | "precision" | "adamantine" | "cold-iron" | "dawnsilver" | "duskwood" | "orichalcum" | "silver" | "energy" | "mental" | "poison" | "spirit" | "nonlethal" | "abysium" | "djezet" | "inubrix" | "noqual" | "siccatite" | "spells" | "persistent-damage" | "wood" | "custom" | "air" | "alchemical" | "area-damage" | "critical-hits" | "earth" | "metal" | "non-magical" | "nonlethal-attacks" | "plant" | "radiation" | "salt-water" | "unarmed-attacks" | "water" | "holy" | "unholy" | "all-damage" | "ghost-touch" | "magical" | "salt" | "vorpal" | "weapons" | "weapons-shedding-bright-light" | "axes" | "damage-from-spells" | "protean-anatomy" | "vorpal-adamantine">;
declare const UNAFFECTED_TYPES: Set<"bleed" | "vitality" | "void" | "spirit" | "chaotic" | "evil" | "good" | "lawful">;
/** All skill slugs that are part of the core system. Used for validation. */
declare const CORE_SKILL_SLUGS: Set<"crafting" | "acrobatics" | "arcana" | "athletics" | "deception" | "diplomacy" | "intimidation" | "medicine" | "nature" | "occultism" | "performance" | "religion" | "society" | "stealth" | "survival" | "thievery">;
declare const MOVEMENT_TYPES: readonly ["land", "burrow", "climb", "fly", "swim"];
/** Actor types that are valid for token size linking */
declare const SIZE_LINKABLE_ACTOR_TYPES: Set<string>;
export { ACTOR_TYPES, ATTRIBUTE_ABBREVIATIONS, CORE_SKILL_SLUGS, CREATURE_ACTOR_TYPES, IMMUNITY_TYPES, MOVEMENT_TYPES, RESISTANCE_TYPES, SAVE_TYPES, SIZE_LINKABLE_ACTOR_TYPES, UNAFFECTED_TYPES, WEAKNESS_TYPES, };
