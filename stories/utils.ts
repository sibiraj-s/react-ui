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
