import { css } from '../../globals/exports';

export default css`
:host {
	display: inline-block;
	font-size: 20px;
	margin: 1rem auto;
	text-align: center;
}

.wp-loading {
	animation-name: spinner;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	max-height: 72px;
	max-width: 72px;
}

.wp-loading-reverse {
	animation-name: spinner-reverse;
}

.wp-loading--fast {
	animation-duration: 535ms;
}

.wp-loading--normal {
	animation-duration: 835ms;
}

@keyframes spinner {
	0% {
		transform: rotate(360deg);
	}
}
@keyframes spinner-reverse {
	0% {
		transform: rotate(-360deg);
	}
}
`;
