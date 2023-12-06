<script lang="ts">
    import PlayerBar from "./components/PlayerBar.svelte";
    import Greet from "./lib/Greet.svelte";
    import TailwindCss from "./lib/TailwindCss.svelte";
    import "./styles.css";
</script>

<TailwindCss />

<main class="bg-gray-950 w-full h-full flex flex-col">
    <div class="flex-1">
        <h1 class="">Welcome to Tauri!</h1>
        <Greet />
    </div>
    <PlayerBar />
</main>

<style>
</style>
