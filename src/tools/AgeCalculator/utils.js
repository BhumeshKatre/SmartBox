// src/tools/AgeCalculator/utils.js

export function calculateAge(dobString) {
  const today = new Date();
  const birthDate = new Date(dobString);

  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  let day = today.getDate() - birthDate.getDate();


  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (month < 0) {
    age--;
    month += 12;
  }

  if (day < 0) {
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    day += prevMonth
  }

  return {fullAge: {age , month , day}};
}
