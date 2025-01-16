<script lang="ts">
  import {
    Control,
    Description,
    Field,
    FieldErrors,
    Label,
    Button,
  } from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import type { PageData } from "./$types";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { registerSchema } from "@/schemas/register";

  let { data }: { data: PageData } = $props();

  const form = superForm(data.form, {
    validators: zodClient(registerSchema),
  });

  const { form: formdata, enhance } = form;
</script>

<form method="POST" use:enhance>
  <Field {form} name="name">
    <Control>
      {#snippet children({ props })}
        <Label for="name">Nombre</Label>
        <Input {...props} type="text" id="name" bind:value={$formdata.name} />
      {/snippet}
    </Control>
    <FieldErrors />
  </Field>

  <Field {form} name="email">
    <Control>
      {#snippet children({ props })}
        <Label for="email">Email</Label>
        <Input
          {...props}
          type="email"
          id="email"
          bind:value={$formdata.email}
        />
      {/snippet}
    </Control>
    <FieldErrors />
  </Field>

  <Field {form} name="image">
    <Control>
      {#snippet children({ props })}
        <Label for="image">Imagen</Label>
        <Input {...props} type="file" id="image" bind:value={$formdata.image} />
      {/snippet}
    </Control>
    <Description
      >La imagen debe ser en formato .jpg o .png, opcional</Description
    >
    <FieldErrors />
  </Field>

  <Field {form} name="password">
    <Control>
      {#snippet children({ props })}
        <Label for="password">Contraseña</Label>
        <Input
          {...props}
          type="password"
          id="password"
          bind:value={$formdata.password}
        />
      {/snippet}
    </Control>
    <Description>Debe tener al menos 8 caracteres</Description>
    <FieldErrors />
  </Field>
  <Button class="submit-button">Registrarse</Button>
</form>

<a href="/">Ya tienes cuenta?, inicia sesión aquí</a>
