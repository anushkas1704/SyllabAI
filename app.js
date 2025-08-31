const els = {
  title: document.getElementById("title"),
  level: document.getElementById("level"),
  weeks: document.getElementById("weeks"),
  sessions: document.getElementById("sessions"),
  audience: document.getElementById("audience"),
  prereq: document.getElementById("prereq"),
  topics: document.getElementById("topics"),
  objectives: document.getElementById("objectives"),
  generate: document.getElementById("generate"),
  output: document.getElementById("output"),
  status: document.getElementById("status"),
  copy: document.getElementById("copy"),
  download: document.getElementById("download"),
};

function buildPrompt() {
  return `
You are an expert curriculum designer.
Generate a comprehensive course outline in Markdown format.

Course Title: ${els.title.value || "Untitled Course"}
Level: ${els.level.value}
Duration: ${els.weeks.value} weeks
Sessions per week: ${els.sessions.value}
Target Audience: ${els.audience.value}
Prerequisites: ${els.prereq.value}
Primary Topics: ${els.topics.value}
Learning Objectives: ${els.objectives.value}

Format:
- Use clear section headings
- Provide weekly breakdown, activities, assessments, rubrics, and resources
`;
}

els.generate.onclick = async () => {
  els.output.innerHTML = "";
  els.status.textContent = "⏳ Generating...";

  try {
    const res = await fetch("http://localhost:8787/api/outline", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: buildPrompt() }),
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error);

    // Convert Markdown → HTML for clean display
    els.output.innerHTML = marked.parse(data.text);

    els.status.textContent = "✅ Done";
  } catch (err) {
    console.error(err);
    els.status.textContent = "❌ Error: " + err.message;
  }
};

els.copy.onclick = async () => {
  const text = els.output.innerText;
  await navigator.clipboard.writeText(text);
  els.status.textContent = "Copied to clipboard!";
};

els.download.onclick = () => {
  const text = els.output.innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "course-outline.txt";
  a.click();
  URL.revokeObjectURL(url);
  els.status.textContent = "Downloaded!";
};
