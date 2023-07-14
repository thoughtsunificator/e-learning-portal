export const overview = [
  {
    batch_id: "01",
    start: "01/01/23",
    instructor: "Jay Mehta",
    total_classes: 60,
    status: "Completed",
  },
  {
    batch_id: "02",
    start: "21/05/23",
    instructor: "Mehta",
    total_classes: 45,
    status: "Ongoing",
  },
];
export const students = [
  {
    student_username: "stu",
    student_name: "Student Name 1",
    payment: 232,
    enrolled_date: "02/07/2022",
    country: "India",
    phone_number: "+91123456789",
  },
  {
    student_username: "stu",
    student_name: "Student Name 2",
    payment: 13,
    enrolled_date: "02/05/2021",
    country: "India",
    phone_number: "+91123456789",
  },
];
export const batch = [
  {
    batch_id: "1",
    batch_status: "started",
    batch_incharge: "mr willy wonka",
    batch_date: "01/04/2022",
    batch_strength: 11,
  },
  {
    batch_id: "2",
    batch_status: "ongoing",
    batch_incharge: "mr billy lashly",
    batch_date: "02/05/2022",
    batch_strength: 23,
  },
  {
    batch_id: "3",
    batch_status: "completed",
    batch_incharge: "mr john bay",
    batch_date: "03/06/2022",
    batch_strength: 3,
  },
];
export const attendance = [
  {
    batch_id: "B01",
    name: "BIM PLUS 1",
    instructor: "Mr ABC",
  },
  {
    batch_id: "B02",
    name: "BIM PLUS 2",
    instructor: "Mr XYZ",
  },
  {
    batch_id: "B03",
    name: "BIM PLUS 3",
    instructor: "Mr ABC",
  },
  {
    batch_id: "B04",
    name: "BIM PLUS 4",
    instructor: "Mr XYZ",
  },
];
export const live_classes = [
  {
    title: "meeting on rocks",
    meeting_description: "the printing and typesetting",
    date: "22/02/21",
    passcode: 1234,
    meeting_link: "www.demo.com",
    time: "07:30",
    instructor: "Mr. JOHN",
  },
  {
    title: "rocks",
    meeting_description: "Lorem Ipsum is simply dummy",
    date: "22/02/22",
    passcode: 4565,
    meeting_link: "www.demo1.com",
    time: "07:35",
    instructor: "Mr. XYZ",
  },
];
export const courses = [
  {
    course_desc:
      "Welcome to this Node.js course, where you will learn how to use this powerful and versatile JavaScript runtime environment to build scalable, high-performance applications. Whether you are a seasoned developer or a newcomer to JavaScript, this course will provide you with the knowledge and skills you need to build real-world applications using Node.js. Throughout this course, you will start with the basics of Node.js and progress to more advanced topics such as real-time applications and microservices. You will learn how to set up a development environment, use Node.js modules and packages, and work with tools such as npm and Express.js. You will also learn how to use Node.js to build various types of applications, including web servers, REST APIs, and real-time applications. With hands-on exercises and practical examples, you will gain a solid understanding of Node.js and its capabilities, as well as how to use it to build fast, scalable, and high-performance applications. By the end of this course, you will be equipped with the skills and knowledge you need to build real-world applications using Node.js, and be ready to take on new challenges in your career as a developer.",
    course_id: "234532",
    course_short_desc:
      "Learn Node.js to build scalable, high-performance applications. Start with the basics and progress to real-time apps and microservices. Gain hands-on experience with tools like npm and Express.js to build web servers, REST APIs, and more. Build your skills and career as a developer.",
    course_title: "BBIIMM FFUUNNDDAAMMEENNTTAALLS",
    course_duration: 120,
    modules: [
      {
        module_desc_short:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
        module_duration: 75,
        assignments: [
          {
            assignment_id: 1,
            assignment_title: "Assignment 1",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 13,
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
          {
            assignment_id: 2,
            assignment_title: "Assignment 2",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 17,
            module_incharge: "Mr Willy Wonka",
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
        ],
        module_desc:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        mid: 1,
        module_name: "module 1",
        module_incharge: "Mr Willy Wonka",
        order: 3,
        module_resources: [
          {
            resource_link: "http://google.com",
            resource_type: "video",
            resource_id: 1,
            resource_title: "Resource 1",
            resource_desc: "This video explains about the following things",
            order: 1,
          },
          {
            resource_link: "http://google.com",
            resource_type: "document",
            resource_id: 1,
            resource_title: "Resource 2",
            resource_desc: "This document explains about the following things",
            order: 2,
          },
        ],
      },
      {
        module_desc_short:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
        module_duration: 60,
        assignments: [
          {
            assignment_id: 1,
            assignment_title: "Assignment 1",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 13,
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
          {
            assignment_id: 2,
            assignment_title: "Assignment 2",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 17,
            module_incharge: "Mr Willy Wonka",
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
        ],
        module_desc:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        mid: 2,
        module_name: "module 2",
        module_incharge: "Mr Willy Wonka",
        order: 2,
        module_resources: [
          {
            resource_link: "http://google.com",
            resource_type: "video",
            resource_id: 1,
            resource_title: "Resource 1",
            resource_desc: "This video explains about the following things",
            order: 1,
          },
        ],
      },
      {
        assignments: [
          {
            assignment_id: 2,
            assignment_title: "Assignment 2",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 17,
            module_incharge: "Mr Willy Wonka",
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
        ],
        module_desc_short:
          "what is nodejs ? How is it different ? a brief introduction to nodejs",
        module_duration: 150,
        module_desc:
          "Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client's browser. It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome's V8 JavaScript engine.",
        mid: 3,
        module_name: "Intro to Nodejs",
        module_incharge: "Mr Willy Wonka",
        order: 1,
        module_resources: [
          {
            resource_link: "https://www.youtube.com/watch?v=uVwtVBpw7RQ",
            resource_title: "Video On nodejs",
            resource_type: "video",
            resource_id: 1,
            resource_title: "Resource 1",
            resource_desc:
              "Here we get to learn the basics of nodejs and it's understanding",
            order: 1,
          },
          {
            resource_link: "http://google.com",
            resource_title: "text On nodejs",
            resource_type: "text",
            resource_id: 2,
            resource_title: "Resource 2",
            resource_desc:
              "Node.js is an open-source, cross-platform, server-side JavaScript runtime environment that allows developers to build scalable, high-performance applications using JavaScript. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, and it has a rich set of built-in modules that allow developers to easily perform tasks such as networking, file system access, and cryptography. Node.js was initially released in 2009 and has since gained widespread adoption in the developer community due to its speed, scalability, and versatility. It can be used to build a wide range of applications, including web servers, command-line tools, desktop applications, and even IoT devices. Node.js is particularly well-suited for building real-time applications and microservices, as well as for handling large amounts of data and traffic.One of the main advantages of Node.js is its ability to use JavaScript on both the server and client side, which simplifies the development process and makes it easier to build full-stack applications. Additionally, Node.js has a large and active community of developers, which has created a vast ecosystem of third-party packages and tools that make it even more powerful and flexible. Overall, Node.js is a powerful and versatile tool for building fast, scalable, and high-performance applications using JavaScript, and it is a popular choice for many developers and organizations around the world.",
            order: 2,
          },
          {
            resource_link: "http://google.com",
            resource_title: "text On nodejs",
            resource_type: "text",
            resource_id: 3,
            resource_title: "Resource 3",
            resource_desc:
              "Node.js is an open-source, cross-platform, server-side JavaScript runtime environment that allows developers to build scalable, high-performance applications using JavaScript. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, and it has a rich set of built-in modules that allow developers to easily perform tasks such as networking, file system access, and cryptography. Node.js was initially released in 2009 and has since gained widespread adoption in the developer community due to its speed, scalability, and versatility. It can be used to build a wide range of applications, including web servers, command-line tools, desktop applications, and even IoT devices. Node.js is particularly well-suited for building real-time applications and microservices, as well as for handling large amounts of data and traffic.One of the main advantages of Node.js is its ability to use JavaScript on both the server and client side, which simplifies the development process and makes it easier to build full-stack applications. Additionally, Node.js has a large and active community of developers, which has created a vast ecosystem of third-party packages and tools that make it even more powerful and flexible. Overall, Node.js is a powerful and versatile tool for building fast, scalable, and high-performance applications using JavaScript, and it is a popular choice for many developers and organizations around the world.",
            order: 3,
          },
          {
            resource_link: "http://google.com",
            resource_title: "text On nodejs",
            resource_type: "text",
            resource_id: 4,
            resource_title: "Resource 4",
            resource_desc:
              "Node.js is an open-source, cross-platform, server-side JavaScript runtime environment that allows developers to build scalable, high-performance applications using JavaScript. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, and it has a rich set of built-in modules that allow developers to easily perform tasks such as networking, file system access, and cryptography. Node.js was initially released in 2009 and has since gained widespread adoption in the developer community due to its speed, scalability, and versatility. It can be used to build a wide range of applications, including web servers, command-line tools, desktop applications, and even IoT devices. Node.js is particularly well-suited for building real-time applications and microservices, as well as for handling large amounts of data and traffic.One of the main advantages of Node.js is its ability to use JavaScript on both the server and client side, which simplifies the development process and makes it easier to build full-stack applications. Additionally, Node.js has a large and active community of developers, which has created a vast ecosystem of third-party packages and tools that make it even more powerful and flexible. Overall, Node.js is a powerful and versatile tool for building fast, scalable, and high-performance applications using JavaScript, and it is a popular choice for many developers and organizations around the world.",
            order: 4,
          },
          {
            resource_link: "https://vimeo.com/826247937",
            resource_title: " Lecture 3:  Video On nodejs",
            resource_type: "video",
            resource_id: 5,
            resource_title: "Resource 5",
            resource_desc:
              "build full-stack applications. Additionally, Node.js has a large and active community of developers, which has created a vast ecosystem of third-party packages and tools that make it even more powerful and flexible. Overall, Node.js is a powerful and versatile tool for building fast, scalable, and high-performance applications using JavaScript, and it is a popular choice for many developers and organizations around the world",
            order: 5,
          },
          {
            resource_link: "https://www.youtube.com/watch?v=uVwtVBpw7RQ",
            resource_title: "Lecture 2: Video On nodejs",
            resource_type: "video",
            resource_id: 6,
            resource_title: "Resource 6",
            resource_desc:
              "Here we get to learn the basics of nodejs and it's understanding. build full-stack applications. Additionally, Node.js has a large and active community of developers, which has created a vast ecosystem of third-party packages and tools that make it even more powerful and flexible. Overall, Node.js is a powerful and versatile tool for building fast, scalable, and high-performance applications using JavaScript, and it is a popular choice for many developers and organizations around the world",
            order: 6,
          },
          {
            resource_link:
              "https://drive.google.com/file/d/1IjLS6yngSgKSeTm_s7fPDmkLnDwXtgoi/view?usp=share_link",
            resource_title: "basics of nodejs with so and so long title",
            resource_type: "document",
            resource_id: 7,
            resource_title: "Resource 7",
            resource_desc:
              "Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client's browser.",
            order: 7,
          },
        ],
      },
      {
        module_desc_short:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
        module_duration: 60,
        assignments: [
          {
            assignment_id: 1,
            assignment_title: "Assignment 1",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 13,
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
        ],
        module_desc:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        mid: 4,
        module_name: "module 4",
        module_incharge: "Mr Willy Wonka",
        order: 6,
        module_resources: [
          {
            resource_link: "http://google.com",
            resource_type: "video",
            resource_id: 1,
            resource_title: "Resource 1",
            resource_desc: "This video explains about the following things",
            order: 1,
          },
          {
            resource_link: "http://google.com",
            resource_type: "document",
            resource_id: 1,
            resource_title: "Resource 2",
            resource_desc: "This document explains about the following things",
            order: 2,
          },
        ],
      },
      {
        module_desc_short:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
        module_duration: 40,
        assignments: [
          {
            assignment_id: 1,
            assignment_title: "Assignment 1",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 13,
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
          {
            assignment_id: 2,
            assignment_title: "Assignment 2",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 17,
            module_incharge: "Mr Willy Wonka",
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
          {
            assignment_id: 3,
            assignment_title: "Assignment 3",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 17,
            module_incharge: "Mr Willy Wonka",
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
        ],
        module_desc:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        mid: 5,
        module_name: "module 5",
        module_incharge: "Mr Willy Wonka",
        order: 5,
        module_resources: [
          {
            resource_link: "http://google.com",
            resource_type: "video",
            resource_id: 1,
            resource_title: "Resource 1",
            resource_desc: "This video explains about the following things",
            order: 1,
          },
          {
            resource_link: "http://google.com",
            resource_type: "document",
            resource_id: 1,
            resource_title: "Resource 2",
            resource_desc: "This document explains about the following things",
            order: 2,
          },
        ],
      },
      {
        module_desc_short:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
        module_duration: 35,
        assignments: [
          {
            assignment_id: 1,
            assignment_title: "Assignment 1",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 13,
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
          {
            assignment_id: 2,
            assignment_title: "Assignment 2",
            assignment_desc: "you have to do stuff",
            assignment_completion_due: 17,
            module_incharge: "Mr Willy Wonka",
            assignment_resources: [
              {
                resource_type: "document",
                resource_id: 1,
                resource_desc:
                  "This document explains about the following things",
                upload_link: "http://drive.com",
              },
            ],
          },
        ],
        module_desc:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
        mid: 6,
        module_name: "module 6",
        module_incharge: "Mr Willy Wonka",
        order: 4,
        module_resources: [
          {
            resource_link: "http://google.com",
            resource_type: "video",
            resource_id: 1,
            resource_title: "Resource 1",
            resource_desc: "This video explains about the following things",
            order: 1,
          },
          {
            resource_link: "http://google.com",
            resource_type: "document",
            resource_id: 1,
            resource_title: "Resource 2",
            resource_desc: "This document explains about the following things",
            order: 2,
          },
        ],
      },
    ],
  },
];
