/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ILogo {
  text: string;
  slug: string;
  url: string;
  icon: JSX.Element;
}
export interface INavLink extends ILogo {}
