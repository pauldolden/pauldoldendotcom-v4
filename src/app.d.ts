import { PostMetadata } from './lib/types/PostMetadata';
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		PostMetadata: PostMetadata;
	}
	interface HTMLAttributes {
		clickoutside: () => void;
	}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
