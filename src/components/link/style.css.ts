import { css } from 'lit';

export const LINK_STYLES = css`
	:host {
		background-color: transparent;
		color: inherit;
		display: inline-block;
		min-width: fit-content;
	}

	.wp-link {
		background-color: transparent;
		color: var(--wp-calm-blue);
		text-decoration: none;	
	}

	.wp-link:hover {
			color: var(--wp-deep-blue);
			text-shadow: var(--wp-txt-shadow);
	}
	.wp-link--hov-underline:hover {
		text-decoration: underline;
	}

	@media (prefers-reduced-motion: no-preference) {
		.wp-link {
			transition: all 380ms ease-in-out;
		}
		
	}
`;
