import { StaticCssOptions } from '@pandacss/types';
import { recipes, slotRecipes } from '../recipes';

const allPresetRecipes = [...Object.keys(recipes), ...Object.keys(slotRecipes)];

type RecipeRules = StaticCssOptions['recipes'];

export const configureStaticCss = (rules: StaticCssOptions = {}): StaticCssOptions => {
  const presetRules: RecipeRules = allPresetRecipes.reduce((acc, recipe) => {
    return {
      ...acc,
      [recipe]: ['*'],
    };
  }, {} as RecipeRules);

  return {
    ...rules,
    recipes: {
      ...presetRules,
      ...rules.recipes,
    },
  };
};
