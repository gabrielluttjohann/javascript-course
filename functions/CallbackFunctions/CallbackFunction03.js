const grades = [7.7, 6.5, 5.4, 4.3, 3.2, 2.1, 1.0];

//  ==================  Without Callback ==================
let lowGrades = [];

for (let grade in grades) {
  let minGradeToBeApproved = 7.0;

  if (grades[grade] < minGradeToBeApproved) {
    lowGrades.push(grades[grade]);
  }
}

console.log(lowGrades);

// ================== With Callback ==================

const getLowGrades = (grades) => {
  let minimumGradeToBeApproved = 7.0;
  let lowGrades = (grade) => grade < minimumGradeToBeApproved;

  return grades.filter(lowGrades);
};

console.log(grades);
