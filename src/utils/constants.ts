export const routes = {
  chart: (path?: string) => `/showcase/chart${path ?? ''}`,
  comments: (path?: string) => `/showcase/comments${path ?? ''}`,
  forms: (path?: string) => `/showcase/forms${path ?? ''}`,
  gallery: (path?: string) => `/showcase/gallery${path ?? ''}`,
  map: (path?: string) => `/showcase/map${path ?? ''}`,
};

export const themeKey = 'data-color-mode';
