<script lang="ts">
    import { ArrowLeftRight, Cross, X } from "lucide-svelte";
    import { playerStore } from "../player-store";
    import { store } from "../settings-store";

    let debugData: { name: string; type?: string; value: any }[] = [];
    $: {
        debugData = [
            { name: "volume", type: "float", value: $playerStore.volume },
            { name: "isPlaying", type: "bool", value: $playerStore.isPlaying },
            { name: "isPaused", type: "bool", value: $playerStore.isPaused },
            { name: "isMuted", type: "bool", value: $playerStore.isMuted },
            {
                name: "loopingMode",
                type: "number",
                value: $playerStore.loopingMode,
            },
            {
                name: "isShuffled",
                type: "bool",
                value: $playerStore.isShuffled,
            },
            { name: "isSeeking", type: "bool", value: $playerStore.isSeeking },
            {
                name: "playerSeeker",
                type: "float",
                value: $playerStore.playerSeeker,
            },
        ];
    }
    let switchSide = false;
</script>

<div class="debug-menu" class:switch-side={switchSide}>
    <div class="font-bold">Debug Menu</div>
    <div class="flex justify-end gap-1">
        <button
            on:click={() => {
                switchSide = !switchSide;
            }}
        >
            <ArrowLeftRight size={16} />
        </button>
        <button
            on:click={() => {
                $store.debug = !$store.debug;
            }}
        >
            <X size={16} />
        </button>
    </div>
    {#each debugData as { name, type, value }}
        <div>{name}</div>
        {#if type === "bool"}
            {#if value}
                <div class="text-green-500">{value}</div>
            {:else}
                <div class="text-red-500">{value}</div>
            {/if}
        {:else}
            <div>{value}</div>
        {/if}
    {/each}
</div>

<style>
    .debug-menu {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        font-size: 0.7rem;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 1;
        opacity: 0.7;
        max-width: min(70vw, 500px);
        max-height: 70vh;
        border-bottom-left-radius: 0.35rem;

        &.switch-side {
            right: auto;
            left: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0.35rem;
        }

        & > div {
            @apply truncate;
        }

        @apply bg-slate-800/70 overflow-y-auto p-2 gap-2 font-mono backdrop-blur-sm;
    }
</style>
