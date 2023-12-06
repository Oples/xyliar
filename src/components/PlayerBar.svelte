<script lang="ts">
    import { Pause, Play } from "lucide-svelte";

    let isPlaying = false;
    let volume = 50;

    function togglePlay() {
        isPlaying = !isPlaying;
    }

    function changeVolume(event: any) {
        volume = event.target.value;
    }
</script>

<div class="media-player">
    <div class="controls">
        <button class="play-pause-btn" on:click={togglePlay}>
            {#if isPlaying}
                <Pause />
            {:else}
                <Play />
            {/if}
        </button>
        <input
            type="range"
            class="volume-slider"
            min="0"
            max="100"
            bind:value={volume}
            on:input={changeVolume}
        />
    </div>
</div>

<style>
    .media-player {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background-color: #333;
        color: white;
    }

    .controls {
        @apply flex flex-1 items-center;
    }

    .play-pause-btn {
        margin-right: 10px;
        cursor: pointer;
    }

    .volume-slider {
        @apply flex-1;
    }
</style>
