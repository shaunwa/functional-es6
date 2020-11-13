function myFunction() {
    return 'Hello!';
  }
  
  const myFunction2 = function() {
    return 'Hello2!';
  }
  
  const myArrowFunction = () => {
    return 'Hello arrow!';
  }
  
  // const double = x => x * 2;
  
  const person = () => ({
    name: 'Shaun',
    age: 23,
  });
  
  // -----------------------------------------
  
  const sayHello = () => console.log('Hello!');
  const sayHello2 = sayHello;
  
  const sayHelloTo = name => console.log(`Hello ${name}!`);
  const sayHelloTo2 = sayHelloTo;
  
  const ENVIRONMENT = 'prod';
  
  const loadStarWarsDataReal = async () => {
    const response = await fetch('https://swapi.dev/api/planets/');
    const planets = await response.json();
    console.log(planets);
  }
  
  const loadStarWarsDataFake = async () => {
    const fakeData = [{ name: 'Coruscant',
      rotation_period: '24',
      orbital_period: '368',
      diameter: '12240',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'cityscape, mountains',
      surface_water: 'unknown',
      population: '1000000000000',
      residents: [Array],
      films: [Array],
      created: '2014-12-10T11:54:13.921000Z',
      edited: '2014-12-20T20:58:18.432000Z',
      url: 'http://swapi.dev/api/planets/9/',
    }];
  
    console.log(fakeData);
  }
  
  const loadStarWarsData = ENVIRONMENT === 'prod'
    ? loadStarWarsDataReal
    : loadStarWarsDataFake;
  
  // ---------------------------------------------
  
  // f(x) = 2x
  // const double = x => x * 2;
  
  // f(x) = x - 1
  // const minusOne = x => x - 1;
  
  // f(x) = x^2
  // const square = x => x * x;
  
  // -> f(x) = (2x - 1)^2
  
  const myNumber = 42;
  
  const combinedFunction = x => {
    const myFunctions = [
      double,
      minusOne,
      square,
    ];
  
    let result = x;
  
    myFunctions.forEach(func => {
      result = func(result);
    });
  
    return result;
  }
  
  // getName
  // getTemporaryEmployees
  // capitalize
  // const employees = [{...}, {...}, ...]
  
  // capitalize(getName(getTemporaryEmployees(employees)))
  
  // -----------------------------------------
  
  const combine = (x, y, func) => func(x, y);
  
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  
  // combine(4, 10, add);
  
  // -----------------------------------------
  
  const createPrinter = () => () => console.log('Hello functional!');
  
  // const double = x => x * 2;
  // const triple = x => x * 3;
  // const quadruple = x => x * 4;
  
  const createMultiplier = y => x => x * y;
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  const quadruple = createMultiplier(4);
  
  // ----------------------------------------
  
  // Closure
  
  const createNumberPrinter = () => {
    const myFavoriteNumber = 42;
  
    return () => console.log(`My favorite number is ${myFavoriteNumber}`);
  }
  
  // -------------------------------------------
  
  const createArgsChecker = argsAreValidFunc => func => (...args) => {
    if (!argsAreValidFunc(...args)) {
      console.log('Arguments are not right');
      return;
    }
  
    return func(...args);
  }
  
  const secondArgIsntZero = createArgsChecker((x, y) => y !== 0);
  const argsAreSameLength = createArgsChecker((a, b) => a.length === b.length);
  
  const divide = (x, y) => x / y;
  const divideSafe = secondArgIsntZero(divide);
  
  // divide(10, 0);
  
  const zip = (arr1, arr2) => null // ...
  const zipSafe = argsAreSameLength(zip);
  
  // zipSafe(['a', 'b'], [1, 2, 3]);
  
  // const divide = (x, y) => {
  //   if (equalsZero(y)) {
  //     console.log("Help!");
  //     return;
  //   }
  
  //   return x / y;
  // }
  
  const equalsZero = x => x === 0;
  
  const myFunctionYes = (a, b) => {
    if (equalsZero(b)) {
      console.log("Help!");
      return;
    }
  
    return a + b + 5;
  }
  
  /*
  
  const data = fetch...
  
  for ... {
    ...
    debug;
    data = filterBySomething(data);
  
    debug;
    delete data[0];
  
    debug;
  }
  
  console.log(data)
  
  const people = await fetch ...
  
  const transformedData = compose(
    capitalize,
    getNames,
    getTemporaryEmployees,
  )(people);
  
  */
  
  /*
    ['a', 'b', 'c']
    [1, 2, 3]
  
    { a: 1, b: 2, c: 3 }
  */
  
  // Testing higher-order functions:
  /*
  test('secondArgIsntZero function', () => {
    const myFunction = createMock();
  
    const wrapped = secondArgIsntZero(myFunction);
    const actual = wrapped('hello', 0);
    const expected = undefined;
  
    expect(actual).to.equal(expected);
    expect(myFunction.calls.length).to.equal(0);
  });
  */
  
  // -----------------------------------------------
  
  const personData = {
    name: 'John Doe',
    age: 29,
    hairColor: 'brown',
  };
  
  const careerData = {
    jobTitle: 'software dev',
    yearsOfService: 5,
    companyName: 'XYZ Inc.',
  };
  
  // const combinedData = {};
  
  // for (let key of Object.keys(person)) {
  //   combinedData[key] = person[key];
  // }
  
  // for (let key of Object.keys(careerData)) {
  //   combinedData[key] = careerData[key];
  // }
  
  // Same as Object.assign({}, personData, careerData);
  const personWithCareerData = {
    ...personData,
    ...careerData,
    name: 'Johnny Doe',
  };
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  const combinedArray = [...arr1, 1000, ...arr2];
  
  const addMultiple = (...numbers) =>
    numbers.reduce((sum, x) => sum + x);
  
  // addMultiple(...arr1);
  
  // -----------------------------------------------
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // -->          [2, 4, 6, 8, 10, ...]
  
  const strings = ['hi', 'hello', 'water', 'coffee'];
  // --->.        ['HI', 'HELLO', ...]
  
  // 'hi hello water coffee'
  
  const doubled = numbers.map(double);
  const upper = strings.map(string => string.toUpperCase());
  
  const people = [{
    name: 'John',
    age: 12,
  }, {
    name: 'Anna',
    age: 33,
  }, {
    name: 'Steve',
    age: 66,
  }];
  
  /*
  const ages = {
    John: 12,
    Anna: 33,
    Steve: 66,
  }
  */
  
  const names = people.map(person => person.name);
  
  // ------------------------------------------------
  
  // true -> included in final Array
  // false -> left out
  const bigNumbers = numbers.filter(x => x > 5);
  
  const isEven = x => x % 2 === 0; // -> "predicate"
  const evenNumbers = numbers.filter(isEven);
  
  const oldPeople = people.filter(person => person.age > 30);
  
  const not = func => (...args) => !func(...args);
  const isOdd = not(isEven);
  const oddNumbers = numbers.filter(isOdd);
  
  // ---------------------------------------------------
  
  // let sum = 0;
  
  // for (let x of numbers) {
  //   sum = sum + x;
  // }
  
  const sum = numbers.reduce((sum, x) => sum + x);
  
  const fullString = strings.reduce((acc, str) => `${acc} ${str}`, '');
  
  const agesObj = people.reduce((acc, person) => ({
    ...acc,
    [person.name]: [person.age],
  }), {});
  
  const votes = ['Smith', 'Jones', 'Garcia', 'Smith', 'Smith', 'Jones', 'Garcia'];
  
  const countObj = votes.reduce((acc, name) => ({
    ...acc,
    [name]: acc[name] ? acc[name] + 1 : 1,
  }), {});