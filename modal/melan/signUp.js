const inputBtn = document.getElementById("button");
const email = document.getElementById("email");
const id = document.getElementById("id");
const pw = document.getElementById("number");
const nName = document.getElementById("nickName");
const username = document.getElementById("name");

inputBtn.addEventListener("click", () => {
  alert("잘 눌러진다~");

  const formDOMObj = {
    email,
    id,
    pw,
    nName,
    username,
  };
  const onSubmitErrorObj = {
    email: "이메일 입력 안 하면 안 돼",
    id: "아이디가 없어",
    pw: "비번 업으면 우야라고",
    nName: "닉네임 업으면 가입 안 되는데",
    userNAme: "이름 좀 적어줘",
  };

  for (const key in obj) {
    if (formDOMObj[key].value === "") {
      alert(onSubmitErrorObj[key]);
      break;
    }
  }

  //   if (email.value == "") {
  //     alert("이메일 입력 안 하면 안 돼");
  //   } else if (id.value == "") {
  //     alert("아이디가 없어");
  //   } else if (pw.value == "") {
  //     alert("비번 업으면 우야라고");
  //   } else if (nName.value == "") {
  //     alert("닉네임 업으면 가입 안 되는데");
  //   } else if (username.value == "") {
  //     alert("이름 좀 적어줘");
  //   }
  axios({
    method: "POST",
    url: "http://a400ebc5538c.ngrok.io/POST/mos/join",
    data: {
      userEmail: email.value,
      userId: id.value,
      userPw: pw.value,
      userNickname: nName.value,
      userName: username.value,
    },
  })
    .then((res) => {
      alert("이예!");
    })
    .catch((error) => {
      alert("응 다시 해");
    });
});
