const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

test ('creates a Manager object', () => {
  const manager = new Manager('Cheyne', '1', 'chewbakkah@gmail.com', 'office 1');

  expect(manager.name).toBe('Cheyne');
  expect(manager.ID).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.mgrOffice).toEqual(expect.any(String));
});

test ('creates an Engineer object', () => {
    const eng = new Engineer('Cheyne', '1', 'chewbakkah@gmail.com', 'chewbakkah');
  
    expect(eng.name).toBe('Cheyne');
    expect(eng.ID).toEqual(expect.any(String));
    expect(eng.email).toEqual(expect.any(String));
    expect(eng.engGithub).toEqual(expect.any(String));
  });

test ('creates an Intern object', () => {
    const int = new Intern('Cheyne', '1', 'chewbakkah@gmail.com', 'DayCare');
  
    expect(int.name).toBe('Cheyne');
    expect(int.ID).toEqual(expect.any(String));
    expect(int.email).toEqual(expect.any(String));
    expect(int.intSchool).toEqual(expect.any(String));
  });