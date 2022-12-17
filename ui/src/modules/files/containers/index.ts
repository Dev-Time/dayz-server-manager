import {
    CategoryRenderer,
    CheckboxRenderer,
    TypesComponent,
    UsageRenderer,
    ValueRenderer,
} from './types/types.component';

export const containers = [TypesComponent];

export const renderers = [CheckboxRenderer, CategoryRenderer, ValueRenderer, UsageRenderer];

export * from './types/types.component';
