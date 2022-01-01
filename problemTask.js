function vaxTrail(val) {
  const obj = {};
  for (let i = 0; i < val.length; i++) {
    const age = val[i].age;
    if (age >= 20 && age <= 30) {
      if (!obj.A) {
        obj.A = [];
      }
      obj.A.push(val[i]);
    } else if (age >= 31 && age <= 40) {
      if (!obj.B) {
        obj.B = [];
      }
      obj.B.push(val[i]);
    } else if (age >= 41 && age <= 50) {
      if (!obj.C) {
        obj.C = [];
      }
      obj.C.push(val[i]);
    } else {
      if (!obj.D) {
        obj.D = [];
      }
      obj.D.push(val[i]);
    }
  }

  const newObj = {};
  obj.A && (newObj.A = obj.A);
  obj.A && (newObj.B = obj.B);
  obj.C && (newObj.C = obj.C);
  obj.D && (newObj.D = obj.D);
  return newObj;
}

const result = vaxTrail([
  { name: "zahid", age: 31, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "shorf", age: 62, temperature: 98 },
  { name: "sohel", age: 49, temperature: 98 },
  { name: "junaid", age: 36, temperature: 98 },
  { name: "salam", age: 51, temperature: 98 },
  { name: "mahin", age: 41, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 98 },
]);

console.log(result);
