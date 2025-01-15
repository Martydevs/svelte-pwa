<script lang="ts">
  import Card from "@/components/Card.svelte";
  import Hero from "@/components/Hero.svelte";
  
  import type { PageData } from "./$types.js";
  import RegisterForm from "@/components/RegisterForm.svelte";
  import LoginForm from "@/components/LoginForm.svelte";

  interface Props {
    data: PageData;
  }

  let { data } : Props = $props();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<section
  class="w-full h-[60dvh] flex flex-col items-center justify-evenly md:flex-row lg:justify-evenly"
>
  <Card
    title="Registrarse"
    description="Llena el formulario para completar tu registro"
  >
    <RegisterForm data={data.registerForm} />
  </Card>
  <Card
    title="Iniciar sesión"
    description="Inicia sesión para acceder a tu cuenta"
  >
    <LoginForm data={data.loginForm} />
  </Card>
</section>
