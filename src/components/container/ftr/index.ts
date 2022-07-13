import FTR_STYLES from './style.css';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
	CSS_RESETS
} from '../../../globals';


@customElement(Enums.default.COMPONENT_PREFIX + 'ftr')
export class WPFtr extends LitElement {

	static override styles = [CSS_RESETS, FTR_STYLES];

	render() {
		return html`
		<footer class="wp-ftr">
			<slot></slot>
			&copy;2022
		</footer>
		`;
	}
}
