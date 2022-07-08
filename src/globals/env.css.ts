import { css } from 'lit';

export const BTN_PRIMARY_COLOR = css`#b913b9`;
export const BTN_BASE_COLOR = css`#4a4ad5`;
export const BTN_TXT_COLOR_00 = css`#ffffff`;
export const BTN_TXT_COLOR_01 = css`#f2f1f1`;
export const BTN_CONFIRM_COLOR = css`#42c062`;
export const BTN_DANGER_COLOR = css`#da2a2a`;

export const CSS_RESETS = css`
    :host {
        --wp-base-black: #3d3a3a;
        --wp-btn-primary: #b913b9;
        --wp-btn-base: #4a4ad5;
        --wp-btn-txt-00: #ffffff;
        --wp-btn-txt-01: #f2f1f1;
        --wp-btn-confirm: #42c062;
        --wp-btn-danger: #da2a2a;
        --shadow-color: rgba(0, 0, 0, 0.1);
    }
    * {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
    }
    h1 {
        font-size: 2.25rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    p,
    header {
        /* color: #3d3a3a; */
        display: block;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
            'Noto Color Emoji';
        line-height: 1.8em;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-block-start: 1.25em;
        margin-block-end: 1.25em;
    }
`;
