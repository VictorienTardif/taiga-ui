import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiStatus} from '@taiga-ui/legacy/utils';

export interface TuiInputTagOptions {
    readonly autoColor: boolean;
    readonly separator: RegExp | string;
    readonly tagStatus: TuiStatus;
    readonly uniqueTags: boolean;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    autoColor: false,
    separator: ',',
    tagStatus: 'default',
    uniqueTags: true,
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for InputTag component
 */
export const TUI_INPUT_TAG_OPTIONS = tuiCreateToken(TUI_INPUT_TAG_DEFAULT_OPTIONS);

export function tuiInputTagOptionsProvider(
    options: Partial<TuiInputTagOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TAG_OPTIONS,
        options,
        TUI_INPUT_TAG_DEFAULT_OPTIONS,
    );
}
