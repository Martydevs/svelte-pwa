<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import { LogIn, UserPlus } from 'lucide-svelte';

  let iconSize = 60;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<section class="w-full h-[60dvh] flex flex-col items-center justify-evenly flex-wrap">
  <button class="btn-home-link">
    <LogIn size={iconSize} />
    <span>Iniciar sesión</span>
  </button>
  <button class="btn-home-link">
    <UserPlus size={iconSize} />
    <span>Registrarse</span>
  </button>
</section>