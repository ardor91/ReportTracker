import { Employee } from './employee.model';
import { Skill } from './skill.model';
import { Task } from './task.model';

export class Student {
    id: number;
    firstName: string;
    lastName: string;
    level: number;
    startDate: string;
    status: string;
    head: Employee;
    contacts: Contact[];
    skills: Skill[];
    tasks: Task[];
    _id: String;
    email: String;
    public constructor(init?: Partial<Student>) {
        Object.assign(this, init);
      }
}

class Contact {
    type: string;
    value: string;

    public constructor(init?: Partial<Contact>) {
        Object.assign(this, init);
      }
}
