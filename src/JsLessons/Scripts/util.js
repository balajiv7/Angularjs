export function printEvenNos () {
    for (let index = 1; index <= 100; index++) {
      if (index % 2 === 0) {
        console.log(index)
      }
    }
  }
  //only functions marked as export can be accessed from another js file