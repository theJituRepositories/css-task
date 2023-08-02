document.addEventListener('DOMContentLoaded', () => {
  // fetch the json data
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      // Define an array of specific colors for the h3 elements and their respective background colors
      const colors = [
        { h3: 'hsl(0, 100%, 67%)', bg: 'hsla(0, 100%, 77%,0.3)' }, // Light red
        { h3: 'hsl(39, 100%, 56%)', bg: 'hsla(39, 100%, 66%,0.3)' }, // Orangey yellow
        { h3: 'hsl(166, 100%, 37%)', bg: 'hsla(166, 100%, 47%,0.3)' }, // Green teal
        { h3: 'hsl(234, 85%, 45%)', bg: 'hsla(234, 85%, 55%,0.3)' } // Cobalt blue
      ]

      // Displaying the data
      const dataContainer = document.getElementById('data-container')
      const htmlMarkup = data
        .map((item, index) => {
          // Get the corresponding colors from the colors array based on the index
          const { h3: h3Color, bg: bgColor } = colors[index % colors.length]

          return `
            <div class="card" style="background-color: ${bgColor};">
              <div class="card__icon">
                <img src="${item.icon}" alt="not found">
              </div>
              <div class="card__content">
                <h3 style="color: ${h3Color}">${item.category}</h3>
                <p>${item.score} / 100</p>
              </div>
            </div>
          `
        })
        .join('') // Join the array elements to create a single string

      // Add the summary before the card elements
      const summaryMarkup = `<h2 class="summary-heading">Summary</h2>`
      const button  = `<button class="btn-primary">Continue </button>`
      dataContainer.innerHTML = summaryMarkup + htmlMarkup + button
    })
    .catch(error => {
      console.log('Error while fetching', error)
    })
})
