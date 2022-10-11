import { css } from 'lit';

export default css`
	:host {
		background-color: var(--wp-body-bg);
		box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
			rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
		display: block;
		height: 100%;
		position: relative;
		transition: box-shadow 500ms, background-color 400ms ease-in-out;
		width: fit-content;
	}

	.drawer {
		animation: slide-drawer 200ms ease;
		background-color: var(--wp-body-bg);
		color: var(--wp-body-color);
		height: 100%;
		position: fixed;
		inset: 0;
		transform: translateX(0);
		width: 100%;
		z-index: 999;
	}

	.close {
		background-color: transparent;
		border-color: transparent;
		border-radius: var(--wp-border-radius);
		cursor: pointer;
		color: var(--wp-danger);
		display: block;
		line-height: var(--wp-content-line);
		float: right;
		font-size: 28px;
		padding: 0.25em;
	}

	@keyframes slide-drawer {
		0% {
			transform: translateX(-5rem);
		}
	}

	.wp-sbr {
		height: 100vh;
	}

	.wp-sbr-hdr {
		display: flex;
	}

	.wp-sbr--icon {
		display: none;
	}

	.wp-sbr--burger {
		background-color: transparent;
		border-color: transparent;
		border-radius: var(--wp-border-radius);
		cursor: pointer;
		display: block;
		font-size: 28px;
		line-height: var(--wp-content-line);
		padding: 1em;
	}

	.wp-sbr-hdr,
	.wp-sbr--icon {
		align-items: center;
		color: var(--wp-body-color);
		justify-content: space-evenly;
		text-decoration: none;
	}

	::slotted(*) {
		display: none;
	}

	.wp-sbr-hdr h4 {
		font-weight: 400;
	}

	@media (min-width: 720px) {
		:host,
		aside {
			width: var(--wp-sidebar-width);
		}

		.wp-sbr--burger {
			display: none;
		}

		.wp-sbr--icon {
			display: flex;
		}

		::slotted(*) {
			display: block;
		}
	}
`;
