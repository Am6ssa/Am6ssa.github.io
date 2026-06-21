const notes = [
  {
    title: "Semisimple Lie Algebras",
    file: "notes_lie.pdf",
    tag: "Lie Theory"
  },
  {
    title: "Lie Algebra Cohomology",
    file: "notes_cohomology.pdf",
    tag: "Homological Algebra"
  },
  {
    title: "Maxwell Equations Notes",
    file: "notes_maxwell.pdf",
    tag: "Classical Field Theory"
  },
  {
    title: "Topological Quantum Field Theory",
    file: "notes_tqft.pdf",
    tag: "TQFT"
  }
];

const container = document.getElementById("notes-container");

notes.forEach(n => {
  const div = document.createElement("div");
  div.className = "note";

  div.innerHTML = `
    <a href="${n.file}" target="_blank">${n.title}</a>
    <div class="meta">${n.tag}</div>
  `;

  container.appendChild(div);
});
