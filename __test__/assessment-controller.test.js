const userFunc = require("../controllers/assessment-controllers");

describe("posting data from form", () => {
  test("Student table data", () => {
    let data = {
      dateSubmitted: "31/10/2023, 14:30:01",
      assessmentTitle: "Philosophical orientation",
      approvedDueDate: "31/10/2023, 14:30:01",
      extendedBy: 2,
      Status: "pending",
      teacherId: 1,
      studentName: "Shiny",
    };
    const instance = userFunc.updateTableUser(data);
    expect(instance).toEqual();
  });
});
