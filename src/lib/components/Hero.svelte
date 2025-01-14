<script lang="ts">
  import { Waypoints } from "lucide-svelte";

  let iconSize = 90;
</script>

<section class="w-full h-[40dvh] flex flex-col items-center justify-center bg-primary">
  <span>
    <Waypoints size={iconSize} />
  </span>
  <div class="flex flex-col items-center">
    <span class='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent'>
      Net
    </span>
    <p class="text-xl md:text-2xl lg:text-3xl">Tu grupo conexión mas cercano</p>
  </div>
</section>

