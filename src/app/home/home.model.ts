export class Home {
    about: string;
    techologies: string;
    howToHire: string;
    aboutHiring: string;
    contacts: string;
    trends: string;

    public constructor(init?: Partial<Home>) {
        Object.assign(this, init);
      }
}
