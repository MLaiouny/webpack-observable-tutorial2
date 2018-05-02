/*jshint esversion: 6*/

import $ from "jquery";
import Rx from "rxjs/Rx";

// const btn = $("#btn");
// const input = $("#input");
// const output = $("#output");

// // Observable from a button click event
// const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

// btnStream$.subscribe(
// 	function (e) {
// 		console.log(e.target.innerHTML);
// 	},
// 	function (err) {
// 		console.log(err);
// 	},
// 	function () {
// 		console.log("Completeed");
// 	}
// );

// // Observable from a text input keyup event
// const inputStream$ = Rx.Observable.fromEvent(input, "keyup");

// inputStream$.subscribe(
// 	function (e) {
// 		console.log(e.currentTarget.value);
// 		output.append(e.target.value);
// 	},
// 	function (err) {
// 		console.log(err);
// 	},
// 	function () {
// 		console.log("Completeed");
// 	}
// );

// // Observable from mousemove event
// const moveStream$ = Rx.Observable.fromEvent(document, "mousemove");

// moveStream$.subscribe(
// 	function (e) {
// 		console.log(e.target.value);
// 		output.html('<h1>X: ' + e.clientX + " -" + "Y: " + e.clientY + '</h1>');
// 	},
// 	function (err) {
// 		console.log(err);
// 	},
// 	function () {
// 		console.log("Completeed");
// 	}
// );

// Observables from Arrays
// const numbers = [33, 44, 55, 66, 77];

// const numbers$ = Rx.Observable.from(numbers);

// numbers$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("Completed");
//   }
// );

// // Observables from JSON array
// const posts = [
//   { title: "Post One", body: "This is the body" },
//   { title: "Post Two", body: "This is the body" },
//   { title: "Post Three", body: "This is the body" }
// ];

// const posts$ = Rx.Observable.from(posts);
// posts$.subscribe(
//   post => {
//     console.log(post);
//     $("#posts").append(
//       "<li><h3>" + post.title + "</h3><p>" + post.body + "</p></li>"
//     );
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("Completed");
//   }
// );

// Observables from set
// a set is data structure than can take a mix of data types
// const set = new Set(["Hello", 44, { title: "My Title" }]);

// const set$ = Rx.Observable.from(set);
// set$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("Completed");
//   }
// );

// Observables from Map
// a map is an array of key, value pairs

// const map = new Map([[1, 2], [3, 4], [5, 6]]);

// const map$ = Rx.Observable.from(map);
// map$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("Completed");
//   }
// );

// Creating Observables from scratch
// const source$ = new Rx.Observable(observer => {
//     console.log('Creating Observable');
//     observer.next('Hello world');
//     observer.next('Another value');
//     observer.error(new Error('Error: Something went wrong'));
//     setTimeout(() => {
//         observer.next('Yet another value');
//         observer.complete();
//     }, 3000);

// });

// source$
//     .catch(err => Rx.Observable.of(err))
//     .subscribe(x => {
//             console.log(x);
//         },
//         err => {
//             console.log(err);
//         },
//         complete => {
//             console.log('completed');
//         }
//     );

// Creating observables from Promise
// const myPromise = new Promise((resolve, reject) => {
//   console.log("Creating Promise");
//   setTimeout(() => {
//     resolve("Hello from promise");
//   }, 3000);
// });

// myPromise.then(x => {
//     console.log(x);
// });

// Creating Observable from promise
// const source$ = Rx.Observable.fromPromise(myPromise);
// source$.subscribe(x => {
//     console.log(x);
// });

// Creating Observable with Ajax call to an API
// function getUser(username) {
//   return $.ajax({
//     url: "https://api.github.com/users/" + username,
//     dataType: "jsonp"
//   }).promise();
// }

// const inputSource$ = Rx.Observable.fromEvent($("#input"), "keyup");
// inputSource$.subscribe(e => {
//   Rx.Observable.fromPromise(getUser(e.target.value)).subscribe(x => {
//     $("#name").text(x.data.name);
//     $("#blog").text(x.data.blog);
//     $("#repos").text("Public repos: " + x.data.public_repos);
//   });
// });

