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
  .addScene('client:', 600)
  .addScene('Hi there', 400)
  .addScene('client:Welcome to Aysh (ugfire.com)', 1000)
  .addScene('chat: The Leading website, Desktop App, mobile App and Database developers in Africa. Stationed in Uganda.', 1200)
     .addScene('chat:', 2000)
  .addScene('client:WE USE:', 2000)
    .addScene('Aysh: Java, HTML, CSS, Javascript,& MYSQL, MariaDB databases', 2000)
    .addScene('client:', 400)
    .addScene('Aysh:', 600)
     .addScene('chat:YES , OUR SYSTEMS ARE ALIVE!', 3000)
      .addScene('chat:', 100)

  .addScene('client:WE BUILD LIVING...', 1000)
  .addScene('Aysh: Websites, Web Apps, Database Systems, Mobile Apps, Desktop Apps and Beautiful Graphics...', 4000)
 .addScene('chat:Please contact us now for a design offer !', 4000)
   .addScene('Chat:', 400)
   
  .addScene('client:', 400)
  .addScene('Aysh: ', 600)
 

    .addScene(theater.replay.bind(theater))