/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// Target the gray backpack image
console.log(document.querySelector("figure img"));

// Target all "open lid" buttons
console.log(document.querySelectorAll(".lid-toggle"));

const infoPageHeader = `
  <h2 class="page-header__heading">A pack for every purpose</h2>
  <p>
    If you're carrying a heavy load, you can't find a better tool than a
    backpack. Distributing the weight evenly across your shoulders, back,
    and hips, the backpack lets you use the natural frame of your body to
    literally <em>shoulder</em> the weight while your legs do the
    carrying.
  </p>
`;

document.querySelector(".page-header").innerHTML = infoPageHeader;

// Target p queries inside infoPageHeader
console.log(document.querySelector(".page-header p"));