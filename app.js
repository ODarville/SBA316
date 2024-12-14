// "It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later... I'm busy", "Better not tell you now.", "Cannot predict now.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful.", "In the spirit of Raj "Can you post that on slack?"", "Jordan says "Thats fire right there"", "Oh no baby what is you doing...", "In the spirit of Abdou "Um.... Yes.. Thank you Mr. Jordan" so... No", "It's OK to procrastinate, but you shouldn really be working on your code.", "If you can read this, thank a Software Developer.", "Programmers are tools for converting caffeine into code. So let me go drink some and try again. Better yet dont....", "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. So back to bed...", "That depends... On if your JS code is finished or not..", "Dont worry you can comment that line out later..", "No that code is'nt that good.. you're going to need office hours with Bryan to fix that one...."

let magicOBall = {};
magicOBall.listOfReplies =["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later... I'm busy", "Better not tell you now.", "Cannot predict now.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful.", 'In the spirit of Raj "Can you post that in slack?"', 'Jordan says "Thats fire right there"', "Oh no baby what is you doing...", 'In the spirit of Abdou "Um.... Yes.. Thank you Mr. Jordan" so... No', "It's OK to procrastinate, but you should really be working on your code.", "If you can read this, thank a Software Developer.", "Programmers are tools for converting caffeine into code. So let me go drink some and try again. Better yet dont....", "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. So back to bed...", "That depends... On if your JS code is finished or not..", "Dont worry you can comment that line out later..", "No that code isn't that good.. you're going to need office hours with Bryan to fix that one....", 'In the spirit of Kumar "So can we have some homework tonight??"'];

magicOBall.randomReply = function getReply(){
    return magicOBall.listOfReplies[Math.floor(Math.random()*magicOBall.listOfReplies.length)];
}
const ask = document.querySelector('.ask');
const replies = document.querySelector('.replies');
const quoteBox = document.querySelector('.imgContainer2');
const ball = document.querySelector('.ball');
const fake1 = document.querySelector('.fake1');
const fake2 = document.querySelector('.fake2');
const text1 = document.querySelector('.text1');
const broke = document.querySelector('.broke');

ask.addEventListener('click', function(){
    quoteBox.style.display = 'block';
    replies.style.display = 'block';
    replies.textContent = magicOBall.randomReply();
    // ball.classList.add('shake');
    // fake1.classList.add('shake');
    // fake2.classList.add('shake');
    text1.style.display = 'none';
    broke.style.display = 'block';
    fake1.style.display = 'none';
    fake2.style.display = 'none';
    prompt('This is taking to long just ask your qusetion');
});

broke.addEventListener('click', function(){
    quoteBox.style.display = 'none';
    replies.style.display = 'none';
    text1.style.display = 'block';
    broke.style.display = 'block';
    fake1.style.display = 'block';
    fake2.style.display = 'block';
    broke.style.display = 'none';
        
});

broke.addEventListener('mouseover', function(){
    createElement('p', 'Dont do it.....');
})

broke.addEventListener('mouseout', function(){
    createElement('p', 'Smart choice...');
})