// Rx.Observable.fromPromise(getUser("bradtraversy")).subscribe(x => {
//   $("#name").text(x.data.name);
//   $("#blog").text(x.data.blog);
//   $("#repos").text("Public repos: " + x.data.public_repos);
// });

// Using some Observable operators such as Interval, Timer & Range
// Using Interval

// const source$ = Rx.Observable.interval(100).take(5);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );

// Using Timer
// const source$ = Rx.Observable.timer(5000, 2000).take(5);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );

// const source$ = Rx.Observable.range(25, 40);

// source$.subscribe(
//   x => {
//     console.log(x);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );
// Map & Pluck
// Map operator
// const source$ = Rx.Observable
//     .interval(1000)
//     .take(10)
//     .map(v => v * 2);
// source$.subscribe(v => console.log(v));

// const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
//     .map(v => v.toUpperCase())
//     .map(v => 'I am ' + v);
// source$.subscribe(v => console.log(v));

// function getGithubUser(username) {
//     return $.ajax({
//         url: 'https://api.github.com/users/' + username,
//         dataType: 'jsonp'
//     }).promise();
// }

// Rx.Observable.fromPromise(getGithubUser('bradtraversy'))
//     .map(user => user.data.name)
//     .subscribe(name => {
//         console.log(name);
//     });

// const users = [{
//         name: 'Will',
//         age: 34
//     },
//     {
//         name: 'Mike',
//         age: 33
//     },
//     {
//         name: 'Paul',
//         age: 35
//     }
// ];
// // Using Pluck operator
// const users$ = Rx.Observable.from(users)
//     .pluck('name');
// users$.subscribe(x => console.log(x));

// Using merge operator
// of operator turns whatever you passed to it to an observable
// Rx.Observable.of('Hello')
//     .merge(Rx.Observable.of('Everyone'))
//     .subscribe(x => console.log(x));

// Rx.Observable.interval(2000)
//     .merge(Rx.Observable.interval(500))
//     .take(25)
//     .subscribe(x => console.log(x));

// const source1$ = Rx.Observable.interval(2000).map(v => 'Merge1: ' + v);
// const source2$ = Rx.Observable.interval(500).map(v => 'Merge2: ' + v);
// Rx.Observable.merge(source1$, source2$)
//     .take(25)
//     .subscribe(x => console.log(x));

// Using the concat operator
// const source1$ = Rx.Observable.range(0, 5).map(v => 'Source1: ' + v);
// const source2$ = Rx.Observable.range(6, 5).map(v => 'Source2: ' + v);
// Rx.Observable.concat(source1$, source2$)
//     .subscribe(x => console.log(x));

// Using MergeMap $ SwitchMap
// We use these operators to avoid double subscibing
// Rx.Observable.of('Hello')
//     .subscribe(v => {
//         Rx.Observable.of(v + ' Everyone')
//             .subscribe(x => console.log(x));
//     });

// As you can see from previous, we are double subscribing. Now let's use the mergeMap operator
// Rx.Observable.of('Hello')
//     .mergeMap(v => {
//         return Rx.Observable.of(v + ' Everyone');
//     }).subscribe(x => console.log(x));

//Now we are going to use the switchMap operator

// Creating Observable with Ajax call to an API
function getUser(username) {
  return $.ajax({
    url: "https://api.github.com/users/" + username,
    dataType: "jsonp"
  }).promise();
}

// const inputSource$ = Rx.Observable.fromEvent($("#input"), "keyup");
// inputSource$.subscribe(e => {
//   Rx.Observable.fromPromise(getUser(e.target.value)).subscribe(x => {
//     $("#name").text(x.data.name);
//     $("#blog").text(x.data.blog);
//     $("#repos").text("Public repos: " + x.data.public_repos);
//   });
// });
const inputSource$ = Rx.Observable.fromEvent($("#input"), "keyup")
  .map(e => e.target.value)
  .switchMap(v => {
    return Rx.Observable.fromPromise(getUser(v));
  });
inputSource$.subscribe(x => {
  $("#name").text(x.data.name);
  $("#blog").text(x.data.blog);
  $("#repos").text("Public repos: " + x.data.public_repos);
});
