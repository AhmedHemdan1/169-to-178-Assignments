let request = new XMLHttpRequest();
request.open("GET", "articles.json");
request.send();
if (request.status === 0 && request.readyState === 1) console.log("JSON Object Content Here");
request.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    console.log("Data Loaded");
    console.log(this.responseText);
    let mainData = JSON.parse(request.responseText);
    console.log(mainData);
    document.write('<div id="data">');
    for (let i in mainData) {
      document.write("<div>");
      document.write(`<h2>${mainData[i].title}</h2>`);
      document.write(`<p>${mainData[i].body}</p>`);
      document.write(`<p>Author: ${mainData[i].author}</p>`);
      document.write(`<p>Category: ${mainData[i].category}</p>`);
      document.write("</div>");
      mainData[i].category = "All";
    }
    document.write(`</div>`);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};