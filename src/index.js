import "regenerator-runtime";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/custom.css";
import "./scripts/components/FooterNav.js";
import map from "./scripts/view/map.js";
import main from "./scripts/view/main.js";

document.addEventListener("DOMContentLoaded", map);
document.addEventListener("DOMContentLoaded", main);
