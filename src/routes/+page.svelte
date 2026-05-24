<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<main>
	<hgroup>
		<h1>Where am <a href="https://erxclau.me">I</a>?</h1>
	</hgroup>
	{#if data.location === null}
		<p>No location found.</p>
	{:else}
		<section style="display: grid; gap: 0.5rem;">
			<div style="font-size: 1.75rem;">
				<p>{data.location.city}, {data.location.state}</p>
				<p>{data.location.region}</p>
			</div>

			<p style="font-size: 1.5rem">{data.location.temperature}, {data.location.condition}</p>
		</section>

		<section id="last-updated">
			<p>
				This page was last updated on {data.location.lastUpdated} using data from {data.location
					.deviceName}.
			</p>
			<p>
				The device runs an Apple Shortcuts automation that POSTs to Cloudflare Workers KV with the
				“Get Contents of URL” action.
			</p>
		</section>
	{/if}
</main>

<style>
	main {
		max-width: 80ch;
		width: 100%;
		height: 100dvh;
		margin: auto;
		padding: 1rem;
		box-sizing: border-box;

		display: grid;
		place-content: center center;
		gap: 1rem;
	}

	h1 {
		font-family: var(--font-headline);
		color: var(--color-headline);
		margin: 0;
		font-weight: 300;
		font-size: 1.125rem;
	}

	h1 a {
		color: var(--color-headline);
	}

	p {
		margin: 0;
	}

	#last-updated {
		font-family: var(--font-sans);
		color: var(--color-neutral);
		display: grid;
		gap: 0.25rem;
	}

	#last-updated p {
		font-size: 1rem;
		text-wrap: pretty;
	}
</style>
