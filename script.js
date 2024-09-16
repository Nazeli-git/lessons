"use strict"

// Syudents progress with loop

const students= {
 js: [
    {
      name:"John",
      progress: 100
    },
    {
     name: "Alex",
     progress: 60
    }
],
htlm: {
  basic: [
    {
      name: "Jessica",
      progress: 20
    },
    {
      name: "Adam",
      progress: 18
   }
  ],
   pro: [{
        name: "Joe",
        progress: 10
    }]
}
}

// function getTotalProgressByIteration(data){
//   let students = 0;
//   let total = 0;
  
//   for (const course of Object.values(data)) {
//     if(Array.isArray(course)){
//         students+= course.length;
//        for( let i =0; i< course.length; i ++){
//            total += course[i].progress
          
//         }
//     }
//      else{
//         for( const subCourse of Object.values(course)){
//           students += subCourse.length;

//           for(let i = 0; i < subCourse.length; i++){
//               total+= subCourse[i].progress;
//             }
//         }
//      }
//   }
//   return total/students;
// }

// console.log(getTotalProgressByIteration(students));




// Students progress with recursion

function getTotalProgressByRecursion(data) {
    if(Array.isArray(data)) { 
      let total= 0; 
      for (let i = 0; i < data.length; i++) {
        total+= data[i].progress;
        
      }
      return [total, data.length]
    }
     else {
       let total = [0, 0];
      for(const subData of Object.values(data)){

        const subDataArr= getTotalProgressByRecursion(subData);
        total[0] += subDataArr[0];
        total[1] += subDataArr[1]
        
     }
      return total
    }
}

const result = getTotalProgressByRecursion(students);
 console.log(result[0]/result[1]);