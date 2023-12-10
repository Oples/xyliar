<script lang="ts">
    import PlayerBar from "./components/PlayerBar.svelte";
    import DebugMenu from "./lib/DebugMenu.svelte";
    import Greet from "./lib/Greet.svelte";
    import TailwindCss from "./lib/TailwindCss.svelte";
    import { playerStore } from "./player-store";
    import { store } from "./settings-store";
    import "./styles.css";
</script>

<TailwindCss />

<main class="bg-gray-950 w-full h-full flex flex-col">
    <div class="flex-1">
        <h1 class="title">Xyliar</h1>
        <!-- <Greet /> -->
    </div>
    {#if $store.debug}
        <DebugMenu />
    {/if}
    <PlayerBar />
</main>

<style>
    .title {
        @apply text-3xl tracking-wider font-bold p-2;
    }
</style>
