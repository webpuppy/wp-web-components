import { css } from 'lit-exports';

export default css`
	:host {
		animation: fade-in 550ms ease;
		display: block;
		opacity: 1;
		padding: .25em;
		pointer-events: none;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
	}
`;
