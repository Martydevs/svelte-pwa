<script lang="ts">
  import { enhance } from "$app/forms";

  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { superForm } from "sveltekit-superforms";

  import type { PageData } from "./$types";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { loginSchema } from "$lib/schemas/login";

  let { data }: { data: PageData } = $props();

  const form = superForm(data.form, {
    validators: zodClient(loginSchema),
  });
  const { form: formData } = form;
</script>

<form method="POST" use:enhance class="space-y-4 px-4 py-12 w-full max-w-lg">
  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <Input {...props} type="email" bind:value={$formData.email}></Input>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="password">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Contraseña</Form.Label>
        <Input {...props} type="password" bind:value={$formData.password}
        ></Input>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Button class="submit-button">Ingresar</Form.Button>
</form>

<a href="/register">No tienes cuenta?, regístrate aqui..</a>
