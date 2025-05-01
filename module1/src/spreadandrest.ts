{
  // spread operator and
  // destructuring
  // rest operator

  // learn spread operator

  const bros1: string[] = ["masud", "rasel", "juwel"];
  const bros2: string[] = ["imran", "subahan", "sobuj"];

  bros1.push(...bros2);
  console.log(bros1);
}

const student = {
  name: "subahan",
  roll: 677317,
  student: true,
};
const student1 = {
  name: "juwel",
  roll: 602715,
  student: false,
};

const studentList = [student, student1];
console.log(studentList);
const newStudentList = studentList.push(student1);
console.log(newStudentList);

// learn rest operator

const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(`Hi ${friend}`));
};

greetFriends("masud ", "juwel", "subahan", "Mezba", );

