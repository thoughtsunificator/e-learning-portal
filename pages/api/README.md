# APIs documentation

| URI                   | Available methods |
| --------------------- | ------------------ |
| [/api/admin/v1/login](#admin-logi) | [POST](#admin-login-post)
| [/api/admin/v1/attendances](#admin-attendance) | [GET](#admin-attendance-get) [POST](#admin-attendance-post) [PATCH](#admin-attendance-patch) [DELETE](#admin-attendance-delete)
| [/api/admin/v1/batches](#admin-batche) | [GET](#admin-batch-get) [POST](#admin-batch-post) [PATCH](#admin-batch-patch) [DELETE](#admin-batch-delete)
| [/api/admin/v1/courses](#admin-courses) | [GET](#admin-courses-get) [POST](#admin-courses-post) [PATCH](#admin-courses-patch) [DELETE](#admin-courses-delete)
| [/api/admin/v1/modules](#admin-modules) | [GET](#admin-modules-get) [POST](#admin-modules-post) [PATCH](#admin-modules-patch) [DELETE](#admin-modules-delete)
| [/api/admin/v1/overview](#admin-overview) | [GET](#admin-overview-get)
| [/api/admin/v1/students](#admin-students) | [GET](#admin-students-get) [POST](#admin-students-post) [PATCH](#admin-students-patch) [DELETE](#admin-students-delete)
| [/api/admin/v1/live_classes](#admin-live-class) | [GET](#admin-live-class-get) [POST](#admin-live-class-post) [PATCH](#admin-live-class-patch) [DELETE](#admin-live-class-delete)
| [/api/student](#student-student) | [GET](#student-student-get)
| [/api/student/courses](#student-courses) | [GET](#student-courses-get)
| [/api/student/course](#student-course) | [GET](#student-course-get)
| [/api/student/attendance](#student-attendance) | [GET](#student-attendance-get)
| [/api/live_classes](#student-live-classes) | [GET](#student-live-class-get)
| [/api/batch](#student-batch) | [GET](#student-batch-get)

## Admin

### Login <a name="admin-login"></a>

[7944bf87](https://github.com/aeczone123/frontend/commit/7944bf87) Add /admin/v1/login API

#### POST <a name="admin-login-post"></a>
```json
{
    "token": "",
    "idToken": "",
    "username": "",
    "isAdmin": true,
}
```

### Attendance <a name="admin-attendance"></a>

[446b8e6](https://github.com/aeczone123/frontend/commit/446b8e6) Add /admin/v1/attendances API

#### GET <a name="admin-attendance-get"></a>
```json
[
  {
    "student_username": "test",
    "student_date": "22/02/1990",
    "batch_id": "b1",
    "course_id": "nodejs",
    "batch_incharge": "Mr Willy wonka"
  },
  {
    "student_username": "userthree",
    "student_date": "22/02/1990",
    "batch_id": "b1",
    "course_id": "nodejs",
    "batch_incharge": "Mr Willy wonka"
  },
  {
    "student_username": "userone",
    "student_date": "20/09/2023",
    "batch_id": "b1",
    "course_id": "nodejs",
    "batch_incharge": "Mr Willy wonka"
  }
]
```

#### POST <a name="admin-attendance-post"></a>
```json
{
    "student_date": "",
    "student_username": "", 
    "batch_id": ""
}
```

### Batch <a name="admin-batch"></a>

[d34b45f](https://github.com/aeczone123/frontend/commit/d34b45f) Add /admin/v1/batches API

#### GET <a name="admin-batch-get"></a>
```json
[
  {
    "course_id": "nodejs",
    "batch_status": "started",
    "batch_incharge": "Mr Willy wonka",
    "batch_strength": "22",
    "batch_date": "22/06/2023"
  }  
]
```

#### POST <a name="admin-batch-post"></a>
```json
[
  {
    "course_id": "nodejs",
    "batch_status": "started",
    "batch_incharge": "Mr Willy wonka",
    "batch_strength": "22",
    "batch_date": "22/06/2023"
  }  
]
```

#### DELETE ?course_id <a name="admin-batch-delete"></a>

#### PATCH ``batch_id`` along with any of``batch_date`` ``batch_incharge`` ``batch_status`` ``batch_strength``, ``course_id`` <a name="admin-batch-patch"></a>

### Courses <a name="admin-courses"></a>

[1893664](https://github.com/aeczone123/frontend/commit/1893664) Add /admin/v1/courses API

#### GET <a name="admin-courses-get"></a>
```json
[
  {
    "course_desc": "Description of the course in a lengthy way , Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ",
    "course_id": "javascript",
    "course_short_desc": "Description of the course in a short way, Description of the course in a short way, Description of the course in a short way ",
    "course_title": "Introduction to js",
    "course_duration": 120,
    "course_image": "https://i.ibb.co/58TCkjH/Picture1.jpg",
    "modules_count": 6
  }
]
```

#### POST <a name="admin-courses-post"></a>
```json
[
  {
    "course_desc": "Description of the course in a lengthy way , Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ,Description of the course in a lengthy way ",
    "course_id": "javascript",
    "course_short_desc": "Description of the course in a short way, Description of the course in a short way, Description of the course in a short way ",
    "course_title": "Introduction to js",
    "course_duration": 120,
    "course_image": "https://i.ibb.co/58TCkjH/Picture1.jpg",
    "modules_count": 6
  }
]
```

#### PATCH ``course_id`` along with any of ``course_desc`` ``course_duration`` ``course_id`` ``course_image`` ``course_short_desc`` ``course_title`` <a name="admin-courses-patch"></a>
#### DELETE ?course_id <a name="admin-courses-delete"></a>

### Live class <a name="admin-live-class"></a>

#### GET <a name="admin-live-class-get"></a>
```json
{
    "title":"",
    "date":"",
    "meeting_description":"",
    "passcode":"",
    "meeting_link":"",
    "time":"",
    "instructor": ""
}
```

#### POST <a name="admin-live-class-post"></a>
```json
{
    "title":"",
    "date":"",
    "meeting_description":"",
    "passcode":"",
    "meeting_link":"",
    "time":"",
    "instructor": ""
}
```

#### PATCH ``title`` ``date`` ``meeting_description`` ``passcode`` ``meeting_link`` ``time`` ``instructor`` <a name="admin-live-class-patch"></a>

#### DELETE ?batch_id <a name="admin-live-class-delete"></a>

### Modules <a name="admin-modules"></a>

#### GET <a name="admin-modules-get"></a>
```json
{
    "course_id": "", 
    "module_desc": "", 
    "module_duration": "", 
    "module_id": "", 
    "module_image": "", 
    "module_short_desc": "", 
    "module_id": "", 
    "order": ""
}
```

#### POST <a name="admin-modules-post"></a>
```json
{
    "course_id": "", 
    "module_desc": "", 
    "module_duration": "", 
    "module_id": "", 
    "module_image": "", 
    "module_short_desc": "", 
    "module_id": "", 
    "order": ""
}
```

#### PATCH ``course_id`` along with any of ``module_desc`` ``module_duration`` ``module_id`` ``module_image`` ``module_short_desc`` ``module_id`` ``order`` <a name="admin-modules-patch"></a>

#### DELETE ?course_id <a name="admin-modules-delete"></a>

### Overview <a name="admin-overview"></a>

[84bcb87](https://github.com/aeczone123/frontend/commit/84bcb87) Add /admin/v1/overview API

#### GET <a name="admin-overview-get"></a>
```json
[
  {
    "course_id": "nodejs",
    "batch_status": "started",
    "batch_incharge": "Mr Willy wonka",
    "batch_strength": "22",
    "batch_date": "22/06/2023",
    "batch_id": "b1",
    "total_classes": 2
  }
]
```

### Students <a name="admin-students"></a>

[13c0ba6](https://github.com/aeczone123/frontend/commit/13c0ba6) Add /admin/v1/students API

#### GET <a name="admin-students-get"></a>
```json
[
  {
    "student_password": "hashval",
    "country": "India",
    "student_name": "Xyz Dee",
    "student_username": "userone",
    "phone_number": "+91-100000000",
    "student_email": "xyz@mail.com",
    "enrolled_date": "22/01/2021",
    "course_id": "nodejs",
    "batch": "b1"
  },
]
```

#### POST <a name="admin-students-post"></a>
```json
[
  {
    "student_password": "hashval",
    "country": "India",
    "student_name": "Xyz Dee",
    "student_username": "userone",
    "phone_number": "+91-100000000",
    "student_email": "xyz@mail.com",
    "enrolled_date": "22/01/2021",
    "course_id": "nodejs",
    "batch": "b1"
  },
]
```

#### DELETE ?student_username <a name="admin-students-delete"></a>

#### PATCH "student_username" along with any of ``country``, ``enrolled_date``, ``phone_number``, ``student_email``, ``student_name``, ``student_password`` ``batch`` <a name="admin-students-patch"></a>



## Student

### Courses <a name="student-courses"></a>

[5c1294f](https://github.com/aeczone123/frontend/commit/5c1294f) Add /student/courses API

#### GET <a name="student-courses-get"></a>
```json
[
  {
    "course_id" : "sdsdsd",
    "course_title" : "intro to nodejs",
    "course_desc" : "",
    "course_short_desc" : "",
    "course_image" : "",
    "course_duration" : 120
  }
]
```

### Course <a name="student-course"></a>

[4c921a8](https://github.com/aeczone123/frontend/commit/4c921a8) Add module information to /student/course API

#### GET ?courseid <a name="student-course-get"></a>
```json
[
{
  "course_id" : "sdsdsd",
  "course_title" : "intro to nodejs",
  "course_desc" : "",
  "course_short_desc" : "",
  "course_image" : "",
  "course_duration" : 120,
  "modules": {
      "module6": {
        "course_id": "nodejs",
        "assignments": [],
        "module_id": "module6",
        "module_duration": 120,
        "module_desc": "Node.js is an open source, cross-platform runtime environment and library that is used for running web applications outside the client's browser. It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.js is built on Google Chrome's V8 JavaScript engine",
        "module_short_desc": "fgfdg fgd hgh gh ghfgh gfhfgh ghfgh fghgfh",
        "module_image": "https://i.ibb.co/58TCkjH/Picture1.jpg",
        "resources": [],
        "module_title": "node js part 1",
        "order": 2
      },
  }
]
```

### Student <a name="student-student"></a>

[dd7f0e1](https://github.com/aeczone123/frontend/commit/dd7f0e1) Add /student API

#### GET <a name="student-student-get"></a>
```json
{
  "country": "India",
  "student_name": "Xyz Dee",
  "student_username": "userone",
  "phone_number": "+91-100000000",
  "student_email": "xyz@mail.com",
  "enrolled_date": "22/01/2021",
  "course_id": "nodejs",
  "batch": "b1"
}
```

### Live class <a name="student-live-class"></a>

[fad0e6f](https://github.com/aeczone123/frontend/commit/fad0e6f) Add /live_classes?{batch_id} API

#### GET ?batch_id <a name="student-live-class-get"></a>
```json
[
  {
    "date": "20/06/2023",
    "meeting_description": "dsffffffffffff dsfdgdfg dfsg dgdsfgdfsg dsfgdsf gdsgdsgsdfg",
    "title": "meeting on rocks"
  }
]
```

### Batch <a name="student-batch"></a>

[34067fb](https://github.com/aeczone123/frontend/commit/34067fb) Add /batch?{batch_id} API

#### GET ?batch_id <a name="student-batch-get"></a>
```json
[
  {
    "course_id": "nodejs",
    "batch_status": "started",
    "batch_incharge": "Mr Willy wonka",
    "batch_strength": "22",
    "batch_date": "22/06/2023"
  },
  {
    "course_id": "javascript",
    "batch_status": "not started",
    "batch_incharge": "Mr. Willy",
    "batch_strength": "1",
    "batch_date": "22/06/2023"
  }
]
```

### Attendance <a name="student-attendance"></a>

[a57fe24](https://github.com/aeczone123/frontend/commit/a57fe24) Add /student/attendance?{batch_id} API

#### GET  ?batch_id <a name="student-attendance-get"></a>
```json
[
  {
    "student_date": "20/09/2023",
    "course_id": "nodejs"
  }
]
```

Auhor [thoughtsunificator](https://github.com/thoughtsunificator)