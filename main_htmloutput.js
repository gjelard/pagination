function pagination(currentPage, nrOfPages) {

 var pagesToShow = 3,
  page = currentPage - pagesToShow > 0 ? (currentPage - pagesToShow) : 1,
  first = 0,
  pageList = [];


 if (nrOfPages > pagesToShow) {

  for (let i = currentPage - pagesToShow; i <= currentPage + pagesToShow && page <= nrOfPages; i++) {

   if (currentPage == page) { //do not add the link to current page number
    pageList.push('<a href="javascript:void(0)" class="nav currentpage" data-page="' + currentPage + '"  style="text-decoration: none;">' + page + '</a>');


   } else {

    if (currentPage - pagesToShow > 0 && first == 0) { // add first page
     pageList.push('<a href="javascript:void(0)" class="nav" data-page="' + 1 + '">' + 1 + '</a>');
     if (page != 1 && currentPage - pagesToShow != 2) {
      pageList.push('...');
     } else {
      pageList.push(page);
     }
     first = 1;
    } else if (currentPage + pagesToShow < nrOfPages && i == (currentPage + pagesToShow)) { // add last page
     if (currentPage - pagesToShow != nrOfPages && page != nrOfPages)
      pageList.push('...');
     pageList.push('<a href="javascript:void(0)" class="nav" data-page="' + nrOfPages + '">' + nrOfPages + '</a>');

    } else { //rest of the pages

     if (page != 1)
      pageList.push('<a href="javascript:void(0)" class="nav" data-page="' + page + '">' + page + '</a>');
    }


   }

   page++;

  }

 } else {
  for (var i = 1; i < nrOfPages + 1; i++) {
   if (currentPage == i) {
    if (nrOfPages > 1) // add only if there is more than one page
     pageList.push('<a href="javascript:void(0)" class="nav currentpage" data-page="' + currentPage + '" style="text-decoration: none;">' + i + '</a>');
   } else {
    pageList.push('<a href="javascript:void(0)" class="nav" data-page="' + i + '">' + i + '</a>');
   }
  }


 }

 var pagination = document.createElement('div');
 pagination.setAttribute('id', 'pagination'); //add id
 pagination.setAttribute('style', 'display: flex; margin-top:20px; justify-content: space-between;');
 var btnDisplay = document.createElement('div');
 var next = currentPage == nrOfPages || nrOfPages == 0 ? '' : ' | <a href="javascript:void(0)" class="nav" data-page="next">Next</a>';
 var prev = currentPage == 1 || nrOfPages < 1 ? '' : '<a href="javascript:void(0)" class="nav" data-page="prev">Prev</a> | ';
 btnDisplay.innerHTML = prev + pageList.join(" ") + next;
 var pagInfo = document.createElement('div');
 pagInfo.innerHTML = " page: " + currentPage + " of " + nrOfPages;

 pagination.appendChild(btnDisplay);
 pagination.appendChild(pagInfo);
 return pagination;

} //pagination

//sample output::: Prev | 1...10 11 12 13 14 15...20 | Next
