// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallback('Toronto', function (err, temp) {
// 	if (err) {
// 		console.log('errpr', err);
// 	} else {
// 		console.log('succenss', temp)
// 	}
// });


// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found')
// 		}, 1000);
// 	});
// }

// getTempPromise('Toronto').then(function (temp) {
// 	console.log('promise success', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });

//Challenge Area

function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('A and B need to be numbers');
		}
	});
}

addPromise(2, 3).then (function (sum) {
	console.log('Success', sum);
}, function (err) {
	console.log("error", err);
});

addPromise('andrew', 9).then(function() {
	console.log('this should not show up');
}, function (err) {
	console.log('This should appear', err);
});
