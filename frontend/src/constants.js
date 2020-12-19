let PORT = process.env.REACT_APP_NODE_ENV === 'test' ? 8010 : 8000;

export const apiUrl = `http://localhost:${PORT}/`;
export const facebookAccess = '824762391699357';