const disableControl = (controlName: string) => {
  return {
    [controlName]: {
      table: {
        disable: true,
      },
    },
  };
};

export const disableControls = (controls: string | string[]) => {
  if (typeof controls === 'string') {
    return disableControl(controls);
  }

  return controls.reduce((disabledControls, control) => {
    return {
      ...disabledControls,
      ...disableControl(control),
    };
  }, {});
};

export const showOnlyControls = (controls: string | string[] = []): RegExp => {
  const excludeItems: string[] = !Array.isArray(controls) ? [controls] : controls;

  // Escape special characters in each item and join them with '|' for the negative lookahead.
  const excludePattern = excludeItems.map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const pattern = `^(?!(?:${excludePattern})$).*$`;
  return new RegExp(pattern);
};
