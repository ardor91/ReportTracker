export class Employee {
    id: number;
    firstName: number;
    lastName: number;
    head: Head;
    students: Student[];

    public constructor(init?: Partial<Employee>) {
        Object.assign(this, init);
      }
}

class Student {
    id: number;
    firstName: string;
    lastName: string;

    public constructor(init?: Partial<Student>) {
        Object.assign(this, init);
      }
}

class Head {
    id: number;
    firstName: string;
    lastName: string;

    public constructor(init?: Partial<Head>) {
        Object.assign(this, init);
      }
}