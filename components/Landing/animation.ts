export const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
  },
};

export const slideUpText = {
  initial: {
    y: 400,
    opacity: 0,
  },
  enter: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 2.5 * i },
  }),
};

export const downArrowVariant = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 3.5 },
  },
};
