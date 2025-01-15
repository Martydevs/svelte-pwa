<script lang="ts">
  import type { ActionData, PageData } from "./$types.js";
  import Card from "@/components/Card.svelte";
  import Hero from "@/components/Hero.svelte";
  import RegisterForm from "@/components/RegisterForm.svelte";
  import LoginForm from "@/components/LoginForm.svelte";
  import { showToastError, showToastSuccess } from "@/utils/sonner";

  interface Props {
    data: PageData;
    form: ActionData
  }

  let { data, form } : Props = $props();

  $effect(() => {
    if (form?.registerForm) {
      if (!form.success) {
        showToastError(form.message)
      } else {
        showToastSuccess(form.message)
      }
    }
  })

  $effect(() => {
    if (form?.loginForm) {
      if (!form.success) {
        showToastError(form.message)
      } else {
        showToastSuccess(form.message)
      }
    }
  })
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<section class="w-full h-[60dvh] flex flex-col items-center justify-evenly md:flex-row lg:justify-evenly">
  <Card title="Registrarse" description="Llena el formulario para completar tu registro">
    <RegisterForm data={data.registerForm} />
  </Card>
  <Card title="Iniciar sesión" description="Inicia sesión para acceder a tu cuenta">
    <LoginForm data={data.loginForm} />
  </Card>
</section>
