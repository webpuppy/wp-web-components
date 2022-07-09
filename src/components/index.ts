export * from './btn';
export * from './link';
export * from './container';
import { WPBtn } from './btn';
import { WPNav } from './container/hdr';
import { WPLink } from './link';
import { WPHdr, WPTag, WPTxt } from './container/txt-section';

/**
 * Global Map For Packaged Tags
 */
declare global {
    interface HTMLElementTagNameMap {
		'wp-nav': WPNav;
        'wp-btn': WPBtn;
        'wp-txt': WPTxt;
        'wp-hdr': WPHdr;
        'wp-tag': WPTag;
        'wp-link': WPLink;
    }
}
