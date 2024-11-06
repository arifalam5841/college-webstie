let banner_container = document.getElementById("slides_container");

var counter = 0;

function scroll_forward() {
  banner_container.scrollBy(80, 0);
  counter++;
  // console.log(counter)

  if (counter > 3) {
    banner_container.scrollBy(-2000, 0);
    counter = 0;
  }
}

setInterval(scroll_forward, 2000);

// VARIABLE FOR YEAR AND BRANCHES
// const year_var = "";
// const branch_var = "";
// const final_code = year_var + branch_var;

// MAIN CONTAINER
let main_container = document.getElementById("main-container");
let change_branch_btn = document.getElementById("change-branch");

// LOGIN PAGE ELEMENTS --------

let whole_login_page = document.getElementById("loginpage");
let login_back_btn = document.getElementById("login-back-btn");
let year_select_container = document.getElementById("deg-dip");
let branch_select_container = document.getElementById("branch-choose");
let branch_container = document.getElementById("choose-branch-cont");
let branch_page = document.getElementById("branch-choose");

change_branch_btn.addEventListener("click", () => {
  main_container.style.display = "none";
  whole_login_page.style.display = "block";
  year_select_container.style.display = "flex";
  // branch_container.style.display = "nonef";
});
// SUBJECT PAGE ELEMENTS
let main_menu_btn = document.getElementById("nav-menu-button");
let main_menu = document.getElementById("secondary-menu");
let subject_box_cont = document.getElementById("subs-cont");
let subject_page = document.getElementById("subjects-page");
let syllabus_container = document.getElementById("slb-btn-cont");
let subject_detail_page = document.getElementById("subject-detail-page");
let practice_container = document.getElementById("prac-ques-cont");
let notes_container = document.getElementById("notes-cont");

//  QUESTIONS BOX ELEMENTS -----------------

let question_soln_box = document.getElementById("question-solution-box");
let question_a_tag = document.getElementById("question-button");
let soln_a_tag = document.getElementById("soluntion-button");
let que_soln_blankspace = document.getElementById("questionbox-blankspace");
let menu_blankspace = document.getElementById("menu-blankspace");
let ques_soln_cut_btn = document.getElementById("ques_soln_cut_btn");

// ALL PAGES  -----------------------------

let classwork_page = document.getElementById("classwork-page");
let notice_page = document.getElementById("notice-page");
let event_page = document.getElementById("events-page");
let gallery_page = document.getElementById("gallery-page");
let manual_page = document.getElementById("manual-page");
let video_page = document.getElementById("video-page");
let form_page = document.getElementById("form-page");
let timetable_page = document.getElementById("timetable-page");
let test_page = document.getElementById("test-page");
let book_page = document.getElementById("book-page");
// let aout_page = document.getElementById("");
// let contact_page = document.getElementById("");

let pages_array = [
  subject_page,
  classwork_page,
  notice_page,
  subject_detail_page,
  event_page,
  gallery_page,
  manual_page,
  video_page,
  form_page,
  timetable_page,
  book_page,
];

// ALL BUTTONS --------------------------

let subject_page_btn = document.getElementById("subject-btn");
let classwork_page_btn = document.getElementById("classwork-btn");
let notice_page_btn = document.getElementById("notice-btn");
let event_page_btn = document.getElementById("events-btn");
let gallery_page_btn = document.getElementById("gallery-btn");
let manual_page_btn = document.getElementById("manual-btn");
let video_page_btn = document.getElementById("video-btn");
let form_page_btn = document.getElementById("form-btn");
// H BTN
let h_classwork_btn = document.getElementById("h_classwork_btn");
let h = document.getElementById("h_classwork_btn");

// ALL BTNS ARRAY
let hor_btn = [
  subject_page_btn,
  classwork_page_btn,
  notice_page_btn,
  event_page_btn,
  gallery_page_btn,
  manual_page_btn,
  video_page_btn,
  form_page_btn,
];

// ALL BUTTON FUNCTIONS--------------

h_classwork_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    classwork_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    classwork_page_btn.style.color = "#2064b1";
    classwork_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

subject_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    subject_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

classwork_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    classwork_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    classwork_page_btn.style.color = "#2064b1";
    classwork_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

notice_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    notice_page.style.display = "block";
  }

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    notice_page_btn.style.color = "#2064b1";
    notice_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

event_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    event_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    event_page_btn.style.color = "#2064b1";
    event_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
gallery_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    gallery_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    gallery_page_btn.style.color = "#2064b1";
    gallery_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
