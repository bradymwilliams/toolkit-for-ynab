import { Feature } from 'toolkit/extension/features/feature';

export class HideAddCategoryUnlessUnique extends Feature {
  injectCSS() {
    return require('./index.css');
  }
}
