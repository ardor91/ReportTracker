export class Task {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    reports: Report[];

    public constructor(init?: Partial<Task>) {
        Object.assign(this, init);
      }
}

class Report {
    date: string;
    content: string;

    public constructor(init?: Partial<Report>) {
        Object.assign(this, init);
      }
}