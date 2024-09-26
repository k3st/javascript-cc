const messagesContent = $(".msgs-content");
const messagesInput = $(".msgs-input");
const messagesSubmit = $(".msgs-submit");
const avatarImage = "avatar.png";

const fakeMessages = [
  "Hi there, I'm AsmrProg and you?",
  "Nice to meet you",
  "How are you?",
  "Not too bad, thanks",
  "That's awesome",
  "Youtube is a nice place to share video",
  "I think you're a nice person",
  "Why do you think that?",
  "Can you explain?",
  "Anyway I've gotta go now",
  "It was a pleasure chat with you",
  "Time to make a new video",
  "Bye",
  ":)",
];

let minutes = 0;

$(window).on("load", function () {
  messagesContent.mCustomScrollbar();
  setTimeout(fakeMessages, 100);
});

function updateScrollbar() {
  messagesContent
    .mCustomScrollbar("update")
    .mCustomScrollbar("scrollTo", "bottom", {
      scrollInertia: 10,
      timeout: 0,
    });
}

function addTimestamp() {
  const date = new Date();
  const minutesNow = date.getMinutes();

  if (minutes !== minutesNow) {
    minutes = minutesNow;
    const timeStamp = $(`<div class="timestamp"></div>`).text(
      `${date.getHours()}:${minutes}`
    );
    $(`.msg:last`).append(timeStamp);
  }
}

function addMessageToPage(msg, isPersonal = false) {
  const message = $(`<div class="msg"></div>`).text(msg);
  if (isPersonal) {
    message.addClass("msg-personal");
  } else {
    const figure = $('<figure class="avatar"></figure>');
    const image = $("<img>").attr("src", avatarImage);
    figure.append(image);
    message.addClass("new").prepend(figure);
  }

  $(".mCB_container").append(message);
  addTimestamp();
  updateScrollbar();
}