manual_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    manual_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    manual_page_btn.style.color = "#2064b1";
    manual_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
video_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    video_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    video_page_btn.style.color = "#2064b1";
    video_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});
form_page_btn.addEventListener("click", (e) => {
  e.preventDefault();

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
    form_page.style.display = "block";
  }
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    form_page_btn.style.color = "#2064b1";
    form_page_btn.style.borderBottom = "2px solid #2064b1";
  }
});

// END OF ALL BUTTONG FUNC

// MENU CODE ----

// main_menu_btn.addEventListener("click", () => {
// main_menu.style.right = "0px";
// });
// END OF MENU CODE ---
// SUBJECT ARRAY
let subject_array = [
  {
    name: "Maths",
    thumnail_img: "math.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "English",
    thumnail_img: "cplus.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "ICT",
    thumnail_img: "database.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "chem.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Chemistry",
    thumnail_img: "python.png",
    code: "D1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "Marathi",
    thumnail_img: "math.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Science",
    thumnail_img: "cplus.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "english",
    thumnail_img: "math.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "P1",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "d2co",
    thumnail_img: "math.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Science",
    thumnail_img: "cplus.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "english",
    thumnail_img: "math.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "adf",
    thumnail_img: "python.png",
    code: "D3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPasdfaC",
    thumnail_img: "python.png",
    code: "D4CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D4ME",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPdfC",
    thumnail_img: "python.png",
    code: "D4AN",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D3CE",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPC",
    thumnail_img: "python.png",
    code: "D4CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },

  {
    name: "Mardddathi",
    thumnail_img: "math.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Scienddce",
    thumnail_img: "cplus.png",
    code: "P1CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "engdsflish",
    thumnail_img: "math.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPCsad",
    thumnail_img: "python.png",
    code: "DPCO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPdfC",
    thumnail_img: "python.png",
    code: "P3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WPCdff",
    thumnail_img: "python.png",
    code: "P4CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "chemistry",
    thumnail_img: "python.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "physics",
    thumnail_img: "python.png",
    code: "P2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "WfdfdPC",
    thumnail_img: "python.png",
    code: "P3CE",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D2CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "D4CE",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
  {
    name: "Maths",
    thumnail_img: "python.png",
    code: "P3CO",
    syllabus: [
      { title: "Maths (basic)", s_pdf: "asf.pdf" },
      { title: "Maths (applied)", s_pdf: "asf.pdf" },
    ],
  },
];

// SYLLABUS ARRAY

let syllabus_array = [
  {
    name: "Maths",
    title: "maths(basics)",
    code: "D2CO",
    syllabus_pdf: "asfj.pdf",
  },
  {
    name: "Maths",
    title: "Maths(applied)",
    code: "D2CO",
    syllabus_pdf: "asfj.pdf",
  },
  {
    name: "english",
    title: "Maths(applied)",
    code: "D2CO",
    syllabus_pdf: "asfj.pdf",
  },
  {
    name: "Maths",
    title: "Maths(applied)",
    code: "D2CO",
    syllabus_pdf: "asfj.pdf",
  },
  {
    name: "Maths",
    title: "Maths(applied)",
    code: "D2CO",
    syllabus_pdf: "asfj.pdf",
  },
  {
    name: "Maths",
    title: "Maths(applied)",
    code: "D2CO",
    syllabus_pdf: "asfj.pdf",
  },
];

// PRACTICE ARRAY

let practice_question = [
  {
    name: "Maths",
    title: "Matrices",
    chap: "7",
    status: "test paper",
    code: "D2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Matrices",
    chap: "7",
    status: "test paper",
    code: "D2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "chemistry",
    title: "afafaa",
    chap: "7",
    status: "test paper",
    code: "P2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },

  {
    name: "physics",
    title: "Matrices",
    chap: "5",
    status: "test paper",
    code: "P2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "dfddssd",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },

  {
    name: "Maths",
    title: "Matridfasces",
    chap: "7",
    status: "test paper",
    code: "P3CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "sfdsd",
    chap: "7",
    status: "test paper",
    code: "p2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "asfas",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
];

// IMPORTANT NOTE ARRAY

let important_note = [
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D4CE",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "P3CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "D1CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (matrices)",
    chap: "7",
    status: "test paper",
    code: "P2CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
  {
    name: "Maths",
    title: "Maths (sdfasdfsdf)",
    chap: "99",
    status: "test paper",
    code: "P3CO",
    question_pdf: "some.pdf",
    soln_pdf: "some.pdf",
  },
];

// END OF VARIABLE FOR YEAR AND BRANCHES

// BACKGROUND IMAGES FOR SUBJECT BOXES

const bg_sub_box = [
  "#F68A8A",
  "#E7C0FA",
  "#B9FFD3",
  "#FAFFA8",
  "#74AECB",
  "#FFCC87",
  "#FF5858",
  "#81768E",
  "#FF7F50",
  "#87CEEB",
  "#AFEEEE",
  "#F5DEB3",
  "#B0C4DE",
  "#FFDEAD",
  "#FA8072",
  "#98FB98",
  "#ADD8E6",
  "#EEE8AA",
  "#FF7F50",
];

// QUESTION BOX CUT BUTTON CODE ----------------

ques_soln_cut_btn.addEventListener("click", () => {
  question_soln_box.style.display = "none";
  que_soln_blankspace.style.display = "none";
});

// QUESTIONN BOX BLANK SPACE CODE ----------------

que_soln_blankspace.addEventListener("click", () => {
  question_soln_box.style.display = "none";
  que_soln_blankspace.style.display = "none";
});
// Function to create boxes in the subject page
function createBoxes(containerId, data, targetCode) {
  // Loop through each object in the data array

  data.forEach((item) => {
    const randomIndex = Math.floor(Math.random() * bg_sub_box.length);

    if (item.code === targetCode) {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "sub");

      const code_div = document.createElement("div");

      code_div.innerHTML = targetCode;

      code_div.style.display = "none";

      const innerDiv = document.createElement("div");

      innerDiv.setAttribute("id", "sub-inner-cont");
      innerDiv.style.backgroundColor = bg_sub_box[randomIndex];

      const img = document.createElement("img");
      img.src = `subject_thum_img/${item.thumnail_img}`;
      img.alt = "loading";

      const paragraph = document.createElement("p");
      paragraph.textContent = item.name;

      innerDiv.appendChild(img);
      innerDiv.appendChild(paragraph);

      anchor.appendChild(innerDiv);

      //  main code ----------

      anchor.addEventListener("click", () => {
        console.log(targetCode);
        console.log(paragraph.textContent.toUpperCase());

        let box_code = targetCode;
        let box_name = paragraph.textContent.toUpperCase();
        syllabus_container.innerHTML = "";
        item.syllabus.forEach((slbs) => {
          let slbs_cont = document.createElement("a");
          slbs_cont.href = slbs.s_pdf;
          slbs_cont.innerHTML = slbs.title;

          syllabus_container.appendChild(slbs_cont);
        });

        practice_container.innerHTML = "";

        practice_question.forEach((pq) => {
          // function appendPracBlock(containerId, title, chapter, description) {

          if (pq.code == targetCode) {
            if (pq.name == item.name) {
              const pracBlock = document.createElement("a");
              pracBlock.href = "#";
              pracBlock.className = "prac-block";

              const contentDiv = document.createElement("div");

              const h3 = document.createElement("h3");
              h3.textContent = pq.title;

              const h4 = document.createElement("h4");
              h4.textContent = pq.chap;

              const p = document.createElement("p");
              p.textContent = pq.status;

              contentDiv.appendChild(h3);
              contentDiv.appendChild(h4);
              contentDiv.appendChild(p);

              pracBlock.appendChild(contentDiv);

              practice_container.appendChild(pracBlock);

              // question box code

              pracBlock.addEventListener("click", (e) => {
                e.preventDefault();
                question_a_tag.href = pq.question_pdf;
                soln_a_tag.href = pq.soln_pdf;
                question_soln_box.style.display = "flex";
                que_soln_blankspace.style.display = "block";
              });
            }
          }

          // }
        });

        notes_container.innerHTML = "";

        important_note.forEach((pq) => {
          // function appendPracBlock(containerId, title, chapter, description) {

          if (pq.code == targetCode) {
            if (pq.name == item.name) {
              const pracBlock = document.createElement("a");
              pracBlock.href = "#";
              pracBlock.className = "prac-block";

              const contentDiv = document.createElement("div");

              const h3 = document.createElement("h3");
              h3.textContent = pq.title;

              const h4 = document.createElement("h4");
              h4.textContent = pq.chap;

              const p = document.createElement("p");
              p.textContent = pq.status;

              contentDiv.appendChild(h3);
              contentDiv.appendChild(h4);
              contentDiv.appendChild(p);

              pracBlock.appendChild(contentDiv);

              notes_container.appendChild(pracBlock);

              // question box code

              pracBlock.addEventListener("click", (e) => {
                e.preventDefault();
                question_a_tag.href = pq.question_pdf;
                soln_a_tag.href = pq.soln_pdf;
                question_soln_box.style.display = "flex";
                que_soln_blankspace.style.display = "block";
              });
            }
          }

          // }
        });

        subject_page.style.display = "none";
        subject_detail_page.style.display = "block";
      });
      containerId.appendChild(anchor);
    }
  });
}

// BACK BTN CODE
login_back_btn.addEventListener("click", () => {
  branch_page.style.display = "none";
  year_select_container.style.display = "flex";
  login_back_btn.style.display = "none";
});
// END OF BACK BTN CODE

// FIRST YEAR BUTTON CODE FOR DIPLOMA AND DIGREE ------------
let D_first_year_btn = document.getElementById("dy1");

function d_fy_func() {
  let year_var = "D1";
  subject_box_cont.innerHTML = "";
  createBoxes(subject_box_cont, subject_array, year_var);

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
  }
  whole_login_page.style.display = "none";
  main_container.style.display = "block";
  login_back_btn.style.display = "block";
  subject_detail_page.style.display = "none";
  subject_page.style.display = "block";

  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }
}
let P_first_year_btn = document.getElementById("py1");
function p_fy_func() {
  let year_var = "P1";
  subject_box_cont.innerHTML = "";
  createBoxes(subject_box_cont, subject_array, year_var);

  for (i = 0; i < pages_array.length; i++) {
    pages_array[i].style.display = "none";
  }
  whole_login_page.style.display = "none";
  main_container.style.display = "block";
  subject_detail_page.style.display = "none";
  subject_page.style.display = "block";
  login_back_btn.style.display = "block";
  for (i = 0; i < hor_btn.length; i++) {
    hor_btn[i].style.color = "black";
    hor_btn[i].style.borderBottom = "2px solid #ffff";

    subject_page_btn.style.color = "#2064b1";
    subject_page_btn.style.borderBottom = "2px solid #2064b1";
  }
}
// END OF  FIRST YEAR BUTTON CODE FOR DIPLOMA AND DIGREE ------------

//SET YEAR AND BRANCHES BTN CODE

let degree_branch_array = [
  { name: "AO", code: "AO" },
  { name: "CE", code: "CE" },
  { name: "CO", code: "CO" },
  { name: "ME", code: "ME" },
  { name: "EE", code: "EE" },
];

let diploma_branch_array = [
  { name: "AO", code: "AO" },
  { name: "CE", code: "CE" },
  { name: "CO", code: "CO" },
  { name: "ME", code: "ME" },
  { name: "EE", code: "EE" },
];

function appending_branch(given_array, year) {
  given_array.forEach((item) => {
    const branch_box = document.createElement("li");
    branch_box.innerHTML = item.name;

    branch_box.addEventListener("click", () => {
      let branch_var = item.code;
      let final_code = year + branch_var;
      console.log(final_code);

      // main code will be written here -----

      for (i = 0; i < pages_array.length; i++) {
        pages_array[i].style.display = "none";
      }

      subject_box_cont.innerHTML = "";
      createBoxes(subject_box_cont, subject_array, final_code);
      branch_select_container.style.display = "none";
      year_select_container.style.display = "block";
      whole_login_page.style.display = "none";
      main_container.style.display = "block";
      subject_detail_page.style.display = "none";
      subject_page.style.display = "block";

      for (i = 0; i < hor_btn.length; i++) {
        hor_btn[i].style.color = "black";
        hor_btn[i].style.borderBottom = "2px solid #ffff";

        subject_page_btn.style.color = "#2064b1";
        subject_page_btn.style.borderBottom = "2px solid #2064b1";
      }
    });

    branch_container.appendChild(branch_box);
  });
}
function d_sy_func() {
  let year_var = "D2";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
  login_back_btn.style.display = "block";
}

function d_ty_func() {
  let year_var = "D3";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
  login_back_btn.style.display = "block";
}

function d_fry_func() {
  let year_var = "D4";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  login_back_btn.style.display = "block";

  branch_select_container.style.display = "block";
}

function p_sy_func() {
  let year_var = "P2";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  login_back_btn.style.display = "block";

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
}

function p_ty_func() {
  let year_var = "P3";
  login_back_btn.style.display = "block";

  branch_container.innerHTML = "";
  appending_branch(degree_branch_array, year_var);

  year_select_container.style.display = "none";
  branch_select_container.style.display = "block";
}

// END OF RESET YEAR AND BRANCHES BTN CODE