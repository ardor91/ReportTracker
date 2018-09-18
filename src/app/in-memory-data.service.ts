import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { 
        id: 1, 
        firstName: 'Kek',
        lastName: 'Ololoev',
        head: {},
        level: 10,
        startDate: '2014-01-02T00:00:00',
        contacts: [
            {
                type: "phone",
                value: "+3750440001122"
            },
            {
                type: "skype",
                value: "ololoev312"
            },
            {
                type: "skype",
                value: "ololoev3126545rrrr6"
            },
            {
                type: "skype",
                value: "olol62"
            },
            {
                type: "skype",
                value: "6545rrrr6"
            },
            {
                type: "skype",
                value: "o5455"
            }
        ],
        skills: [
            {
                name: "Angular",
                experience: 1
            },
            {
                name: "NodeJS",
                experience: 4
            }
        ],
        tasks: [
            {
                name: "Angular Tour Of Heroes",
                description: "Research tutorial",
                startDate: "2018-01-02T00:00:00",
                endDate: "2018-03-05T00:00:00",
                reports: [
                    {
                        date: "2018-03-02T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-03-02T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    }
                ]
            },
            {
                name: "Angular Tour Of Heroes - Enhancement",
                description: "Continue studying. Implement MongoDB integration, Material styles, etc.",
                startDate: "2018-03-02T00:00:00",
                endDate: "",
                reports: [
                    {
                        date: "2018-07-01T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-02T00:00:00",
                        content: {
                            workCompleted: "BLYAAAAA",
                            workPlanned: "PIZDES!!!!!!!!!!",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-03T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-04T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-05T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-06T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-07T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-08T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-09T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-10T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    },
                    {
                        date: "2018-07-11T00:00:00",
                        content: {
                            workCompleted: "Olallaa",
                            workPlanned: "Tratataat",
                            problems: "AAAAAAAAAAAAAAA"
                        }
                    }
                    
                ]
            },
            {
                name: "Angular Tour Of Heroes - Enhancement 2",
                description: "Continue studying. Implement MongoDB integration, Material styles, etc. Continue studying. Implement MongoDB integration, Material styles, etc. Continue studying. Implement MongoDB integration, Material styles, etc.",
                startDate: "2018-03-02T00:00:00",
                endDate: "",
                reports: [
                    {
                        date: "1 June 2018",
                        content: "Completed 1st lesson"
                    },
                    {
                        date: "10 June 2018",
                        content: "Completed 2nd lesson"
                    }
                ]
            },
            {
                name: "Angular Tour Of Heroes - Enhancement 3",
                description: "Continue studying. Implement MongoDB integration, Material styles, etc. Continue studying. Implement MongoDB integration, Material styles, etc. Continue studying. Implement MongoDB integration, Material styles, etc.",
                startDate: "2018-03-02T00:00:00",
                endDate: "",
                reports: [
                    {
                        date: "1 June 2018",
                        content: "Completed 1st lesson"
                    },
                    {
                        date: "10 June 2018",
                        content: "Completed 2nd lesson"
                    }
                ]
            },
            {
                name: "Angular Tour Of Heroes - Enhancement 4",
                description: "Continue studying. Implement MongoDB integration, Material styles, etc.",
                startDate: "2018-03-02T00:00:00",
                endDate: "",
                reports: [
                    {
                        date: "1 June 2018",
                        content: "Completed 1st lesson"
                    },
                    {
                        date: "10 June 2018",
                        content: "Completed 2nd lesson"
                    }
                ]
            },
            {
                name: "Angular Tour Of Heroes - Enhancement 5",
                description: "Continue studying. Implement MongoDB integration, Material styles, etc.",
                startDate: "2018-03-02T00:00:00",
                endDate: "2018-04-02T00:00:00",
                reports: [
                    {
                        date: "1 June 2018",
                        content: "Completed 1st lesson"
                    },
                    {
                        date: "10 June 2018",
                        content: "Completed 2nd lesson"
                    }
                ]
            }
            ,
            {
                name: "Angular Tour Of Heroes - Enhancement 5",
                description: "Continue studying. Implement MongoDB integration, Material styles, etc.",
                startDate: "2018-03-02T00:00:00",
                endDate: "2018-03-02T00:00:00",
                reports: [
                    {
                        date: "1 June 2018",
                        content: "Completed 1st lesson"
                    },
                    {
                        date: "10 June 2018",
                        content: "Completed 2nd lesson"
                    }
                ]
            }
        ] 
      },
      { 
        id: 2, 
        firstName: 'Sidor',
        lastName: 'Petrov',
        head: {},
        level: 4,
        startDate: '2018-09-01T00:00:00',      
        contacts: [
            {
                type: "phone",
                value: "+3750440001133"
            },
            {
                type: "skype",
                value: "spetrov312"
            }
        ],
        skills: [
            {
                name: "Angular",
                experience: 4
            },
            {
                name: "NodeJS",
                experience: 1
            }
        ],
        tasks: [
            {
                name: "Angular Tour Of Heroes",
                description: "Research tutorial",
                startDate: "2018-03-02T00:00:00",
                endDate: "",
                reports: [
                    {
                        date: "1 June 2018",
                        content: "Completed 1st lesson"
                    },
                    {
                        date: "10 June 2018",
                        content: "Completed 2nd lesson"
                    }
                ]
            }
        ] 
      }
    ];
    const employees = [
        {
            id: 1,
            firstName: "Maksim",
            lastName: "Katsuba",
            head: {
                id: 2,
                firstName: "Lavy",
                lastName: "Itzhaky"
            },
            students: [
                {
                    id: 1,
                    firstName: "Kek",
                    lastName: "Ololoev"
                }
            ]
        }
    ]
    return {students, employees};
  }
}