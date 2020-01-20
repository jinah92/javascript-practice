/*const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'zero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();
*/

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'zero'],
    logFriends: function() {
        // var that = this;    // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function(friend){
            console.log(this.name, friend);
        }); // end forEach
    },  // end function
};  // end object
relationship1.logFriends();

