import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import style from './expando.css';

@customElement(enums.COMPONENT_PREFIX + 'expando')
export class WPExpando extends LitElement {
	static override styles = [CSS_RESETS, style];

	@property()
	name: string;

	@state()
	is_open = false;

	toggle() {
		this.is_open = !this.is_open;
	}

	render() {
		return when(
			this.is_open,
			() => html`
				<div @click=${this.toggle} class="row">
					<div>${this.name}</div>
					<div style="font-size: 2rem; cursor:pointer">&#752;</div>
				</div>
				<div class="hidden-text">
					<slot></slot>
				</div>
			`,
			() => html`
				<div @click=${this.toggle} class="row">
					<div>${this.name}</div>
					<div style="font-size: 2rem; cursor:pointer">&#709;</div>
				</div>
			`
		);
		return html``;
	}
}
