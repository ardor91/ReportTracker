import { Employee } from './employee.model';
import { Skill } from './skill.model';
import { Task } from './task.model';

export class Student {
    id: number;
    firstName: string;
    lastName: string;
    level: number;
    head: Employee;
    contacts: Contact[];
    skills: Skill[];
    tasks: Task[];

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
