<script lang="ts">
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { schema as formSchema } from "$lib/schemas/register";
  import type { RegisterFormSchema } from "$lib/schemas/register";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";

  interface Props {
    data: SuperValidated<Infer<RegisterFormSchema>>;
  }

  let { data } : Props = $props()

  const form = superForm(data, {
    validators: zodClient(formSchema),
  });

  const { form: formData } = form;
</script>

<form method="POST" action="?/register">
  <Form.Field {form} name="nombre">
    <Form.Control let:attrs>
      <Form.Label>Nombre</Form.Label>
      <Input type="text" {...attrs} bind:value={$formData.nombre} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="apellido">
    <Form.Control let:attrs>
      <Form.Label>Apellido</Form.Label>
      <Input type="text" {...attrs} bind:value={$formData.apellido} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="telefono">
    <Form.Control let:attrs>
      <Form.Label>Teléfono</Form.Label>
      <Input type="tel" {...attrs} bind:value={$formData.telefono} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} name="edad">
    <Form.Control let:attrs>
      <Form.Label>Edad</Form.Label>
      <Input type="number" {...attrs} bind:value={$formData.edad} />
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
