////interface (включаючи наслідування)
//interface People {
//  surName: string;
//  age?: number;
//  getSalary: boolean;
//}

//const john: People = {
//  surName: "Braun",
//  getSalary: true,
//};

//interface Vacation extends People {
//  hasVacation: boolean;
//  vacationAmount: number;
//}

//const nastya: Vacation = {
//  surName: "Kowalska",
//  age: 25,
//  getSalary: false,
//  hasVacation: true,
//  vacationAmount: 21,
//};

////class (включаючи реалізацію інтерфеса а також поля із різними модифікаторами доступу)

//interface classRoom {
//  classNumber: number;
//  deskAmount: number;
//  board: boolean;
//}

//class Geography {
//  private id: string;
//  public bookAmount: number;
//  private pupilsAmount: number;

//  protected countBook(): number {
//    return this.bookAmount * this.pupilsAmount;
//  }
//}

//class Maths extends Geography implements classRoom {
//  constructor() {
//    super();
//  }
//  classNumber: 244;
//  deskAmount: 2;
//  board: false;
//}

//const Music: Maths = new Maths();

////type

//type chooseSize = number | string;

//function createSmth(smth: chooseSize) {
//  if (typeof smth === "string") {
//    console.log("It is string");
//  } else if (typeof smth === "number") {
//    console.log("It is number");
//  }
//}
//createSmth(23);

////generic

//class admin<T> {
//  constructor(protected isAdmin: T) {}

//  getToken() {
//    console.log(this.isAdmin);
//  }
//}

//const isUser = new admin(false);
//isUser.getToken();

////enum

//enum sizes {
//  small,
//  avarage,
//  big,
//}

//const box: sizes = sizes.avarage;

////turple

//const turple: [string, number, boolean] = ["word", 33, true];
//const anotherCortage: {
//  id: string;
//  amount: number;
//  color: string;
//} = {
//  id: "absd",
//  amount: 12,
//  color: "red",
//};

//anotherCortage.id = "newID";

////union types (поєднання типів)

//function checkDate(date: string | number) {
//  console.log(date);
//}

////Теорія для себе

////readonly

//interface chooseProperties {
//  readonly color: string;
//  amount: number;
//}

//const myProperties: chooseProperties = {
//  color: "red",
//  amount: 12,
//};

////myProperties.color = "size"; readonly properties can't be modified

////коли необхідне приведення до інтерфейсу об'єкта який не відповідає данному інтерфейсу

//interface boxSizes {
//  width: number;
//  height: number;
//}

//const triangle: boxSizes = {
//  width: 100,
//} as boxSizes;

//const rectangle: boxSizes = <boxSizes>{
//  width: 100,
//};

////різні види об'явлення массивів

//const makeArray: number[] = [1, 2, 3, 4, 5];
//const makeArray1: string[] = ["a", "b", "c"];
//const makeArray2: boolean[] = [true, false];

//const array: Array<number> = [1, 2, 3, 4, 5];
//const array1: Array<string> = ["a", "b", "c"];
//const array2: Array<boolean> = [true, false];
