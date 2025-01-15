<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    title: string;
    description: string;
  }

  let { children, title, description } : Props = $props()
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>{title}</Card.Title>
    <Card.Description>{description}</Card.Description>
  </Card.Header>
  <Card.Content>
    {@render children()}
  </Card.Content>
</Card.Root>