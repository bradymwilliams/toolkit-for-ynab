module.exports = {
  name: 'HideAddCategoryUnlessUnique',
  type: 'checkbox',
  default: false,
  section: 'budget',
  title: 'Hide Add Category When Searching Unless Unique',
  description:
    'Hides the "Add [input] Category" when assigning category when [input] returns matches. This prevents erroneous category creation when searching.',
};
