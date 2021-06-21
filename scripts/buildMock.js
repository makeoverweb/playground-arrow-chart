const faker = require("faker")
const fs = require("fs")

const countOrganizations = 50
const countUsers = 100
const countProjects = 100
const countProjectModels = 200
const countSchedule = 5
const countScheduleList = 10

function getRandomArbitrary(min, max, exclude) {
  if(exclude){
    const result = (Math.random() * (max - min) + min).toFixed(0)
    return result === exclude ? getRandomArbitrary(min, max, exclude): result
  }
  return (Math.random() * (max - min) + min).toFixed(0);
}


const users = Array.from({length: countUsers}).map((item, index) => ({
  user_id: index,
  created: faker.date.past(),
  modified: faker.date.recent(),
  deleted: faker.random.boolean(),
  organization: getRandomArbitrary(0,countOrganizations-1),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber()
}))

const organizations = Array.from({length: countOrganizations}).map((item, index)=>({
  organization_id: index,
  created: faker.date.past(),
  modified: faker.date.recent(),
  deleted: faker.random.boolean(),
  name: faker.company.companyName(),
  description: faker.lorem.lines(2),
  address: faker.address.streetAddress(),
  image_preview: faker.image.imageUrl(100,100, 'city', true),
  image_main: faker.image.imageUrl(250,250, 'city', true)
  // users: users.filter(user => getRandomArbitrary(0,1) == 1).map(item => item.user_id)
}))

const projects = Array.from({length: countProjects}).map((item, index) => ({
  project_id: index,
  project_guid: faker.random.uuid(),
  created: faker.date.past(),
  modified: faker.date.recent(),
  deleted: faker.random.boolean(),
  organization: getRandomArbitrary(0,countOrganizations-1),
  user: getRandomArbitrary(0,countUsers-1),
  name: faker.lorem.words(2),
  description: faker.lorem.lines(2),
  meta: faker.lorem.lines(4),
  // buildings: buildings.filter(user => getRandomArbitrary(0,1) == 1).map(item => item.building_id)
}))

const projectsModels = Array.from({length: countProjectModels}).map((item, index) => ({
  project_model_id: index,
  created: faker.date.past(),
  modified: faker.date.recent(),
  deleted: faker.random.boolean(),
  project: getRandomArbitrary(0, countProjects-1),
  project_model_element: faker.lorem.lines(2), // here must be reference to element model
  sort_order: +getRandomArbitrary(0,300),
  parent: getRandomArbitrary(0, countProjectModels)
}))

// report/object/guntt
const schedules = Array.from({length: countSchedule}).map((item, index) => ({
  schedule_id: index,
  object_id: 1,
  parent_id: 0,
  parent_path: faker.lorem.words(1),
  name: faker.lorem.words(2),
  job: faker.lorem.words(1),
  job_id: +getRandomArbitrary(0,5),
  job_unit: faker.lorem.words(1),
  date_start: faker.date.past(),
  date_finish: faker.date.future(),
  volume_percent: +getRandomArbitrary(1, 99),
  volume_planned: +getRandomArbitrary(500, 1000),
  volume_actual: +getRandomArbitrary(1, 400),
  volume_fact: +getRandomArbitrary(1, 400),
  price_planned: +getRandomArbitrary(500, 1000),
  price_actual: +getRandomArbitrary(1, 400),
  price_fact: +getRandomArbitrary(1, 400),
  deviation_percent: +getRandomArbitrary(1, 50),
  deviation_day: +getRandomArbitrary(1, 400),
  status: +getRandomArbitrary(0, 4),
  sort_order: +getRandomArbitrary(1, 10),
}))
schedules.forEach((el, i) => {
  el.children = [];
  if (i !== 0) {
    schedules[0].children.push(i);
  }
});
schedules[0].parent_id = null;

// schedule/list
const scheduleList = Array.from({ length: countScheduleList}).map((item, index) => ({
  schedule_id: index,
  parent_path: faker.lorem.words(2),
  name: faker.lorem.sentence(7, 2),
  object_id: +getRandomArbitrary(0, 3),
  job_id: +getRandomArbitrary(0, 10),
  job_unit: null,
  volume_actual: +getRandomArbitrary(0, 30032455),
  volume_planned: +getRandomArbitrary(1, 30000000),
  sum_actual: +getRandomArbitrary(1, 500000000000),
  sum_planned: +getRandomArbitrary(1, 500000000000),
  date_start: faker.date.recent(),
  date_finish: faker.date.future(),
  sort_order: +getRandomArbitrary(0, 10),
  meta: faker.lorem.lines(4),
  children: [],
}))


scheduleList.forEach((el, i, arr) => {
  if (i === 0) {
    el.parent_id = null;
    el.expanded = true;
  } else {
    el.parent_id = 0;
    el.expanded = false;
  }
});




fs.writeFile("src/models/mock/users.json", JSON.stringify(users, null, 4), err => {
  if(err) throw err;
});

fs.writeFile("src/models/mock/project_models.json", JSON.stringify(projectsModels, null, 4), err => {
  if(err) throw err;
});

fs.writeFile("src/models/mock/organizations.json", JSON.stringify(organizations, null, 4), err => {
  if(err) throw err;
});

fs.writeFile("src/models/mock/projects.json", JSON.stringify(projects, null, 4), err => {
  if(err) throw err;
});

fs.writeFile("src/models/mock/schedules.json", JSON.stringify(schedules, null, 4), err => {
  if(err) throw err;
});

fs.writeFile("src/models/mock/schedule_list.json", JSON.stringify(scheduleList, null, 4), err => {
  if(err) throw err;
});
