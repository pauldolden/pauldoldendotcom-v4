export interface PostMetadata {
	title: string;
	date: Date;
	category: string[];
	image: string;
	description: string;
	path: string;
	stage: 'draft' | 'published';
	photographer: 'string';
	photographerLink: 'string';
}
