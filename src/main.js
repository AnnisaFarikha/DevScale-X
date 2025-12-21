import dayjs from "dayjs"
import "./style.css"

const app = document.getElementById("app")

const date = document.createElement("p")
date.textContent = "Today: " + dayjs().format("DD MMMM YYYY")
app.appendChild(date)

const links = [
  { name: "Instagram", url: "https://instagram.com/nisafarikha__" },
  { name: "GitHub", url: "https://github.com/AnnisaFarikha" },
  { name: "LinkedIn", url: "https://linkedin.com/in/annisa-nur-farikha" },
]

const container = document.getElementById("links")

links.forEach(link => {
  const a = document.createElement("a")
  a.href = link.url
  a.textContent = link.name
  a.target = "_blank"

  container.appendChild(a)
})
