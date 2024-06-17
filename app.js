<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Job Portal</title>
  <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

</head>

<body>

  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand fs-4 fw-medium" href="index.html">Job Portal</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link fs-5 fw-normal " aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 fw-normal" href="jobs.html">Jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 fw-normal" href="report.html">Report</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  </header>


  <main>

    <section class="py-4">
      <div class="container">

        <h1>List of Jobs</h1>

        <div class="row">

          <div class="col-md-6">
            <label class="form-label">Filter by Categories:</label>
            <select id="selectCategory" class="form-select">
              <option value="All">All Categories</option>
              <option value="IT">Information Technology</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div class="col-md-6">
            <label class="form-label">Filter by Location:</label>
            <select id="selectLocation" class="form-select">
              <option value="All">All Location</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
            </select>
          </div>

        </div>

      </div>
    </section>


    <section class="pb-4">
      <div class="container">
        <div id="result" class="row"></div>
      </div>
    </section>


  </main>

  <script>

    const category = document.querySelector('#selectCategory')
    const selectOneLocation = document.querySelector('#selectLocation')
    const result = document.querySelector('#result')


    const jobs = [
      {id: 1, title: "Software Engineer", category: "IT", location: "New York", postDate: "2023-01-15", details: "Job description for a software engineer."},
      {id: 2, title: "Financial Analyst", category: "Finance", location: "San Francisco", postDate: "2023-02-20", details: "Job description for a financial analyst."},
      {id: 3, title: "Marketing Manager", category: "Marketing", location: "San Francisco", postDate: "2023-04-05", details: "Job description for a marketing manager."},
      {id: 4, title: "Data Scientist", category: "IT", location: "New York", postDate: "2023-02-25", details: "Job description for a software engineer."},
    ];

    function showJobs(jobs) {

      result.innerHTML = '';

      for (let i = 0; i < jobs.length; i++) {

        const col = document.createElement('div')
        col.className = "col-md-6"

        const card = document.createElement('div')
        card.className = "card m-2"

        const cardHeader = document.createElement('div')
        cardHeader.className = "card-header"

        const h2 = document.createElement('h2')
        h2.textContent = `${jobs[i].title}`

        cardHeader.appendChild(h2)

        const cardBody = document.createElement('div')
        cardBody.className = "card-body p-3"

        const categories = document.createElement('p')
        categories.innerHTML = `<strong>Categories: </strong>${jobs[i].category}`

        const location = document.createElement('p')
        location.innerHTML = `<strong>Location: </strong>${jobs[i].location}`

        const date = document.createElement('p')
        date.innerHTML = `<strong>Post Date: </strong>${jobs[i].postDate}`

        const detailsBtn = document.createElement('a')
        detailsBtn.href = `jobDetails.html?id=${jobs[i].id}`
        detailsBtn.className = 'btn btn-primary'
        detailsBtn.textContent = 'Details'

        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        cardBody.appendChild(categories)
        cardBody.appendChild(location)
        cardBody.appendChild(date)
        cardBody.appendChild(detailsBtn)
        col.appendChild(card)
        result.appendChild(col)

      }

    }


    category.addEventListener('change', function () {

      const categorySelected = category.value;

      let selectedCategories = [];
      if (categorySelected === "All") {
        showJobs(jobs)
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (categorySelected === jobs[i].category) {
            selectedCategories.push(jobs[i])
          }
        }
        showJobs(selectedCategories)
      }

    })


    selectOneLocation.addEventListener('change', function () {

      const locationSelected = selectOneLocation.value;

      let selectedLocation = [];

      if (locationSelected === "All") {
        showJobs(jobs)
      }
      else {
        for (let i = 0; i < jobs.length; i++) {
          if (locationSelected == jobs[i].location) {
            selectedLocation.push(jobs[i])
          }
        }
        showJobs(selectedLocation)
      }

    })



    showJobs(jobs)

  </script>

  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
