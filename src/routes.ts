export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/about-vision-web', label: 'About Vision Web', pageFile: 'AboutVisionWebPage' },
];
