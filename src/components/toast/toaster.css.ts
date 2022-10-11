import { css } from 'lit';

export default css`
	:host {
		background-color: var(--wp-white);
		bottom: 2rem;
		border-radius: var(--wp-border-radius);
		box-shadow: var(--shadow-smallest);
		right: 2rem;
		position: fixed;
		padding: 1rem 0.25rem;
		width: 180px;
		z-index: 999;
	}
`;
