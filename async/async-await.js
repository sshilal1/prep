class Api {
  constructor () {
    this.user = { id: 1, name: 'test' }
    this.friends = [ this.user, this.user, this.user ]
    this.photo = 'not a real photo'
  }

  getUser () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.user), 400)
    })
  }

  getFriends (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 400)
    })
  }

  getPhoto (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.photo), 400)
    })
  }

  throwError () {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Intentional Error')), 400)
    })
  }
}

function callbackHell () {
  const api = new Api()
  let user, friends
  api.getUser().then(function (returnedUser) {
    user = returnedUser
    api.getFriends(user.id).then(function (returnedFriends) {
      friends = returnedFriends
      api.getPhoto(user.id).then(function (photo) {
        console.log('callbackHell', { user, friends, photo })
      })
    })
  })
}

function promiseChain() {
	const api = new Api();
	let user, friends;
	api.getUser()
		.then(function(returnedUser) {
			user = returnedUser;
			return api.getFriends(user.id);
		})
		.then(function(returnedFriends) {
			friends = returnedFriends;
			return api.getPhoto(user.id);
		})
		.then(function(photo) {
			console.log('promiseChain', { user, friends, photo })
		})
}

async function asyncAwaitIsYourNewBestFriend () {
  const api = new Api()
  const user = await api.getUser()
  const friends = await api.getFriends(user.id)
  const photo = await api.getPhoto(user.id)
  console.log('asyncAwaitIsYourNewBestFriend', { user, friends, photo })
}

async function asyncAwaitLoops () {
  const api = new Api()
  const user = await api.getUser()
  const friends = await api.getFriends(user.id)

  for (let friend of friends) {
    let moreFriends = await api.getFriends(friend.id);
    console.log('asyncAwaitLoops', moreFriends);
  }
}

/************
Calling "await" in front of a promise pauses the flow of the function
until the promise has resolved, and assigns the result to the variable 
to the left of the equal sign. This way we can program an asynchronous 
operation flow as though it were a normal synchronous series of commands.
*************/

asyncAwaitLoops();
//promiseChain();
//callbackHell();