// function String() {
//   const data = "Kaival Thakkar Thakkar";

//   console.log(data.length);
//   //   it will replace First latter
//   console.log(data.replace("Thakkar", "patel"));
// }
// String();

function Data() {
  // const a = "hello";
  // const d = "KAIVAL";
  // const b = new String("kaival");
  // const wsc = new Date().getFullYear();
  // const str = "Kaival Kaival Thakkar";
  // const res = "                 dfewge ";
  // const n1 = "my new car";
  // const n2 = ~-2;
  // const t2 = "Here we are in infynno solution";
  // console.log(a.length);
  // console.log(a.charAt(0));
  // console.log(b);
  // console.log(a);
  // console.log(wsc);
  // console.log(a.concat(b));
  // console.log(str.replaceAll("Kaival", "df"));
  // const m1 = str.replaceAll(" ", ",").split();
  // console.log(m1);
  // console.log(d.split());
  // console.log(res.trim());
  // console.log(a.slice(2));
  // console.log(n1.indexOf("car"));
  // console.log(n2);
  // console.log("infynno solution".includes("infynno"));
  // console.log(t2.includes("kaival"));
  // console.log(t2.startsWith("Here"));
  // console.log(t2.endsWith("sds"));

  const temp = (a, b) => {
    if (a > b) {
      return a + b;
    } else if (a < b) {
      return a * b;
    } else {
      return "samee";
    }
  };
  console.log(temp(10, 5));
  console.log(temp(2, 4));
  console.log(temp(10, 10));
}

Data();

//Replace , replaceAll , length ,characterAt , concat ,split: conver string to array, trim : Whitespace remove
//slice : remove that part we enter , indexOf : return string length where it will start
//~2 : it will consider -(2+1) , includes : for check perticular word in string or not :T/F
//startsWith  && endsWith: chck string starting or ending with word
