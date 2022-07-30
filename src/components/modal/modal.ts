import {
    Enums,
	CSS_RESETS,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    html,
    property,
} from 'lit-exports';
import style from './modal.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'modal')
export class WPModal extends WPSizeable {

	static override styles = [CSS_RESETS, style];

	@property()
	name = '';

	render() {
		return html`
		<div id="modal-bg">
			<div role="alert" aria-label=${this.name} class="wp-modal wp-modal--${this.size}">
				<button @click=${this.remove}>x</button>
				<h4>${this.name}</h4>
				<slot></slot>
			</div>
		</div>
		`;
	}
}
