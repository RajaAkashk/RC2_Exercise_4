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
    <section class="pt-4">
      <div class="container">
        <h1>Job Details</h1>

        <div id="jobDetailBox"></div>

      </div>
    </section>

  </main>


  <script>

    const jobs = [
      {id: 1, title: "Software Engineer", category: "IT", location: "New York", postDate: "2023-01-15", details: "Job description for a software engineer."},
      {id: 2, title: "Financial Analyst", category: "Finance", location: "San Francisco", postDate: "2023-02-20", details: "Job description for a financial analyst."},
      {id: 3, title: "Marketing Manager", category: "Marketing", location: "San Francisco", postDate: "2023-04-05", details: "Job description for a marketing manager."},
      {id: 4, title: "Data Scientist", category: "IT", location: "New York", postDate: "2023-02-25", details: "Job description for a software engineer."},
    ];

    function getJobId() {
      const url = new URL(window.location.href)
      return url.searchParams.get('id')
    }

    let jobId = getJobId()

    let jobInfo;
    for (let i = 0; i < jobs.length; i++) {
      if (jobId == jobs[i].id) {
        jobInfo = jobs[i]
        showResult(jobInfo)
      }
    }

    function showResult(data) {

      const jobDetailBox = document.querySelector('#jobDetailBox')

      const col = document.createElement('div')
      col.className = 'col-md-8'

      const card = document.createElement('div')
      card.className = "card p-4"

      const cardBody = document.createElement('div')
      cardBody.className = "card-body"

      const row = document.createElement('div')
      row.className = "d-flex justify-content-between"

      const colLeft = document.createElement('div')
      colLeft.className = "col-md-8"

      const h2 = document.createElement('h2')
      h2.className = "mb-3"
      h2.textContent = `${data.title}`

      const category = document.createElement('p')
      category.className = "fs-5 fw-normal"
      category.innerHTML = `<strong>Category: </strong>${data.category}`

      const location = document.createElement('p')
      location.className = "fs-5 fw-normal"
      location.innerHTML = `<strong>Location: </strong>${data.location}`

      const details = document.createElement('p')
      details.className = "fs-5 fw-normal"
      details.innerHTML = `<strong>Details: </strong>${data.details}`

      colLeft.appendChild(h2)
      colLeft.appendChild(category)
      colLeft.appendChild(location)
      colLeft.appendChild(details)

      const colRight = document.createElement('div')
      colRight.className = "col-md-4"

      const postDate = document.createElement('p')
      postDate.className = "fs-5 fw-normal"
      postDate.innerHTML = `Post Date: ${data.postDate}`

      colRight.appendChild(postDate)

      row.appendChild(colLeft)
      row.appendChild(colRight)
      cardBody.appendChild(row)
      card.appendChild(cardBody)
      col.appendChild(card)
      jobDetailBox.appendChild(col)

    }


  </script>
  <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
