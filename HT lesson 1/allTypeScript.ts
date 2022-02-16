//!Базові типи

const str: string = "hello";
const num: number = 24;
const bool: boolean = true;
const num1: bigint = BigInt(100);
const any: any = "any type";
const a: undefined = undefined;
const b: null = null;

//!Об'явлення массивів

const arrStr: string[] = ["a", "b", "c"];
const arrStr1: Array<string> = ["a", "b", "c"];

const arrNum: number[] = [1, 2, 3];
const arrNum1: Array<number> = [1, 2, 3];

const arrBoolean: boolean[] = [true, false];
const arrBoolean1: Array<boolean> = [true, false];

//!Turple(кортеж)

const turpl: [string, number, boolean] = ["word", 33, true];

const anotherCortage: {
  id: string;
  amount: number;
  color: string;
} = {
  id: "absd",
  amount: 12,
  color: "red",
};

//!Union types (поєднання типів)

function checkDate(date: string | number) {
  console.log(date);
}

//!Type

type login = string;

const login: login = "admin";
const login2: login = "admin2";

type ID = number | string;
const id: ID = 24;
const id1: ID = "id";

type someType = string | null | undefined;

//!Enum

enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Simple; // виведеться числове значення 0 тобто позиції у enum

//!Generic - автоматично визначає тип данних

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["Hello", "Vladilen"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));

//!Interfaces

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  color: "#ccc",
  size: {
    width: 20,
    height: 30,
  },
};

rect1.color = "black";
// rect1.id = '3232' readonly - это свойство, доступное только для чтения

//!коли необхідне приведення до інтерфейсу об'єкта який не відповідає данному інтерфейсу

interface boxSizes {
  width: number;
  height: number;
}

const triangle: boxSizes = {
  width: 100,
} as boxSizes;

const rectangle: boxSizes = <boxSizes>{
  width: 100,
};

// =====================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

//!Class (включаючи реалізацію інтерфеса, а також поля із різними модифікаторами доступу)

interface classRoom {
  classNumber: number;
  deskAmount: number;
  board: boolean;
  logInfo: () => void; //опис функції
  getInfo: () => number; //опис функції
}

class Geography {
  private id: string;
  public bookAmount: number;
  private pupilsAmount: number;

  protected countBook(): number {
    return this.bookAmount * this.pupilsAmount;
  }
}

class Maths extends Geography implements classRoom {
  constructor() {
    super();
  }
  classNumber: 244;
  deskAmount: 2;
  board: false;
  logInfo() {
    console.log(this.classNumber);
  }
  getInfo() {
    return this.classNumber;
  }
}

const Music: Maths = new Maths();

//!Робота з функціями

function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log("Empty: ", position());
console.log("One param: ", position(42));
console.log("Two params: ", position(10, 15));
