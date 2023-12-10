<script lang="ts">
    import { onMount } from "svelte";
    import { playerStore } from "../player-store";

    let slider: HTMLInputElement;

    onMount(() => {
        slider.value = $playerStore.playerSeeker.toString();
    });
</script>

<input
    type="range"
    class="player-slider"
    min="0"
    max="1000000"
    bind:this={slider}
/>

<style>
    .player-slider {
        @apply w-full;
    }
</style>
