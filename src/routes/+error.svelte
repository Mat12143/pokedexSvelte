<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex w-full justify-center py-10">
	<h1 class="text-secondary text-center text-xl">{$page.status}: {$page.error?.message}</h1>
</div>
