<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { schema as formSchema } from "$lib/schemas/login";
  import type { LoginFormSchema } from "$Lib/schemas/login";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  interface Props {
    data: SuperValidated<Infer<LoginFormSchema>>;
  }

  let { data } : Props = $props()

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData } = form;
</script>

<form method="POST" action="?/login">
  <Form.Field {form} name="telefono">
    <Form.Control let:attrs>
      <Form.Label>Teléfono</Form.Label>
      <Input {...attrs} bind:value={$formData.telefono} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="password">
    <Form.Control let:attrs>
      <Form.Label>Contraseña</Form.Label>
      <Input type="password" {...attrs} bind:value={$formData.password} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="submit-button">Iniciar sesión</Form.Button>
</form>
