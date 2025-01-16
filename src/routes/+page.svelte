<script lang="ts">
  import {
    Field,
    Control,
    Label,
    FieldErrors,
    Button,
  } from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  import type { PageData } from "./$types";
  import { loginSchema } from "$lib/schemas/login";

  let { data }: { data: PageData } = $props();

  const form = superForm(data.form, {
    validators: zodClient(loginSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form
  method="POST"
  use:enhance
  class="space-y-4 px-4 py-12 w-full md:max-w-lg lg:max-w-lg"
  autocomplete="off"
>
  <Field {form} name="email">
    <Control>
      {#snippet children({ props })}
        <Label for="email">Email</Label>
        <Input
          {...props}
          type="email"
          name="email"
          id="email"
          bind:value={$formData.email}
          autocomplete="off"
        />
      {/snippet}
    </Control>
    <FieldErrors />
  </Field>

  <Field {form} name="password">
    <Control>
      {#snippet children({ props })}
        <Label for="password">Contraseña</Label>
        <Input
          {...props}
          type="password"
          name="password"
          id="password"
          bind:value={$formData.password}
        />
      {/snippet}
    </Control>
    <FieldErrors />
  </Field>

  <Button class="submit-button">Ingresar</Button>
</form>

<a href="/register">No tienes cuenta?, regístrate aqui..</a>
