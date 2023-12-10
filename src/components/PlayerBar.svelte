<script lang="ts">
    import {
        Pause,
        Play,
        VolumeX,
        Volume,
        SkipForward,
        SkipBack,
        Shuffle,
        Repeat,
        Repeat1,
    } from "lucide-svelte";
    import { LoopingMode, playerStore } from "../player-store";

    let seeker = 0;
    let volume = 0;
    const precision = 1000000;

    $: {
        $playerStore.volume = volume / precision;
        $playerStore.playerSeeker = seeker / precision;
    }

    function togglePlay() {
        $playerStore.isPlaying = !$playerStore.isPaused;
        $playerStore.isPaused = !$playerStore.isPaused;
    }

    function toggleMute() {
        $playerStore.isMuted = !$playerStore.isMuted;
    }
</script>

<div class="media-player">
    <div class="controls">
        <div class="controls-left">
            <button>
                <SkipBack />
            </button>
            <button class="play-pause-btn" on:click={togglePlay}>
                {#if $playerStore.isPaused}
                    <Play />
                {:else}
                    <Pause />
                {/if}
            </button>
            <button>
                <SkipForward />
            </button>
            <button
                class="shuffle-btn"
                on:click={() =>
                    ($playerStore.isShuffled = !$playerStore.isShuffled)}
                class:active={$playerStore.isShuffled}
            >
                <Shuffle />
            </button>
            <button
                class="loop-btn"
                on:click={() =>
                    ($playerStore.loopingMode =
                        ($playerStore.loopingMode + 1) % 3)}
                class:active={$playerStore.loopingMode !== LoopingMode.None}
            >
                {#if $playerStore.loopingMode === LoopingMode.Playlist}
                    <Repeat1 />
                {:else}
                    <Repeat />
                {/if}
            </button>
        </div>
        <input
            type="range"
            class="player-slider"
            min="0"
            max={precision}
            bind:value={seeker}
            style={`--value: ${(seeker / precision) * 100}%;`}
        />
        <div class="controls-volume">
            <button class="volume-btn" on:click={toggleMute}>
                {#if $playerStore.isMuted}
                    <VolumeX />
                {:else}
                    <Volume />
                {/if}
            </button>
            <input
                type="range"
                class="volume-slider"
                min="0"
                max={precision}
                bind:value={volume}
                style={`--value: ${(volume / precision) * 100}%;`}
            />
            <div class="volume-slider-popup-container">
                <input
                    type="range"
                    class="volume-slider-popup"
                    min="0"
                    data-orient="vertical"
                    max={precision}
                    bind:value={volume}
                    style={`--value: ${(volume / precision) * 100}%;`}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .media-player {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @apply bg-slate-900 text-white;
    }

    .controls {
        @apply flex flex-1 items-center gap-3 p-3;
    }

    .controls-left {
        @apply flex items-center gap-3;
        & > button > svg {
            @apply w-4 h-4;
        }
        & .play-pause-btn {
            cursor: pointer;
            & > svg {
                height: 1.5rem;
                width: 1.5rem;
            }
        }
    }

    .player-slider {
        @apply flex-1;
    }

    .loop-btn,
    .shuffle-btn {
        cursor: pointer;
    }
    .loop-btn.active,
    .shuffle-btn.active {
        @apply text-[--primary];
    }

    .controls-volume {
        display: flex;
        width: 15%;
        @apply flex items-center relative;
    }

    .volume-btn {
        cursor: pointer;
    }

    .volume-slider {
        width: 100%;
    }

    @media (max-width: 480px) {
        .controls-volume {
            width: auto;
        }
        .volume-slider {
            display: none;
        }
    }

    .volume-slider-popup-container {
        display: none;
        position: absolute;
        width: 100%;
        height: min(12rem, 20vh);
        padding: 0.25rem;
        margin-bottom: 0.25rem;
        @apply bg-black/50;
        bottom: 100%;
        left: 0;
        border-radius: 0.25rem;
    }
    .volume-slider-popup {
    }

    @media (max-width: 480px) {
        .volume-slider-popup-container {
            display: flex;
            position: absolute;
        }
    }
</style>
