export class Task {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    unreadCount: number;
    reports: Report[];

    public constructor(init?: Partial<Task>) {
        Object.assign(this, init);
      }
}

export class Report {
    date: string;
    viewed: boolean;
    content: ReportDetails;

    public constructor(init?: Partial<Report>) {
        Object.assign(this, init);
      }
}

class ReportDetails {
    workCompleted: string;
    workPlanned: string;
    problems: string;

    public constructor(init?: Partial<ReportDetails>) {
        Object.assign(this, init);
      }
}