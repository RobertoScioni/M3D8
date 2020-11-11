/**
 * @constant config
 * @description here i'll put any recurrently changing paramater of the template
 */
const config = {
	title: "Striveazon`s back office", ///that as of now means only the title but i belive this object will grow soon
	APIurl: "https://striveschool-api.herokuapp.com/api/product/",
}

/**
 * gets remote data
 */
const getData = async () => {
	fetch(config.APIurl, {
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRlYzRiY2RlMTAwMTc2MTZhODQiLCJpYXQiOjE2MDUwOTI1ODgsImV4cCI6MTYwNjMwMjE4OH0.TBBgF9c-VvkpVrRJ6t3JQEqG8a_ukoK_oh9hwKFlsFQ",
		},
	})
}

/**
 * sends data to server
 */

const sendData = async (package) => {
	try {
		let response = await fetch(config.APIurl, {
			headers: {
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzRlYzRiY2RlMTAwMTc2MTZhODQiLCJpYXQiOjE2MDUwOTI1ODgsImV4cCI6MTYwNjMwMjE4OH0.TBBgF9c-VvkpVrRJ6t3JQEqG8a_ukoK_oh9hwKFlsFQ",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(package),
		})
		if (response.ok) {
			console.log("data successfully posted")
		} else {
			console.log("oopsie")
		}
	} catch (error) {
		console.log(error)
	}
}

const sender = (event) => {
	event.preventDefault()
	const form = event.target
	let package = {
		name: form.querySelector("#name").value,
		description: form.querySelector("#description").value,
		brand: form.querySelector("#brand").value,
		imageUrl: form.querySelector("#imageUrl").value,
		price: form.querySelector("#price").value,
	}
	console.log(package)
	sendData(package)
}

/**
 * initialize the page
 *
 */
window.onload = () => {
	document.title = config.title

	document.querySelector("#mainMenu").innerHTML = config.title
}
