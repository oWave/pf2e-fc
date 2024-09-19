import type { ActorPF2e } from "../index.ts";
import type { ActionTrait } from "../../item/ability/index.ts";
import type { ProficiencyRank } from "../../item/base/data/index.ts";
import type { TokenPF2e } from "../../canvas/index.ts";
import type { ChatMessagePF2e } from "../../chat-message/document.ts";
declare const ACTION_COSTS: readonly ["free", "reaction", 0, 1, 2, 3];
type ActionCost = (typeof ACTION_COSTS)[number];
declare const ACTION_SECTIONS: readonly ["basic", "skill", "specialty-basic"];
type ActionSection = (typeof ACTION_SECTIONS)[number];
interface ActionMessageOptions {
    blind: boolean;
    variant: string;
    whisper: string[];
}
interface ActionVariantUseOptions extends Record<string, unknown> {
    actors: ActorPF2e | ActorPF2e[];
    event: Event;
    message: {
        create?: boolean;
    };
    traits: ActionTrait[];
    target: ActorPF2e | TokenPF2e;
}
interface ActionVariant {
    cost?: ActionCost;
    description?: string;
    glyph?: string;
    name?: string;
    slug: string;
    traits: ActionTrait[];
    toMessage(options?: Partial<ActionMessageOptions>): Promise<ChatMessagePF2e | undefined>;
    use(options?: Partial<ActionVariantUseOptions>): Promise<unknown>;
}
interface ActionUseOptions extends ActionVariantUseOptions {
    variant: string;
}
interface Action {
    cost?: ActionCost;
    description?: string;
    glyph?: string;
    img?: string;
    name: string;
    sampleTasks?: Partial<Record<ProficiencyRank, string>>;
    section?: ActionSection;
    slug: string;
    traits: ActionTrait[];
    variants: Collection<ActionVariant>;
    toMessage(options?: Partial<ActionMessageOptions>): Promise<ChatMessagePF2e | undefined>;
    /** Uses the default variant for this action, which will usually be the first one in the collection. */
    use(options?: Partial<ActionUseOptions>): Promise<unknown>;
}
export type { Action, ActionCost, ActionMessageOptions, ActionSection, ActionUseOptions, ActionVariant, ActionVariantUseOptions, };
