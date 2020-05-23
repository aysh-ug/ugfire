/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
  .on('type:start,  erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  /*
  delay:3000;
.on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  */
  

theater
  .addActor('client', { speed: 3, accuracy: 0.6 })
  .addActor('Aysh',{ speed: 3, accuracy: 0.6 })
  .addActor('chat',{ speed: 3, accuracy: 0.6 })
  .addScene('client:', 7000)
  .addScene('Hi there', 2000)
  .addScene('client:Welcome to Aysh (ugfire.com)', 1000)
  .addScene('chat: The Leading website, Desktop App, mobile App and Database developers in Africa. Stationed in Uganda.', 10000)
     .addScene('chat:', 200)
       .addScene('client:', 100)
  .addScene('client:Please contact us now for a design offer !', 10000)
   .addScene('client:', 3000)

.addScene(theater.replay.bind(theater))
   