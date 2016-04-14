module.exports = decode;

var sentence, message;

sentence = "fill the proper tank for the cow";
// we are taking only the even words
// "fill proper for cow"
// reverse them ["cow", "for", "proper", "fill"]
// call the previous decode function

// message should be "cool"
message = super_decode(sentence, "even-backwards");
console.log(message);

function decode (words) {
  var index = 0;
  var secretMessage = '';

  for (var i = 0; i < words.length; i++) {
    if (index === 5) {
      index = 0;
    }
    secretMessage += words[i].charAt(index);
    index++;
  }
  return secretMessage;
}
