function renderJobs(filter = "all") {
  currentFilter = filter;
  const container = document.getElementById("job-container");
  const emptyState = document.getElementById("empty-state");
  container.innerHTML = "";

  const filteredJobs = jobs.filter((job) =>
    filter === "all" ? true : job.status === filter,
  );

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
    filteredJobs.forEach((job) => {
      const card = document.createElement("div");
      card.className =
        "bg-white p-6 rounded-lg border border-gray-200 relative shadow-sm hover:shadow-md transition";
      card.innerHTML = `
                <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <h4 class="text-blue-900 font-bold text-lg">${job.company}</h4>
                <p class="text-gray-700 font-semibold">${job.position}</p>
                <p class="text-gray-400 text-sm mt-1">${job.location} • ${job.type} • ${job.salary}</p>
                <div class="mt-2 inline-block bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">
                    ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
                </div>
                <p class="text-gray-600 text-sm mt-3 leading-relaxed">${job.description}</p>
                <div class="mt-4 flex gap-3">
                    <button onclick="updateStatus(${job.id}, 'interview')" class="btn btn-xs border-green-500 text-green-600 bg-white hover:bg-green-500 hover:text-white uppercase px-4">Interview</button>
                    <button onclick="updateStatus(${job.id}, 'rejected')" class="btn btn-xs border-red-400 text-red-500 bg-white hover:bg-red-400 hover:text-white uppercase px-4">Rejected</button>
                </div>
            `;
      container.appendChild(card);
    });
  }
  updateDashboard();
}

window.updateStatus = (id, newStatus) => {
  const jobIndex = jobs.findIndex((j) => j.id === id);
  if (jobIndex !== -1) {
    jobs[jobIndex].status = newStatus;
    renderJobs(currentFilter);
  }
};

window.deleteJob = (id) => {
  jobs = jobs.filter((job) => job.id !== id);
  renderJobs(currentFilter);
};

renderJobs();
